import http from "http";
import getBudget from "../clients/getBudget.js";
import updateBudget from "../clients/updateBudget.js";
import updateMessage from "../clients/updateMessage.js";


export default async (job) => {
    console.log("estoy en messagejob", job)
    const json = {
        destination: job.destination,
        body: job.body
    }
    const body = JSON.stringify(json)

    console.log("soy JSON", body)


    const postOptions = {
        host: "127.0.0.1",
        // host: "messageapp",
        port: 3000,
        path: "/message",
        method: "post",
        json: true,
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(body),
        },
    };

    const postReq = http.request(postOptions);

    postReq.on("response", async (postRes) => {
        try {
            const lastBudget = await getBudget()
            console.log("last budget", lastBudget)

            if (lastBudget[0].amount >= 1) {
                await updateMessage(job.id, { status: postRes.statusCode === 200 ? "OK" : "ERROR", })

                await updateBudget(parseInt(lastBudget[0].amount - 1))
                const newBudget = await getBudget()

                console.log("new", parseInt(newBudget[0].amount))

            } else console.log('Messsage not send add budget')

            if (postRes.statusCode !== 200) {
                throw new Error('Error in the messageapp request');
            }

            res.statusCode = 200;
            res.status(200).json("message sent and save correctly")
        } catch (error) {
            console.log(error.message);
            const lastBudget = await getBudget()
            await updateBudget(parseInt(lastBudget[0].amount + 1))
            console.log("we proceed to return the message import")
        }
    });

    postReq.on("timeout", async () => {
        console.error("Timeout Exceeded!");
        postReq.abort();

        try {
            await updateMessage(job.id, { status: "TIMEOUT" });
            const lastBudget = await getBudget()
            await updateBudget(parseInt(lastBudget[0].amount + 1))


        } finally {
            res.statusCode = 500;
            res.end("Internal server error: TIMEOUT");
        }
    });

    postReq.on("error", (error) => {
        res.statusCode = 500;
        res.end(error.message);
    });

    postReq.end();
}









import http from "http";
import updateMessage from "../clients/updateMessage.js";

export default async (job) => {
    console.log("casi estamos", job)
    const json = {
        destination: job.data[0].destination,
        body: job.data[0].body
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
            console.log("respuesta ", job.data[0]._id, job.data[1])

            if (job.data[1] >= 0) {
                await updateMessage(job.data[0]._id, { status: postRes.statusCode === 200 ? "OK" : "ERROR", })
                console.log(postRes.statusCode)

            } else console.log('Messsage not send add budget')

            if (postRes.statusCode !== 200) {
                console.log('Error in the messageapp request');
            }

            console.log("message sent and save correctly")
        } catch (error) {
            console.log(error.message);
            console.log("we proceed to return the message import")
        }
    });

    postReq.on("timeout", async () => {
        console.error("Timeout Exceeded!");
        postReq.abort();

        try {
            await updateMessage(job.data[0]._id, { status: "TIMEOUT" });
            console.log("there was a TIMEOUT in the Messageapp")


        } finally {
            console.log("Internal server error: TIMEOUT");
        }
    });

    postReq.on("error", (error) => {
        console.log(error.message);
    });
    postReq.write(body)
    postReq.end();
}









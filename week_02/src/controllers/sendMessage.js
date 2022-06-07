import http from "http";
import getBudget from "../clients/getBudget.js";
import saveMessage from "../clients/saveMessage.js";
import updateBudget from "../clients/updateBudget.js";

export default async (req, res) => {
  const body = JSON.stringify(req.body);

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
      console.log("last", lastBudget)
      if (lastBudget[0].amount >= 1) {
        await saveMessage({ ...req.body, status: postRes.statusCode === 200 ? "OK" : "ERROR", })

        await updateBudget(parseInt(lastBudget[0].amount - 1))
        const newBudget = await getBudget()

        console.log("new", parseInt(newBudget[0].amount))

      } else res.json('Messsage not send add budget')

      if (postRes.statusCode !== 200) {
        throw new Error('Error in the messageapp request');
      }

      res.statusCode = 200;
      res.end(postRes.body);
    } catch (error) {
      console.log(error.message);
      res.statusCode = 500;
      const lastBudget = await getBudget()
      await updateBudget(parseInt(lastBudget[0].amount + 1))
      console.log("we proceed to return the message import")
      res.end(`Internal server error: SERVICE ERROR ${error.message}`);
    }
  });

  postReq.on("timeout", async () => {
    console.error("Timeout Exceeded!");
    postReq.abort();

    try {
      await saveMessage({ ...req.body, status: "TIMEOUT", });
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

  postReq.write(body);
  postReq.end();
}

import express from "express";
import bodyParser from "body-parser";
import getMessageId from "./src/controllers/getMessageId.js";
import { ValidationError, Validator } from "express-json-validator-middleware";
import addMessageQueue from "./src/controllers/addMessageQueue.js";
import addMessages from "./src/controllers/addMessages.js";
import { messageQueue, budgetQueue } from "./src/queue/messageQueue.js";
const app = express();
const validator = new Validator({ allErrors: true });
const { validate } = validator;


const messageSchema = {
  type: "object",
  required: ["destination", "body"],
  properties: {
    destination: {
      type: "string",
    },
    body: {
      type: "string",
    },
  },
};

app.post("/message", bodyParser.json(), validate({ body: messageSchema }), addMessageQueue);

app.get("/messages", addMessages);

app.get("/message/:messageId/status", getMessageId)


app.use((err, req, res, _next) => {
  console.log(res.body);
  if (err instanceof ValidationError) {
    res.sendStatus(400);
  } else {
    res.sendStatus(500);
  }
});

const port = 9001;
app.listen(port, () => {
  console.log("App started on PORT: ", port);
});

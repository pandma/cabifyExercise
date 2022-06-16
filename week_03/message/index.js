import express from "express";
import logger from "loglevel"
logger.setLevel("info");

import bodyParser from "body-parser";
import {
  Validator,
  ValidationError
} from "express-json-validator-middleware";

import sendMessage from "./src/controllers/sendMessage.js";
import getMessages from "./src/controllers/getMessages.js";
import getMessageStatus from "./src/controllers/getMessageStatus.js";
import getVersion from "./src/controllers/getVersion.js";
import GetMetrics from "./src/controllers/GetMetrics.js";
import { addToMetric, requestCounters, responseTime } from "./src/metrics/addMetrics.js";



const app = express();

const validator = new Validator({ allErrors: true });
const { validate } = validator;

const messageSchema = {
  type: "object",
  required: ["destination", "body"],
  properties: {
    destination: {
      type: "string"
    },
    body: {
      type: "string"
    },
    location: {
      name: {
        type: "string"
      },
      cost: {
        type: "number"
      }
    }
  }
};

app.post("/messages", requestCounters, bodyParser.json(), validate({ body: messageSchema }), sendMessage
);

app.get("/messages", requestCounters, getMessages);

app.get("/metrics", GetMetrics);

app.get("/health", requestCounters, (req, res) => {
  addToMetric("200", "health")
  logger.info("OK")
  res.status(200).json("OK")
});

app.get("/version", requestCounters, getVersion);

app.get("/message/:messageId/status", requestCounters, getMessageStatus);

app.use((err, req, res, next) => {
  logger.info(res.body);
  if (err instanceof ValidationError) {
    res.sendStatus(400);
  } else {
    res.sendStatus(500);
  }
});

const appid = process.env.APPID;

app.listen(appid, () => {
  logger.info(`${appid} is listening on ${appid}`);
});

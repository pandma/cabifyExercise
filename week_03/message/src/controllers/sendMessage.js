import sendMessage from "../jobs/sendMessage.js";
import { addToMetric } from "../metrics/addMetrics.js";

export default async (req, res) => {
  addToMetric("200", "post-message")
  const messageId = await sendMessage(req.body);
  const response = {
    messageId,
  };

  res.statusCode = 200;
  res.end(JSON.stringify(response));
};

import getMessages from "../clients/getMessages.js";
import { addToMetric } from "../metrics/addMetrics.js";

export default async (req, res) => {
  addToMetric("200", "get-message")
  const messages = await getMessages();

  res.json(messages);
};

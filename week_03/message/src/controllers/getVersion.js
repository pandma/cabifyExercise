import { addToMetric } from "../metrics/addMetrics.js";

export default async (req, res) => {
    const version = process.env.SERVICE_NAME
    addToMetric("200", "version")
    res.status(200).json(version)
    console.log("the version is", version)

};
import client from 'prom-client'
import logger from "loglevel"



export default async (req, res) => {

    try {
        res.set('Content-Type', client.register.contentType);
        const metrics = await client.register.metrics()
        res.end(metrics);
        logger.info(metrics)
    } catch (ex) {
        res.status(500).end(ex);
    }

};

import client from 'prom-client'
import logger from "loglevel"
logger.setLevel("info");

const prefix = "Messages"

const counter = new client.Counter({
    name: 'metric_calls',
    help: 'Number of calls',
    labelNames: ['code', 'endpoint']
});

const numOfRequests = new client.Counter({
    name: 'numOfRequests',
    help: 'Number of requests made',
    labelNames: ['method'],
});

const pathsTaken = new client.Counter({
    name: `${prefix}_pathsTaken`,
    help: 'Paths taken in the app',
    labelNames: ['path'],
});

const responses = new client.Summary({
    name: `${prefix}_responses`,
    help: 'Response time in millis',
    labelNames: ['method', 'path', 'status'],
});

const startCollection = (prefix) => {
    logger.info(`Starting the collection of metrics, the metrics are available on /metrics`);
    client.collectDefaultMetrics({ prefix });
};

const requestCounters = (req, res, next) => {
    if (req.path != '/metrics') {
        numOfRequests.inc({ method: req.method });
        pathsTaken.inc({ path: req.path });
    }
    next();
};

const responseTime = ((req, res, time) => {
    if (req.url != '/metrics') {
        responses.labels(req.method, req.url, res.statusCode).observe(time);
    }
});

const addToMetric = (code, endpoint) => {
    counter.inc({ code: code, endpoint: endpoint });
}

export { addToMetric, responseTime, requestCounters, startCollection }
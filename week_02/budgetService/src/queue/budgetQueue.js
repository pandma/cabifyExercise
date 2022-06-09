import Queue from "bull";
import budgetJob from "../process/budgetJob.js";

const REDIS_URL = "redis:6379"

const messageQueue = new Queue('message', { redis: REDIS_URL });
const budgetQueue = new Queue('budget', { redis: REDIS_URL });


budgetQueue.process(async (job, done) => {
    console.log("PROCESSING CREDIT", job.data)

    const budget = await budgetJob(job)
    console.log("The credit is", budget)
    messageQueue.add([job.data, budget]);
    done();
});

export { messageQueue, budgetQueue }



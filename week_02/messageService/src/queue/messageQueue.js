import Queue from "bull";
import messageJob from "../process/messageJob.js";

const REDIS_URL = "redis:6379"

const messageQueue = new Queue('message', { redis: REDIS_URL });
const budgetQueue = new Queue('budget', { redis: REDIS_URL });



const sendMessageQueue = async (data) => {

    try {
        budgetQueue.add(data);
        messageQueue.process((job, done) => {
            console.log(job.data, "estamos en message")
            messageJob(job)
            done();
        });
    } catch (error) {
        console.error
    }

};


export { sendMessageQueue, messageQueue, budgetQueue }



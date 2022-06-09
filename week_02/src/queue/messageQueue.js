import Queue from "bull";
import messageJob from "../process/messageJob.js";

const REDIS_URL = "redis:6379"

const messageQueue = new Queue('message', { redis: REDIS_URL });


const sendMessageQueue = async (data) => {

    try {
        messageQueue.add(messageJob(data));
        messageQueue.process((job, done) => {
            job
            done();
        });
    } catch (error) {
        console.error
    }

};


export { sendMessageQueue }



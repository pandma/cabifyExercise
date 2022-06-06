import Budget from "../models/budget.js";
import locks from 'locks'
const mutex = locks.createMutex();


export default async (input) => {

    const id = "629df3b2fe194c0a443b8d25"
    const update = async () => await Budget.findByIdAndUpdate(id, { amount: input })

    mutex.timedLock(5000, function (error) {
        if (error) {
            console.log('Could not get the lock within 5 seconds, so gave up');
        } else {
            console.log('We got the lock!');
            update()
            mutex.unlock();
        }
    });
}




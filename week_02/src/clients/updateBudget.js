import { Budget, Budgetcopy } from '../models/budget.js'
import locks from 'locks'
const mutex = locks.createMutex();


export default async (input) => {

    const query = { name: "Budget" };
    const update = async () => await Budget.findOneAndUpdate(query, { amount: input })
    const updateCopy = async () => await Budgetcopy.findOneAndUpdate(query, { amount: input })
    const retunBudget = async (copy) => await Budget.findOneAndUpdate(query, { amount: copy })
    const findBudget = await Budget.find()
    const findCopyBudget = await Budgetcopy.find()


    mutex.timedLock(5000, function (error) {

        try {
            console.log('We got the update lock!');
            update()
            console.log('We got Unlock!');

        } catch (error) {
            console.log('Could not get the lock within 5 seconds, so gave up');

        }
        try {
            console.log('We got the copy lock!');
            updateCopy()
            console.log('We got Unlock!');
            mutex.unlock();

        } catch (error) {
            findBudget[0].amount !== findCopyBudget[0].amount ?
                retunBudget(findCopyBudget[0].amount) : null

            console.log('this is rollback from the back-up');

        }
    });
}




import getBudget from "../clients/getBudget.js"
import updateBudget from "../clients/updateBudget.js"

export default async (job) => {
    try {
        const lastBudget = await getBudget()
        if (lastBudget[0].amount >= 1) {
            const input = parseInt(lastBudget[0].amount)

            await updateBudget(input - 1)
            const NewBudget = await getBudget()
            console.log("new badget is ", NewBudget)

            return NewBudget[0].amount
        } else {
            return lastBudget[0].amount
        }

    } catch (error) {
        console.log(error.message)

    }

}









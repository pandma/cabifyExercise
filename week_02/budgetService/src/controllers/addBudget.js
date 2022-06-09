

export default async (req, res) => {


    try {

        // const queue = await sendBudgetQueue(amount)

        // console.log("Message Save", amount)
        console.log("Message addee to Queue")


        res.status(200).json(`message added to Queue you message Id is ${amount.id}`);

    } catch (error) {
        console.log(`error en ${error.message}`)

        res.status(500).json("error sending the message to Queue")

    }
}



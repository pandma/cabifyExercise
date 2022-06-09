import { Message } from "../models/message.js";
import { sendMessageQueue } from "../queue/messageQueue.js";


export default async (req, res) => {

    const { destination, body } = req.body

    try {
        const amount = await Message.create({ destination, body });
        const queue = await sendMessageQueue(amount)

        console.log("Message Save", amount)
        console.log("Message addee to Queue")


        res.status(200).json(`message added to Queue you message Id is ${amount.id}`);

    } catch (error) {
        const amount = await Message.create({ destination, body, status: "ERROR" });
        console.log(`error en ${error.message}`)

        res.status(500).json("error sending the message to Queue")

    }
}



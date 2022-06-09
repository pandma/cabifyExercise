import { Message } from "../models/message.js";


export default async (req, res) => {
    const { messageId } = req.params

    console.log(req.params.messageId)

    try {
        const oneMessage = await Message.findById(messageId)
        console.log("etsamos en mesage id papa", messageId)
        res.status(200).json(`the status of this message is ${oneMessage.status}`)

    } catch (error) {
        res.status(500).json("error finding message by id")
        console.log(`error finding message ${error.message}`)

    }

}
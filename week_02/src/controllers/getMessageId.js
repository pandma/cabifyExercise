import { Message } from "../models/message";

export default async (req, res) => {
    const { messageid } = req.params

    try {
        const oneMessage = await Message.findById(messageid)
        res.status(200).json(oneMessage)

    } catch (error) {
        res.status(500).json("error finding message by id")
        console.log(`error finding message ${error.message}`)

    }

}
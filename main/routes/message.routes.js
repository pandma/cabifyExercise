const router = require("express").Router();
const MessageApp = require("../service/messageApp")
const MessageSchema = require("./../models/Message.nodel")
const { errorhandle } = require("../midellwares/errorHandle");
const { populate } = require("./../models/Message.nodel");
const messageApp = new MessageApp()


router.get("/hello", (req, res, next) => {

    res.json("hello world");

});

router.post("/messages", errorhandle, (req, res, next) => {

    const { destination, message, number } = req.body

    const createMessage = MessageSchema.create({ destination, message, number })
    const SendMessage = messageApp.getOneMessage({ destination, message })

    Promise
        .all([createMessage, SendMessage])
        .then((response) => {

            MessageSchema
                .findByIdAndUpdate(response[0].id, { status: "CONFIRMED" })
                .then(() => res.status(200).json({ message: "message sent correctly" }))
                .catch((err) => next(err, { message: "message not save in DB" }))
        })

        .catch((err, response) => {
            MessageSchema
                .create({ destination, message, number })
                .then(() => MessageSchema.findByIdAndUpdate(response.id, { status: "REJECTED" }))
                .then(() => res.json({ message: "the message was not sent" }))
            next(err)
        })
});

router.get("/messages", (req, res, next) => {


    MessageSchema
        .find()
        .then((response) => {
            response.length === 0 ?
                res.status(200).json({ message: "you have no messages" })
                :
                res.status(200).json(response)
        })
        .catch((err) => next(err))
})


module.exports = router;

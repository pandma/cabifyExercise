const router = require("express").Router();
const MessageApp = require("../service/messageApp")
const MessageSchema = require("./../models/Message.nodel")
const { errorhandle } = require("../midellwares/errorHandle");
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
            response[1].status === 200 ?

                MessageSchema
                    .findByIdAndUpdate(response[0].id, { status: "CONFIRMED" })
                    .then(() => res.status(200).json({ message: "message sent correctly" }))
                :

                MessageSchema
                    .findByIdAndUpdate(response[0].id, { status: "REJECTED" })
                    .then(() => res.status(200).json({ message: "message not sent" }))
        })

        .catch((err) => {

            err.response.status === 500 || err.statusCode === 400 ?
                MessageSchema
                    .create({ destination, message, number })
                    .then((response) => MessageSchema.findByIdAndUpdate(response.id, { status: "REJECTED" }))
                    .then(() => res.status(400).json({ message: "message not sent" }))
                : next(err)
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

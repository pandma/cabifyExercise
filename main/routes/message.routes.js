const router = require("express").Router();
const { errorhandle } = require("../midellwares/errorHandle");
const MessageApp = require("../service/messageApp")
const messageApp = new MessageApp()
const MessageSchema = require("./../models/Message.nodel")

router.get("/hello", (req, res, next) => {

    res.json("hello world");

});

router.post("/messages", errorhandle, (req, res, next) => {

    const { destination, message, number } = req.body


    messageApp
        .getOneMessage({ destination, message })
        .then(() => {
            MessageSchema
                .create({ destination, message, number })
                .then(response => MessageSchema.findByIdAndUpdate(response.id, { status: "CONFIRMED" }))
                .then(() => res.status(200).json({ message: "message sent correctly" }))
                .catch((err) => next(err, { message: "message not save in DB" }))
        })
        .catch((err) => {
            MessageSchema
                .create({ destination, message, number })
                .then(response => MessageSchema.findByIdAndUpdate(response.id, { status: "REJECTED" }))
                .then(() => res.json({ message: "the message was not sent" }))
            console.log(err)
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

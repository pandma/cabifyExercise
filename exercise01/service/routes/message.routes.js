const router = require("express").Router();
const MessageApp = require("./../apiHandler/messageApp")
const messageApp = new MessageApp()

router.get("/hello", (req, res, next) => {
    res.json("hello world");

});

router.post("/message", (req, res, next) => {

    const destination = req.body.destination
    const body = req.body.body
    const message = { destination, body }

    messageApp
        .getOneMessage(message)
        .then((response) => res.status(200).json(response.data))
        .catch((err) => res.status(500).json(err))



});



module.exports = router;

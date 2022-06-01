const router = require("express").Router();
const { errorhandle } = require("../midellwares/errorHandle");
const MessageApp = require("../service/messageApp")
const messageApp = new MessageApp()

router.get("/hello", (req, res, next) => {

    res.json("hello world");

});

router.post("/messages", errorhandle, (req, res, next) => {

    const { destination, message } = req.body

    messageApp
        .getOneMessage({ destination, message })
        .then((response) => res.status(200).json(response.data))
        .catch((err) => next(err))
});

module.exports = router;

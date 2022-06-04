const MessageSchema = require("../models/Message.nodel")


const errorhandle = (req, res, next) => {


    const contentType = {
        'Content-Type': 'application/json'
    }
    req.body == contentType ?
        res.status(400).json({ message: "body must be a json" })
        : null

    !req.body.destination ?
        res.status(400).json({ message: "destination is incorrect" })
        : null

    !req.body.message ?
        res.status(400).json({ message: "message is incorrect" })
        : null

    !req.body.number ?
        res.status(400).json({ message: "number is incorrect" })
        : null

    next()

}

module.exports = { errorhandle }

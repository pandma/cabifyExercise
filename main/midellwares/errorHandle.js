const errorhandle = (req, res, next) => {

    !req.body.destination ?
        res.status(400).json({ message: "destination is incorrect" })
        : null

    !req.body.message ?
        res.status(400).json({ message: "message is incorrect" })
        : null

    const contentType = {
        'Content-Type': 'application/json'
    }
    req.body == contentType ?
        res.status(400).json({ message: "body must be a json" })
        : null

    next()

}
module.exports = { errorhandle }

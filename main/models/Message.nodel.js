const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
    destination: {
        type: String,
        require: [true, { message: "destination is require" }]

    },
    message: {
        type: String,
        require: [true, { message: "message is require" }]

    },
    number: {
        type: Number,
        require: [true, { message: "number is require" }]

    },
    status: {
        type: String,
        enum: ["PENDANT", "CONFIRMED", "REJECTED"],
        default: "PENDANT"

    }
})

const MessageSchema = model("message", messageSchema);

module.exports = MessageSchema
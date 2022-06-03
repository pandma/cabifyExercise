const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
    destination: {
        type: String,

    },
    message: {
        type: String,

    },
    number: {
        type: Number,

    },
    status: {
        type: String,
        enum: ["PENDANT", "CONFIRMED", "REJECTED"],
        default: "PENDANT"

    }
})

const MessageSchema = model("message", messageSchema);

module.exports = MessageSchema
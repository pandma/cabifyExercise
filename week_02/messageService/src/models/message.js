import mongoose from "mongoose";
import { database } from "../database.js";


const messageSchema = new mongoose.Schema({
  destination: String,
  body: String,
  status: {
    type: String,
    enum: ["PROCESSING", "ERROR", "OK", "TIMEOUT"],
    default: "PROCESSING"
  }

});

const Message = database.model("Message", messageSchema);

export { Message }
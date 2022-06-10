import mongoose from "mongoose";
import { database } from "../database.js";


const messageSchema = new mongoose.Schema({
  destination: String,
  body: String,
  status: {
    type: String,
    enum: ["PROCESSING", "ERROR", "OK", "TIMEOUT", "NOT SENT"],
    default: "PROCESSING"
  },
  credit: {
    type: Boolean
  }

});

const Message = database.model("Message", messageSchema);

export { Message }
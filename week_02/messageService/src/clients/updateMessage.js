import { Message } from "../models/message.js";

export default (id, conditions) => Message.findByIdAndUpdate(id, conditions);
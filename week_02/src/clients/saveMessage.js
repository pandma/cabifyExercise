import { Message, MessageCopy } from "../models/message.js";

export default async (messageParams) => {
  const message = new Message(messageParams);
  const mesaggeCopy = new MessageCopy(messageParams);


  try {
    const doc = await Message.create(messageParams);
    const docCopy = await MessageCopy.create(messageParams);


    console.log("Message saved succesfully:", doc);
    doc
    docCopy
    return
  } catch (err) {
    console.log("Error while saving", err);
  }
}

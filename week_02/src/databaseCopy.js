import mongoose from "mongoose";

const server = "mongodb2";
const local = "localhost";
const database = "cabify_bootcampCopy";

export default mongoose.createConnection(`mongodb://${local}/${database}`, { useNewUrlParser: true });
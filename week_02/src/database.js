import mongoose from "mongoose";

const server = "mongodb";
const local = "localhost";
const database = "cabify_bootcamp";

export default mongoose.createConnection(`mongodb://${local}/${database}`, { useNewUrlParser: true });


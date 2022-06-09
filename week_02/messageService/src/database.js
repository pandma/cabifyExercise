import mongoose from "mongoose";

const server = "mongodb";
const local = "localhost";
const serverCopy = "mongodb2";
const databaseName = "cabify_bootcamp_message";
const databaseNameCopy = "cabify_bootcampCopy";

const database = mongoose.createConnection(`mongodb://${local}/${databaseName}`, { useNewUrlParser: true });
const databaseCopy = mongoose.createConnection(`mongodb://${local}/${databaseNameCopy}`, { useNewUrlParser: true });

export { database, databaseCopy }


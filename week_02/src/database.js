import mongoose from "mongoose";

const server = "127.0.0.1:27017";
const local = "localhost";

const database = "cabify_bootcamp";
const MONGO_URI = `mongodb://${local}/${database}`
export default mongoose.createConnection(`mongodb://${local}/${database}`, { useNewUrlParser: true });


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


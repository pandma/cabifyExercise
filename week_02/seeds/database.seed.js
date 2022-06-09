import { MongoTransferer, MongoDBDuplexConnector } from 'mongodb-snapshot';
const local = "localhost";
const database = "cabify_bootcamp";
const databaseCopy = "cabify_bootcampCopy";

export default copyMongo2Mongo = async () => {
    const mongo_connector_1 = new MongoDBDuplexConnector({
        connection: { uri: `mongodb://${local}/${database}` }
    });

    const mongo_connector_2 = new MongoDBDuplexConnector({
        connection: { uri: `mongodb://${local}/${databaseCopy}` }
    });

    const transferer = new MongoTransferer({
        source: mongo_connector_1,
        targets: mongo_connector_2,
    });

    for await (const { total, write } of transferer) {
        console.log(`remaining bytes to write: ${total - write}`);
    }
}




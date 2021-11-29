
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ooi3z.mongodb.net/${process.env.MONGO_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);


const isConnected = client.connect();


module.exports = {
    client, isConnected
}
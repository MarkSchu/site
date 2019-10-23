require('dotenv').config();
const fs = require('fs');
const shortid = require('shortid');
const baseDir = process.cwd()
const markdownIt = require('markdown-it')({html: true});
const mongo = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
let db = null;

const create = () => {
    console.log('Creating article');
    db.collection('article').insertOne({}).then((record) => {
        console.log(record);
    });
}

mongo
.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then((client) => {
    db = client.db(DB_NAME);
    console.log(`Connected to database ${db.databaseName}`);
    create();
})
.catch((error) => {
    console.log(`Failed to connect to database. Error: ${error}`);
});

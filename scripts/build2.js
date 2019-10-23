// write draft
// run build
// add publicId
// create record
//

require('dotenv').config();
const fs = require('fs');
const shortid = require('shortid');
const baseDir = process.cwd()
const markdownIt = require('markdown-it')({html: true});
const mongo = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
let db;

const getId = (file) => {
    let firstLine = file.split('\n')[0];
    if (firstLine.includes('id')) {
        return firstLine.split('=')[1];
    }
}

const build = () => {
    let drafts = fs.readdirSync('article-drafts');
    drafts.forEach(title => {
        let filepath = `article-drafts/${title}`;
        let file = fs.readFileSync(filepath, 'utf8');
        let id = getId(file);
        db.collection('article').findOne({id})
        db.collection('article').insertOne({id})
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
    build();
})
.catch((error) => {
    console.log(`Failed to connect to database. Error: ${error}`);
});

require('dotenv').config();
const {exec} = require('child_process');
const fs = require('fs');
const mongo = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
const draftsFolder = 'article-drafts-test';
let db;


const create = () => {
    return db.collection('article').insertOne({}).then((record) => {
        let id = record.insertedId;
        let date = (new Date(Date.now())).toLocaleDateString();
        let article = (
            'id=' + id + '\n' +
            'date=' + date + '\n' +
            'publish=true' + '\n' +
            '---' + '\n'
        );
        let path = `${draftsFolder}/NEW-ARTICLE-${id}.md`;
        fs.writeFileSync(path, article);
        console.log(`Created article with id ${id}`);
        return path;
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
    return create();
})
.then((path) => {

    console.log(`Opening ${path} in Atom`);
    exec(`atom ${path}`);

    console.log('Finished!');
    process.exit(0);
})
.catch((error) => {
    console.log(`Failed to connect to database. Error: ${error}`);
});

let filestr = '';

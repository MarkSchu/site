require('dotenv').config();
const fs = require('fs');
const mongo = require('mongodb').MongoClient;
const markdownIt = require('markdown-it')({html: true});
const env = process.argv[2];
const draftsFolder = 'article-drafts';
const articlesFolder = 'articles';
let db;
let MONGODB_URI;
let DB_NAME;


if (env !== 'prod' && env !== 'test') {
    console.log('Must pass "prod" or "test" as an argument');
    process.exit(0);
}

if (env == 'prod') {
    MONGODB_URI = process.env.MONGODB_URI;
    DB_NAME = process.env.DB_NAME;
}

if (env === 'test') {
    MONGODB_URI = 'mongodb://localhost:27017';
    DB_NAME = 'local-markschu-api';
}

const createRecord = (data) => {
    return db.collection('article').insertOne(data).then((record) => {
        return record.insertedId;
    });
}

const createRecordIfNoneExists = (file, filepath, data) => {
    if (!data.id) {
        return createRecord(data).then(id => {
            file = `id=${id}\n` + file;
            fs.writeFileSync(filepath, file);
        })
    } else {
        return Promise.resolve();
    }
}

const metadataToObj = (metadata) => {
    let data = {};
    let lines = metadata.split('\n');
    lines.pop();
    lines.forEach(line => {
        let [key, value] = line.split('=');
        data[key] = value;
    });
    return data;
}

const getTitle = (markdown) => {
    let lines = markdown.split('\n');
    let title = lines[1].replace('# ', '');
    return title;
}

const getSubheadings = (markdown) => {
    let subheadings = [];
    let lines = markdown.split('\n');
    lines.forEach(line => {
        if (line.startsWith('## ')) {
            let subheading = line.replace('## ', '');
            if (subheading.includes('[')) {
                subheading = subheading.match(/\[(.*)\]/)[1];
            }
            subheadings.push(subheading);
        }
    });
    return subheadings;
}

const addBaseHtml = (articleHtml, data) => {
    return (`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Mark Schumaker</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../style.css">
    <link href="../prismjs/themes/prism-okaidia.css" rel="stylesheet" />
    <script src="../prismjs/prism.js"></script>
</head>
<body>
    <div class="container article">
        <div class="content">
            <header>
                <a href="/">🌮</a>
                <a href="/writing.html">📝</a>
                <a href="/about.html">👋</a>
            </header>
            ${articleHtml}
        <div>
                <button class="thanks-button">🙌 Thanks, this helped!</button>
            </div>
            <footer>
                <span>By Mark with ☕</span>
            </footer>
        </div>
    </div>
    <script>
        let article = ${JSON.stringify(data)};
    </script>
    <script src="/js/article.js"></script>
</body>
</html>`);
}

const build = () => {
    let articles = [];
    let drafts = fs.readdirSync(draftsFolder);
    let promises = drafts.map(title => {
        let filepath = `${draftsFolder}/${title}`;
        let file = fs.readFileSync(filepath, 'utf8');
        let [metadata, markdown] = file.split('---');
        let metadataObj = metadataToObj(metadata);
        let data = Object.assign({}, metadataObj);
        let path = `${articlesFolder}/${title}`.replace('.md', '.html');
        data.url = path;
        data.title = getTitle(markdown);
        data.subheadings = getSubheadings(markdown);
        data.helped = 0;
        return createRecordIfNoneExists(file, filepath, data).then(() => {
            let articleHtml = markdownIt.render(markdown);
            let pageHtml = addBaseHtml(articleHtml, data);
            fs.writeFileSync(path, pageHtml);
            articles.push(data);
        })
    });
    return Promise
    .all(promises)
    .then(() => {
        let articlesJS = `const articles = ${JSON.stringify(articles)}`;
        fs.writeFileSync('data/articles.js', articlesJS);
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

    console.log('Building');
    return build();
})
.then(() => {
    console.log('All done');
    process.exit(0);
})
.catch((error) => {
    console.log(`Failed to connect to database. Error: ${error}`);
});

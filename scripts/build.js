require('dotenv').config();
const env = process.argv[2];
const fs = require('fs');
const mongo = require('mongodb').MongoClient;
const uniqid = require('uniqid');
const markdownIt = require('markdown-it')({html: true});
const {metadataToObj, metadataToStr} = require('./helpers');
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
    console.log('\n*** This is a Production Build. Your Heroku/mLab database will get filled with documents! ***\n');
}

if (env === 'test') {
    MONGODB_URI = 'mongodb://localhost:27017';
    DB_NAME = 'local-markschu-api-10';
        console.log(`\n*** This is a Test Build. Your local database ${DB_NAME} get filled with documents. Whatever. ***\n`);
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
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148614000-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-148614000-1');
    </script>
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
            <button class="thanks-button">🙌 Thanks, this helped!</button>
            <p class="glad-message">👍 I'm glad it helped. Thanks for letting me know.</p>
        <div>
        <div>
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
    let drafts = fs.readdirSync('article-drafts');


    // CREATE HTML
    console.log('\n*** Build HTML and articles.js ***\n');

    drafts.forEach(title => {
        let filepath = `article-drafts/${title}`;
        let file = fs.readFileSync(filepath, 'utf8');
        let path = `articles/${title}`.replace('.md', '.html');
        let [metadata, markdown] = file.split('---');
        let data = metadataToObj(metadata);
        if (!data.publicid) {
            data.publicid =  uniqid();
            let metadata = metadataToStr(data);
            fs.writeFileSync(filepath, metadata + '---\n' + markdown)
        }
        data.title = getTitle(markdown);
        data.subheadings = getSubheadings(markdown);
        data.url = path;
        data.helped = 0;
        let articleHtml = markdownIt.render(markdown);
        let pageHtml = addBaseHtml(articleHtml, data);
        fs.writeFileSync(path, pageHtml);
        console.log(`Build HTML for ${data.title}`);
        articles.push(data);
    });
    let articlesJS = `const articles = ${JSON.stringify(articles)}`;
    fs.writeFileSync('data/articles.js', articlesJS);


    // CREATE MONGO DOCUMENTS
    console.log(`\n*** Build Documents in Mongo in DB ${DB_NAME} ***\n`);

    let promises = articles.map(article => {
        return db
        .collection('article')
        .findOne({publicid: article.publicid})
        .then((result) => {
            if (!result) {
                return db.collection('article').insertOne(article).then((result) => {
                    console.log('Created ', result.ops[0].title);
                });
            } else {
                return Promise.resolve();
            }
        })
    });

    return Promise.all(promises);
}

// build();

// start mongod locally with dpath envar
// mongod --dbpath=/Users/markschumaker/data/db

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
    console.log('\n*** All done ***\n');
    process.exit(0);
})
.catch((error) => {
    console.log(`Something bad happened... ${error}`);
});

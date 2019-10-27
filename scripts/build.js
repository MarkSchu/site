require('dotenv').config();
const fs = require('fs');
const shortid = require('shortid');
const baseDir = process.cwd()
const markdownIt = require('markdown-it')({html: true});

const addIdIfNoneExists = (file, filepath) => {
    let ids = [];
    let firstLine = file.split('\n')[0];
    if (firstLine.includes('publicId=')) {
        let id = firstLine.split('=')[1];
        ids.push(id);
    } else {
        let id = shortid.generate();
        while (ids.includes(id)) {
            id = shortid.generate();
        }
        file = `publicId=${id}\n` + file;
    }
    fs.writeFileSync(filepath, file);
}

const readMetadata = (metadata) => {
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
    let drafts = fs.readdirSync('article-drafts');
    drafts.forEach(title => {
        let filepath = `article-drafts/${title}`;
        let file = fs.readFileSync(filepath, 'utf8');
        let publicId = addIdIfNoneExists(file, filepath);
        let path = `articles/${title}`.replace('.md', '.html');
        let [metadata, markdown] = file.split('---');
        let data = readMetadata(metadata);
        data.title = getTitle(markdown);
        data.subheadings = getSubheadings(markdown);
        data.url = path;
        let articleHtml = markdownIt.render(markdown);
        let pageHtml = addBaseHtml(articleHtml, data);
        fs.writeFileSync(path, pageHtml);
        articles.push(data);
    });
    let articlesJS = `const articles = ${JSON.stringify(articles)}`;
    let articlesJSON = `${JSON.stringify(articles)}`;
    fs.writeFileSync('data/articles.js', articlesJS);
    fs.writeFileSync('data/articles.json', articlesJSON);
}

build();

const fs = require('fs');
const baseDir = process.cwd()
const markdownIt = require('markdown-it')({
    html: true,
});

const posts = [];

const getPostData = (metadata, name) => {
    let lines = metadata.split('\n');
    return {
        title: lines[0],
        url: `code-tutorials/${name.replace('.md', '.html')}`
    }
}

const splitMarkdownAndData = (file, name) => {
    let [metadata, markdown] = file.split('---');
    return {
        markdown,
        postData: getPostData(metadata, name)
    }
}

const addBaseHtml = (articleHtml, postData) => {
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
        <header>
            <a href="/code-tutorials.html">💾 Code Tutorials for Beginners</a>
            &nbsp;
            <a href="/">🌮 Mark Schumaker</a>
        </header>
        <h1 class="title">${postData.title}</h1>
        <author class="subtext">by Mark Schumaker</author>
        ${articleHtml}
        <footer>by Mark with ☕</footer>
    </div>
</body>
</html>`);
}

const createFile = (html, name) => {
    const htmlName = name.replace('.md', '.html');
    fs.writeFileSync(`code-tutorials/${htmlName}`, html);
}

const buildSingle = (name) => {
    let file = fs.readFileSync(`code-tutorials-drafts/${name}`, 'utf8');
    let {markdown, postData} = splitMarkdownAndData(file, name);
    let articleHtml = markdownIt.render(markdown);
    let pageHtml = addBaseHtml(articleHtml, postData);
    posts.push(postData);
    createFile(pageHtml, name);
}

const buildAll = () => {
    let drafts = fs.readdirSync('code-tutorials-drafts');
    drafts.forEach(buildSingle);
    fs.writeFileSync('data/code-tutorials.js', 'var codeTutorials = ' + JSON.stringify(posts));
}

buildAll();

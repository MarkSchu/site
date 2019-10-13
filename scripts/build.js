const fs = require('fs');
const baseDir = process.cwd()
const markdownIt = require('markdown-it')({
    html: true,
});

const addBaseHtml = (articleHtml, articleDataObj, headerLink) => {
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
            ${headerLink}
            &nbsp;
            <a href="/">🌮 Mark Schumaker</a>
        </header>
        <h1 class="">${articleDataObj.title}</h1>
        ${articleHtml}
        <footer>by Mark with ☕</footer>
    </div>
</body>
</html>`);
}

const articleDataToObject = (name, articleData, articleFolder) => {
    let lines = articleData.split('\n');
    let htmlName = name.replace('.md', '.html');
    return {
        title: lines[0],
        url: `${articleFolder}/${htmlName}`,
        publish: lines[1] === 'publish'
    }
}

const buildAll = (draftsFolder, jsFile, articleVariable, articleFolder, headerLink) => {
    let articles = [];
    let drafts = fs.readdirSync(draftsFolder);
    drafts.forEach((draft) => {
        let file = fs.readFileSync(`${draftsFolder}/${draft}`, 'utf8');
        let [articleData, markdown] = file.split('---');
        let articleDataObj = articleDataToObject(draft, articleData, articleFolder);
        if (!articleDataObj.publish)
            return;
        let articleHtml = markdownIt.render(markdown);
        let pageHtml = addBaseHtml(articleHtml, articleDataObj, headerLink);
        articles.push(articleDataObj);
        fs.writeFileSync(articleDataObj.url, pageHtml);
    });
    let articlesJS = `const ${articleVariable} = ${JSON.stringify(articles)}`;
    fs.writeFileSync(jsFile, articlesJS);
}

buildAll(
    'code-tutorials-drafts',
    'data/code-tutorials.js',
    'codeTutorials',
    'code-tutorials',
    '<a href="/code-tutorials.html">💾 Code Tutorials for Beginners </a>'
);

buildAll(
    'learn-in-public-drafts',
    'data/learn-in-public.js',
    'learnInPublicArticles',
    'learn-in-public',
    '<a href="/learn-in-public.html">📝 Learn In Public</a>'
)

const fs = require('fs')
const uniqid = require('uniqid');
const markdownIt = require('markdown-it')({html: true});
const {metadataToObj} = require('./utils.js');
const {wrapInBaseHTML} = require('./base-html.js');

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

const getTags = (metadataObj) => {
    if (metadataObj.tags) {
        return metadataObj.tags.split(',')
    } else {
        return [];
    }
}

const build = () => {
    console.log('Build');
    let articles = [];
    let drafts = fs.readdirSync('drafts');

    drafts.forEach(filename => {
        let draftpath = `drafts/${filename}`;
        let file = fs.readFileSync(draftpath, 'utf8');
        let [metadata, markdown] = file.split('---');
        let metadataObj = metadataToObj(metadata);
        if (!metadataObj.publicid) {
            metadataObj.publicid = uniqid();
            metadata = metadataToStr(metadataObj);
            fs.writeFileSync(draftpath, metadata + '---' + markdown);
        }
        let html = markdownIt.render(markdown);
        let articlePath = `articles/${filename.replace('.md', '.html')}`;
        let data = {
            title: getTitle(markdown),
            publish: metadataObj.publish,
            publicid: metadataObj.publicid,
            date: metadataObj.date,
            url: articlePath,
            subheadings: getSubheadings(markdown),
            tags: getTags(metadataObj)
        }
        html = wrapInBaseHTML(html, data);
        fs.writeFileSync(articlePath, html);
        articles.push(data);
    });
    let articlesJS =  `
        const blogArticles = ${JSON.stringify(articles)}`;
    fs.writeFileSync('articles.js', articlesJS);
}



build();

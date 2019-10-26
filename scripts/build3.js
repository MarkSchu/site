const fs = require('fs');
const draftsFolder = 'article-drafts-test';
const articlesFolder = 'articles-test';


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

const build = () => {
    drafts.forEach((title) => {
        let filepath = `${draftsFolder}/${title}`;
        let file = fs.readFileSync(filepath, 'utf8');
        let [metadata, markdown] = file.split('---');
        let metadataAsObj = metadataToObj(metadata);
        let path = `articles/${title}`.replace('.md', '.html');

    });
}

build();

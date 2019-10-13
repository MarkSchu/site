
const metadataToObject() {
    return {};
}

const build = () => {
    let articles = [];
    let drafts = fs.readdirSync('article-drafts');
    drafts.forEach(draft => {
        let file = fs.readFileSync(`article-drafts/${draft}`, 'utf8');
        let [metadata, markdown] = file.split('---');
        let dataObject = metadataToObject(metadata);
    });
}

build();

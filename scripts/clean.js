const fs = require('fs');
const {metadataToObj, metadataToStr} = require('./helpers');
const drafts = fs.readdirSync('article-drafts');


drafts.forEach((title) => {
    let filepath = `article-drafts/${title}`;
    let file = fs.readFileSync(filepath, 'utf8');
    let [metadata, markdown] = file.split('---');

    // metadata = metadataToObj(metadata);
    //
    // metadata = metadataToStr(metadata);

    let newFile = metadata + '---\n' + markdown.trim();
    fs.writeFileSync(filepath, newFile);
});

const fs = require('fs');
const {metadataToObj, metadataToStr} = require('./helpers');
const drafts = fs.readdirSync('article-drafts');


drafts.forEach((title) => {
    let filepath = `article-drafts/${title}`;
    let file = fs.readFileSync(filepath, 'utf8');
    let [metadata, markdown] = file.split('---');

    metadata = metadataToObj(metadata);

    if (metadata.id) {
        delete metadata.id;
    }

    if (metadata.publicId) {
        delete metadata.publicId;
    }

    metadata = metadataToStr(metadata);

    let newFile = metadata + '---\n' + markdown;
    fs.writeFileSync(filepath, newFile);
});

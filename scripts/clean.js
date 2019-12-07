const fs = require('fs');
const {metadataToObj, metadataToStr} = require('./utils');
const drafts = fs.readdirSync('drafts');


drafts.forEach((title) => {
    let filepath = `drafts/${title}`;
    let file = fs.readFileSync(filepath, 'utf8');
    let [metadata, markdown] = file.split('---');

    metadata = metadataToObj(metadata);
    // edit metadata
    // delete metadata.id
    metadata = metadataToStr(metadata);

    let newFile = metadata + '---\n' + markdown.trim();
    fs.writeFileSync(filepath, newFile);
});

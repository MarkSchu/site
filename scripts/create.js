const fs = require('fs');
const uniqid = require('uniqid');
const {getTodaysDate, metadataToStr} = require('./utils');

const create = () => {
    const title = process.argv.slice(2).join(' ');
    const date = getTodaysDate();
    const publicid = uniqid();
    const filename = date + '-' + title.replace(/\s+/g, '-').toLowerCase();
    const draftpath = `drafts/${filename}.md`;
    const metadataObj = {
        publish: true,
        date,
        publicid
    };
    const markdown = `# ${title}`;
    const metadata = metadataToStr(metadataObj);
    fs.writeFileSync(draftpath, metadata + '---\n' + markdown);
}

create();

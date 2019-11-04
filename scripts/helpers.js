const metadataToObj = (metadata) => {
    let obj = {};
    let lines = metadata.split('\n');
    lines.pop();
    lines.forEach(line => {
        let [key, value] = line.split('=');
        obj[key] = value;
    });
    return obj;
}

const metadataToStr = (metadata) => {
    let str = '';
    for (let key in metadata) {
        let value = metadata[key];
        str += `${key}=${value}\n`;
    }
    return str;
}

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

module.exports = {metadataToObj, metadataToStr};

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

module.exports = {metadataToObj, metadataToStr};

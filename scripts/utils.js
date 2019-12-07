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

const metadataToStr = (metadataObj) => {
    let str = '';
    for (let key in metadataObj) {
        let value = metadataObj[key];
        str += `${key}=${value}\n`;
    }
    return str;
}

const getTodaysDate = () => {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    return `${m}-${d}-${yyyy}`;
}

module.exports = {
    metadataToObj,
    metadataToStr,
    getTodaysDate
}

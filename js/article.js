let baseApiUrl;

if (window.location.hostname === 'localhost') {
    baseApiUrl = 'http://localhost:8081';
} else {
    baseApiUrl = 'https://markschu-api.herokuapp.com/';
}

const put = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.onload = () => {
        callback(request.status);
    }
    request.send();
}

const get = (url) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        callback(request);
    }
    request.send();
}

get(`${baseApiUrl}/article?articleId=${article.publicId}`);

let thanksButton = document.querySelector('.thanks-button');
thanksButton.addEventListener('click', () => {
    put(`${baseApiUrl}/helped?articleId=${article.publicId}`, (status) => {
        console.log(status);
    });
});

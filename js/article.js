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

const get = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        callback(request);
    }
    request.send();
}

get(`${baseApiUrl}/article?publicid=${article.publicid}`, () => {
    console.log('Got it!');
});

let thanksButton = document.querySelector('.thanks-button');
let gladMessage = document.querySelector('.glad-message');
thanksButton.addEventListener('click', () => {
    thanksButton.disabled = true;
    put(`${baseApiUrl}/article/helped?publicid=${article.publicid}`, (status) => {
        thanksButton.style.display = 'none';
        gladMessage.style.display = 'block';
    });
});

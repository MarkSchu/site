const http = require('http');
const fs = require('fs');
const port = 8080;

const handleRequest = (request, response) => {
    let url = '.' + request.url;
    let file;

    if (url === './') {
        file = fs.readFileSync('./index.html');
    } else {
        file = fs.readFileSync(url);
    }

    response.writeHead(200);
    response.end(file);
}

const server = http.createServer(handleRequest);

server.listen(port, () => {
    console.log('Go to http://localhost:8080/ with your browser.');
});

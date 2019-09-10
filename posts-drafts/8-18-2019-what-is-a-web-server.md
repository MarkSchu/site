What is a Web Server?
---
The internet is a series of requests and responses made between computers.
When you type `https://www.google.com` into a browser like Chrome and click
enter, the browser makes a request to another computer - the computer at the
address `www.google.com` - and a program running on that computer reads the
request and responds by sending back a bunch of files used to show Google’s
homepage.

The problem of one computer requesting “stuff” from another computer breaks
into a number of sub-problems. One of those problems is, “How do you read a
request and send back a response?” The solution to this problem is a computer
program that is typically called a “web server” or “application server.” A web
developer writes a web server to receive requests, read them, and figure out
what kind of response to send back to the computer that made the request. Every
time you go to a web page, your browser makes a request to the computers and it
responds with a bunch of files for your browser to display.  A
huge portion of web development occurs within the web server. If you’ve heard
the difference between Backend and Frontend web development, it is on the back
end.

We’re going to make a super simple web server right now. When it runs, we can
use it to receive requests and respond back.

Since a web server is a computer program, it is written in a particular
programming language. In this case, I’m going to go with Node.js, but you can
write a web server using pretty much any language you want like Python, Ruby, and
Java. Certain languages make it easier than others but the basic principles are
the same.

Now for some code. First, create a folder on your computer. You can call it
whatever but I’m going to call it `hello-web-server`. Next, create a file in
that folder. Again, you can call it whatever you want; I’m going to go with
`web-server.js`.

```javascript
const http = require('http');

const port = 8080;

const handleRequest = (request, response) => {

    let method = request.method;
    let url = request.url;

    console.log(method, url);

    // read request
    if (method === 'GET' && url === '/books') {

        // create response
        response.statusCode = 200;
        response.write('The Great Gatsby, To Kill a Mockingbird, 1984');

        // send response
        response.end();
    }
}

const server = http.createServer(handleRequest);

server.listen(port, () => {
    console.log('Hello Web Server');
});
```

To run this program, navigate to `hello-web-server` in the terminal,
type in `node web-server.js`, and click enter. If all goes well, you’ll see
`Hello Web Server` print out.

Now for some explanation.

First, what is the module `http`?

The name `http` refers to Hypertext Transfer Protocol or HTTP. Without going into
too much detail, HTTP is a set of rules and conventions for computers to follow
when making and responding to requests. This is similar to the rules and
conventions used for sending and receiving letters. On a letter the address has
to go on the middle of the envelope and with the right format. Senders and
receivers of letters have to follow these rules and conventions. HTTP is the
same kind of thing. It explains how computers should format requests and
responses.

The module http is a computer program written in Node.js that is built to
receive requests and create and send responses that follow the rules and
conventions of HTTP.

So what are the rules of HTTP? There are a lot of them but we only need to think
about a few. First, every request has to have a type that describes the purpose
of the request. HTTP defines a handful of these. The most popular are: (1) A
request to get something, (2) a request to give something, (3) a request to
change something, and (4) a request to delete something. In the vocabulary of
HTTP, these are called GET, POST, PUT, and DELETE. They’re also not actually
called “Types”; they’re called the “Method” of the request.

Secondly, every request has an address, where an address is associated with some
kind of data. In HTTP speak, the url is the address. The person who writes the
web server decides what data lives at what address.

There are a lot of ways to make requests; the easiest is to just use a browser
like Chrome. When you type in a url and press enter, the browser makes a GET
request to the url. For example, when you type `https://www.google.com` in the
browser and click enter, the browser makes a GET request to the address
`www.google.com`. The left side of the url - `https://` - tells the browser to
make a request to the address using the rules and conventions of http. (Why is
`s` in `https` rather than just `http`? Https makes http requests with an extra
level of security. You don't need to worry about that right now).

Next question: What is the port number? The only thing you need to know about
ports is this. When a computer gets requests from other computers, those requests
are sent to sent to particular locations; i.e. ports. Web servers listen to
particular ports to receive the requests sent there. Our web server is listening
to `8080`, but it could have listened to `8000`, `8081`, `3000`, or whatever.

Finally, a few comments on the actual code. Node.js's http module works like
this. You create an object - in this case called `server` - and give it a function
that I called `handleRequest`. The handleRequest function is called every single
time a request is sent to port `8080`. The http request is passed to the
handleRequest function and we can inspect its properties. For example, you
can see the request method and request url.

With `web-server.js` running, type the following into your browser and click enter
`http://localhost:8080/books`. If all goes well, you'll see the request
method and url printed out: `GET /books`

(You might also see `GET /favicon.ico`. Don't worry about this). This means that
your browser successfully made a request to your web server and your web server
got it!

What is the `localhost:8080`? This is a development tool that lets a
computer send requests to its own ports (in this case, port `8080`).

Finally, we need to talk about the response. When a web server gets a request,
it needs to send back a response. The rules and conventions of HTTP describe
what the response can and look like. This is a big topic, but were only going
to focus on two important things.

First, every response has to have a three digit code that describes if and how
the request succeeded or failed. This is called the “Status Code”. They tell the
computer that made the request what happened. There are a lot of codes. If the
request is successful, then a response is given a code of `200`. If something broke
and we don’t know what, then the response is given a code of `500`. If someone made
a request and they shouldn’t have for some reason, then the response is given a
code of `403`.

In the code above, Node.js provides a response object and a way to set the
response code on the object.

Second, almost all HTTP responses include data; the data that the original
request was interested in. The code above returns a list of books in a string.
Node.js's write method allows you to set the data. This is called the response
body or response payload. When you hit `http://localhost:8080/books` in the browser,
the browser is programmed to get the data back and then display it.

That sums up the basic idea of a web server. It's just a program that receives
HTTP requests and reply's with HTTP responses.

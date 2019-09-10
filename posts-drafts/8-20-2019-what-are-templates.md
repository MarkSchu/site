What is the Purpose of a Template Engine?
---
If you search for beginner tutorials on web development like "How do you make
a website with Node.js?", you'll probably run into the concept of a template
or template engine fairly quickly. Specifically, you might see names like
Jade, Handlebars, Mustache, and Nunjucks, just to name a few.

I'm going to explain the problem that templates solve so that you know why they
are used in the first place.

Suppose that you're building a website with a page that shows the bio of a
single user. For example, when you navigate to `mycoolsite.com/users/bio?name=mark` in a
browser like Chrome, the web page shows the biographical data of the user with
id `3` like this

PICTURE
PICTURE
PICTURE

and when you navigate to `mycoolsite.com/users/bio?name=mark`, then the web page shows
the biographical data of the user with id `1`.

PICTURE
PICTURE
PICTURE

How do you make this?

Let's start with a really basic web server written in Node.js. When the browser
hits `mycoolsite.com/users/bio?id=1`, it makes a `GET` request. We'll catch
the request in a request handler called `handleRequest`. (If you've never seen
a basic Node.js server, every time a request is made to the server,
`handleRequest` is called with the request passed to it).

```
const handleRequest = (request, response) => {

    let method = request.method;
    let url = request.url;
    let params = request.params;

    if (method === 'GET' && url === '/user/bio') {

    }
}

http
.createServer(handleRequest)
.listen(8080, () => console.log('Server is up and running on port 8080'));
```

Now we need to do two things. First, we need to get the biographical data of
the user. Second, we need to send something back to the browser so that the data
is displayed.

First, to make things simple, we'll just hardcode the user bios. These would normally
be put in a database but we're not talking about databases right now. Note that
the request sends the user's name via a query param; that is how we know what
user to look up.

```
const bios = {
    'mark': {name: 'Mark', occupation: 'Programmer', favoriteNumber: 42},
    'mary': {name: 'Mary', occupation: 'Accountant', favoriteNumber: 1},
    'marvin': {name: 'Marvin', occupation: 'Designer', favoriteNumber: 101},
}

const handleRequest = (request, response) => {

    let method = request.method;
    let url = request.url;
    let params = request.params;

    if (method === 'GET' && url === '/user/bio') {
        let bio = bios[userName];
    }
}

http
.createServer(handleRequest)
.listen(8080, () => console.log('Server is up and running on port 8080'));
```

Second, we have to display the data in the browser in the format described in
the picture. In order to display formatted data in a browser, you have to use
HTML; that is the purpose of HTML. And there are two ways to write HTML. We can
either write the HTML in the web server and pass it to the browser in the body of
the response or we can write the HTML in the browser using javascript and the
`document` api. The first option is called "Server Side Rendering" since we
write the code that gets rendered - i.e. the HTML - on the server side - i.e.
in the web server code.

Templates are used in server side rendering; you'll see why very quickly.

The next problem that we need to solve, then, is the problem of writing the
HTML that we send to the browser in the response that the browser will display.
For example, the HTML for

PICTURE
PICTURE
PCITURE

will look something like this:

```
<!DOCTYPE html>
<html>
<body>
    <table>
        <label>Name: </label><span>Mark</span></br>
        <label>Occupation: </label><span>Programmer</span></br>
        <label>Favorite Number: </label><span>42</span>
    </table>
</body>
</html>
```
When the browser receives this, it displays it as a nicely formatted page because
that is one of the most important things that a browser does.



However, this presents a problem; indeed, the very problem that templates solve.
Each bio page basically looks the same. The only difference is the actual name,
occupation, and favorite number. That means that we have to have a copy of the
HTML for every single user.

publicId=nr4r0h7ZZ
publish=true
date=9/18/2019
---
# What is an API?

I remember being confused by the use of the term "API" (i.e. application programming interface) when I started in web development. The reason, I think, is that the term is used in two related, but different ways. First, it is used to mean a set of HTTP method-url pairs that you can send HTTP requests to. Second, it is used to mean the methods and properties of a module, class, or class instance. I'll explain.

In the first sense, an API is a set of urls with HTTP methods that you can make HTTP requests to. An example is the Fav Quotes API at https://favqs.com/api. It includes, for instance:
```text
GET https://favqs.com/api/qotd
GET https://favqs.com/api/quotes
GET https://favqs.com/api/quotes/:quote_id
PUT https://favqs.com/api/quotes/:quote_id/fav
PUT https://favqs.com/api/quotes/:quote_id/upvote
```
You can send an HTTP request to any of these pairs and get a response.

For example, if you make a `GET` request to `https://favqs.com/api/qotd`, the API sends back a quote. You can try this by hitting `https://favqs.com/api/qotd` in the browser or by making an AJAX request like this:

```javascript
var request = new XMLHttpRequest();
request.open('GET', 'https://favqs.com/api/qotd', true);
request.onload = function() {
    if (this.status == 200) {
        // Here is the quote of the day!
        var response = this.response;
    }
};
request.send();
```
(Other requests require something called an "API token". I'll save that for another article).

In the second sense, an API refers to the methods and properties on modules, classes, and class instances. Consider the JavaScript model `Math`. The `Math` module includes, for instance, the methods `Math.floor`, `Math.abs`, and `Math.log`, along with the properties `Math.PI` and `Math.E`. We say, therefore, that `floor`, `abs`, `log`, `PI`, and `E` are part of the API of the `Math` module.

The same is true of class instances. If you create an array, for instance
```javascript
let myArray = [1, 2];
```  
you'll find that the instance `myArray` has a number of methods like `myArray.push` and `myArray.pop` and the property `myArray.length`. We say that `push`, `pop`, and `length` are part of the API of the array instance.

What is an API?
---
There are two senses to the term API. The first sense has to do with a set of URLs. The second sense has to do with classes and modules. Unfortunately, it isn't always clear which sense someone is using which is confusing when you are just getting started in web development. Here's a quick explanation.

In the first sense, an API is a set of URLs that programmers can make HTTP requests to in order to get (or change) data. For example, the FavQs API is an api that provides famous quotations. It consists of a set of HTTP Method and URL pairs like

	GET /api/quotes
	GET /api/quotes/:quote_id
	PUT /api/quotes/:quote_id

The HTTP method and url pairs are often called routes or endpoints.

The first endpoint lets you request a list of all the quotes available. The second endpoint lets you request a quote based on its id. The third endpoint lets you change the quote that has a particular id.

You can use the first, for example, by making an AJAX call written in JavaScript, that would look like

	var request = new XMLHttpRequest();
	request.open('GET', '/users/123/posts', true);
request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var resp = this.response;
  } else {
    // We reached our target server, but it returned an error

  }
};

In the world of programming, you'd say that "You hit the API to get back all of the user 123's posts."

In the second sense, an API is the set of methods and properties that are accessible on a class, an instance of a class, or a module that you import. JavaScript, for example, has a built-in module called Math. Math includes a bunch of methods like pow, floor, and ceil and contains properties like PI and E. In programming world, we say that pow, floor, ceil, PI, and E are part of the API of the Math module.

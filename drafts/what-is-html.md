publish=true
date=9/3/2019
publicid=3vjlaxssk2o4ervn
---
# What is HTML?
## Web Development for Beginners

The original purpose of the internet was to share text documents like articles. When you give a web browser a file with text, it displays the text. And that means that you can send someone a file and they can use their browser to read it.

If you take a look at an actual article, however, you notice that certain parts of the text are formatted. The title of the article, for example, is written in large font. Certain words and phrases are bold or italicized. And many articles contain pictures.

HTML is a set of symbols that lets you add formatting and elements like images to text. The web browser knows how to read HTML - it's just what web browsers do - and when it receives a text with HTML, it displays the text as formatted.

Consider, for example, a file called hello.txt with the following text:


```text
Hello World
This is just a regular, old unformatted sentence.
```

When the browser reads and displays this file, it looks like this:

<img src="../images/unformatted.png" />

Suppose, however, that you want "Hello World" to display as an article title; "regular" to be italicized; "old" to be bold; and for the sentence to have an appropriate margin. In order to do that, change the file extension to `.html` to tell the browser that the file includes HTML and then make the following changes:

```html
<h1>Hello World</h1>
<p>This is just a <i>regular</i>, <b>old</b>, unformatted sentence.</p>
```

When the browser reads and display this file, it looks like:

<img src="../images/formatted.png" />

See, it is formatted!

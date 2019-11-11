publish=true
date=11/11/2019
publicid=4n442kc8ek2uopihh
---
# How Should Programmers Learn a New Programming Language?
## Part 2: What is a program and how do you run one?
## Thoughts on Programming

(This is part 2 of 4. The intro is [here](/articles/how-should-programmers-learn-a-new-programming-language-part-1.html).

In Part 1, I said that I think that the most important questions that a developer can ask when learning a new programming are:

1) What is a program and how do you run one?
2) What are the medium sized building blocks that you build programs with?
3) What are the tools that should be on your radar?

In this article, I'm going to elaborate on 1: What is a program and how do you run one?

This is the most important question that a programmer has to answer. At bottom, you use programs by running them; so you have to know what a program looks like and how to run it. This looks very different for different languages and for the contexts in which those languages are used.

For example, in web development world, websites use programs written in JavaScript. A JavaScript program is a list of instructions with no special entry point. The following, for example, is a perfectly valid JavaScript Program:

```javascript
console.log('hello!');
var foo = 42;
console.log(42 * 4);
```

In order to run it on the web, you have to send it to a web browser. Browsers read and execute JavaScript because they're JavaScript interpreters. And you tell a web browser to interpret and execute a JavaScript program by sending it a `.js` file(or by including the code in a special HTML tag).

For example, when you include the tag

```html
<script src="https://www.mysite.com/imaprogram.js" ></script>
```

the browser will request `imaprogram.js` via HTTP, get the file, and run it.

A slightly more complicated example is TypeScript. TypeScript is a programming language that compiles into JavaScript. A TypeScript program is, like JavaScript, a file with a list of instructions and no special entry point, but it's compiled into JavaScript before being sent to the browser.

What about NodeJS? NodeJS is JavaScript that runs on a computer instead of a browser. A NodeJS program is just like a JavaScript-in-the-browser program but you run from the terminal. Go to the directory that includes the file - call it `imaprogram.js` - and run it using the command `node imaprogram.js`

A very different example is Java. You don't just write Java in a file and run it with a single command on the command line. Java programs are classes with a special method called main. The method main is the program's entry point.  

```java
class ImAJavaProgram {
	public static void main(String [] args) {
    	// do stuff
    }
}
```

This is way more structured than JavaScript. A JavaScript program is a list of whatever instructions you want. A Java program is a class; and it's a class that satisfies a particular interface. Moreover, Java is compiled.

There are other contexts that you have to be aware of as well.

For example, you need to know how to run a program locally for development versus how to run it in production. In order to run a website locally, for example, you run a web server on your computer that serves the code to localhost. Alternatively, in order to run your website on the actual web, you probably deploy it to some hosting service.

That's all to say, programs do not look the same from language to language and even differ based on the context in which you use the language. In order to learn a programming language, you need to know how to run a program; that is, you need to know how to press the start button.

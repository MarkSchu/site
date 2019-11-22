publish=true
date=11/22/2019
publicid=13hk5ev4k3a5cygl
---
# Thinking Through the Definition of Recursive Function
## Notes on Godel's Incompleteness Theorem

Start with the functions:

<img src="../images/recursive1.png" />


Note that B has one less argument than A and that C has one more argument than A. For example, if A has two arguments, then A, B, and C look like:

<img src="../images/recursive2.png" />


If A has one argument, then B is just a number - a constant - and A, B, and C look like.

<img src="../images/recursive3.png" />

Now for the definition.

The function A is **recursively defined from the functions** B and C when the following holds.

Given numbers n and x...y:

<img src="../images/recursive4.png" />

There's a lot going on here. For clarity, here is A with two arguments.

<img src="../images/recursive5.png" />

And here it is with one argument. B, in this instance, isn't a function. It is a number like 12 or 101.

<img src="../images/recursive6.png" />

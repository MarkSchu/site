publish=true
date=11/7/2019
publicid=3vjlay9ak2oqwgsw
---
# What is the Undecidable Statement?
## An Explanation
## Reading "On Formally Undecidable Propositions of Principia Mathematica and Related Systems" by Kurt Godel, Part 5

Godel's proof says that there is a statement, written in the language of the Principia, that the Principia cannot prove and cannot prove its negation.

So what's the statement?

The statement is defined in terms of the class K, so it requires a little setup.

The class K is a set of numbers. It's created like this. First, take all the open formulas in the Principia that have a single variable - for example, `x = 0` - and put them in a list. Since they're in a list, every formula is associated with a specific number, namely, its position in the list.

<img src="/images/undecide1.png" />

In the list above, `x = 0` is at position 5.

Next, create a list of statements from the list of formulas by replacing the free variable in the formula with the formula's position number. For example, since `x = 0` is at position 5, we get the statement `5 = 0`.

<img src="/images/undecide2.png" />

Finally, go through the list of propositions and decide if each proposition has a proof in the Principia or not. `5 = 0` does not have a proof.

<img src="/images/undecide3.png" />

A number is a member of K if it is associated with a statement that isn't provable. Since `5 = 0` is not provable and the statement is associated with the number 5, 5 is a member of K.

<img src="/images/undecide5.png" />

As it turns out, the metalinguistic property "x is a member of K" is definable in the Principia. That means that there is an open formula - call it `isMemberOfK(x)` - that satisfies the following criteria:

1) x is in K when `isMemberOfK(x)` has a proof

2) x is not in K when `~isMemberOf(x)` has a proof

Now for the weird part.

Since `isMemberOfK(x)` is an open formula with a single free variable, it is in the list of open formulas. Imagine, for no particular reason, that it's located at position 42.

<img src="/images/undecide6.png" />

That means that `isMemberOfK(42)` is on the list of statements.

<img src="/images/undecide7.png" />

The statement `isMemberOfK(42)` is the undecidable statement in Godel's proof. It and its negation do not have proofs in the Principia.

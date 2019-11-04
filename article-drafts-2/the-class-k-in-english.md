publicId=VniVYchMU
id=5dba3d16f6db6d7638e0c643
date=10/28/2019
publish=true
---
# The Class K in English
## Reading "On Formally Undecidable Propositions of Principia Mathematica and Related Systems" by Kurt Godel, Part 2

In Godel's summary of his own proof, he describes a very important set of numbers, what he calls "The Concept K." The notation that he uses to express the class, however, is difficult to follow, so I tried to write a translation that is easier to read.

First, some setup.

Think about all the open formulas in the Principia with one free variable of the type Number. For example, `x = 0` is a formula that (1) has a single free variable `x`, which (2) is of the type, Number. (Godel calls these "class-expressions". I'm not entirely sure why but my best guess is that numbers are defined as classes of classes, like sets of pairs).

Now, put all the formulas like this into a list. The formula `x = 0`, for example, might be the 121st member of the list. It doesn't matter how we make the list, just that there is one. I'm going to call this *The List*.

Next, define a function in the Principia that picks out members of The List. Godel calls this function `R`; I'm going to use the name `formulaAt`. `formulaAt(121)`, for example,  refers to the 121st formula of The List.

We also need a way to talk about the formula you get when you replace the free variable in an open formula with a number. Godel uses the notation `[α;n]` to mean the formula you get by replacing the free variable in open formula `α` with the number `n`. Greek letters and semicolons throw me off so I'm going to use `[F:n]` instead.

Finally, Godel uses the notation `Bew x` to mean `x` is provable. I'm going to rename that too. Now `isProvable(x)` means `x` is provable.

We're ready for K. First I'm going to write it in English and then I'm going to use the alternative names I mentioned above.

> The number `n` is in the class K if the formula at position `n` of The List is not provable.

With renamed functions and some notation from logic :

```text
n ∈ K ⇔ ~isProvable([formulaAt(n):n])
```
For example, 42 is in K if the formula at position 42 of The List is not provable in the Principia.

That's the concept K.

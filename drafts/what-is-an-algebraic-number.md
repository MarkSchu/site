publish=true
date=11/14/2019
publicid=4n442kl6dk2yq4j57
---
# What is a Real Algebraic Number?
## Notes on Georg Cantor's "On a Property of the Class of all Real Algebraic Numbers"

A Real Algebraic Number is a real number that solves an equation that looks, for example, like this:

```text
10x^3 - 7x^2 + 2x + 3 = 0
```

That is, it's an equation that's built with addition, multiplication, and exponentiation. The exponents have to be natural numbers and the numbers you multiply with have to be integers. The equation can be as long as you like; that is, it can add as many items together as you want.  

The number 2 is an algebraic number since it is a solution to the equation

```text
4x^2 + 2x - 20 = 0
```

Just swap in 12 for x and you get

```text
(4)(2^2) + (2)(2) - 20
(4)(4) + (2)(2) - 20
16 + (2)(2) - 20
16 + 4 - 20
20 - 20
0
```

To be more precise, the equation looks like this:

```text
ax^n + bx^n-1 + ... + c = 0
```

and comes with the following restrictions:

1) `a, b, ... c` are integers with no common factor
2) `a` is positive
3) `n` is a positive integer

The important thing to point out is that some equations have multiple solutions.

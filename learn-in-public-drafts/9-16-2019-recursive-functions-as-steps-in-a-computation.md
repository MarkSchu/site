Why are Recursive Functions a Model of Computation?
publish
---
Recursive Functions are a model of computation, but it can be hard to see why. Here is a perspective that brings out the computational aspect.

A recursive function is the result of combining the successor function, the identity function, and a constant function.

The successor function inputs a natural number and returns the next number.
```text
successor(x) = x'
```
The identity function inputs a natural number and returns the exact same number.
```text
identity(x) = x
```
A constant function inputs a natural number and returns some constant.
```text
constant_42(x) = 42
```
You start with these and combine them into more complex functions using composition
```text
myNewFunction(x) = someFunction(someOtherFunction(x))
```
and induction
```text
myNewFunction(0) = whatever
myNewFunction(x') = some recursive function that inputs either x, myNewFunction(x), or both
```

To me, the computational aspect comes out if you think in terms of steps along the natural number line. The concept of a step is very computational. Turing Machines take steps along a tape; the Lambda Calculus takes steps in the form of reductions; and programs written in high level programming languages are instructions for the computer; i.e. steps that the computer should take.

The successor function illustrates this perspective. Apply the successor function means taking a step right on the number line. It means taking a step to the next natural number.

Similarly, a constant function means that you take a step to a particular location.

The identity function means that you don't have to take a step. You can always just stay in the same place.

The rules for combining functions exhibit the same kind of thinking.

Composition means that you make a sequence of steps. For example, the function `goSomewhere` defined by
```text
goSomewhere(x) = constant_42(identity(successor(successor(x)))
```
is understandable as the following series of steps:
```text
start at x
go right
go right
stay put
go to 42
```

Induction means that you can define a function by thinking in terms of steps from the function's previous value. Specifically,
```text
myFunction(n') = aSeriesOfStepsFrom(n, myFunction(n))
```
means that the value of `myFunction(n')` is a series of steps from the values `n` and `myFunction(n)`

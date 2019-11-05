publish=true
date=10/23/2019
id=3vjlasc2k2knq0l4
---
# What is the Conservation of Momentum?
## Reading "The Feynman Lectures on Physics"
## Volume 1, Chapter 10, Section 2

The momentum of an object at a particular moment is equal to the object's mass and velocity at that moment. That means that you can represent the momentum of the object over time as the function `momentumAt(time) = mass * velocityAt(time)`.

With a *system of objects*, you can think about the momentum at a particular moment of the *system itself* by adding up, at that moment, all of the individual momentums of each object in the system. For example, if the system consists of objects A, B, and C, then the total momentum of the system at the 42 second mark equals `A_momentumAt(42) + B_momentumAt(42) + C_momentumAt(42)`. And that means that you can represent the total momentum of a system as a function over time. For the example system, the function looks like this:

```text
totalMomentumAt(time) =
A_momentumAt(time) +
B_momentumAt(time) +
C_momentumAt(time)
```

The Conservation of Momentum says that the total momentum of a system does not change. In other words,  `timeDerivativeOf(totalMomentumAt) = 0`. If the total momentum started at 42 units then it will always be 42 units.
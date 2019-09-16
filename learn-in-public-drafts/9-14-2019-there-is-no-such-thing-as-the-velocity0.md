There is No Such Thing as "The Velocity"
---
When you try to learn physics, one of the first concepts that you encounter is velocity, as in the velocity of a moving car or the velocity of a falling ball. Specifically, you might run into a problem like this: A car travels from Austin to New York in 22 hours. What is the velocity of the car? Then, using the data provided, you're supposed to find "the velocity" of the car.

The notion of "the velocity", however, is confusing. And it is confusing because it is ambiguous. There's no such thing as THE velocity of the car. Instead, there are multiple, specific senses of the velocity of the car.

In fact, there are four:

1. The velocity of the car over some distance i.e between location X and location Y.
2. The velocity of the car over some time; i. between moment X and moment Y.
3. The velocity of the car at moment X.
4. The velocity of the car at location X.

I'll go through each.

Suppose you drive from Austin to New York in 25 hours. The distance between Austin and New York is roughly `1,750 miles`, so that means that you travelled `1,750 miles` in `25 hours`. From these two numbers, you can derive a measure of speed -` miles per hour` - by dividing: `(1750 miles / 25 hours) = 70 miles/hour`. During the trip, however, your speed changed constantly. You hit traffic, you got on and off the highway, and you stopped for bathroom breaks. So what does `70 miles/hour` mean? The `70 miles/hour` is an average velocity. It says, "I know that you changed speed while driving from Austin to New York, but what was the average velocity?"

You can call this sense of velocity, `velocity over distance` or `velocity between locations`.

Here is how you calculate it. If you know the starting locations, then you can calculate the distance.

```text
travel time
end location
start location
distance = end location - start location
velocity over distance = distance / travel time
```

For the programmers,

```
velocityOverDistance(startLocation, endLocation, travelTime) = {
    distance = end location - start location
    return distance / travelTime
}

velocityOverDistance(0mi, 1750mi, 25hrs) = 70mph
```

The second sense is similar, but instead of the average velocity when moving between locations, the second sense has to do with the average velocity while moving between moments in time. You can ask, for example, "On our trip from Austin to New York, what was the velocity between 12:00pm and 3:00pm?"

Call this `velocity between moments`.

 Here is how you calculate it:

 ```text
end moment
start moment
location at end moment
location at start moment

travel time = end moment - start moment
distance = location at end moment - location at start moment

velocity over time = distance / travel time
```

For the programmers,

```
```

The third sense is quite different from the first two senses. Instead of finding the average velocity between two moments or between two locations, the third sense captures the velocity at a particular moment in time. This is the kind of velocity that a cop measures with a radar gun. Suppose, for instance, on the trip from Austin to New York, a cop measures your speed with a radar gun at 3 hours, 24 minutes, 32 seconds, and 4 milliseconds after the start of the trip. You can ask, "What was the velocity of the car at that particular moment?"

Call this `velocity at a moment`. (It is also sometimes called `instantaneous velocity`).

How do you calculate it? You actually use the function for `velocity over time` - velocityOverTime(startTime, endTime, startLocation, endLocation) -  but with a new perspective.

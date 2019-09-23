Describing Motion in Physics
publish
---
The world described in "[Describing Position in Physics](/learn-in-public/9-19-2019-describing-position-in-physics.html)" is interesting to look at but a little boring. Nothing about it ever changes.

On way to make the world more interesting is to have the atoms move around.

How do you describe this mathematically? Think about what movement is intuitively. Basically, an object moves when it changes position over time. At one moment it is here; and at another moment it is there; and at another moment it is over there.

In other words: every moment of time is associated with the position of the object at that moment.

<style>
    table td {
        padding: 16px;
    }
</style>
<table>
    <tr>
        <th>Time</th>
        <th>Position</th>
    </tr>
    <tr>
        <td>1</td>
        <td>(7, 2)</td>
    </tr>
    <tr>
        <td>2</td>
        <td>(8, 2.5)</td>
    </tr>
    <tr>
        <td>3</td>
        <td>(9, 3)</td>
    </tr>
    <tr>
        <td>4</td>
        <td>(10, 3.5)</td>
    </tr>
    <tr>
        <td>5</td>
        <td>(11, 4)</td>
    </tr>
</table>

And that means that mathematically we're dealing with a function that maps moments of time to positions in space.

```text
positionAt : Time -> Position
```

Using this function, you can find the position of the object at any given moment. For example, assuming that you're using seconds and meters to measure distance, `positionAt(10) = (10, 8)` means that at the `10 second` mark, the object is located at `(10 meters, 8 meters)`.

That is all to say that we can use functions of the form `Time -> Position` to describe the movement of each atom in the world mentioned above. Since each atom may move differently, each atom gets its own particular function that describes its movement.

For example, suppose that the world only contains `3` atoms: `A`, `B`, and `C`. Let's give each atom a position function that describes its movement over time.

```text
atom A      positionA(t) = (t/2, 10)
atom B      positionB(t) = (t/8, t^2/100)
atom C      positionC(t) = (sin(t), cos(t))
```

The first function, `positionA`, describes the atom as moving to the right over time while maintaining its height at `10`.

The second function, `positionB`, describes the atom as moving to the right slowly and moving up with increasing speed.

The third function, `positionC` describes the atom as moving in a circle.

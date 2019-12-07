publish=true
date=11/5/2019
publicid=3vjlaxssk2o4ervd
---
# What Does Godel Mean by "Definable"?
## A Confusion
## Reading "On Formally Undecidable Propositions of Principia Mathematica and Related Systems" by Kurt Godel, Part 4


Godel, in the intro to the theorem, uses the phrase, "definable in the system," without fully explaining what he means.

I imagine a fuller explanation is coming, but I think he means something like this.

Outside of the Principia, in the metalanguage, you can think about arithmetic properties and propositions like "x equals 2" and "1 + 4 equals 5". And importantly, you can think about whether or not they're True. "1 + 4 equals 5" is true and "4 equals 2" is false. There's nothing tricky going on here; it's just the way we intuitively talk about numbers every day.

By "definable", I think Godel means something like this.

A property in the metalanguage is definable in the system when there is a formula P in the Principia such that the property is True of x just when Px has a proof.

A proposition in the metalanguage is definable when there is a formula P in the Principia such that the proposition is true just when P has a proof.

For example, the property "x equals 0" in the metalanguage is definable by the formula x = 0 in the Principia since x equals 0 is True precisely when x = 0 has a proof.

A picture.

<img src="/images/definable.png" />
publish=true
date=10/6/2019
publicid=3vjlaxssk2o4ervy
---
# What is the Problem of Thue?

The Problem of Thue is a general computational decision problem that is unsolvable. A general computational decision problem is a collection of specific problems of the form "Is X such-and-such?" where X is some type of object. For example, "Is X Prime?" is a general computational problem where X is a number. It includes specific problems like "Is 7 Prime?", "Is 101 Prime?", and "Is 1042 Prime?". Some problems, like the Problem of Thue, involve multiple kinds of object and so look like this: "Are X, Y, etc. such-and-such?".

A general computational decision problem is solved if there is an algorithm that can solve every specific problem in the collection. For example, "Is X Prime?" has a solution because there is an algorithm - call it isPrime - that inputs numbers and outputs Yes or No depending upon whether or not the X is actually a prime number. For example, isPrime(1) = No; isPrime(2) = Yes; isPrime(3) = Yes; and isPrime(4) = No.

The Problem of Thue was proposed in 1914 by Axel Thue and proved unsolvable in 1947 by Emil Post. The problem is important because it is an example of an unsolvable problem, and unsolvable problems are important because they break Hilbert's Program. Hilbert's Program was a research program inaugurated in 1918 by the mathematician David Hilbert. One of the most important and ambitious goals of the program was to create an algorithm that can answer every mathematical question. If you input a question to the algorithm, it was supposed to output the correct answer. The Problem of Thue is a question that no algorithm can answer. Therefore, Hilbert's Program fails.

That's the setup, but what's the actual problem? That takes a little bit of setup too.

The problems starts with two things.

1) An finite alphabet of characters like !, $, and % that combine into strings like !$%!$, !%%, and !$%.

2) A random, finite list of random pairs of strings created from the alphabet like (!$!, !$), ($$$, %%), and (!2, %%%)

There isn't anything special about the alphabet or the pairs of strings. There are no restrictions on what strings you can make and there's no pattern on what gets paired with what. The only important thing is that the alphabet is finite, the strings are finite, and the list of pairs is finite.   

To make things a little easier, I'm going to refer to the list of pairs like this: (A1, B1), (A2, B2), ... (An, Bn). Ai refers to a random first member and Bi refers to the string that Ai is paired with. I hope that that isn't too confusing.

Now for a few definitions to express the problem.

First, two strings can be similar. Consider the strings $A2! and $B2!. If I replace A2 with B2 in $A2!, I end up with $B2!. Therefore, $A2! and $B2! are similar. That is, if I start with a string P that includes Ai, replace Ai with its partner Bi to create the string Q, then P and Q are similar. One more time,

P and Q are similar when:
There is a string Ai in P such that when Ai is replaced by Bi in P, the result is Q

Note that two strings are only similar with respect to a particular list of pairs. There is no absolute sense of similar strings; strings are only similar with respect to a given list of pairs.

Second, two strings can be equivalent. A string P is equivalent to a string Q if there's a list of strings S1, S2, ... Sn - i.e. string 1, string 2, all the way to string n - such that P is similar to S1, S1 is similar to S2, S2 is similar to S3, etc., and Sn is similar to Q. In other words, P and Q are equivalent if there is a chain of similar strings between them. For example, take !$%!%! and %%%!%%!% and the list of pairs (!$, $$), ($$, %%), and (%!, %!%). Here is a chain of similar strings between them (I bolded the string that gets replaced):

__!$__%!%!		replace !$ with $$<br>
$$__%!__%!		replace %! with %!%<br>
$$%!%__%!__		replace %! with %!%<br>
__$$__%!%%!%  	replace $$ with %%<br>
%%%!%%!%

Therefore, !$%!%! and %%%!%%!% are equivalent.

With the definition of equivalent in hand, we can now state the Problem of Thue.

Are strings X and Y equivalent?

That's it. That's the Problem of Thue. If you like, you can write it in terms of similarity; it might be easier to understand:

For strings X and Y, are there strings S1, S2, ... Sn such that every string in the list X, S1, S2, ... Sn, Y is similar to the string that comes before it.

Here is an example of the Problem of Thue.

The problem starts out with two things: an alphabet and a few pairs of strings. For the example, but for no particular reason, I'm going to use the alphabet E, F, G. This alphabet combines into strings like EFFG, GFE, EEFFFGGG, GGFFE, and GFEGFE. Next, and again for no particular reason, I'm going to use the pairs (EE, FG), (F, EG), and (FFF, GEG).

The Problem of Thue is the problem of writing an algorithm that can answer every specific instance of the question: Are strings X and Y equivalent? Therefore, the algorithm should be able to input EEFFGE and GGEGEE and decide whether or not there is a series of similar strings that starts with EEFFGE and ends with GGEGEE.

As it happens, these strings are equivalent; there is, indeed, such as series of similar strings based on (EE, FG), (F, EG), and (FFF, GEG). Here's one (I've bolded the strings that get replaced):

<b>EE</b>EGFFF		replace EE with FG<br>
FGEG<b>FFF</b>		replace FFF with GEG<br>
<b>F</b>GEGGEG		replace F with EG<br>
EGGEGGEG		<br>

If you could solve the Problem of Thue, then the algorithm could figure this out. Somehow, it would know that such a series of strings existed. If you input EEEGFFF and EGEGGEG, it would output Yes. And if you input any other two strings, it would output Yes or No correctly.

That's the Problem of Thue.
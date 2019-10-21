publicId=Nq93uMyW5
publish=true
date=10/15/2019
---
# What Does Post Mean by Canonical System?
## Reading "The Undecidable"
## Emil Post, "Recursive Unsolvability of a Problem of Thue"

Post thinks that the Problem of Thue is best understood in terms of what he calls Canonical Systems. He explains what canonical systems are in a paper he references called Formal Reductions of the General Combinatorial Decision Problem.

A System is just a set of strings created from a set of letters. The letters A, B, and C along with the strings ABC, CBB, and AAA, form a system.

A Canonical System is a system that is slightly more complicated; it consists of
1) A finite set of "primitive assertions"
2) A finite set of production rules
3) The set of all strings that you can create by applying the production rules to the primitive assertions

The set of primitive assertions is the set of strings that are automatically included in the system. There isn't anything special about them other than the fact that they're chosen to be the primitive assertions. Any string can be a primitive assertion if you want it to be. They serve the same purpose as axioms in a deductive system; they're what you start with.

Production rules input strings and output strings. They say something like, "If you start with a string that looks like X, then you can create a string that looks like Y." You use production rules to create strings from the primitive assertions that you start with.

For example, consider a system with one primitive assertion AB and two production rules (think of P and Q as arbitrary and possibly empty strings).

1) PAQ produces PCBQ
2) PBBQ produces PCQ

You use the production rules on AB like this. Start with AB. Now apply 1 by replacing A with CB. That produces CBB. Next, apply 2 by replacing BB with C. That produces CC. That means that you can create CC from AB.

All the strings that you generate by applying the rules to the primitive assertions are included in a canonical system. Since you can generate CC from AB, CC is in the canonical system described above.

You can think about a canonical system as a collection of strings created from the primitive assertions using the production rules in pretty much the same way that theorems are deduced from axioms using rules of deduction.

That's what a canonical system is.

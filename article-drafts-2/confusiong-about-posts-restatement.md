publicId=N0xdn2zmC
id=5dba3d16f6db6d7638e0c63d
publish=true
date=10/18/2019
---
# Confusion About Post's Restatement
## Reading "Recursive Unsolvability of a Problem of Thue" by Emil Post in "The Undecidable" Anthology

Post restates the Problem of Thue using Canonical Systems like this:

"A and B are equivalent if B is an assertion in the canonical system with primitive expression A and operations [such-and-such]. Thue's general problem thus becomes the decision problem of the class of all canonical systems of this 'Thue type'".

Thue's general problem is the problem "Are strings X and Y equivalent?"

The decision problem for the class of all canonical systems of type Thue, however, is the problem of deciding whether or not an arbitrary canonical system is in the class of all canonical systems of the Thue type. That is, it is the problem, "Is system S a canonical system of the type Thue?"

Despite what Post says, these seem like totally different problems.

For one, the algorithms that solve the two problems have different type signatures. An algorithm that solves "Are strings X and Y equivalent?" has the type signature `String * String -> Yes/No`. An algorithm that solves "Is S a canonical system of type Thue?" has the type signature `System -> Yes/No`

Second, the problem "Is string Y a member of the canonical system with primitive assertion X and such-and-such operations?" - mentioned by Post above - *does* seem like a problem that is equivalent to the problem of Thue. An algorithm that inputs a string X and a string Y and decides if Y is a member of the canonical system based on X *would only decide correctly* when X and Y are equivalent.

So did Post misstate something or is the sentence just confusing?

It's unclear. Hopefully the rest of the paper will clarify.

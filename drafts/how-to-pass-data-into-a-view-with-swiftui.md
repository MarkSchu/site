publish=true
date=11/11/2019
publicid=6gyh4ik3opz73e
tags=code, swiftui
---

# How to Pass Data into a View in SwiftUI
## SwiftUI for Beginners

In SwiftUI, `Views` are defined with references to the data that they're passed.

For example, `FunView` is a view that is passed an argument called `foo` that it displays as text.

```
struct FunView: View {
    var foo: String
    var body: some View {
        Text(foo)
    }
}
```

The view is instantiated with data via a call like this:

```
FunView(foo: "woohoo")
```

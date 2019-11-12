date=11/11/2019
publish=true
publicid=4n442kd3zk2urospq
---
# A Tiny Solution to the Frontend State Problem
## Thoughts on Code

One of the problems that web frameworks like React try to
solve is the problem of updating the DOM on changes of state.

Here's an example of a solution that I use. It is very React like,
but still feels like you're writing VanillaJS.

```javascript
const myComponent = () => {

    const state = new Observable({
        foo: 1
    });

    const handleClick = (e) => {
        state.set({foo: state.data.foo + 1});
    }

    const handleFoo = (el, data) => {
        el.textContent = data.foo;
    }

    return (
        element('div', {className: 'foo'},
            element('button', {
                onclick: handleClick,
                textContent: 'Add'
            }),
            element('span', {
                innerContent: state.data.foo
                observe: state,
                whenfoo: handleFoo
            })
        )
    )
}

document.body.appendChild(myComponent());
```

`myComponent` is a function that returns a `div`, the one with class name `foo`.

`Observable` is an implementation of the [publish-subscribe pattern](Publish–subscribe pattern). It stores data as keys on an object that's accessible via `state.data`javascript and set by `state.set`javascript. It also exposes a method used to subscribe to changes like this:

```javascript
state.on('foo', (data) => {
    // something called state.set({foo})
    // do something with data.foo
});
```

`element` is a function that creates DOM elements. In terms of programming patterns, it's a factory. The first argument describes what kind of element to make. The second argument describes the attributes of the element. And all subsequent
arguments describe the children of the element. The first use of `element`
above creates a `div` with class name `foo` and with a `button` and `span` as children.

The element listens for changes in state via the `observe` and `whenfoo` attributes. When a change in `foo` occurs, `el` refers to the span.

I like this solution for a few different reasons. First, it feels like you're coding with VanillaJS because the DOM elements aren't wrapped by a framework specific class like React's `Component`. Second, it's small. The implementation of the solution is barely a few a hundred lines of code and the API is easy to get familiar with. Third, DOM elements treat state changes like they treat user events and that makes it easy to reason about.

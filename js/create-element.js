const createElement = (tag, attrs, ...children) => {
    let el = document.createElement(tag);
    for (attr in attrs) {
        el[attr] = attrs[attr]; 
    }
    children.forEach(child => {
        el.appendChild(child);
    });
    return el;
}

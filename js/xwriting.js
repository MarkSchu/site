const createTag = (tag) => {
    return (
        createElement('span', {
            className: 'tag',
            textContent: tag.name,
            onclick: onclick,
            name: tag
        })
    )
}


const tags = {
    'swiftui':{name: 'SwiftUI'},
    'physics': {name: 'Physics'}
}

// sort articles
blogArticles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});

// show tags
for (let tag in tags) {
    for (var tag in tags) {
        let tagContainer = document.querySelector('#tags');
        tagContainer.appendChild(createTag(tag));
    }
}

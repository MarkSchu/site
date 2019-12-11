
const tags = {
    'swiftui':{name: 'SwiftUI'},
    'physics': {name: 'Physics'}
}

const selectedTags = new Set();

const sortArticles = () => {
    blogArticles.sort((a, b) => { return new Date(a.date) - new Date(b.date); });
}

const addArticle = (article) => {

    let list = document.querySelector('#list');
    let articleEl = document.createElement('p');

    // title
    let title = document.createElement('div');
    let anchor = document.createElement('a');
    // anchor.style.fontWeight = 'bold';
    anchor.textContent = article.title;
    anchor.href = article.url;
    title.appendChild(anchor);
    articleEl.appendChild(anchor);

    // subheadings
    article.subheadings.forEach((subheading) => {
        let subheadingEl = document.createElement('div');
        subheadingEl.textContent = subheading;
        articleEl.appendChild(subheadingEl);
    });

    // summary
    if (article.summary) {
        let summaryEl = document.createElement('div');
        summaryEl.textContent = article.summary;
        articleEl.appendChild(summaryEl);
    }

    // date
    let date = document.createElement('div');
    date.textContent = article.date;
    articleEl.appendChild(date);

    // article
    list.appendChild(articleEl);
}

const displayArticles = () => {
    document.querySelector('#list').innerHTML = '';
    if (selectedTags.size === 0) {
        blogArticles.forEach(addArticle);
    } else {
        blogArticles.forEach((article) => {

            if (!article.tags)
                return;

            article.tags.forEach((tag) => {
                if (selectedTags.has(tag)) {
                    addArticle(article);
                }
            });
        });
    }
}

const addTag = (tag, tagData) => {
    let tagContainer = document.querySelector('#tags');
    let tagEl = document.createElement('span');
    tagEl.className = 'tag';
    tagEl.textContent = tagData.name;
    tagEl.name = tag;

    tagEl.addEventListener('click', (e) => {
        if (selectedTags.has(tag)) {
            tagEl.classList.remove('selected');
            selectedTags.delete(tag);
        } else {
            tagEl.classList.add('selected');
            selectedTags.add(tag);
        }
        displayArticles();
    });

    tagContainer.appendChild(tagEl);
}

const displayTags = () => {
    for (var tag in tags) {
        addTag(tag, tags[tag]);
    }
}

// INIT
sortArticles();
displayArticles();
displayTags();

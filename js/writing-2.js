const getDate = (articleDate) => {
    var date = new Date(articleDate);
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    return `${m}/${d}/${yyyy}`;
}


const createArticle = (article) => {
    return (
        createElement('p', {},
            createElement('a', {
                textContent: article.title,
                href: article.url
            }),
            createElement('div', {},

            )
            createElement('div', {
                textContent: getDate(article.date)
            })
        )
    )
}

// tags
const tags = {
    'swiftui':{name: 'SwiftUI'},
    'physics': {name: 'Physics'}
}

// sort articles
blogArticles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});

// show artciles
blogArticles.forEach((article) => {
    document.querySelector('#articles').appendChild(
        createArticle(article)
    )
});

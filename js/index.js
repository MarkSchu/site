const addBlogArticle = (i) => {
    let articlesDiv = document.querySelector('#blog-articles');
    let articleEl = (
        createElement('p', {},
            // createElement('span', {textContent: ' * '}),
            createElement('a', {
                textContent: blogArticles[i].title,
                href: '/' + blogArticles[i].url
            }),
            createElement('br', {}),
            createElement('span', {
                textContent: i === 0 ? ' 💥 New' : ' ⚡ Recent'
            })
        )
    );
    articlesDiv.appendChild(articleEl);
}

const addQmFromZeroArticle = (i) => {
    let articlesDiv = document.querySelector('#qm-from-zero-articles');
    let articleEl = (
        createElement('p', {},
            // createElement('span', {textContent: ' * '}),
            createElement('a', {
                textContent: qmFromZeroArticles[i].title,
                href: '/quantum-mechanics-from-zero/' + qmFromZeroArticles[i].url
            }),
            createElement('br', {}),
            createElement('span', {
                textContent: i === 0 ? ' 💥 New' : ' ⚡ Recent'
            })
        )
    );
    articlesDiv.appendChild(articleEl);
}

// sort articles
blogArticles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});

// sort articles
qmFromZeroArticles.sort((a, b) => {
    return new Date(b.position) - new Date(a.position);
});

// Add three latest blog articles
for (let i=0; i<1; i++) {
    addBlogArticle(i);
    addQmFromZeroArticle(i);
}

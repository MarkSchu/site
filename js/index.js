articles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});

// Show latest blog article
let latest = blogArticles[0];
let link = document.querySelector('#latest-blog-link');
link.href = latest.url;
link.textContent = latest.title;

// Show latest qm from zero article
let qmlatest = articles[0];
let qmlink = document.querySelector('#latest-qm-link');
qmlink.href = qmlatest.url;
qmlink.textContent = qmlatest.title;

const buildHTML = () => {
    let articles = [];
    let drafts = fs.readdirSync('article-drafts');

    drafts.forEach(title => {
        let filepath = `article-drafts/${title}`;
        let file = fs.readFileSync(filepath, 'utf8');
        let path = `articles/${title}`.replace('.md', '.html');
        let [metadata, markdown] = file.split('---');
        let data = metadataToObj(metadata);
        if (!data.publicid) {
            data.publicid =  uniqid();
            let metadata = metadataToStr(data);
            fs.writeFileSync(filepath, metadata + '---\n' + markdown)
        }
        data.title = getTitle(markdown);
        data.subheadings = getSubheadings(markdown);
        data.url = path;
        data.helped = 0;
        let articleHtml = markdownIt.render(markdown);
        let pageHtml = addBaseHtml(articleHtml, data);
        fs.writeFileSync(path, pageHtml);
        articles.push(data);
    });
    let articlesJS = `const articles = ${JSON.stringify(articles)}`;
    fs.writeFileSync('data/articles.js', articlesJS);
}

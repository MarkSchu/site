const wrapInBaseHTML = (html, data) => {
    return (
        `<!DOCTYPE html>
        <html>
        <head>
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148614000-1"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-148614000-1');
            </script>
            <meta charset="utf-8">
            <title>Mark Schumaker</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="../css/shared.css">
            <link rel="stylesheet" href="../css/article.css">
            <link href="../prismjs/themes/prism-okaidia.css" rel="stylesheet" />
            <script src="../prismjs/prism.js"></script>
        </head>
        <body>
            <div class="container article">
                <div class="content">
                <header>
                    <a href="/">🌮</a>
                    <a href="/about.html">👋</a>
                    <a href="/writing.html">📝</a>
                    <a href="/quantum-mechanics-from-zero">⚛️</a>
                    <a href="/code.html">💾</a>
                </header>
                    ${html}
                <div>
                <div>
                    <footer>
                        <span>By Mark with ☕</span>
                    </footer>
                </div>
            </div>
            <script>
                let article = ${JSON.stringify(data)};
            </script>
        </body>
        </html>`
    );
}

module.exports = {wrapInBaseHTML};

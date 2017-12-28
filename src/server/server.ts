let express = require('express');
let path = require('path');
let app = express();

const port = 3000;

console.log('Server starting...');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req: any, res: any) => {
    let HTML = renderHTML();
    res.status(200).type('.html').send(HTML);
});

app.listen(port, (err: any) => {
    if (err) {
        console.log('Error while listening on port: ' + err);
    }

    console.log('Server listening on port: ' + port +  '!');
});

function renderHTML() {
    return `
        <html>
        <head>
            <meta charset="utf-8">
            <title>React App</title>
            <link href="/styles.css" rel="stylesheet" type="text/css">
        </head>

        <body>
            <div id="root">Rendered from Server</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `;
}

const app = require('./src/config/custom-express');

app.listen(3000, () => {
    console.log('*********************************');
    console.log('Servidor escutando na porta 3000!');
    console.log('*********************************');

});


/*
const http = require('http');

const porta = '3000';
const ip = 'localhost';


const server = http.createServer((req, resp) => {

    let html = '';
    if (req.url == '/') {
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body>
            </html>
    `;
    } else if (req.url == '/livros') {
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Lista de Livros </h1>
                </body>
            </html>
    `;
    }
    resp.end(html);
});
server.listen(porta, ip);
*/
const http = require('http');

const porta = '3000';
const ip = 'localhost';


const server = http.createServer((req, resp) =>{
    resp.end('<h1>Olá Mundo Node com Servidor!</h1>');
});
server.listen(porta, ip);
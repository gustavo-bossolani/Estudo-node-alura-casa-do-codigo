const express = require('express');
const rotas = require('../app/rotas/rotas.js');
require('marko/node-require').install();
require('marko/express');
const bodyParser = require('body-parser');

const app = express();

//definindo um middleware para tratamento de objetos complexos no body
app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = app;

rotas(app);

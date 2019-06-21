const express = require('express');
const rotas = require('../app/rotas/rotas.js');
require('marko/node-require').install();
require('marko/express');

const app = express();
module.exports = app;

rotas(app);

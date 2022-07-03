const express = require('express');
require('dotenv').config();

const routes = require('./routes');

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => console.log('Listening at', PORT));

const express = require('express');
const registerRoute = require('../routes/registerRoute');

const app = express();

app.use(express.json());

app.use('/register', registerRoute);

module.exports = app;

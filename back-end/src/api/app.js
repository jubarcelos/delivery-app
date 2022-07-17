const express = require('express');
const registerRoute = require('../routes/registerRoute');
const loginRoute = require('../routes/loginRoute');

const app = express();

app.use(express.json());

app.use('/register', registerRoute);
app.use('/login', loginRoute);

module.exports = app;

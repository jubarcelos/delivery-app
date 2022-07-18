const express = require('express');
const registerRoute = require('../routes/registerRoute');
const loginRoute = require('../routes/loginRoute');
const customerRoute = require('../routes/customerRoute');

const app = express();

app.use(express.json());

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/customer', customerRoute);

module.exports = app;

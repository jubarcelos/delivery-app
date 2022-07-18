const express = require('express');
const registerRoute = require('../routes/registerRoute');
const customerRoute = require('../routes/customerRoute');

const app = express();

app.use(express.json());

app.use('/register', registerRoute);
app.use('/customer', customerRoute);

module.exports = app;

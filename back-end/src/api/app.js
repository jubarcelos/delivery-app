const express = require('express');
const cors = require('cors');
const registerRoute = require('../routes/registerRoute');
const loginRoute = require('../routes/loginRoute');
const customerRoute = require('../routes/customerRoute');

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(cors());

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/customer', customerRoute);

module.exports = app;

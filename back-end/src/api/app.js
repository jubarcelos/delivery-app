const express = require('express');
const cors = require('cors');
const registerRoute = require('../routes/registerRoute');
const loginRoute = require('../routes/loginRoute');
const customerRoute = require('../routes/customerRoute');
const adminRoute = require('../routes/adminRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/customer', customerRoute);
app.use('/admin', adminRoute);

module.exports = app;

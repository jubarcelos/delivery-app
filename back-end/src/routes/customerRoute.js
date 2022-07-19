const express = require('express');
const customerController = require('../controllers/customerController');

const routes = express.Router();

routes.get('/products', customerController.getAll);

module.exports = routes;
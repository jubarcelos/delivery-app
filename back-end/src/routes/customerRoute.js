const express = require('express');
const customerController = require('../controllers/customerController');

const routes = express.Router();

routes.get('/products', customerController.getAll);
routes.get('/products/:id', customerController.getById);

module.exports = routes;
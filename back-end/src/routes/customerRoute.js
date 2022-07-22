const express = require('express');
const customerController = require('../controllers/customerController');
const checkAuth = require('../middlewares/checkAuth');

const routes = express.Router();

routes.get('/products', customerController.getAll);
routes.get('/products/:id', customerController.getById);
routes.get('/orders', customerController.getAllOrders);
routes.get('/orders/:id', customerController.getByIdOrders);
routes.post('/orders', checkAuth.jwtValidator, customerController.postOrder);

module.exports = routes;
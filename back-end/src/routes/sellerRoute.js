const express = require('express');
const sellerController = require('../controllers/sellerController');
const checkAuth = require('../middlewares/checkAuth');

const routes = express.Router();

routes.get('/', sellerController.getAll);
routes.get('/orders', checkAuth.jwtValidator, sellerController.getAllSellersOrders);
routes.patch('/orders/:id', checkAuth.jwtValidator, sellerController.changeOrderStatus);

module.exports = routes;
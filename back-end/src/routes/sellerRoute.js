const express = require('express');
const sellerController = require('../controllers/sellerController');

const routes = express.Router();

routes.get('/', sellerController.getAll);

module.exports = routes;
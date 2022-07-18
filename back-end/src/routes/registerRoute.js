const express = require('express');
const registerController = require('../controllers/registerController');

const routes = express.Router();

routes.post('/', registerController.registerUser);

module.exports = routes;
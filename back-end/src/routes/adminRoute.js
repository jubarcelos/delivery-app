const express = require('express');
const adminController = require('../controllers/adminController');
const checkAuth = require('../middlewares/checkAuth');

const routes = express.Router();

routes.post('/manage', checkAuth.jwtValidator, adminController.registerUser);

module.exports = routes;
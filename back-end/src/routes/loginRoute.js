const express = require('express');
const loginController = require('../controllers/loginController');
const { validateLogin } = require('../middlewares/loginMiddleware');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController.login);

module.exports = loginRouter;
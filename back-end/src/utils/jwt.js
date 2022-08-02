require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

const jwtOptions = { algorithm: 'HS256' };

const createToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtOptions);

const checkToken = (token) => jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });

module.exports = {
  createToken,
  checkToken,
};
require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtOptions = { algorithm: 'HS256' };

const createToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtOptions);

const checkToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
  } catch (err) {
    return false;
  }
};

module.exports = {
  createToken,
  checkToken,
};
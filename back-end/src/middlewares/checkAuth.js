const jwt = require('../utils/jwt');

const jwtValidator = (req, res, next) => {
    const token = req.headers;
    try {
        if (typeof token.authorization === 'string') {
          jwt.checkToken(token.authorization);
        }
      } catch (err) {
        console.log('JWT', err);
        return res.status(401).json({ message: err.message });
      }
    next();
};

module.exports = {
  jwtValidator,
};

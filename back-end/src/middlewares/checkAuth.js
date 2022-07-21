const jwt = require('../utils/jwt');

const jwtValidator = (req, res, next) => {
    const token = req.headers;
    if (typeof token.authorization === 'string') {
      try {
        jwt.checkToken(token.authorization);
      } catch (err) {
        return res.status(401).json({ message: err.message });
      }
    }
    next();
};

module.exports = {
  jwtValidator,
};

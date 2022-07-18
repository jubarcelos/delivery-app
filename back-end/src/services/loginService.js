const { user } = require('../database/models');
const { createToken } = require('../utils/jwt');

const login = async ({ email, password }) => {
  const userFound = await user.findOne({ where: { email, password } });

  if (!userFound) {
    return false;
  }

  const { password: passw, ...userWithoutPass } = userFound.dataValues;
  const payload = userWithoutPass;
  const token = createToken(userWithoutPass);
  return { user: payload, token };
};

module.exports = { login };

const md5 = require('md5');
const { user } = require('../database/models');
const { createToken } = require('../utils/jwt');

const login = async ({ email, password }) => {
  const userFound = await user.findOne({ where: { email } });
  const passwordHash = md5(password);

  if (!userFound || passwordHash !== userFound.dataValues.password) {
    return false;
  }

  const { password: passw, ...userWithoutPass } = userFound.dataValues;
  const payload = userWithoutPass;
  const token = createToken(userWithoutPass);
  const { id, name, role } = payload;
  return { id, name, email, role, token };
};

module.exports = { login };

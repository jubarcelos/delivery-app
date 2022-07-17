const { user } = require('../database/models');
const { createToken } = require('../utils/jwt');

const login = async ({ email, password }) => {
  const userFound = await user.findOne({ where: { email, password }});

  if (!userFound) {
    return {
      err: 'user not found',
    };
  }

  const { password: passw, ...userWithoutPassword } = userFound.dataValues;
  const token = createToken(userWithoutPassword);
  return { token };
};

module.exports = { login };
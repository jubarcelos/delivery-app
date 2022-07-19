const { user } = require('../database/models');
const { createToken } = require('../utils/jwt');

const registerUser = async ({ email, password, name }) => {
  const userByEmail = await user.findOne({ where: { email } });
  if (userByEmail !== null) {
    return false;
  }
  const createdUser = await user.create({ name, email, password, role: 'customer' });
  const payload = {
    id: createdUser.dataValues.id,
    name: createdUser.dataValues.name,
    email: createdUser.dataValues.email,
    role: createdUser.dataValues.role,
  };
  const token = createToken(payload);
  return { user: payload, token };
};

module.exports = {
  registerUser,
};
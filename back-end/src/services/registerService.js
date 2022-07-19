const md5 = require('md5');

const { user } = require('../database/models');
const { createToken } = require('../utils/jwt');

const registerUser = async ({ email, password, name }) => {
  const userByEmail = await user.findOne({ where: { email } });
  const passwordHash = md5(password);
  if (userByEmail !== null) return { status: 409, message: 'Invalid email or password' };
  const createdUser = await user.create({ name, email, password: passwordHash, role: 'customer' });
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

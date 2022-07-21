const md5 = require('md5');

const { user } = require('../database/models');

const registerUser = async ({ email, password, name, role }) => {
  const userByEmail = await user.findOne({ where: { email } });
  if (userByEmail !== null) return { status: 409, message: 'Invalid email or password' };
  const passwordHash = md5(password);
  const createdUser = await user.create({ name, email, password: passwordHash, role });
  const payload = {
    id: createdUser.dataValues.id,
    name: createdUser.dataValues.name,
    email: createdUser.dataValues.email,
    role: createdUser.dataValues.role,
  };
  return payload;
};

module.exports = {
  registerUser,
};
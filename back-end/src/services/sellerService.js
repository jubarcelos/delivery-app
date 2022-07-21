const { user } = require('../database/models');

const getAll = async () => {
  const allSeller = await user.findAll({ 
    where: { role: 'seller' },
    attributes: { exclude: ['password'] },
  });
  if (!allSeller) return { message: 'seller not found' };
  return allSeller;
};

module.exports = {
  getAll,
};

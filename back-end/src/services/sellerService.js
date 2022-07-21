const { user, sale } = require('../database/models');

const getAll = async () => {
  const allSeller = await user.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password'] },
  });
  if (!allSeller) return { message: 'seller not found' };
  return allSeller;
};

const changeOrderStatus = async ({ saleStatus }, { id }) => {
  await sale.update({ status: saleStatus }, { where: { id } });
  return { message: 'Sale status updated' };
};

module.exports = {
  getAll,
  changeOrderStatus
};

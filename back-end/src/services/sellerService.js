const { user, sale } = require('../database/models');

const getAll = async () => {
  const allSeller = await user.findAll({ 
    where: { role: 'seller' },
    attributes: [['id', 'sellerId'], ['name', 'sellerName']],
  });
  if (!allSeller) return { message: 'seller not found' };
  return allSeller;
};

const changeOrderStatus = async ({ saleStatus }, { id }) => {
  await sale.update({ status: saleStatus }, { where: { id } });
  return { message: 'Sale status updated' };
};

const getAllSellersOrders = async () => {
  const allSellersOrders = await sale.findAll();
  return allSellersOrders;  
};

module.exports = {
  getAll,
  changeOrderStatus,
  getAllSellersOrders,
};

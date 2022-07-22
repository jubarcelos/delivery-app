const sellerService = require('../services/sellerService');

const getAll = async (req, res) => {
  try {
    const allSales = await sellerService.getAll();
    return res.status(200).json(allSales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const changeOrderStatus = async (req, res) => {
  try {
    const bodyObj = req.body;
    const paramsObj = req.params;
    const status = await sellerService.changeOrderStatus(bodyObj, paramsObj);
    return res.status(200).json(status);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllSellersOrders = async (req, res) => {
  try {
    const allSellersOrders = await sellerService.getAllSellersOrders();
    return res.status(200).json(allSellersOrders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  changeOrderStatus,
  getAllSellersOrders,
};
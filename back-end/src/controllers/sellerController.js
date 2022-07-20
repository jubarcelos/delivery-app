const sellerService = require('../services/sellerService');

const getAll = async (req, res) => {
  try {
    const allSales = await sellerService.getAll();
    return res.status(200).json(allSales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
};
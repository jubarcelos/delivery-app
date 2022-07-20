const customerService = require('../services/customerService');

const getAll = async (req, res) => {
  try {
    const allProducts = await customerService.getAll();
    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await customerService.getById(id);

    if (!product) return res.status(404).json({ message: 'Page not Found' });
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const postOrder = async (req, res) => {
  try {
    const bodyObj = req.body;
    await customerService.postOrder(bodyObj);
    return res.status(201).json();
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  postOrder,
};

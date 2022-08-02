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

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await customerService.getAllOrders();
    return res.status(200).json(allOrders);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const getByIdOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await customerService.getByIdOrders(id);

    if (!order) return res.status(404).json({ message: 'Page not Found' });
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const postOrder = async (req, res) => {
  try {
    const bodyObj = req.body;
    console.log(req.body);
    const newOrder = await customerService.postOrder(bodyObj);
    return res.status(201).json(newOrder);
  } catch (err) {
    console.log('ERR CONTR', err);
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  postOrder,
  getAllOrders,
  getByIdOrders,
};

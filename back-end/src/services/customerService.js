const { product } = require('../database/models');

const getAll = async () => {
 const allProducts = await product.findAll();
 return allProducts;
};

module.exports = {
  getAll,
};
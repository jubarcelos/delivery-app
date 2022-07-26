const { product, sale, salesProduct, user } = require('../database/models');

const getAll = async () => {
 const allProducts = await product.findAll();
 return allProducts;
};

const getById = async (id) => {
  const productById = await product.findByPk(id);
  if (!productById) return null;
  return productById;
};

const getAllOrders = async () => {
  const allOrders = await sale.findAll();
  return allOrders;
};

const getByIdOrders = async (id) => {
  const findSaller = await user.findByPk(id);
  const findOrder = await sale.findByPk(
    id,
    { include: [{ 
        model: product, 
        as: 'products',
        required: true, 
        attributes: { exclude: ['url_image'] },
        through: { attributes: ['quantity'] },
      },
    ] }, 
  );

  const { name } = findSaller.dataValues;

  return { nameSeller: name, sale: findOrder };
};

const postOrder = async (payload) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = payload;
  const createdSale = await sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: Date.now(),
  });

  console.log('serv', payload);

  const saleId = createdSale.dataValues.id;
  await Promise.all(products.map(async (carProduct) => salesProduct
    .create({ saleId, productId: carProduct.id, quantity: carProduct.qty })));
  return { orderId: saleId };
};

module.exports = {
  getAll,
  postOrder,
  getById,
  getAllOrders,
  getByIdOrders,
};

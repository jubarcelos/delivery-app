module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(9,2),
    url_image: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
  });

  return Product;
};

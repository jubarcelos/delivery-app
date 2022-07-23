module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, {
      foreignKey: 'userId', as: 'user'
    });
    Sale.belongsTo(models.user, {
      foreignKey: 'sellerId', as: 'seller'
    });
  }

  return Sale;
};

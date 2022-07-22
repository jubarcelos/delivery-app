module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.sale, {
      foreignKey: 'userId', as: 'user',
    });
    User.hasMany(models.sale, {
      foreignKey: 'sellerId', as: 'seller',
    });
  };

  return User;
};

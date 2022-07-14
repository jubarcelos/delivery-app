'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {      
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};
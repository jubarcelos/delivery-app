import React from 'react';
import PropTypes from 'prop-types';

function TableDetails({ products, dataTestidPrefix }) {
  const renderProduct = (Product, index) => (
    <tr key={ Product.id }>
      <td
        data-testid={ `${dataTestidPrefix}__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `${dataTestidPrefix}__element-order-table-name-${index}` }
      >
        { Product.name }
      </td>
      <td
        data-testid={ `${dataTestidPrefix}__element-order-table-quantity-${index}` }
      >
        { Product.qty }
      </td>
      <td
        data-testid={ `${dataTestidPrefix}__element-order-table-unit-price-${index}` }
      >
        { Number(Product.price).toFixed(2).replace('.', ',') }
      </td
      >
      <td
        data-testid={ `${dataTestidPrefix}__element-order-table-sub-total-${index}` }
      >
        { Number(Product.sumItem).toFixed(2).replace('.', ',') }
      </td>
    </tr>
  );

  const totalValue = () => {
    const value = 0;
    const soma = products.reduce(
      (acumulador, valorAtual) => acumulador + Number(valorAtual.sumItem), value,
    );
    return soma.toFixed(2).replace('.', ',');
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product, index) => renderProduct(product, index)) }
        </tbody>
      </table>
      <div
        data-testid={ `${dataTestidPrefix}__element-order-total-price` }
      >
        Total:
        { totalValue() }
      </div>
    </div>
  );
}

export default TableDetails;

TableDetails.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  dataTestidPrefix: PropTypes.string.isRequired,
};

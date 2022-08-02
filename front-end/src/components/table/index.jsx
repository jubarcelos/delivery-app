import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TableStyle, ButtonTotalStyles } from './style';

function Table({ products, activeRemoveButton, dataTestidPrefix }) {
  const [cart, setCart] = useState(products);

  const removeProduct = (productId) => {
    const filteredProducts = cart.filter((product) => productId !== product.id);
    setCart(filteredProducts);
    localStorage.setItem('cart', JSON.stringify(filteredProducts));
  };

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
      <td
        data-testid={ `${dataTestidPrefix}__element-order-table-remove-${index}` }
        hidden={ !activeRemoveButton }
      >
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => removeProduct(Product.id) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );

  const totalValue = () => {
    const value = 0;
    const soma = cart.reduce(
      (acumulador, valorAtual) => acumulador + Number(valorAtual.sumItem), value,
    );
    return soma.toFixed(2).replace('.', ',');
  };

  return (
    <TableStyle>
      <table border="1">
        <thead id="table-header">
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th hidden={ !activeRemoveButton }>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { cart.map((product, index) => renderProduct(product, index)) }
        </tbody>
      </table>
      <ButtonTotalStyles
        data-testid={ `${dataTestidPrefix}__element-order-total-price` }
      >
        Total:
        { totalValue() }
      </ButtonTotalStyles>
    </TableStyle>
  );
}

export default Table;

Table.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  activeRemoveButton: PropTypes.bool.isRequired,
  dataTestidPrefix: PropTypes.string.isRequired,
};

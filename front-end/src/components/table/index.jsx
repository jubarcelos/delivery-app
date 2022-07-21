import React, { useState } from 'react';
import PropTypes from 'prop-types';

const cartMock = [{
  name: 'Cerveja',
  qty: 1,
  price: 1.56,
  subTotal: 1.56,
  id: 1,
}, {
  name: 'Tequila',
  qty: 5,
  price: 0.98,
  subTotal: 4.90,
  id: 2,
}, {
  name: 'Vinho',
  qty: 3,
  price: 3.89,
  subTotal: 11.67,
  id: 3,
}, {
  name: 'Whisky',
  qty: 2,
  price: 4.80,
  subTotal: 9.60,
  id: 4,
}];

function Table({ activeRemoveButton, dataTestidPrefix }) {
  // const getLocalStorage = () => JSON.parse(localStorage.getItem('cart'));

  const [cart, setCart] = useState(cartMock);

  const removeProduct = (productId) => {
    const filteredProducts = cart.filter((product) => productId !== product.id);
    setCart(filteredProducts);
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
        { Product.price }
      </td
      >
      <td
        data-testid={ `${dataTestidPrefix}__element-order-table-sub-total-${index}` }
      >
        { Product.subTotal }
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
      (acumulador, valorAtual) => acumulador + valorAtual.subTotal, value,
    );
    return soma.toFixed(2);
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
            <th hidden={ !activeRemoveButton }>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { cart.map((product, index) => renderProduct(product, index)) }
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

export default Table;

Table.propTypes = {
  activeRemoveButton: PropTypes.bool.isRequired,
  dataTestidPrefix: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

const cartMock = [{
  name: 'Cerveja',
  qty: 1,
  price: 1.56,
  id: 2,
}, {
  name: 'Cerveja',
  qty: 1,
  price: 1.56,
  id: 2,
}];

function Table({ activeRemoveButton }) {
  // const getLocalStorage = () => JSON.parse(localStorage.getItem('cart'));

  const renderProduct = (Product, index) => (
    <tr key={ Product.id }>
      <td>{ index + 1 }</td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { Product.name }
      </td>
      <td>{ Product.qty }</td>
      <td>{ Product.price }</td>
      <td>{ (Product.qty * Product.price) }</td>
      <td hidden={ !activeRemoveButton }>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => removeProduct(product.id) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );

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
          { cartMock.map((product, index) => renderProduct(product, index)) }
        </tbody>
      </table>
      <div>
        Total:
      </div>
    </div>
  );
}

export default Table;

Table.propTypes = {
  activeRemoveButton: PropTypes.bool.isRequired,
};

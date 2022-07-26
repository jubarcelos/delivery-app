import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function OrderHeader({ order }) {
  const btn = 'customer_order_details__button-delivery-check';
  const update = 'customer_order_details__element-order-details-label-delivery-status';

  const { orderId, sellerName, saleDate, statusOrder } = order;

  return (
    <div>
      <ul>
        <li data-testid="customer_order_details__element-order-details-label-order-id">
          Pedido
          { orderId }
        </li>
        <li
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P. Vend:
          { sellerName }
        </li>
        <li
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { moment(saleDate).format('DD/MM/YYYY') }
        </li>
        <li
          data-testid={ update }
        >
          { statusOrder }
        </li>
      </ul>
      <button
        data-testid={ btn }
        type="button"
        disabled
      >
        Marcar como entregue
      </button>
    </div>
  );
}

export default OrderHeader;

OrderHeader.propTypes = {
  order: PropTypes.shape({
    orderId: PropTypes.number,
    sellerName: PropTypes.string,
    saleDate: PropTypes.string,
    statusOrder: PropTypes.string,
  }).isRequired,
};

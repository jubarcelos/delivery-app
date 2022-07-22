import React, { useEffect } from 'react';
// import { getLocalStorage } from "../../utils/localStorage";
// import { getApiData } from "../../utils/getAPI";

function Details() {
  const { orderId } = getLocalStorage();
  const btn = 'customer_order_details__element-order-details-label-delivery-status';
  const update = 'customer_order_details__element-order-details-label-delivery-status';

  useEffect(() => {
    setAllSellers(sellers);
  }, []);

  return (
    <div>
      <ul>
        <li data-test-id="customer_order_details__element-order-details-label-order-id">
          Pedido
          { orderId }
        </li>
        <li
          data-test-id="customer_order_details__element-order-details-label-seller-name"
        >
          P. Vend:
          { sellerName }
        </li>
        <li
          data-test-id="customer_order_details__element-order-details-label-order-date"
        >
          { saleDate }
        </li>
        <li
          data-test-id={ update }
        >
          { statusOrder }
        </li>
      </ul>
      <button
        data-test-id={ btn }
        type="button"
      >
        Marcar como entregue
      </button>
    </div>
  );
}

export default Details;

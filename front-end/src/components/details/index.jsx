import React from 'react';
// import { getLocalStorage } from "../../utils/localStorage";
// import { getApiById } from '../../utils/getAPI';

function Details() {
  // const { orderId } = getLocalStorage();
  const btn = 'customer_order_details__element-order-details-label-delivery-status';
  const update = 'customer_order_details__element-order-details-label-delivery-status';

  // useEffect(() => {
  //   setAllSellers(sellers);
  // }, []);

  const pedidoMock = {
    orderId: 1,
    sellerName: 'Fulana Pereira',
    saleDate: '07/04/2021',
    statusOrder: 'ENTREGUE',
    products: [
      {
        id: 1,
        name: 'Cerveja',
        qty: 2,
        price: '3.50',
        sumItem: 7,

      },
      {
        id: 2,
        name: 'Vinho',
        qty: 3,
        price: 9.50,
        sumItem: 28.50,
      },
    ],
  };

  return (
    <div>
      <ul>
        <li data-test-id="customer_order_details__element-order-details-label-order-id">
          Pedido
          { pedidoMock.orderId }
        </li>
        <li
          data-test-id="customer_order_details__element-order-details-label-seller-name"
        >
          P. Vend:
          { pedidoMock.sellerName }
        </li>
        <li
          data-test-id="customer_order_details__element-order-details-label-order-date"
        >
          { pedidoMock.saleDate }
        </li>
        <li
          data-test-id={ update }
        >
          { pedidoMock.statusOrder }
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

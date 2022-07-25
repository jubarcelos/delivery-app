import React from 'react';
import Details from '../../components/details';
import Header from '../../components/header';
import Table from '../../components/table/index';

function details() {
  // const data = getApiById('/customer/orders/:id', orderId);
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
        price: 3.50,
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
      <Header />
      <Details />
      <Table
        products={ pedidoMock.products }
        activeRemoveButton={ false }
        dataTestidPrefix="customer_order_details"
      />
    </div>
  );
}

export default details;

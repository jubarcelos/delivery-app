import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderHeader from '../../components/orderHeader';
import Header from '../../components/header';
import Table from '../../components/table/index';
import { getApiById } from '../../utils/getAPI';

function Details() {
  const [pedido, setPedido] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getOrderById = async () => {
      const order = await getApiById('/customer/orders', id);
      const orderFormat = {
        orderId: order.findOrder.id,
        sellerName: order.nameSeller,
        saleDate: order.findOrder.saleDate,
        statusOrder: order.findOrder.status,
        products: order.findOrder.products.map((product) => (
          {
            id: product.id,
            name: product.name,
            qty: product.salesProduct.quantity,
            price: Number(product.price),
            sumItem: product.salesProduct.quantity * Number(product.price),
          })),
      };
      setPedido(orderFormat);
    };
    getOrderById();
  }, [id]);

  // const pedidoMock = {
  //   orderId: 1,
  //   sellerName: 'Fulana Pereira',
  //   saleDate: '07/04/2021',
  //   statusOrder: 'ENTREGUE',
  //   products: [
  //     {
  //       id: 1,
  //       name: 'Cerveja',
  //       qty: 2,
  //       price: 3.50,
  //       sumItem: 7,

  //     },
  //     {
  //       id: 2,
  //       name: 'Vinho',
  //       qty: 3,
  //       price: 9.50,
  //       sumItem: 28.50,

  //     },
  //   ],
  // };

  return (
    <div>
      <Header />
      <OrderHeader />
      <Table
        products={ pedido.products }
        activeRemoveButton={ false }
        dataTestidPrefix="customer_order_details"
      />
    </div>
  );
}

export default Details;

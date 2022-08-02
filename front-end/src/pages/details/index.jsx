import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderHeader from '../../components/orderHeader';
import Header from '../../components/header';
import TableDetails from '../../components/table/tableDetails';
import { getApiById } from '../../utils/getAPI';

function Details() {
  const [pedido, setPedido] = useState({
    sale: {},
    products: [],
  });
  const { id } = useParams();

  useEffect(() => {
    const getOrderById = async () => {
      const order = await getApiById('customer/orders', id);
      console.log(order);
      const orderFormat = {
        orderId: order.sale.id,
        sellerName: order.sale.seller.name,
        saleDate: order.sale.saleDate,
        statusOrder: order.sale.status,
        products: order.sale.products.map((product) => (
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

  return (
    <div>
      <Header />
      <OrderHeader order={ pedido } />
      <TableDetails
        products={ pedido.products }
        dataTestidPrefix="customer_order_details"
      />
    </div>
  );
}

export default Details;

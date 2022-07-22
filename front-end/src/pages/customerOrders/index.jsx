import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header';
import { CardOrder, GridCards } from './style';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    axios.get('http://localhost:3001/customer/orders')
      .then((response) => response.data)
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));

    // const orderMock = [{
    //   idVenda: 1,
    //   dataVenda: '22/06/2022',
    //   statusVenda: 'pendente',
    //   totalPedido: '500,00',
    // }];

    // setOrders(orderMock);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Header />
      <GridCards>
        {
          orders.map((order) => {
            const { idVenda: id, totalPedido, statusVenda, dataVenda } = order;
            return (
              <CardOrder key={ id }>
                <p>
                  Pedido
                  <span
                    data-testid={ `customer_orders__element-order-id-${id}` }
                  >
                    { ` ${id}` }
                  </span>
                </p>
                <p
                  data-testid={ `customer_orders__element-order-date-${id}` }
                >
                  { dataVenda }
                </p>
                <p
                  data-testid={ `customer_orders__element-card-price-${id} ` }
                >
                  { totalPedido }
                </p>
                <p>
                  Status:
                  <span
                    data-testid={ `customer_orders__element-delivery-status-${id} ` }
                  >
                    { ` ${statusVenda}` }
                  </span>
                </p>
              </CardOrder>
            );
          })
        }
      </GridCards>
    </div>
  );
}

export default CustomerOrders;

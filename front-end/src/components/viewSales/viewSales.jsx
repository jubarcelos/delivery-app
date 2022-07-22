import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CardOrder from './style';

function ViewSales({ dataTest, isSeller, rote }) {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    axios.get(`http://localhost:3001/${rote}`)
      .then((response) => response.data)
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => { fetchOrders(); }, []);

  return (
    <div>
      {
        orders.length !== 0
        && orders.map((order) => {
          const { idVenda: id, totalPedido, statusVenda, dataVenda } = order;
          return (
            <CardOrder key={ id }>
              <p>
                Pedido
                <span
                  data-testid={ `${dataTest}__element-order-id-${id}` }
                >
                  { ` ${id}` }
                </span>
              </p>
              <p
                data-testid={ `${dataTest}__element-order-date-${id}` }
              >
                { dataVenda }
              </p>
              <p
                data-testid={ `${dataTest}__element-card-price-${id} ` }
              >
                { totalPedido }
              </p>
              <p>
                Status:
                <span
                  data-testid={ `${dataTest}__element-delivery-status-${id} ` }
                >
                  { ` ${statusVenda}` }
                </span>
              </p>
              <p
                data-testid={ `seller_orders__element-card-address-${id}` }
                hidden={ !isSeller }
              >
                { order.deliveryAdress }
              </p>
            </CardOrder>
          );
        })
      }
    </div>
  );
}

export default ViewSales;

ViewSales.propTypes = {
  dataTest: PropTypes.string.isRequired,
  isSeller: PropTypes.bool.isRequired,
  rote: PropTypes.string.isRequired,
};

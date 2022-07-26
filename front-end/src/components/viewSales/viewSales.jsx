import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
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
          const { id, totalPrice, status, saleDate } = order;
          return (
            <CardOrder key={ id }>
              <Link to={ `/${rote}/${id}` }>
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
                  { saleDate }
                </p>
                <p
                  data-testid={ `${dataTest}__element-card-price-${id} ` }
                >
                  { totalPrice }
                </p>
                <p>
                  Status:
                  <span
                    data-testid={ `${dataTest}__element-delivery-status-${id} ` }
                  >
                    { ` ${status}` }
                  </span>
                </p>
                <p
                  data-testid={ `seller_orders__element-card-address-${id}` }
                  hidden={ !isSeller }
                >
                  { order.deliveryAdress }
                </p>
              </Link>
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

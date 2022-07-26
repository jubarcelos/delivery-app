import React from 'react';
import Header from '../../components/header';
import ViewSales from '../../components/viewSales/viewSales';
import GridCards from './style';

function CustomerOrders() {
  return (
    <div>
      <Header />
      <GridCards>
        <ViewSales
          dataTest="customer_orders"
          isSeller={ false }
          rote="customer/orders"
        />
      </GridCards>
    </div>
  );
}

export default CustomerOrders;

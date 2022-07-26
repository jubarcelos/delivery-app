import React from 'react';
import Header from '../../components/header';
import ViewSales from '../../components/viewSales/viewSales';
import GridCards from '../customerOrders/style';

function SellerOrders() {
  return (
    <div>
      <Header />
      <GridCards>
        <ViewSales
          dataTest="seller_orders"
          isSeller
          rote="seller/orders"
        />
      </GridCards>
    </div>
  );
}

export default SellerOrders;

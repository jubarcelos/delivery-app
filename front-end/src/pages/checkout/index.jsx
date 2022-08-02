import React from 'react';
import Address from '../../components/address';
import Table from '../../components/table/index';
import Header from '../../components/header';
import GridCheckout from './style';

function Checkout() {
  const getLocalStorage = () => JSON.parse(localStorage.getItem('cart'));
  return (
    <div>
      <Header />
      <GridCheckout>
        <Table
          products={ getLocalStorage() }
          activeRemoveButton
          dataTestidPrefix="customer_checkout"
        />
        <Address />
      </GridCheckout>
    </div>
  );
}

export default Checkout;

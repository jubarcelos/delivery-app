import React from 'react';
import Address from '../../components/address';
import Table from '../../components/table/index';
import Header from '../../components/header';

function Checkout() {
  const getLocalStorage = () => JSON.parse(localStorage.getItem('cart'));
  return (
    <div>
      <Header />
      <Table
        products={ getLocalStorage() }
        activeRemoveButton
        dataTestidPrefix="customer_checkout"
      />
      <Address />
    </div>
  );
}

export default Checkout;

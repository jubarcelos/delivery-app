import React from 'react';
import Address from '../../components/address/address';
import Table from '../../components/table/index';
import Header from '../../components/header';

function Checkout() {
  return (
    <div>
      <Header />
      <Table activeRemoveButton dataTestidPrefix="customer_checkout" />
      <Address />
    </div>
  );
}

export default Checkout;

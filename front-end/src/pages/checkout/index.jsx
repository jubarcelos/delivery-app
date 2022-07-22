import React from 'react';
import Address from '../../components/address';
import Table from '../../components/table/index';
import Header from '../../components/header';

function checkout() {
  return (
    <div>
      <Header />
      <Table activeRemoveButton dataTestidPrefix="customer_checkout" />
      <Address />
    </div>
  );
}

export default checkout;

import React from 'react';
import Table from '../../components/table/index';
import Header from '../../components/header';

function checkout() {
  return (
    <div>
      <Header />
      <Table activeRemoveButton dataTestidPrefix="customer_checkout" />
    </div>
  );
}

export default checkout;

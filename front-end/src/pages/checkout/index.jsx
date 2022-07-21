import React from 'react';
import Table from '../../components/table/index';

function checkout() {
  return (
    <div>
      <Table activeRemoveButton dataTestidPrefix="customer_checkout" />
    </div>
  );
}

export default checkout;

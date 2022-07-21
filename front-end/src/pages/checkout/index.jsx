import React from 'react';
import Table from '../../components/table/index';

function checkout() {
  return (
    <div>
      <Table activeRemoveButton="true" dataTestidPrefix="customer_checkout" />
    </div>
  );
}

export default checkout;

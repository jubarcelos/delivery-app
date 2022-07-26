import React from 'react';
import Table from '../../components/table/index';
import Header from '../../components/header';

function details() {
  return (
    <div>
      <Header />
      <Table activeRemoveButton="false" dataTestidPrefix="customer_order_details" />
    </div>
  );
}

export default details;

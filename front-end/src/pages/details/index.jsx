import React from 'react';
import Table from '../../components/table/index';

function details() {
  return (
    <div>
      <Table activeRemoveButton="false" dataTestidPrefix="customer_order_details" />
    </div>
  );
}

export default details;

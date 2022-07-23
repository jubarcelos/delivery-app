import React from 'react';
// import Details from '../../components/details';
import Header from '../../components/header';
import Table from '../../components/table/index';

function details() {
  return (
    <div>
      <Header />
      {/* <Details /> */}
      <Table
        products={ [] }
        activeRemoveButton={ false }
        dataTestidPrefix="customer_order_details"
      />
    </div>
  );
}

export default details;

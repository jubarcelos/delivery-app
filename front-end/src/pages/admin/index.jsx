import React from 'react';
import Header from '../../components/header';
import RegisterForm from '../../components/registerForm';

function Admin() {
  const route = 'admin/manage';

  return (
    <>
      <Header />
      <h1>FALA BRUNO</h1>
      <RegisterForm
        formType="admin_manage"
        route={ route }
      />
    </>
  );
}

export default Admin;

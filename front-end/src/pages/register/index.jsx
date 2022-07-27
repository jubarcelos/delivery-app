import React from 'react';
import RegisterForm from '../../components/registerForm';

function Register() {
  const route = 'register';

  return (
    <RegisterForm
      formType="common_register"
      route={ route }
    />
  );
}

export default Register;

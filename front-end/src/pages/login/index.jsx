import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';
import Form from '../../components/form';

function Login() {
  const history = useHistory();
  const response = getLocalStorage();

  // rever a remoção dessa função para algo aproveitável em form e login
  const redirectUser = () => {
    const { role } = response;
    if (role && role === 'administrator') {
      history.push('/admin/manage');
    } else
    if (role && role === 'seller') {
      history.push('/seller/orders');
    } else
    if (role && role === 'customer') {
      history.push('/customer/products');
    } else {
      setErrorMessage('Esse usuário não existe');
    }
  };

  useEffect(() => {
    if (response !== null) redirectUser();
  }, [response]);

  return (
    !response && <Form />
  );
}

export default Login;

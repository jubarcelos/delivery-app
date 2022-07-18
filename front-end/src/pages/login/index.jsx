import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // descrever a função que transforma em hash
  const [errorMessage, setErrorMessage] = useState('');

  const setDisabled = () => {
    const SIX = 6;
    if (
      email.includes('@')
      && email.includes('.com')
      && password.length > SIX
    ) {
      return false;
    }
    return true;
  };

  const setLocalStorageApiData = () => {
    const url = 'http://localhost:3001/login';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      header: { 'Content-type': 'application/json; charset: utf8' },
    }).then((response) => response.json())
      .then((json) => localStorage.setItem('user', JSON.stringify({ json })))
      .catch((err) => console.log(err));
  };

  const getLocalStorageData = () => JSON.parse(localStorage.getItem('user'));

  const redirectUser = () => {
    if (role === 'administrator') {
      history.push('/admin/manage');
    } else if (role === 'seller') {
      history.push('/seller/orders');
    }
    history.push('/customers/products');
  };

  const handleSubmit = () => {
    setLocalStorageApiData();
    const response = getLocalStorageData();
    if (response.includes(err)) {
      return setErrorMessage('Esse usuário não existe');
    }
    redirectUser();
  };

  return (
    <form>
      <label htmlFor="email">
        Login
        <input
          type="text"
          data-testid="common_login__input-email"
          name="email"
          id="email"
          placeholder="Digite seu Email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="common_login__input-password"
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        type="submit"
        data-testid="common_login__button-login"
        onClick={ handleSubmit() }
        disabled={ setDisabled() }
      >
        Login
      </button>
      <Link
        data-testid="common_login__button-register"
        to="/customers/products"
      >
        Ainda não tenho conta
      </Link>
      <span
        className="login__error"
        data-testid="common_login__element-invalid-email"
        hidden={ !errorMessage }
      >
        {errorMessage}
      </span>
    </form>
  );
}

export default Login;

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Context from '../../context';
import { getLocalStorage } from '../../utils/localStorage';
import FormStyle from './style';

function Form() {
  const { setToken } = useContext(Context);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const setDisabled = () => {
    const SIX = 6;
    if (
      email.includes('@')
      && email.includes('.com')
      && password.length >= SIX
    ) {
      return false;
    }
    return true;
  };

  const handleAPI = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const setLocalStorageApiData = async () => {
    const result = await handleAPI.post('/login', {
      email,
      password,
    }).then((response) => response.data)
      .then((data) => localStorage.setItem('user', JSON.stringify(data)))
      .catch((error) => console.log(error));
    return result;
  };

  const redirectUser = () => {
    const response = getLocalStorage();
    const { role, token } = response;
    setToken(token);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setLocalStorageApiData();
    const response = getLocalStorage();
    if (!response) {
      setErrorMessage('Esse usuário não existe');
    } else {
      redirectUser();
    }
  };

  return (
    <FormStyle>
      <h1>Disk Gole</h1>
      <div id="bg-form">
        <div>
          <label htmlFor="email" className="input-login">
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
        </div>
        <div>
          <label htmlFor="password" className="input-login">
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
        </div>
        <button
          type="submit"
          data-testid="common_login__button-login"
          onClick={ handleSubmit }
          disabled={ setDisabled() }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          id="btn-register"
        >
          <Link
            to="/register"
          >
            Ainda não tenho conta
          </Link>
        </button>

        <span
          className="login__error"
          data-testid="common_login__element-invalid-email"
          hidden={ !errorMessage }
        >
          { errorMessage }
        </span>
      </div>
    </FormStyle>
  );
}

export default Form;

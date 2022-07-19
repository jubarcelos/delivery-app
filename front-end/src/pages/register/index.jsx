import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmailFormat = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = () => {
    const minPasswordSize = 6;
    const minNameSize = 12;
    if (validateEmailFormat()
    && password.length >= minPasswordSize
    && name.length >= minNameSize) {
      return true;
    }
  };

  const handleAPI = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const getApiDataAndSetLocalStorage = async () => {
    console.log('OK =>', name, email, password);
    const result = await handleAPI.post('/register', {
      name,
      email,
      password,
    }).then((response) => response.data)
      // .then((data) => console.log('xuxa', data))
      .then((data) => localStorage.setItem('user', JSON.stringify(data)))
      .catch((error) => console.log(error));
    console.log(result);
    return result;
  };

  const getApiDataFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));

  const handleClick = async (e) => {
    e.preventDefault();
    const response2 = await getApiDataAndSetLocalStorage();
    console.log(response2);
    const response = getApiDataFromLocalStorage();
    console.log(response);
    if (!response) {
      return setErrorMessage('este e-mail já foi cadastrado');
    }
    history.push('customers/products');
    // fazer requisição pro backend;
    // 1. sucesso: 201
    // pegar token no body e salvar no localStorage
    // redirecionar para costumer/products
    // 2. erro: 409
    // setar a mensagem de erro no erro mensage state.
    //
  };

  return (
    <div>
      <div>
        <h1>Cadastro</h1>
      </div>
      <div>
        <input
          type="text"
          name="name"
          value={ name }
          data-testid="common_register__input-name"
          placeholder="Seu nome"
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          type="text"
          name="email"
          value={ email }
          data-testid="common_register__input-email"
          placeholder="seu-email@site.com.br"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="text"
          name="password"
          value={ password }
          data-testid="common_register__input-password"
          placeholder="******"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="button"
          disabled={ !validate() }
          data-testid="common_register__button-register"
          onClick={ handleClick }
        >
          CADASTRAR
        </button>
        <span
          name="common_register__element-invalid_register"
          hidden={ !errorMessage }
        >
          { errorMessage }
        </span>
      </div>
    </div>
  );
}

export default Register;

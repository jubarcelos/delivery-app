import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmailFormat = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = () => {
    const minPasswordSize = 6;
    const minNameSize = 12;
    if (validateEmailFormat()
    && senha.length >= minPasswordSize
    && nome.length >= minNameSize) {
      return true;
    }
  };

  const setApiData = () => {
    const url = 'https://localhost:3001/register';
    const body = { nome, email, senha };
    fetch(url, {
      mothod: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-type': 'application/json; charset: uft8' },
    }).then((response) => response.json())
      .then((json) => localStorage.setItem('user', JSON.stringify({ json })))
      .catch((err) => console.log(err));
  };

  const getApiDataFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    setApiData();
    const response = getApiDataFromLocalStorage();
    if (response.includes(err)) {
      return setErrorMessage({ errorMessage: 'este e-mail já foi cadastrado' });
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
          name="nome"
          value={ nome }
          data-testid="common_register__input-name"
          placeholder="Seu nome"
          onChange={ ({ target }) => setNome(target.value) }
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
          name="senha"
          value={ senha }
          data-testid="common_register__input-password"
          placeholder="******"
          onChange={ ({ target }) => setSenha(target.value) }
        />
        <button
          type="button"
          disabled={ !validate() }
          data-testid="common_register__button-register"
          onClick={ () => handleClick }
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

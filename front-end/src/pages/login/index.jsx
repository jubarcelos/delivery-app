import React, { useState } from 'react';

function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // descrever a função que transforma em hash

  const setDisabled = () => {
    const SIX = 6;
    if (email.includes('@') && email.includes('.com') && password.length > SIX) {
      return false;
    }
    return true;
  };

  const saveStorageLogin = (event) => {
    event.preventDefault();
    // localStorage
    //   .setItem('customerOrder', JSON.stringify([products]));
    // localStorage.setItem('user', JSON.stringify({ email }));
    // localStorage.setItem('endereço', JSON.stringify({ email }));
    // history.push('/foods');
  };

  return (
    <form>
      <label htmlFor="email">
        Login
        <input
          type="text"
          data-testid="email-input"
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
          data-testid="password-input"
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
        data-testid="login-submit-btn"
        onClick={ saveStorageLogin }
        disabled={ setDisabled() }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;

import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Cadastro</h1>
        </div>
        <div>
          <input
            type="text"
            name="nome"
            // value={ nome }
            data-testid="6"
            placeholder="Seu nome"
            // onChange={ this.handleChange }
          />
          <input
            type="text"
            name="email"
            // value={ email }
            data-testid="7"
            placeholder="seu-email@site.com.br"
            // onChange={ this.handleChange }
          />
          <input
            type="text"
            name="senha"
            // value={ password }
            data-testid="password-input"
            placeholder="******"
            // onChange={ this.handleChange }
          />
          <button
            type="button"
            // disabled={ !this.validate(email, password) }
            // onClick={ this.handleClick }
          >
            CADASTRAR
          </button>
        </div>
      </div>
    );
  }
}

export default Register;

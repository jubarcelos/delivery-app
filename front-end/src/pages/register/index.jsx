import React from 'react';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validateEmailFormat(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  validate(nome, email, senha) {
    const minPasswordSize = 6;
    const minNameSize = 12;
    if (this.validateEmailFormat(email)
    && senha.length >= minPasswordSize
    && nome.length >= minNameSize) {
      return true;
    }
  }

  render() {
    const { nome, email, senha } = this.state;
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
            data-testid="6"
            placeholder="Seu nome"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="email"
            value={ email }
            data-testid="7"
            placeholder="seu-email@site.com.br"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="senha"
            value={ senha }
            data-testid="password-input"
            placeholder="******"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !this.validate(nome, email, senha) }
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

import React from 'react';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      senha: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // fazer requisição pro backend;
    // 1. sucesso: 201
    // redirecionar para costumer/products
    // 2. erro: 409
    // setar a mensagem de erro no erro mensage state.
    // this.setState({ errorMessage: 'bla bla bla' });
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
    const { nome, email, senha, errorMessage } = this.state;
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
            data-testid="8"
            placeholder="******"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !this.validate(nome, email, senha) }
            data-testid="9"
            onClick={ this.handleClick }
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
}

export default Register;

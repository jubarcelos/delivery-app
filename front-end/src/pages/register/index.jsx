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
    this.setApiData();
    const response = this.getApiDataFromLocalStorage();
    if (response.includes(err)) {
      return this.setState({ errorMessage: 'este e-mail já foi cadastrado' });
    }
    this.history.push('customers/products');
    // fazer requisição pro backend;
    // 1. sucesso: 201
    // pegar token no body e salvar no localStorage
    // redirecionar para costumer/products
    // 2. erro: 409
    // setar a mensagem de erro no erro mensage state.
    //
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  setApiData = () => {
    const { nome, email, senha } = this.state;
    const url = 'https://localhost:3001/register';
    const body = { nome, email, senha };
    fetch(url, {
      mothod: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-type': 'application/json; charset: uft8' },
    }).then((response) => response.json())
      .then((json) => localStorage.setItem('user', JSON.stringify({ json })))
      .catch((err) => console.log(err));
  }

  getApiDataFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));

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
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="email"
            value={ email }
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="senha"
            value={ senha }
            data-testid="common_register__input-password"
            placeholder="******"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !this.validate(nome, email, senha) }
            data-testid="common_register__button-register"
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

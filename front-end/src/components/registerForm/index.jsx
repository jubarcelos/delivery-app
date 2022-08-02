import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { setApiDataStatusCode } from '../../utils/postAPI';
import Context from '../../context';
import FormStyle from '../form/style';

function FormAdm({ formType, route }) {
  const { token } = useContext(Context);
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setUserType] = useState('seller');

  const sendAdm = { name, email, password, role };
  const sendUser = { name, email, password };
  const dataTestId = {
    common_register: 'common_register__element-invalid_register',
    admin_manage: 'admin_manage__element-invalid-register',
  };

  const allType = ['seller', 'administrator', 'customer'];

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

  const handleClick = async (e) => {
    const erro409 = 409;
    e.preventDefault();
    const status = await setApiDataStatusCode(route, formType === 'common_register'
      ? sendUser : sendAdm, token);
    if (status === erro409) {
      setErrorMessage('este e-mail já foi cadastrado');
    }
    if (formType === 'common_register' && status !== erro409) {
      history.push('customer/products');
    }
  };

  return (
    <FormStyle>
      <h1>Criar Conta</h1>
      <div id="bg-form">
        <input
          type="text"
          name="name"
          value={ name }
          data-testid={ `${formType}__input-name` }
          placeholder="Seu nome"
          onChange={ ({ target }) => setName(target.value) }
          className="input-login"
        />
        <input
          type="text"
          name="email"
          value={ email }
          data-testid={ `${formType}__input-email` }
          placeholder="seu-email@site.com.br"
          onChange={ ({ target }) => setEmail(target.value) }
          className="input-login"
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid={ `${formType}__input-password` }
          placeholder="******"
          onChange={ ({ target }) => setPassword(target.value) }
          className="input-login"
        />
        { formType === 'admin_manage'
          ? (
            <label htmlFor="type" className="input-login">
              <select
                name="type"
                id="type"
                className="select-type"
                placeholder="Vendedor"
                data-testid="admin_manage__select-role"
                value={ role }
                onChange={ ({ target }) => setUserType(target.value) }
                required
              >
                { allType.length !== 0
                && allType.map((type, key) => (
                  <option
                    key={ key + 1 }
                    name="type-name"
                    value={ type }
                  >
                    { type }
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        <button
          type="button"
          disabled={ !validate() }
          data-testid={ `${formType}__button-register` }
          onClick={ handleClick }
        >
          CADASTRAR
        </button>
        <span
          data-testid={ dataTestId[formType] }
          hidden={ !errorMessage }
        >
          { errorMessage }
        </span>
      </div>
    </FormStyle>
  );
}

export default FormAdm;

FormAdm.propTypes = {
  formType: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

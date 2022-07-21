import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './style';
import { getLocalStorage } from '../../utils/localStorage';

function Header() {
  const { role } = getLocalStorage();
  const { name } = getLocalStorage();

  const clearUser = () => {
    localStorage.setItem('user', JSON.stringify({}));
  };

  return (
    <HeaderStyled>
      <div>
        {
          role === 'customer'
            && (
              <div>
                <h1>
                  <Link to="/customers/products">Produtos</Link>
                </h1>
                <h1>
                  <Link to="/customers/orders">Meus Pedidos</Link>
                </h1>
              </div>
            )
        }

        {
          role === 'administrator' && (<h1> Gerenciar usuários </h1>)
        }
        {
          role !== 'administrator'
          && role !== 'customer'
          && (<h1> Pedidos </h1>)
        }
      </div>
      <div>
        <h1>{ name }</h1>
        <h1>
          <Link onClick={ clearUser } to="/login">Sair</Link>
        </h1>
      </div>
    </HeaderStyled>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './style';

/*
  Role:
  - Pegar o valor de 'role' no localStorage
  - substituir var roleMock

  Sair:
  - resetar usuarios no localStorage
*/

function Header() {
  const roleMock = 'customer';
  const userMock = 'user';

  return (
    <HeaderStyled>
      <div>
        {
          roleMock === 'customer'
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
          roleMock === 'administrator' && (<h1> Gerenciar usuários </h1>)
        }
        {
          roleMock !== 'administrator'
          && roleMock !== 'customer'
          && (<h1> Pedidos </h1>)
        }
      </div>
      <div>
        <h1>{ userMock }</h1>
        <h1>
          <Link to="/login">Sair</Link>
        </h1>
      </div>
    </HeaderStyled>
  );
}

export default Header;

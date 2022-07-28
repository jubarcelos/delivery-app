import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './style';
import { getLocalStorage } from '../../utils/localStorage';
import Context from '../../context';

function Header() {
  const { setUserId } = useContext(Context);
  const { role, name, id } = getLocalStorage();
  setUserId(id);

  const clearUser = () => {
    localStorage.removeItem('user');
  };

  return (
    <HeaderStyled>
      <div>
        {
          role === 'customer'
            && (
              <div>
                <Link
                  data-testid="customer_products__element-navbar-link-products"
                  to="/customer/products"
                  className="title"
                >
                  Produtos
                </Link>
                <Link
                  data-testid="customer_products__element-navbar-link-orders"
                  to="/customer/orders"
                  className="title"
                >
                  Meus Pedidos
                </Link>
              </div>
            )
        }

        {
          role === 'administrator' && (
            <h1 className="title"> Gerenciar usuários </h1>
          )
        }
        {
          role !== 'administrator'
          && role !== 'customer'
          && (<h1 className="title"> Pedidos </h1>)
        }
      </div>
      <div id="user">
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
          className="title"
        >
          { name }
        </h1>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ clearUser }
          to="/login"
          className="title"
        >
          Sair
        </Link>
      </div>
    </HeaderStyled>
  );
}

export default Header;

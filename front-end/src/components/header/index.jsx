import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './style';
import { getLocalStorage } from '../../utils/localStorage';

function Header() {
  const { role } = getLocalStorage();
  const { name } = getLocalStorage();

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
                >
                  Produtos
                </Link>
                <Link
                  data-testid="customer_products__element-navbar-link-orders"
                  to="/customer/orders"
                >
                  Meus Pedidos
                </Link>
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
        <h1 data-testid="customer_products__element-navbar-user-full-name">{ name }</h1>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ clearUser }
          to="/login"
        >
          Sair
        </Link>
      </div>
    </HeaderStyled>
  );
}

export default Header;

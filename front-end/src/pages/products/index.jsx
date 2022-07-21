import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header';
import GridProducts from './style';
import Card from '../../components/cardProduct/Card';
import Context from '../../context';

function Products() {
  const { itemsCart, products, setProducts, total, setTotal } = useContext(Context);

  const history = useHistory();

  const fetchProducts = async () => {
    axios.get('http://localhost:3001/customer/products')
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (itemsCart.length !== null) {
      const value = 0;
      const soma = itemsCart.reduce(
        (acumulador, valorAtual) => acumulador + +(valorAtual.sumItem), +(value),
      );
      setTotal(soma);
    }

    if (total === []) setTotal(0);
  }, [itemsCart]);

  return (
    <div>
      <Header />
      <GridProducts>
        {
          products !== undefined
          && products.map((prod, index) => (
            <Card key={ index } produto={ prod } />
          ))
        }
      </GridProducts>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ itemsCart.length === 0 }
      >
        Ver Carrinho: R$
        <span data-testid="customer_products__checkout-bottom-value">
          { total.toFixed(2).toString().replace('.', ',') }
        </span>
      </button>
    </div>
  );
}

export default Products;

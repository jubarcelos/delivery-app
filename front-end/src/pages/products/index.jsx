import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header';
import { GridProducts } from './style';
import Card from '../../components/cardProduct/Card';

function Products() {
  const [products, setProducts] = useState();
  const [allProducts, setAll] = useState([]);
  // const [clickItem, setClick] = useState();

  const fetchProducts = async () => {
    axios.get('http://localhost:3001/customer/products')
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // window.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   if (e.target.className === 'button-card-add-item') {
  //     console.log('id target', e.target.id);
  //     console.log('array', products);
  //     const filter = products.find((prod) => prod.id === Number(e.target.id));
  //     setClick((old) => [...old, filter]);
  //     console.log(clickItem);
  //   }
  // });

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
        data-testid="customer_products__button-cart`"
        onClick={ (<Redirect to="/customer/checkout" />) }
      >
        Ver Carrinho
      </button>
    </div>
  );
}

export default Products;

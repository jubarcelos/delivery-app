import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header';

function Products() {
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    axios.get('http://localhost:3001/customer/products')
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      {
        products !== undefined
        && products.map((prod) => (
          <div key={ prod.name }>
            <p data-testid={ `customer_products__element-card-title-${prod.id}` }>
              { prod.name }
            </p>
            <p data-testid={ `customer_products__element-card-price-${prod.id}` }>
              { prod.price.replace('.', ',') }
            </p>
            <img
              data-testid={ `customer_products__img-card-bg-image-${prod.id}` }
              src={ prod.url_image }
              alt={ `imagem do produto ${prod.name}` }
              width="150px"
            />
            <div>
              <button
                type="button"
                data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
              >
                -
              </button>
              <input
                placeholder="0"
                type="number"
                data-testid={ `customer_products__input-card-quantity-${prod.id}` }
                value="0"
              />
              <button
                type="button"
                data-testid={ `customer_products__button-card-add-item-${prod.id}` }
              >
                +
              </button>
            </div>
          </div>
        ))
      }
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

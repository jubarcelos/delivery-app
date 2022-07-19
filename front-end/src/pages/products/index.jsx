import React, { useEffect, useState } from 'react';
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
      <h1> Products</h1>
      {
        products.length !== 0
        && products.map((prod) => (
          <div key={ prod.name }>
            <p>
              { prod.name }
            </p>
            <p>
              { prod.price }
            </p>
            <img src={ prod.url_image } alt={ `imagem do produto ${prod.name}` } />
          </div>
        ))
      }
    </div>
  );
}

export default Products;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardStyle from './style';

function Card({ produto }) {
  const [countClick, setCountClick] = useState(0);
  const [totalPrice, setPrice] = useState(0);

  const sumTotal = () => {
    setCountClick(countClick + 1);
  };

  useEffect(() => {
    const infos = {
      name: produto.name,
      id: produto.id,
      qty: countClick,
      price: produto.price,
      totalPrice,
    };

    setPrice(countClick * produto.price);

    const local = JSON.parse(localStorage.getItem('cart'));
    if (local === null) {
      localStorage.setItem('cart', JSON.stringify([infos]));
    } else {
      local.push(infos);
      localStorage.setItem('cart', JSON.stringify(local));
    }
  }, [countClick]);

  return (
    <CardStyle key={ produto.name }>
      <img
        data-testid={ `customer_products__img-card-bg-image-${produto.id}` }
        src={ produto.url_image }
        alt={ `imagem do produto ${produto.name}` }
        width="200"
        height="200"
      />
      <p data-testid={ `customer_products__element-card-title-${produto.id}` }>
        { produto.name }
      </p>
      <p data-testid={ `customer_products__element-card-price-${produto.id}` }>
        { produto.price.replace('.', ',') }
      </p>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${produto.id}` }
          id={ produto.id }
        >
          -
        </button>
        <input
          placeholder="0"
          type="number"
          data-testid={ `customer_products__input-card-quantity-${produto.id}` }
          min="0"
          value={ countClick }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${produto.id}` }
          onClick={ sumTotal }
          id={ produto.id }
          className="button-card-add-item"
        >
          +
        </button>
      </div>
    </CardStyle>
  );
}

export default Card;

Card.propTypes = {
  produto: PropTypes.node.isRequired,
};

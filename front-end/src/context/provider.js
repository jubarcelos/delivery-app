import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';

function Provider({ children }) {
  const [itemsCart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState();
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  const states = {
    itemsCart,
    setCart,
    total,
    setTotal,
    products,
    setProducts,
    userId,
    setUserId,
    token,
    setToken,
  };
  return (
    <Context.Provider
      value={ states }
    >
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

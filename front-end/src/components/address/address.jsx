import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setLocalStorageApiData, clearLocalStorage } from '../../utils/postAPI';

const [userId, setUserId ] = useState('');
const [sellerName, setSellerName] = useState('');
const [sellerId, setSellerId] = useState('');
const [deliveryAddress, setDeliveryAddress] = useState('');
const [deliveryNumber, setDeliveryNumber] = useState('');
const [address, setAddress] = useState({});

function Address() {
  setAddress({
    userId,
    sellerId,
    deliveryAddress,
    deliveryNumber,
  });

  const sellers = [
    {
      sellerName,
      sellerId: 123,
    },
    {
      sellerName: 'Ela',
      sellerId: 13,
    },
  ];

  const selectSeller = document.querySelector('#seller-name');
  function addOptionsToSelectSeller(options) {
    return options.forEach((seller, key) => {
      selectSeller[key + 1] = new Option(seller, key + 1);
    });
  }

  selectSeller.addEventListener('click', addOptionsToSelectSeller(sellers));

  return (
    <form>
      <label htmlFor="seller-name">
        P. Vendedora Responsável:
        <select
          name="seller-name"
          id="seller-name"
          placeholder="Fulana Pereira"
          data-testid="customer_checkout__select-seller"
          value={ sellerName }
          onChange={ ({ target }) => setSellerName(target.value) }
          required
        >
          <option className="seller__option" disabled selected value>
            Selecione a pessoa vendedora responsável
          </option>
        </select>
      </label>
      <label htmlFor="input-address">
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          name="input-address"
          id="input-address"
          placeholder="Rua Pedro Silva, bairro Villa"
          value={ deliveryAddress }
          onChange={ ({ target }) => setDeliveryAddress(target.value) }
        />
      </label>
      <label htmlFor="input-addressNumber">
        Senha
        <input
          data-testid="customer_checkout__input-addressNumber"
          id="input-addressNumber"
          name="input-addressNumber"
          type="input-addressNumber"
          placeholder="198"
          value={ deliveryNumber }
          onChange={ ({ target }) => setDeliveryNumber(target.value) }
        />
      </label>
      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleSubmit }
        disabled={ setDisabled() }
      >
        <Link to="/">Finalizar pedido</Link>
      </button>
    </form>
  );
}

export default Address;

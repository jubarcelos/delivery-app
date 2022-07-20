import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getApiData } from '../../utils/getAPI';
import { setLocalStorageApiData } from '../../utils/postAPI';

const [allSellers, setAllSellers] = useState([]);
const [userId, setUserId] = useState('');
const [sellerName, setSellerName] = useState('');
const [sellerId, setSellerId] = useState('');
const [deliveryAddress, setDeliveryAddress] = useState('');
const [deliveryNumber, setDeliveryNumber] = useState('');
const [address, setAddress] = useState({});
const rote = 'customer/orders';
const history = useHistory();

function Address() {
  const defineUserId = () => {
    const { id } = getLocalStorage().user;
    setUserId(id);
  };
  defineUserId();

  // const sellers = [
  //   {
  //     sellerName,
  //     sellerId: 123,
  //   },
  //   {
  //     sellerName: 'Ela',
  //     sellerId: 13,
  //   },
  // ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSellerId();
    setAddress({
      userId,
      sellerId,
      deliveryAddress,
      deliveryNumber,
    });
    await setLocalStorageApiData(rote, address, 'order');
    const { id } = getLocalStorage().order;

    history.push(`${rote}/${id}`);
  };

  const getApi = async () => {
    setAllSellers(await getApiData(rote, address));
  };

  // const selectSeller = document.querySelector('#seller-name');
  // const addOptionsToSelectSeller = async (options) => {
  //   await getApi();
  //   return options.forEach((seller, key) => {
  //     selectSeller[key + 1] = new Option(seller, key + 1);
  //   });
  // };

  // selectSeller.addEventListener('click', addOptionsToSelectSeller(allSellers));

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
          { getApi() }
          { allSellers.map((seller, key) => (
            <option key={ key + 1 } className="seller__option" disabled value>
              { seller }
            </option>
          ))}
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
        Finalizar pedido
      </button>
    </form>
  );
}

export default Address;

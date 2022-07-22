import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';
import { getApiData } from '../../utils/getAPI';
import { setLocalStorageApiData } from '../../utils/postAPI';
import Context from '../../context';

function Address() {
  const { itemsCart, total, userId } = useContext(Context);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [allSellers, setAllSellers] = useState([]);
  const [sellerPerson, setSellerPerson] = useState(0);
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [order, setOrder] = useState({});
  const rote = 'customer/orders';
  const sellerRote = 'seller';
  const history = useHistory();

  const setSellers = async () => {
    const sellers = await getApiData(sellerRote);
    setAllSellers(sellers);
  };

  useEffect(() => {
    setSellers();
  }, []);

  useEffect(() => {
    console.log(order);
    if (order.userId) {
      setLocalStorageApiData(rote, order, 'orderId');
      const { orderId } = getLocalStorage();
      history.push(`customer/orders/${orderId}`);
    }
  }, [order, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOrder({
      userId,
      sellerId: sellerPerson,
      totalPrice: total,
      deliveryAddress,
      deliveryNumber,
      products: itemsCart,
    });
  };

  return (
    <form>
      <label htmlFor="seller-name">
        P. Vendedora Responsável:
        <select
          name="seller-name"
          id="seller-name"
          placeholder="Fulana Pereira"
          data-testid="customer_checkout__select-seller"
          value={ sellerPerson }
          onChange={ ({ target }) => setSellerPerson(target.value) }
          required
        >
          <option value="" disabled> Vendedor</option>
          { allSellers.length !== 0
            && allSellers.map((seller, key) => (
              <option
                key={ key + 1 }
                className="seller__option"
                value={ seller.sellerId }
              >
                { seller.sellerName }
              </option>
            ))}
        </select>
      </label>
      <label htmlFor="input-address">
        Endereço:
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
        Numero:
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
        disabled={
          sellerPerson === ''
          || deliveryAddress === ''
          || deliveryNumber === ''
        }
      >
        Finalizar pedido
      </button>
    </form>
  );
}

export default Address;

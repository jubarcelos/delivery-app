import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';
// import { getApiData } from '../../utils/getAPI';
import { setLocalStorageApiData } from '../../utils/postAPI';

function Address() {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [allSellers, setAllSellers] = useState([]);
  const [sellerPerson, setSellerPerson] = useState(0);
  const [userId, setUserId] = useState('');
  const [orderProducts, setOrderProducts] = useState([]);
  const [totalOrder, setTotalOrder] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [order, setOrder] = useState({});
  const rote = 'customer/orders';
  // const sellerRote = 'seller';
  const history = useHistory();

  const defineUserId = () => {
    const { id, products, totalPrice } = getLocalStorage();
    setUserId(id);
    setOrderProducts(products);
    setTotalOrder(totalPrice);
  };

  useEffect(() => {
    const sellers = [
      {
        sellerName: 'joão',
        sellerId: 123,
      },
      {
        sellerName: 'Ela',
        sellerId: 13,
      },
    ];
    // const sellers = getApiData(sellerRote);
    setAllSellers(sellers);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    defineUserId();
    setOrder({
      userId,
      sellerId,
      totalPrice: totalOrder,
      deliveryAddress,
      deliveryNumber,
      products: orderProducts,
    });
    await setLocalStorageApiData(rote, order, 'orderId');
    const { orderId } = getLocalStorage();
    history.push(`${rote}/${orderId}`);
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

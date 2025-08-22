import useShoppingCart from '../../context/hook/useShoppingCart';
import useData from '../../context/hook/useData';

import Button from '../button/button';

import style from './cart.module.css';
import shopContent from '../shopContent/shopContent.module.css';
import './cart.module.css';

function Cart() {
  const { shoppingCart, setShoppingCart } = useShoppingCart();
  const { data } = useData();

  const handleAdd = (id) => {
    setShoppingCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setShoppingCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <section className={style.cart}>
      <div className={shopContent.scrollableContent}>
        {shoppingCart.length === 0 ? (
          <div className={style.empty}><p>empty basket</p></div>
        ) : (
          shoppingCart.map((card) => {
            const product = data.find((elm) => elm.id === card.id);
            return (
              product && (
                <article key={product.id}>
                  <img
                    src={product.image}
                    alt={`Product image: ${product.title}`}
                  />
                  <div>
                    <h2>{product.title}</h2>
                    <div>
                      <div>
                        <p>quantity: {card.count}</p>
                        <p>Price: ${Math.round((product.price * card.count) * 100) / 100}</p>
                      </div>
                      <div>
                        <Button
                          description={'➖'}
                          onClick={() => handleRemove(product.id)}
                        />
                        <Button
                          description={'➕'}
                          onClick={() => handleAdd(product.id)}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              )
            );
          })
        )}
      </div>
      <div>
        <h1>Order processing:</h1>
        <form>
          <div>
            <label htmlFor="name">Enter your name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="address">Enter your address:</label>
            <input type="text" id="Address" required />
          </div>
          <div>
            <label htmlFor="city">Enter your city:</label>
            <input type="text" id="city" required />
          </div>
          <div>
            <label htmlFor="postal">Enter your postal code:</label>
            <input type="num" id="postal" required />
          </div>
          <div>
            <label htmlFor="phone">Enter your phone number:</label>
            <input type="num" id="phone" required />
          </div>
          <div>
            <p>Delivery method:</p>
            <label>
              <input type='radio' name='delivery' />
              Courier service
            </label>
            <label>
              <input type='radio' name='delivery' defaultChecked />
              Pickup
            </label>
          </div>
          <div>
            <label htmlFor='notes'>Notes:</label>
            <textarea id='notes' />
          </div>
          <Button description='Place an order' />
        </form>
      </div>
    </section>
  );
}

export default Cart;

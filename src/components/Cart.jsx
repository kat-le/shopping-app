import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, handleRemoveFromCart, setCartItems } = useOutletContext();
  const totalPrice = cartItems.reduce((sum, perfume) => sum + perfume.price * perfume.quantity,0);
  const [ totalItems, setTotalItems ] = useState(0)

  useEffect(() => {
    const total = cartItems.reduce((sum, perfume) => sum + perfume.quantity, 0);
    setTotalItems(total);
  }, [cartItems]);

  function handleIncreaseQuantity(perfume) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === perfume.id ? { ...item, quantity: item.quantity +  1 } : item
      )
    );
  }
  function handleDecreaseQuantity(perfume) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === perfume.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-layout">
        <section className="cart-items" aria-labelledby="cart-title">
          <header className="cart-items__header">
            <h1 id="cart-title">Your Cart</h1>
            <p>{totalItems} {totalItems === 1 ? "item" : "items"}</p>
          </header>

          {cartItems.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {cartItems.map((perfume, index) => (
                <li className="cart-item" key={`${perfume.id}-${index}`}>
                  <img src={perfume.image_url} alt={perfume.name} className="cart-item__image" />
                  <div className="cart-item__details">
                    <p className="cart-item__brand">{perfume.brand}</p>
                    <h2>{perfume.name}</h2>
                    <div className="cart-item__actions">
                      <div className="cart-quantity" aria-label="Quantity: 1">
                        <button 
                          type="button" 
                          aria-label="Decrease quantity"
                          onClick={() => handleDecreaseQuantity(perfume)}>
                          −
                        </button>
                        <span>{perfume.quantity}</span>
                        <button 
                          className="cart-quantity__increase"
                          type="button" 
                          aria-label="Increase quantity"
                          onClick={() => handleIncreaseQuantity(perfume)}>
                          +
                        </button>
                      </div>
                      <button
                        className="cart-item__remove"
                        type="button"
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="cart-item__price">${(perfume.price * perfume.quantity)}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <aside className="order-summary" aria-labelledby="order-summary-title">
          <h2 id="order-summary-title">Order summary</h2>
          <div className="order-summary__total">
            <span>Total</span>
            <strong>${totalPrice}</strong>
          </div>
          <button className="order-summary__checkout" type="button">
            Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
import { Link, Outlet } from "react-router";
import { useState } from "react";
import NavBar from "../nav/NavBar";

const copyrightYear = new Date().getFullYear();

function Layout() {

  const [cartItems, setCartItems] = useState([]);

  const totalItems = cartItems.reduce(
    (sum, perfume) => sum + perfume.quantity,
    0
  );

  function handleAddToCart(perfume) {
    setCartItems((currentItems) => [
      ...currentItems, 
      {      
        ...perfume,
        quantity: 1
      }
    ]);
    console.log(`Added ${perfume.name} to cart. Total items in cart: ${cartItems.length + 1}`);
  }

  function handleRemoveFromCart(itemIndex) {
    setCartItems((currentItems) => currentItems.filter((_, index) => index !== itemIndex));
  }
  
  return (
    <>
      <NavBar totalItems={totalItems} />
      <Outlet 
         context={{
          cartItems,
          setCartItems,
          totalItems,
          handleAddToCart,
          handleRemoveFromCart
        }}
      />
      <footer className="site-footer">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link className="site-footer__wordmark" to="/">Sillage</Link>
            <p>A more personal way to find your fragrance.</p>
          </div>
          <nav className="site-footer__links" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="site-footer__contact">
            <span>Get in touch</span>
            <a href="mailto:hello@sillage.example">hello@sillage.example</a>
            <a href="tel:+18005550147">+1 (800) 555-0147</a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {copyrightYear} Sillage</span>
          <span>Made to be remembered.</span>
        </div>
      </footer>
    </>
  );
}

export default Layout;
import { Outlet } from "react-router";
import { useState } from "react";
import NavBar from "./NavBar";

function Layout() {

  const [cartItems, setCartItems] = useState([]);

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
      <NavBar />
      <Outlet 
         context={{
          cartItems,
          setCartItems,
          handleAddToCart,
          handleRemoveFromCart
        }}
      />
    </>
  );
}

export default Layout;
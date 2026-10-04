import { Outlet } from "react-router";
import { useState } from "react";
import NavBar from "./NavBar";

function Layout() {

  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(perfume) {
    setCartItems((currentItems) => [
      ...currentItems, 
      perfume
    ]);
    console.log(`Added ${perfume.name} to cart. Total items in cart: ${cartItems.length + 1}`);
  }
  
  return (
    <>
      <NavBar />
      <Outlet 
         context={{
          cartItems,
          handleAddToCart
        }}
      />
    </>
  );
}

export default Layout;
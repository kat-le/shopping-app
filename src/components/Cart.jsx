import { useOutletContext } from "react-router";

function Cart() {
  const { cartItems } = useOutletContext();

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.map((perfume) => (
        <div key={perfume.id}>
          <h2>{perfume.name}</h2>
          <p>{perfume.brand}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
import React, { useEffect, useState } from "react";
import BASE_URL from "../config";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/cart`);
        const data = await res.json();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="container">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="card">
            <p>{item.name}</p>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
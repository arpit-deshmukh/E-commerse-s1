import React, { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cart')
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  return (
    <div className="container">
      <h2>Cart</h2>

      {cart.map((item, index) => (
        <div key={index} className="card">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
import React, { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cart')
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  const placeOrder = async () => {
    const orderData = {
      items: cart.map(item => ({
        productId: item._id || item.productId,
        name: item.name,
        price: item.price,
        quantity: 1,
      })),
      totalPrice: cart.reduce((sum, item) => sum + item.price, 0),
      userId: "user123",
    };

    await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
  };

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Cart;
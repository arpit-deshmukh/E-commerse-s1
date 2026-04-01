import React, { useEffect, useState } from "react";
import BASE_URL from "../config";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/cart`);
        const data = await res.json();
        setCart(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const grandTotal = cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

  return (
    <div className="container cart-page">
      <div className="page-header">
        <h2>Shopping Cart</h2>
        <p className="cart-counter">{cart.length} item{cart.length === 1 ? "" : "s"}</p>
      </div>

      {cart.length === 0 ? (
        <p className="state-text">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item, index) => (
              <article key={index} className="card cart-item">
                <div className="cart-item-image">
                  <img
                    src={item.image || "https://via.placeholder.com/100x100?text=No+Image"}
                    alt={item.name || "Product image"}
                  />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.price?.toFixed(2) || "0.00"}</p>
                  <p className="cart-item-qty">Qty: {item.quantity || 1}</p>
                </div>
                <div className="cart-item-actions">
                  <button className="secondary">Remove</button>
                </div>
              </article>
            ))}
          </div>

          <div className="cart-summary">
            <span>Grand total</span>
            <strong>₹{grandTotal.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
import React from 'react';

function Header({ setPage }) {
  return (
    <div className="container">
      <h1>My E-commerce</h1>
      <button onClick={() => setPage('products')}>Products</button>
      <button onClick={() => setPage('cart')}>Cart</button>
    </div>
  );
}

export default Header;
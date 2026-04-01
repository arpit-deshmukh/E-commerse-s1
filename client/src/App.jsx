import React, { useState } from 'react';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
  const [page, setPage] = useState('products');

  return (
    <div>
      <h1>My E-commerce</h1>

      <button onClick={() => setPage('products')}>Products</button>
      <button onClick={() => setPage('cart')}>Cart</button>

      {page === 'products' && <ProductList />}
      {page === 'cart' && <Cart />}
    </div>
  );
}

export default App;
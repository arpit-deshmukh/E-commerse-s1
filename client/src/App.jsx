import React, { useState } from 'react';
import ProductList from './pages/ProductList.jsx';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  const [page, setPage] = useState('products');

  return (
    <div>
      <Header setPage={setPage} />

      {page === 'products' && <ProductList />}
      {page === 'cart' && <Cart />}
    </div>
  );
}

export default App;
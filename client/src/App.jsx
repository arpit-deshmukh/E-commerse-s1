import React, { useState } from 'react';
import ProductList from './pages/ProductList.jsx';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState('products');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar setPage={setPage} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {page === 'products' && <ProductList />}
        {page === 'cart' && <Cart />}
      </main>
    </div>
  );
}

export default App;
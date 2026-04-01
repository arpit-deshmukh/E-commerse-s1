import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = async (product) => {
    await fetch('http://localhost:5000/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
  };

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
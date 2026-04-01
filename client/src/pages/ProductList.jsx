import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import BASE_URL from "../config";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      await fetch(`${BASE_URL}/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      console.log("Added to cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="container">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
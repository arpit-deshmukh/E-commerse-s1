import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import BASE_URL from "../config";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`);
        if (!res.ok) {
          const message = `API error %${res.status}: ${res.statusText}`;
          throw new Error(message);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
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

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    if (!normalizedSearch) return true;
    const name = product.name || "";
    const category = product.category || "";
    return (
      name.toLowerCase().includes(normalizedSearch) ||
      category.toLowerCase().includes(normalizedSearch)
    );
  });

  return (
    <div className="container product-list">
      <div className="page-header">
        <h1>Products</h1>
        <input
          type="search"
          value={searchTerm}
          placeholder="Search by name or category..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error ? (
        <p className="state-text" style={{ color: "#b91c1c" }}>
          Failed to load products: {error}
        </p>
      ) : products.length === 0 ? (
        <p className="state-text">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="state-text">No products found for '{searchTerm}'.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    onAddToCart(product);
    setTimeout(() => setAdded(false), 1200);
  };

  const inStock = product.countInStock == null || product.countInStock > 0;

  return (
    <div className="product-card">
      <div className="product-card-image">
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="product-card-image-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
          </div>
        )}

        <span className={`product-card-badge ${inStock ? 'badge-in-stock' : 'badge-out-of-stock'}`}>
          {inStock ? 'In Stock' : 'Sold Out'}
        </span>
      </div>

      <div className="product-card-body">
        {product.category && (
          <span className="product-card-category">{product.category}</span>
        )}
        <h3 className="product-card-name">{product.name}</h3>
        {product.brand && (
          <span className="product-card-brand">by {product.brand}</span>
        )}
        {product.description && (
          <p className="product-card-description">{product.description}</p>
        )}
      </div>

      <div className="product-card-footer">
        <div className="product-card-price">
          ₹{typeof product.price === 'number' ? product.price.toLocaleString('en-IN') : product.price}
        </div>
        <button
          className={`btn btn-primary btn-sm ${added ? 'btn-added' : ''}`}
          onClick={handleAddToCart}
          disabled={!inStock}
        >
          {added ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Added!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121 0 2.002-.881 2.002-2.003V6.75m-14.22 0h14.22" />
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
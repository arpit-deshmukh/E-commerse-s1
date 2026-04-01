import React from 'react';

function ProductCard({ product, onAddToCart }) {
  const { name, price, image, description, countInStock } = product;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price || 0);

  return (
    <article className="card product-card">
      <div className="card-image-wrap">
        {image ? (
          <img src={image} alt={name} loading="lazy" />
        ) : (
          <div className="card-image-placeholder">No image</div>
        )}
      </div>

      <div className="card-body">
        <h3>{name || "Untitled product"}</h3>
        <p className="product-price">{formattedPrice}</p>
        <p className="product-description">
          {description ? description.slice(0, 90) + (description.length > 90 ? "..." : "") : "No description available."}
        </p>
        <p className="stock-text">
          {countInStock > 0 ? `${countInStock} in stock` : "Out of stock"}
        </p>
        <button
          className="add-button"
          onClick={() => onAddToCart(product)}
          disabled={countInStock <= 0}
        >
          {countInStock > 0 ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
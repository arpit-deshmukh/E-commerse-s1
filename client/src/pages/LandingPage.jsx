import React from 'react';

function LandingPage({ setPage }) {
  return (
    <div className="landing-page">
      {/* Background effects */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>
      <div className="hero-grid-overlay" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              New Collection 2026
            </div>

            <h1 className="hero-title">
              Discover the <br />
              <span className="gradient-text">Future of Shopping</span>
            </h1>

            <p className="hero-subtitle">
              Explore our curated collection of premium products. From cutting-edge
              electronics to timeless fashion — experience shopping reimagined with
              unbeatable prices and lightning-fast delivery.
            </p>

            <div className="hero-actions">
              <button
                id="hero-shop-now"
                className="btn-primary"
                onClick={() => setPage('products')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                Shop Now
              </button>
              <button
                id="hero-explore"
                className="btn-secondary"
                onClick={() => setPage('products')}
              >
                Explore Catalog
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">10K+</div>
                <div className="hero-stat-label">Premium Products</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">50K+</div>
                <div className="hero-stat-label">Happy Customers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">99%</div>
                <div className="hero-stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-float-card">
                <div className="float-card-icon">🚀</div>
                <div className="float-card-title">Fast Shipping</div>
                <div className="float-card-desc">
                  Lightning-fast delivery to your doorstep within 24 hours
                </div>
              </div>
              <div className="hero-float-card">
                <div className="float-card-icon">🛡️</div>
                <div className="float-card-title">Secure Payments</div>
                <div className="float-card-desc">
                  256-bit encrypted checkout for total peace of mind
                </div>
              </div>
              <div className="hero-float-card">
                <div className="float-card-icon">⭐</div>
                <div className="float-card-title">Top Quality</div>
                <div className="float-card-desc">
                  Only verified, premium products from trusted brands
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-header">
          <h2>
            Why Choose <span className="gradient-text">ShopVerse</span>?
          </h2>
          <p>
            Built for the modern shopper who demands excellence in every detail
          </p>
        </div>

        <div className="features-grid">
          <article className="feature-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="feature-icon feature-icon-violet">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
            </div>
            <h3>Seamless Shopping</h3>
            <p>Browse thousands of products with an intuitive, blazing-fast interface designed for the modern consumer.</p>
          </article>

          <article className="feature-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="feature-icon feature-icon-fuchsia">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <h3>Secure Checkout</h3>
            <p>Bank-level encryption protects every transaction. Shop with confidence knowing your data is safe.</p>
          </article>

          <article className="feature-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="feature-icon feature-icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Buyer Protection</h3>
            <p>Full refund guarantee on every purchase. If it's not perfect, we'll make it right — no questions asked.</p>
          </article>

          <article className="feature-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="feature-icon feature-icon-emerald">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <h3>Express Delivery</h3>
            <p>Get your orders delivered in record time with our premium logistics network spanning the entire country.</p>
          </article>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="brands-section">
        <h3>Trusted by leading brands worldwide</h3>
        <div className="brands-row">
          <span className="brand-item">Nike</span>
          <span className="brand-item">Apple</span>
          <span className="brand-item">Samsung</span>
          <span className="brand-item">Sony</span>
          <span className="brand-item">Adidas</span>
          <span className="brand-item">Levi's</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to Start Shopping?</h2>
          <p>
            Join thousands of happy customers and discover premium products at unbeatable prices.
          </p>
          <button
            id="cta-get-started"
            className="btn-primary"
            onClick={() => setPage('products')}
          >
            Get Started — It's Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <span className="footer-brand-name">ShopVerse</span>
          </div>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('products'); }}>Products</a>
            <a href="#" onClick={(e) => e.preventDefault()}>About</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Support</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
          </div>
          <div className="footer-copy">
            © 2026 ShopVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

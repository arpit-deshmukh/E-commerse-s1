import React, { useState, useEffect, useRef } from 'react';

function Navbar({ setPage, activePage = 'home', cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNav = (page) => {
    setPage(page);
    setMobileOpen(false);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: homeIcon },
    { id: 'products', label: 'Products', icon: gridIcon },
    { id: 'cart', label: 'Cart', icon: cartIcon },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-gray-950/80 backdrop-blur-xl shadow-2xl shadow-violet-500/5 border-b border-white/5'
            : 'bg-gray-950/40 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <button
              id="navbar-logo"
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 group cursor-pointer bg-transparent border-none"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-all duration-300 group-hover:scale-110">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent tracking-tight">
                  ShopVerse
                </span>
                <span className="text-[10px] font-medium text-violet-400/60 -mt-1 tracking-widest uppercase">
                  Premium Store
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNav(link.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-none ${
                    activePage === link.id
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="w-4 h-4">{link.icon()}</span>
                  {link.label}
                  {link.id === 'cart' && cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[10px] font-bold text-white px-1 shadow-lg shadow-violet-500/30 animate-bounce">
                      {cartCount}
                    </span>
                  )}
                  {activePage === link.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative">
                <button
                  id="navbar-search-toggle"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-2.5 rounded-xl transition-all duration-300 cursor-pointer border-none ${
                    searchOpen
                      ? 'bg-violet-500/20 text-violet-300'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label="Toggle search"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </button>

                {/* Search Dropdown */}
                <div
                  className={`absolute right-0 top-full mt-2 transition-all duration-300 origin-top-right ${
                    searchOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="w-72 sm:w-80 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/40">
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                      <input
                        ref={searchInputRef}
                        id="navbar-search-input"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                      />
                    </div>
                    {searchQuery && (
                      <p className="text-xs text-gray-500 mt-2 px-1">
                        Press Enter to search for "{searchQuery}"
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* User Avatar */}
              <button
                id="navbar-user"
                className="hidden sm:flex p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer border-none"
                aria-label="User account"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>

              {/* Cart (mobile) */}
              <button
                id="navbar-cart-mobile"
                onClick={() => handleNav('cart')}
                className="md:hidden relative p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer border-none"
                aria-label="Cart"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[9px] font-bold text-white px-0.5">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger */}
              <button
                id="navbar-hamburger"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer border-none"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span
                    className={`block h-0.5 rounded-full bg-current transition-all duration-300 origin-center ${
                      mobileOpen ? 'rotate-45 translate-y-[4px]' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${
                      mobileOpen ? 'opacity-0 scale-0' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 rounded-full bg-current transition-all duration-300 origin-center ${
                      mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="navbar-mobile-menu"
          className={`md:hidden transition-all duration-400 ease-out overflow-hidden ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-4 pt-2 space-y-1 bg-gray-950/90 backdrop-blur-xl border-t border-white/5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleNav(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-none ${
                  activePage === link.id
                    ? 'text-white bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 border-l-2 border-l-violet-500'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="w-4 h-4">{link.icon()}</span>
                {link.label}
                {link.id === 'cart' && cartCount > 0 && (
                  <span className="ml-auto min-w-[20px] h-[20px] flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[10px] font-bold text-white px-1">
                    {cartCount}
                  </span>
                )}
              </button>
            ))}

            {/* Mobile Search */}
            <div className="pt-2">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  id="navbar-mobile-search"
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-18" />

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

/* ---------- Inline SVG icon helpers ---------- */

function homeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function gridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function cartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

export default Navbar;
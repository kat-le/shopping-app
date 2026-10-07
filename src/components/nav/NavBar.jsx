import { Link } from "react-router";

function Navbar({ totalItems }) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="site-nav__brand" to="/" aria-label="Sillage home">
        <span className="site-nav__brand-mark" aria-hidden="true">S</span>
        <span>Sillage</span>
      </Link>
      <div className="site-nav__links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="site-nav__actions">
        <span className="site-nav__account">Sign in / Register</span>
        <Link className="site-nav__cart" to="/cart" aria-label="Shopping cart" title="Shopping cart">
          {totalItems > 0 && (
            <span className="site-nav__cart-count">{totalItems}</span>
          )}
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.9-1.4L21 8H6" />
            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
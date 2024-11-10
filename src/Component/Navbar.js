import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './IMGS/Cerca logo 0 16.png';

function Navbar() {
  const location = useLocation(); // Hook to detect route changes
  const collapseRef = useRef(null); // Ref to access the navbar collapse element

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Collapse the navbar on link click in small screens
  const handleNavLinkClick = () => {
    if (collapseRef.current && window.innerWidth < 992) {
      const collapseElement = new window.bootstrap.Collapse(collapseRef.current, { toggle: false });
      collapseElement.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Cerca Logo" className="logo-img" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products" onClick={handleNavLinkClick}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

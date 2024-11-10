import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './IMGS/Cerca logo 0 16.png';

function Navbar() {
  const location = useLocation(); // Hook to detect route changes

  // Reset cart items or perform any other side effect on route change
  useEffect(() => {

    // Reset or perform any other actions on route change
    window.scrollTo(0, 0); // Reset the scroll position to top

    // You can add other reset logic if needed
  }, [location]); // Re-run the effect when the location changes

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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
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

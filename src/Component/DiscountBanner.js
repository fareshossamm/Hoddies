import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './DiscountBanner.css'; // Updated CSS file
import { FaShoppingCart } from 'react-icons/fa';

function DiscountBanner() {
  const navigate = useNavigate(); // Initialize navigate

  const handleShopNowClick = () => {
    navigate('/products'); // Navigate to the Products page
  };

  return (
    <div className="discount-banner dark-theme">
      <div className="banner-content">
      <h2>💥 Grab the Deal Now!</h2>
        <p>
          Get <span className="highlight">20% OFF</span> on your order. <br />
          Hurry before the offer ends!
        </p>
        <button className="cta-button" onClick={handleShopNowClick}>
          <FaShoppingCart size={18} /> Shop Now
        </button>
      </div>
      <div className="banner-image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          width="300px"
          height="300px"
        >
          <defs>
            <linearGradient id="bagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
            <linearGradient id="tagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4CAF50" />
              <stop offset="100%" stopColor="#8BC34A" />
            </linearGradient>
          </defs>

          <circle cx="150" cy="150" r="140" fill="#2c2c2c" />
          <rect x="90" y="100" width="120" height="120" rx="10" fill="url(#bagGradient)" />
          <path d="M110 100 L110 80 A20 20 0 0 1 140 80 L140 100" fill="#FF5722" />
          <path d="M160 100 L160 80 A20 20 0 0 0 190 80 L190 100" fill="#FF5722" />
          <circle cx="130" cy="90" r="4" fill="#fff" />
          <circle cx="170" cy="90" r="4" fill="#fff" />
          <polygon points="120,140 200,140 180,180 100,180" fill="url(#tagGradient)" />
          <text x="150" y="165" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle">
            -20%
          </text>
          <circle cx="60" cy="60" r="15" fill="#FF8C00" opacity="0.8" />
          <circle cx="240" cy="240" r="10" fill="#FF5722" />
          <path d="M50 250 L70 270 L50 290" fill="#4CAF50" opacity="0.6" />
          <path d="M230 30 L250 50 L230 70" fill="#8BC34A" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}

export default DiscountBanner;

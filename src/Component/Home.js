import React, { useEffect } from 'react';
import './Home.css'; // Updated CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });

    const navbar = document.querySelector('nav');
    const heroSection = document.querySelector('.hero-section');
    if (navbar && heroSection) {
      const navbarHeight = navbar.offsetHeight;
      heroSection.style.paddingTop = `${navbarHeight}px`;
    }
  }, []);

  return (
    <section className="hero-section">
      {/* Hero Content */}
      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title">
          <span className="highlight">Get</span> 20% OFF Your Order!
        </h1>
        <p className="hero-description">
          Don't miss out on this exclusive offer! Upgrade your wardrobe with the trendiest hoodies. 
          Limited-time offer – act fast! 🔥
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="hero-btn primary">
            Shop Now 🛍️
          </Link>
        </div>
      </div>

      {/* Discount Badge */}
      <div className="discount-badge" data-aos="zoom-in">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle cx="150" cy="150" r="140" fill="#ff4081" />
          <circle cx="150" cy="150" r="120" fill="white" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            stroke="#ff4081"
            strokeWidth="2px"
            dy=".3em"
            fontSize="48"
            fontWeight="bold"
            fill="#ff4081"
          >
            20% OFF
          </text>
        </svg>
      </div>
    </section>
  );
}

export default Hero;

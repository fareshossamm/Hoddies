import React, { useEffect } from 'react';
import './Home.css'; // Updated CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import heroImage from './IMGS/Heero.webp'; // Replace with your image path

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
      {/* Geometric Shape Fixed Behind Image */}
      <div className="background-shape"></div>

      <div className="hero-container">
        {/* Left Section */}
        <div className="hero-left" data-aos="fade-right">
          <h1 className="hero-title">
            <span className="highlight">Discover</span> Cerca Hoodies
          </h1>
          <p className="hero-description">
            Step into comfort and style. Cerca hoodies redefine what it means to stay cozy and fashionable. 🔥✨
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="hero-btn primary">
            Shop the Collection 🛍️
            </Link>

          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right" data-aos="fade-left">
          <div className="image-wrapper">
            <img src={heroImage} alt="Premium Hoodie" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

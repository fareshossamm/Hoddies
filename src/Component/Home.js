import React, { useEffect } from 'react';
import './Home.css'; // Import CSS for styling
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import { Link } from 'react-router-dom';

function HeroSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set animation duration globally
      easing: 'ease-in-out', // Set easing function globally
      once: true, // Ensure animation happens only once
    });
  }, []);

  return (
    <section className="hero-section">
      
      <div className="hero-content">
        {/* Apply AOS animation for fade-in and slide-up */}
        <h1 className="hero-title" data-aos="fade-left">
          Discover Your Perfect Hoodie with Cerca 🧥💫
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          Unmatched style. Supreme comfort. Whether you're lounging or out on an adventure,
          our premium hoodies are designed for both boys and girls who demand quality and fashion.
          Get ready to level up your wardrobe! 🔥🧥
        </p>
        <Link to="/products" className="products-cta-button" data-aos="fade-left" data-aos-delay="400">Shop the Collection 🛍️</Link>

      </div>

      
    </section>
    
    
  );
}

export default HeroSection;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTshirt, faUsers } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to handle button click for navigating to the Products page
  const goToProducts = () => {
    navigate('/products'); // Navigate to the Products page
  };

  return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="aboutus-hero-section" data-aos="fade-up">
        <div className="aboutus-hero-content">
          <h1>Welcome to Cerca</h1>
          <p>
            Where style meets comfort. Discover our collection of premium hoodies for both boys and girls, designed to make you look and feel great.
          </p>
          <button 
            className="aboutus-explore-button" 
            data-aos="zoom-in" 
            data-aos-delay="300"
            onClick={goToProducts} // Add onClick handler for navigation
          >
            Explore Our Collection
          </button>
        </div>
      </section>

      {/* Brand Story */}
      <section className="aboutus-story-section" data-aos="fade-up">
        <h2>Our Story</h2>
        <p>
          At Cerca, we believe in crafting hoodies that are more than just clothing – they’re a lifestyle. Our journey started with a simple idea: create comfortable, stylish, and high-quality hoodies that everyone can wear, no matter their style or age. 
          We're driven by the passion to deliver a product that speaks to the vibrant spirit of youth, comfort, and individuality. 
        </p>
      </section>

      {/* Core Values */}
      <section className="aboutus-values-section" data-aos="fade-up">
        <h2>Our Values</h2>
        <div className="aboutus-values-content">
          <div className="aboutus-value" data-aos="flip-left">
            <FontAwesomeIcon icon={faHeart} className="aboutus-value-icon" />
            <h3>Passion for Comfort</h3>
            <p>We craft every hoodie with the utmost care, ensuring each piece is as comfortable as it is stylish.</p>
          </div>
          <div className="aboutus-value" data-aos="flip-left" data-aos-delay="200">
            <FontAwesomeIcon icon={faTshirt} className="aboutus-value-icon" />
            <h3>Quality Craftsmanship</h3>
            <p>Our hoodies are made with high-quality materials that are durable, soft, and perfect for every season.</p>
          </div>
          <div className="aboutus-value" data-aos="flip-left" data-aos-delay="400">
            <FontAwesomeIcon icon={faUsers} className="aboutus-value-icon" />
            <h3>For Every Personality</h3>
            <p>Whether you're into bold designs or classic looks, our range of hoodies suits every personality and lifestyle.</p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="aboutus-vision-section" data-aos="fade-up">
        <h2>Our Vision</h2>
        <p>
          Our mission is simple: to revolutionize the hoodie game. At Cerca, we want to redefine casual wear, making hoodies not just a piece of clothing but a statement of self-expression and comfort. 
          We’re constantly innovating and expanding our designs to match the latest trends while staying true to our values of comfort, quality, and creativity.
        </p>
      </section>

      {/* Call to Action */}
      <section className="aboutus-cta-section" data-aos="fade-up">
        <h2>Join the Movement</h2>
        <p>Ready to upgrade your wardrobe with a hoodie that’s as unique as you? Dive into our collection and discover your next favorite hoodie today!</p>
        <button 
          className="aboutus-explore-button" 
          data-aos="zoom-in" 
          data-aos-delay="500"
          onClick={goToProducts} // Add onClick handler for navigation
        >
          Shop Now
        </button>
      </section>
    </div>
  );
}

export default AboutUs;

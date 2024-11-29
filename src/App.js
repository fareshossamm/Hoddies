import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Products from './Component/Products';
import ProductDetails from './Component/ProductDetails';
import About from './Component/About';
import Contact from './Component/Contact';
import OrderSummary from './Component/OrderSummary';
import DiscountBanner from './Component/DiscountBanner';

// Component to handle page reset on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
    // You can add other reset logic here if needed
  }, [location]);

  return null; // This component doesn't render anything, it just listens for route changes
};

function App() {
  return (
    <Router>
      <Navbar />
      {/* ScrollToTop will be triggered whenever the route changes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <DiscountBanner />
            <Products />
          </>
        } />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/order-summary" element={<OrderSummary />} />

      </Routes>
    </Router>
  );
}

export default App;

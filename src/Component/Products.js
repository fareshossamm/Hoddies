import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Products.css';
import img1 from './IMGS/Hero.webp'; 
import img2 from './IMGS/p2.webp'; 
import img3 from './IMGS/p3.webp'; 
import img4 from './IMGS/p4.webp'; 
import img5 from './IMGS/p5_1.webp'; 
import img6 from './IMGS/P6_1.webp'; 

const productsData = [
  { id: 1, name: 'Cerca Starlight', type: 'Print', oldPrice: 'EGP 1100', price: 'EGP 950', img: img1 },
  { id: 2, name: 'Starry Night', type: 'Print', oldPrice: 'EGP 1100', price: 'EGP 950', img: img2 },
  { id: 3, name: 'Cerca White Lines', type: 'Print', oldPrice: 'EGP 1100', price: 'EGP 950', img: img3 },
  { id: 4, name: 'Simple Edge', type: 'Basic', oldPrice: 'EGP 1000', price: 'EGP 850', img: img4 },
  { id: 5, name: 'Simple Edge', type: 'Basic', oldPrice: 'EGP 1000', price: 'EGP 850', img: img5 },
  { id: 6, name: 'Simple Edge', type: 'Basic', oldPrice: 'EGP 1000', price: 'EGP 850', img: img6 },
];

function Products() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredProducts = filter === 'All' 
    ? productsData 
    : productsData.filter(product => product.type === filter);

  return (
    <div className="products-section">
      <h2 className="products-title" data-aos="fade-down">Our Collection</h2>
      
      {/* Filter Buttons */}
      <div className="filter-buttons" data-aos="fade-up">
        {['All', 'Basic', 'Print'].map((type) => (
          <button 
            key={type} 
            onClick={() => setFilter(type)}
            className={filter === type ? 'active-filter' : ''}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card" 
            data-aos="fade-up"
          >
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.img} alt={product.name} className="product-img" />
              <div className="product-info">
                <h3 className="product-nam">{product.name}</h3>
                <p className="product-pric">
                  <span className="old-pric">{product.oldPrice}</span>
                  <span className="new-pric">{product.price}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ProductDetails.css';
import img1 from './IMGS/black2.webp';

const productsData = [
  { 
    id: 1, 
    name: 'Basic T-Shirt', 
    type: 'Basic', 
    oldPrice: '$1100', 
    price: '$950', 
    img: img1, 
    additionalImgs: [img1],
    availableColors: ['black', 'pink', 'babyblue'], 
  },
  { 
    id: 2, 
    name: 'Printed Tee', 
    type: 'Print', 
    oldPrice: '$1100', 
    price: '$950', 
    img: img1, 
    additionalImgs: [img1],
    availableColors: ['black', 'pink', 'babyblue'], 
  },
  { 
    id: 3, 
    name: 'Basic Hoodie', 
    type: 'Basic', 
    oldPrice: '$1100', 
    price: '$950', 
    img: img1, 
    additionalImgs: [img1],
    availableColors: ['black', 'pink', 'babyblue'], 
  },
  { 
    id: 4, 
    name: 'Graphic Tee', 
    type: 'Print', 
    oldPrice: '$1100', 
    price: '$950', 
    img: img1, 
    additionalImgs: [img1],
    availableColors: ['black', 'pink', 'babyblue'], 
  },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [sizeColorSelections, setSizeColorSelections] = useState([]);

  useEffect(() => {
    const selectedProduct = productsData.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  // Handle size selection
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  // Handle color selection
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  // Order validation and handling
  const handleOrderNow = () => {
    // Check if both size and color are selected
    if (!selectedSize || !selectedColor) {
      Swal.fire({
        title: 'Selection Missing!',
        text: 'Please select both size and color before ordering.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#e74c3c',
      });
      return;
    }

    // Add size and color to sizeColorSelections
    setSizeColorSelections([{ size: selectedSize, color: selectedColor }]);

    // Navigate to Order Summary Page and pass the product details along with size, color
    navigate('/order-summary', { 
      state: { 
        product, 
        selectedSize, 
        selectedColor 
      } 
    });
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    let message = `Product: ${product.name}\n Price: ${product.price}\n Size: ${selectedSize}\n Color: ${selectedColor}`;
    sizeColorSelections.forEach((selection, index) => {
      message += `\nSize: ${selection.size}, Color: ${selection.color}`;
    });
    return message;
  };

  // WhatsApp Order URL
  const handleOrderOnWhatsApp = () => {
    // Check if both size and color are selected
    if (!selectedSize || !selectedColor) {
      Swal.fire({
        title: 'Selection Missing!',
        text: 'Please select both size and color before placing an order on WhatsApp.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#e74c3c',
      });
      return;
    }

    // Add the selected size and color to the sizeColorSelections
    setSizeColorSelections([{ size: selectedSize, color: selectedColor }]);

    const phoneNumber = '+201201728706';
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img className="main-image" src={product.img} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <div className="prices">
          <p className="old-price">{product.oldPrice}</p>
          <p className="new-price">{product.price}</p>
        </div>

        {/* Size selection */}
        <div className="size-selector">
          <div className="size-buttons">
            {['S', 'M', 'L'].map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeSelection(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color selection */}
        <div className="color-selector">
          <label>Select Color:</label>
          <div className="color-buttons">
            {['black', 'pink', 'lightskyblue'].map((colorOption) => (
              <button
                key={colorOption}
                className={`color-button ${selectedColor === colorOption ? 'selected' : ''}`}
                style={{ backgroundColor: colorOption }}
                onClick={() => handleColorSelection(colorOption)}
              >
                {/* Display color as background */}
              </button>
            ))}
          </div>
        </div>

        <div className="actions">
          <button className="order-now" onClick={handleOrderNow}>Order Now</button>
          <button className="order-whatsapp" onClick={handleOrderOnWhatsApp}>Order on WhatsApp</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

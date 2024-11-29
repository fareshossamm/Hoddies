import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ProductDetails.css';
import img1 from './IMGS/G3.webp'; 
import img2 from './IMGS/p2.webp'; 
import img3 from './IMGS/G5.webp'; 
import img4 from './IMGS/p4.webp'; 
import img5 from './IMGS/p5_1.webp'; 
import img6 from './IMGS/P6_1.webp';  

const productsData = [
  { 
    id: 1, 
    name: 'Cerca Starlight', 
    type: 'Print', 
    oldPrice: 'EGP 1100', 
    price: 'EGP 899', 
    img: img1, 
    availableColors: ['black', 'pink', 'babyblue'], 
  },
  { 
    id: 2, 
    name: 'Starry Night', 
    type: 'Print', 
    oldPrice: 'EGP 1100', 
    price: 'EGP 899', 
    img: img2, 
    availableColors: ['black', 'pink', 'babyblue'], 
  },
  { 
    id: 3, 
    name: 'Cerca White Lines', 
    type: 'Print', 
    oldPrice: 'EGP 1100', 
    price: 'EGP 899', 
    img: img3, 
    availableColors: ['black', 'pink', 'babyblue'], 
  },
  { 
    id: 4, 
    name: 'Simple Edge', 
    type: 'Basic', 
    oldPrice: 'EGP 1000', 
    price: 'EGP 799', 
    img: img4, 
  },
  { 
    id: 5, 
    name: 'Simple Edge', 
    type: 'Basic', 
    oldPrice: 'EGP 1000', 
    price: 'EGP 799', 
    img: img5, 
  },
  { 
    id: 6, 
    name: 'Simple Edge', 
    type: 'Basic', 
    oldPrice: 'EGP 1000', 
    price: 'EGP 799', 
    img: img6, 
  },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [sizeInputs, setSizeInputs] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selectedProduct = productsData.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, parseInt(event.target.value || '1', 10));
    setQuantity(newQuantity);

    if (newQuantity > 1) {
      setSizeInputs(new Array(newQuantity).fill(''));
    } else {
      setSizeInputs([]);
    }
  };

  const validateSelections = () => {
    if (product.name === 'Simple Edge') {
      // Validate size and color selection for 'Simple Edge'
      if (!selectedSize || !selectedColor) {
        Swal.fire({
          title: 'Selection Missing!',
          text: 'Please select both size and color before proceeding.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#e74c3c',
        });
        return false;
      }
    } else {
      // For other products, validate size selection
      if (quantity > 1) {
        if (sizeInputs.some(size => !size)) {
          Swal.fire({
            title: 'Selection Missing!',
            text: 'Please select a size for each hoodie before proceeding.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#e74c3c',
          });
          return false;
        }
      } else if (!selectedSize) {
        Swal.fire({
          title: 'Selection Missing!',
          text: 'Please select a size before proceeding.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#e74c3c',
        });
        return false;
      }
    }

    return true;
  };

  const handleOrderNow = () => {
    if (!validateSelections()) return;

    // Ensure selectedColor is passed to the Order Summary
    navigate('/order-summary', { 
      state: { 
        product, 
        selectedSize: quantity > 1 ? sizeInputs : selectedSize, 
        selectedColor,  // Make sure the selected color is included here
        quantity 
      } 
    });
  };

  const handleOrderOnWhatsApp = () => {
    if (!validateSelections()) return;

    const message = `Product: ${product.name}\nPrice: ${product.price}\nQuantity: ${quantity}`;
    const sizeDetails = quantity > 1 
      ? sizeInputs.map((size, i) => `Hoodie ${i + 1}: ${size}`).join('\n') 
      : `Size: ${selectedSize}`;
    const colorDetails = product.name === 'Simple Edge' ? `\nColor: ${selectedColor}` : '';
    
    const whatsappMessage = `${message}${colorDetails}\n${sizeDetails}`;
    const url = `https://wa.me/+201201728706?text=${encodeURIComponent(whatsappMessage)}`;
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

        <div className="size-selector">
          <h3>Select Size:</h3>
          {['S', 'M', 'L'].map(size => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeSelection(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {product.name === 'Simple Edge' && (
          <div className="color-selector">
            <h3>Select Color:</h3>
            {['black', 'pink', 'lightskyblue'].map(color => (
              <button
                key={color}
                className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        )}

        <div className="quantity-selector1">
          <h3>Quantity:</h3>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>

        <div className="actions">
          <button className='order-now' onClick={handleOrderNow}>Order Now</button>
          <button className='order-whatsapp' onClick={handleOrderOnWhatsApp}>Order on WhatsApp</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

import React, { useState } from 'react';
import './OrderSummary.css';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve data passed from the previous page (product details)
  const { product, selectedSize, selectedColor, quantity } = location.state || {};

  // Handle user input for name, phone, and address
  const [userData, setUserData] = useState({ name: '', phone: '', address: '' });

  // Handle form submission for placing the order
  const handleSubmitOrder = async () => {
    // Validate user input
    if (!userData.name || !userData.phone || !userData.address) {
      Swal.fire({
        title: 'Missing Information!',
        text: 'Please provide your name, phone, and address.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#e74c3c',
      });
      return;
    }

    // Show the loading spinner while sending the email
    const loadingAlert = Swal.fire({
      title: 'Processing your order...',
      text: 'Please wait a moment while we process your order.',
      allowOutsideClick: false, // Prevent clicking outside the alert
      didOpen: () => {
        Swal.showLoading(); // Show the loading spinner
      },
    });

    // Prepare the email parameters
    const emailParams = {
      product_name: product.name,
      price: product.price,
      size: selectedSize || 'Not specified',
      color: selectedColor || 'Not specified',  // Ensure the color is passed here
      customer_name: userData.name,
      customer_phone: userData.phone,
      customer_address: userData.address,
    };

    try {
      // Send email via EmailJS
      const response = await emailjs.send('service_4xgsxd8', 'template_658ybd8', emailParams, 'OQqBxhxLtxqchsNsI');
      
      // Close the loading spinner
      loadingAlert.close();

      // Show success message
      Swal.fire({
        title: 'Order Successful!',
        text: 'Thank you for your order. We will contact you soon.',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#1c1c1c',
        color: '#fff',
        confirmButtonColor: '#e74c3c',
      });

      // Redirect to homepage or another page after success
      navigate('/'); 

    } catch (error) {
      // Close the loading spinner
      loadingAlert.close();

      // Show error message
      Swal.fire({
        title: 'Order Failed',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#e74c3c',
      });

      console.error('EmailJS Error:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="order-summary-container">
      <div className="order-summary">
        {/* Left Side - User Info Form */}
        <div className="order-summary-left">
          <h3>Enter Your Information</h3>
          <form>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>
            <div className="input-group">
              <label>Phone</label>
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                placeholder="Enter your phone"
              />
            </div>
            <div className="input-group">
              <label>Address</label>
              <input
                type="text"
                value={userData.address}
                onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                placeholder="Enter your address"
              />
            </div>
          </form>
          <button className="place" onClick={handleSubmitOrder}>Place Order</button>
        </div>

        {/* Right Side - Order Summary */}
        <div className="order-summary-right">
          <h2>Order Summary</h2>
          <div className="product-info">
            <img src={product.img} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>Size: {Array.isArray(selectedSize) ? selectedSize.join(', ') : selectedSize || 'Not specified'}</p>
              <p>Color: {selectedColor || 'Not specified'}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaWhatsapp, FaTiktok, FaPhone } from 'react-icons/fa';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the inputs
    if (!name || !phone || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'All fields are required!',
      });
      return;
    }

    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Phone Number',
        text: 'Please enter a valid 11-digit phone number.',
      });
      return;
    }

    // Show a loading spinner while sending the email
    const loadingAlert = Swal.fire({
      title: 'Sending your message...',
      text: 'Please wait while we send your message.',
      allowOutsideClick: false, // Prevent clicking outside the alert
      didOpen: () => {
        Swal.showLoading(); // Show the loading spinner
      },
    });

    // Prepare email template parameters
    const templateParams = {
      name: name,
      phone: phone,
      message: message,
    };

    // Send email via EmailJS
    emailjs.send(
      'service_4xgsxd8', // Replace with your EmailJS service ID
      'template_fy7jgtd', // Replace with your EmailJS template ID
      templateParams,
      'OQqBxhxLtxqchsNsI' // Replace with your EmailJS user ID
    )
    .then((response) => {
      // Close the loading spinner
      loadingAlert.close();

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for your message. We will get back to you soon.',
      });

      // Reset the form
      setName('');
      setPhone('');
      setMessage('');
    })
    .catch((error) => {
      // Close the loading spinner
      loadingAlert.close();

      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
      });

      console.error('Error sending email:', error);
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Phone Field with Icon */}
            <div className="form-group phone-number">
              <div className="phone-input">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[0-9]{11}"
                  title="Phone number must be 11 digits"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="form-group">
              <textarea
                id="message"
                placeholder="Your message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="phone">
            <p><FaPhone size={20} color="#4CAF50" /> +20 120 172 8706</p>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="whatsapp">
              <FaWhatsapp size={30} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="tiktok">
              <FaTiktok size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

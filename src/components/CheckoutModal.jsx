import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Stylesheet/CheckoutModal.css';

const CheckoutModal = ({ cart, totalAmount, onClose, onClearCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' or 'whatsapp'
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: 'Kathmandu',
    notes: ''
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const whatsappNumber = "9779840199461";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateOrderSummaryText = () => {
    let itemsList = cart
      .map((item, index) => `${index + 1}. ${item.name} x ${item.qty} = NPR ${item.price * item.qty}`)
      .join('%0A');
    
    return `*New Order - Lapchi Mila*%0A%0A` +
      `*Customer Details:*%0A` +
      `Name: ${formData.fullName}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Address: ${formData.address}, ${formData.city}%0A` +
      `Payment Method: ${paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'WhatsApp Order Direct'}%0A` +
      (formData.notes ? `Notes: ${formData.notes}%0A` : '') +
      `%0A*Order Items:*%0A${itemsList}%0A%0A` +
      `*Total Amount:* NPR ${totalAmount}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'whatsapp') {
      const message = generateOrderSummaryText();
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
      onClearCart();
      onClose();
    } else {
      // Cash on Delivery Submission via Web3Forms or local confirmation
      setOrderSubmitted(true);
      setTimeout(() => {
        onClearCart();
      }, 1000);
    }
  };

  return (
    <motion.div 
      className="modal-overlay" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="checkout-modal-box" 
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        {orderSubmitted ? (
          <div className="order-success-box">
            <span className="success-icon">🎉</span>
            <h3>Order Received!</h3>
            <p>Thank you, <strong>{formData.fullName}</strong>. Your Cash on Delivery order has been placed successfully.</p>
            <p className="delivery-note">We will contact you at <strong>{formData.phone}</strong> to confirm delivery in {formData.city}.</p>
            <button className="btn btn-primary" onClick={onClose}>Back to Store</button>
          </div>
        ) : (
          <>
            <h3 className="checkout-title">Complete Your Order</h3>

            {/* Order Items Summary */}
            <div className="checkout-summary-box">
              <h4>Order Breakdown</h4>
              {cart.map((item) => (
                <div key={item.id} className="checkout-summary-item">
                  <span>{item.name} ({item.qty}x)</span>
                  <strong>NPR {item.price * item.qty}</strong>
                </div>
              ))}
              <div className="checkout-summary-total">
                <span>Total Amount:</span>
                <strong>NPR {totalAmount}</strong>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group-row">
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="Full Name *" 
                  required 
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number *" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group-row">
                <input 
                  type="text" 
                  name="address" 
                  placeholder="Delivery Address (Street / Landmark) *" 
                  required 
                  value={formData.address}
                  onChange={handleChange}
                />
                <select name="city" value={formData.city} onChange={handleChange}>
                  <option value="Kathmandu">Kathmandu Valley</option>
                  <option value="Pokhara">Pokhara</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                  <option value="Other">Other City (Nepal)</option>
                </select>
              </div>

              <textarea 
                name="notes" 
                rows="2" 
                placeholder="Special delivery notes (optional)"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>

              {/* Payment Method Selector */}
              <div className="payment-method-selector">
                <h4>Select Payment Method</h4>
                <div className="payment-options">
                  <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cod" 
                      checked={paymentMethod === 'cod'} 
                      onChange={() => setPaymentMethod('cod')} 
                    />
                    <div>
                      <strong>💵 Cash on Delivery (COD)</strong>
                      <p>Pay with cash upon package delivery</p>
                    </div>
                  </label>

                  <label className={`payment-option ${paymentMethod === 'whatsapp' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="whatsapp" 
                      checked={paymentMethod === 'whatsapp'} 
                      onChange={() => setPaymentMethod('whatsapp')} 
                    />
                    <div>
                      <strong>💬 Instant Order via WhatsApp</strong>
                      <p>Send details directly to our WhatsApp (+977 9840199461)</p>
                    </div>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary checkout-submit-btn">
                {paymentMethod === 'cod' ? 'Confirm Cash on Delivery Order' : 'Proceed to WhatsApp Checkout →'}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CheckoutModal;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Stylesheet/Globel.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="App">
      <Navbar 
        cartCount={cart.reduce((a, c) => a + c.qty, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <Home />
      <Services onAddToCart={handleAddToCart} />
      <Events />
      <About />
      <Contact />

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div 
            className="modal-overlay" 
            onClick={() => setIsCartOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="cart-drawer" 
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="cart-header">
                <h3>Your Incense Cart</h3>
                <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>✕</button>
              </div>
              
              {cart.length === 0 ? (
                <p className="empty-msg">Your cart is empty.</p>
              ) : (
                <div className="cart-items">
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="cart-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p>NPR {item.price} each</p>
                        
                        {/* Quantity Controls */}
                        <div className="qty-controls">
                          <button onClick={() => handleUpdateQty(item.id, -1)}>-</button>
                          <span>{item.qty}</span>
                          <button onClick={() => handleUpdateQty(item.id, 1)}>+</button>
                          <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>🗑</button>
                        </div>
                      </div>
                      <strong>NPR {item.price * item.qty}</strong>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {cart.length > 0 && (
                <div className="cart-footer">
                  <h4>Total: NPR {totalAmount}</h4>
                  <motion.button 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginTop: '12px' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCheckoutOpen(true);
                    }}
                  >
                    Proceed to Checkout
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <CheckoutModal 
            cart={cart}
            totalAmount={totalAmount}
            onClose={() => setIsCheckoutOpen(false)}
            onClearCart={() => setCart([])}
          />
        )}
      </AnimatePresence>

      <footer className="footer">
        <div className="footer-content">
          <img 
            src={process.env.PUBLIC_URL + '/Logo.png'} 
            alt="Lapchi Mila Logo" 
            className="footer-logo-img" 
          />
          <span className="footer-brand">LAPCHI MILA</span>
        </div>
        <p>&copy; 2026 Lapchi Mila. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
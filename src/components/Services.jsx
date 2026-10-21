import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Stylesheet/Services.css';

// Updated product catalog with NPR pricing
const incenseProducts = [
  { 
    id: 1, 
    name: "Stick Incense", 
    category: "Stick", 
    price: 350, 
    image: "/Stick Incense.png", 
    desc: "Handcrafted high-altitude Himalayan stick incense blended with sacred herbs for daily ritual and meditation." 
  },
  { 
    id: 2, 
    name: "Powder Incense", 
    category: "Powder", 
    price: 300, 
    image: "/Powder Incense.png", 
    desc: "Pure ground organic Himalayan aromatic plants and juniper powder for traditional incense burning." 
  }
];

const Services = ({ onAddToCart }) => {
  const [filter, setFilter] = useState("All");

  const filteredProducts = filter === "All" 
    ? incenseProducts 
    : incenseProducts.filter(p => p.category === filter);

  return (
    <section id="incense" className="services-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Artisanal Incense
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sourced directly from sacred Himalayan herbs for peace and clarity.
        </motion.p>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {["All", "Stick", "Powder"].map(cat => (
            <motion.button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div className="products-grid" layout>
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id} 
                className="product-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4 }}
              >
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="product-info">
                  <span className="product-cat">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-footer">
                    <span className="product-price">NPR {product.price}</span>
                    <motion.button 
                      className="btn btn-primary" 
                      onClick={() => onAddToCart(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
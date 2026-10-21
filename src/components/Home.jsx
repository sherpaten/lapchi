import React from 'react';
import { motion } from 'framer-motion';
import '../Stylesheet/Home.css';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.span 
          className="hero-tagline"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AUTHENTIC HIMALAYAN HERITAGE
        </motion.span>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sacred Incense & High Altitude Treks
        </motion.h1>

        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafted in the serene altitudes of Lapchi, brought to life through sacred herb formulations and guided spiritual journeys.
        </motion.p>

        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="#incense" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Sacred Incense
          </motion.a>
          <motion.a 
            href="#events" 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Treks & Events
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
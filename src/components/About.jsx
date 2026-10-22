import React from 'react';
import { motion } from 'framer-motion';
import '../Stylesheet/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Animated Heritage Image with pic7.jpeg */}
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={process.env.PUBLIC_URL + '/Gallary/pic7.jpeg'} 
            alt="Lapchi Mila Heritage & Traditions" 
            className="about-img"
          />
          <div className="about-img-frame"></div>
        </motion.div>

        {/* Story Text Content */}
        <motion.div 
          className="about-text-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-subtitle">OUR SACRED ORIGINS</span>
          <h2 className="section-title">The Legacy of Lapchi Mila</h2>
          <div className="gold-divider-left"></div>

          <p className="about-description">
            Nested deep in the majestic Himalayas at 4,850 meters altitude lies <strong>Lapchi</strong>—a sacred sanctuary revered for centuries by yogis and spiritual practitioners.
          </p>

          <p className="about-description">
            Our artisanal <strong>Nesang Incense</strong> is hand-crafted following strict ancient monastic recipes. Every herb, juniper branch, and wild flower is gathered sustainably from pristine alpine heights, ensuring an unadulterated, deeply purifying aroma for your space.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <h3>4,850m</h3>
              <p>Alpine Altitude Gathering</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Natural & Sacred Herbs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import '../Stylesheet/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tagline">OUR STORY</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>The Spirit of Lapchi Mila</h2>
          
          <p className="about-p highlight-p">
            <strong>Lapchi Mila’s Nesang</strong> is a traditional Himalayan incense made from carefully selected <em>natural herbs</em> and <em>aromatic plants</em> gathered from the sacred highlands of Lapchi, situated at an average elevation of <strong>4,850 meters above sea level</strong>.
          </p>

          <p className="about-p">
            Rooted in centuries-old Himalayan traditions, our sacred formulations embody the pure, tranquil energy of the high mountain trails.
          </p>
        </motion.div>

        <motion.div 
          className="about-img-box"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800" 
            alt="Himalayan Highlands" 
            className="about-img" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
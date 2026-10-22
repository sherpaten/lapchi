import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Stylesheet/Gallery.css';

const galleryImages = [
  { id: 1, src: '/Gallary/pic1.jpeg', title: 'Lapchi Valley' },
  { id: 2, src: '/Gallary/pic2.jpeg', title: 'Sacred Herbs Gathering' },
  { id: 3, src: '/Gallary/pic3.jpeg', title: 'Himalayan Monastery' },
  { id: 4, src: '/Gallary/pic4.jpeg', title: 'Artisanal Crafting' },
  { id: 5, src: '/Gallary/pic5.jpeg', title: 'High Altitude Trail' },
  { id: 6, src: '/Gallary/pic6.jpeg', title: 'Sacred Incense Smoke' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  }
};

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">VISUAL HERITAGE</span>
          <h2 className="section-title">Glimpses of Lapchi</h2>
          <div className="gold-divider"></div>
        </motion.div>

        {/* Animated Image Grid */}
        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {galleryImages.map((img) => (
            <motion.div 
              key={img.id} 
              className="gallery-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                rotateZ: img.id % 2 === 0 ? 1 : -1,
                boxShadow: "0px 15px 30px rgba(194, 155, 56, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImg(img)}
            >
              <div className="img-wrapper">
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span>🔍 View Image</span>
                  <h4>{img.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedImg(null)}>✕</button>
              <img src={selectedImg.src} alt={selectedImg.title} />
              <p className="lightbox-caption">{selectedImg.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
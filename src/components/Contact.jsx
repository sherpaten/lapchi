import React from 'react';
import { motion } from 'framer-motion';
import '../Stylesheet/Contact.css';

const Contact = () => {
  const whatsappNumber = "9779840199461";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Lapchi%20Mila,%20I%20have%20an%20inquiry%20regarding%20your%20products/treks.`;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Have questions about our artisanal incense or upcoming Lapchi treks? Connect with us directly!
        </motion.p>

        <div className="contact-content">
          {/* Direct Channels Card */}
          <div className="contact-info-card">
            <h3>Direct Contact Channels</h3>
            <p className="contact-desc">
              Connect with us directly for quick response regarding orders or trek details.
            </p>

            <div className="social-links">
              {/* WhatsApp Direct Action Button */}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn whatsapp-btn"
              >
                💬 Chat on WhatsApp (+977 9840199461)
              </a>

              {/* Instagram / Facebook Button */}
              <a 
                href="https://www.instagram.com/lapchimila?cplk=MXNyZzcwb3h0NHF0Yw==" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn"
              >
                📱 Follow on Instagram / Facebook (@lapchimila)
              </a>
            </div>
          </div>

          {/* Email Inquiry Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select defaultValue="Inquiry: Incense Orders">
                <option>Inquiry: Incense Orders</option>
                <option>Inquiry: Trekking & Event Information</option>
              </select>
            </div>
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Email Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
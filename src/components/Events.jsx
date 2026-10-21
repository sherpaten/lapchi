import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Stylesheet/Events.css';

const trekEvents = [
  {
    id: 1,
    title: "Lapchi Milarepa Cave Sacred Trek",
    date: "November 10 – 22, 2026",
    duration: "12 Days",
    maxAlt: "4,200 meters",
    location: "Lapchi Valley, Nepal",
    badge: "Upcoming Event",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    description: "Guided spiritual pilgrimage journey passing ancient hermitages, meditation caves, and alpine juniper forests.",
    highlights: ["Milarepa Cave Meditation", "Ancient Monastery Offerings", "High Alpine Landscape"]
  },
  {
    id: 2,
    title: "Sacred Herb Harvesting Expedition",
    date: "December 02 – 09, 2026",
    duration: "7 Days",
    maxAlt: "3,500 meters",
    location: "Rolwaling & Lapchi Region",
    badge: "Seasonal Event",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
    description: "Join local harvesters to observe traditional sustainable gathering of Himalayan herbs used in our artisanal incense.",
    highlights: ["Ethical Herbal Foraging", "Artisanal Processing Insight", "Remote Village Homestays"]
  },
  {
    id: 3,
    title: "High Altitude Winter Meditation Gathering",
    date: "January 15 – 20, 2027",
    duration: "5 Days",
    maxAlt: "3,000 meters",
    location: "Upper Lapchi Ridge",
    badge: "Special Event",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
    description: "A silent winter retreat surrounded by snow-capped peaks, focusing on traditional mindfulness and Tibetan incense rituals.",
    highlights: ["Guided Breathing Rituals", "Silent Mountain Walks", "Incense Ceremony"]
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="events-section">
      {/* Background Overlay utilizing Banner.png */}
      <div className="events-bg-overlay"></div>

      <div className="container events-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Treks & Events
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our scheduled mountain journeys and cultural heritage events in the Himalayas.
        </motion.p>

        <div className="events-grid">
          {trekEvents.map((event, index) => (
            <motion.div 
              key={event.id} 
              className="event-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <span className="event-badge">{event.badge}</span>
              <img src={event.image} alt={event.title} className="event-img" />
              <div className="event-info">
                <span className="event-date">🗓 {event.date}</span>
                <h3 className="event-title">{event.title}</h3>
                
                <div className="event-meta">
                  <span>⏱ {event.duration}</span>
                  <span>⛰ {event.maxAlt}</span>
                  <span>📍 {event.location}</span>
                </div>

                <p className="event-desc">{event.description}</p>

                <div className="event-footer">
                  <motion.button 
                    className="btn btn-outline" 
                    onClick={() => setSelectedEvent(event)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                  <a href="#contact" className="event-inquire-link">
                    Inquire Event →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="modal-overlay" 
            onClick={() => setSelectedEvent(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="event-modal-box" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="close-btn" onClick={() => setSelectedEvent(null)}>✕</button>
              <img src={selectedEvent.image} alt={selectedEvent.title} className="modal-event-img" />
              <div className="modal-content">
                <span className="event-badge">{selectedEvent.badge}</span>
                <h3 className="modal-event-title">{selectedEvent.title}</h3>
                <p className="modal-date">🗓 <strong>Date:</strong> {selectedEvent.date}</p>
                <p className="modal-meta">
                  <span>⏱ <strong>Duration:</strong> {selectedEvent.duration}</span> | 
                  <span> ⛰ <strong>Max Altitude:</strong> {selectedEvent.maxAlt}</span>
                </p>
                <p className="modal-desc">{selectedEvent.description}</p>
                
                <h4>Event Highlights:</h4>
                <ul className="modal-highlights">
                  {selectedEvent.highlights.map((h, i) => (
                    <li key={i}>❖ {h}</li>
                  ))}
                </ul>

                <div className="modal-actions">
                  <a 
                    href="#contact" 
                    className="btn btn-primary"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Contact Us for Information
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
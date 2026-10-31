import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Users, IndianRupee, Send, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/eventData';

export default function QuoteModal({ isOpen, onClose, initialEventType = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: initialEventType || 'Wedding',
    date: '',
    guestCount: '100-250',
    budget: '₹7 - ₹15 Lakhs',
    venueStatus: 'Need recommendations',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Good Vision Events! I'm interested in planning an event:\n- Name: ${formData.name || 'Client'}\n- Type: ${formData.eventType}\n- Date: ${formData.date || 'TBD'}\n- Guests: ${formData.guestCount}\n- Budget: ${formData.budget}\nCan you share availability and a quote?`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close quote modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <span className="kicker">
                <span className="kicker-line"></span>
                LET'S COLLABORATE
              </span>
              <h3 className="modal-title font-serif">
                Request a <span className="gold-italic">Personalised Quote</span>
              </h3>
              <p className="modal-subtitle">
                Share a few details about your vision. Our senior planner will get back within 24 hours with an itemised breakdown.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quote-name">Your Full Name *</label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Radhika Apte"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quote-phone">Phone / WhatsApp *</label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quote-email">Email Address</label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quote-eventType">Event Type *</label>
                  <select
                    id="quote-eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Wedding">Wedding & Pre-Wedding</option>
                    <option value="Corporate Event">Corporate Conference / Gala</option>
                    <option value="Social Celebration">Social Celebration (Birthday/Anniversary)</option>
                    <option value="Family Function">Private & Family Function</option>
                    <option value="Brand Activation">Brand Activation & Pop-Up</option>
                    <option value="Other">Other Bespoke Event</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quote-date">Approximate Event Date</label>
                  <input
                    id="quote-date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quote-guestCount">Estimated Guest Count</label>
                  <select
                    id="quote-guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Under 50 guests">Intimate (&lt; 50 guests)</option>
                    <option value="50-100 guests">50 – 100 guests</option>
                    <option value="100-250 guests">100 – 250 guests</option>
                    <option value="250-500 guests">250 – 500 guests</option>
                    <option value="500-1000 guests">500 – 1000 guests</option>
                    <option value="1000+ guests">1000+ guests (Mega scale)</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quote-budget">Estimated Budget Range</label>
                  <select
                    id="quote-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="₹50,000 - ₹2 Lakhs">₹50,000 – ₹2 Lakhs (Intimate)</option>
                    <option value="₹2 - ₹5 Lakhs">₹2 – ₹5 Lakhs (Standard)</option>
                    <option value="₹5 - ₹12 Lakhs">₹5 – ₹12 Lakhs (Signature)</option>
                    <option value="₹12 - ₹25 Lakhs">₹12 – ₹25 Lakhs (Grand)</option>
                    <option value="₹25 Lakhs+">₹25 Lakhs+ (Luxury / Multi-day)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quote-venueStatus">Venue Status</label>
                  <select
                    id="quote-venueStatus"
                    name="venueStatus"
                    value={formData.venueStatus}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Venue booked">Venue already booked</option>
                    <option value="Need recommendations">Need venue recommendations in Pune</option>
                    <option value="Shortlisted venues">Shortlisted a few venues</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="quote-message">Describe Your Vision / Requirements</label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about the mood, theme ideas, preferred decor style, or special requests..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <div className="modal-actions">
                <button type="submit" className="btn btn-primary w-full">
                  <Send size={16} />
                  <span>Submit Consultation Request</span>
                </button>
              </div>

              <div className="quick-wa-option">
                <span>Or connect instantly:</span>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="wa-inline-btn"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp directly</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-view">
            <div className="success-icon-wrap">
              <CheckCircle size={56} className="text-gold" />
            </div>
            <h3 className="font-serif success-title">
              Request Received with <span className="gold-italic">Pleasure!</span>
            </h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name || 'friend'}</strong>. Our lead planner Abhi Zagade will review your details and send a curated concept proposal within 24 hours.
            </p>
            <div className="success-meta-box">
              <p><strong>Event:</strong> {formData.eventType}</p>
              <p><strong>Estimated Guests:</strong> {formData.guestCount}</p>
              <p><strong>Reference Phone:</strong> {formData.phone}</p>
            </div>
            <div className="success-actions">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="btn btn-primary w-full"
              >
                <MessageCircle size={18} />
                <span>Message Planner on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary w-full"
              >
                Back to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

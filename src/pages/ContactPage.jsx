import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/eventData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    date: '',
    guestCount: '100-250',
    budget: '₹5 - ₹12 Lakhs',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

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
      `Hi Good Vision Events! I'm interested in planning an event:\n- Name: ${formData.name || 'Friend'}\n- Event: ${formData.eventType}\n- Phone: ${formData.phone}\n- Date: ${formData.date || 'TBD'}\nPlease share availability and consultation schedule.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="contact-page-view">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="page-header-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80"
          alt="Contact Good Vision Events Pune"
          className="page-header-bg"
        />
        <div className="container page-header-content">
          <span className="kicker">PLAN YOUR MOMENT</span>
          <h1 className="page-title font-serif">
            Let's <span className="gold-italic">talk</span>
          </h1>
          <p className="page-subtitle">
            We'd love to hear about your event. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Info Cards */}
            <div className="contact-info-column">
              <span className="kicker">DIRECT CONTACT</span>
              <h2 className="contact-col-title font-serif">
                Reach out to our <span className="gold-italic">team</span>
              </h2>
              <p className="contact-col-lead">
                Whether you have an exact vision or just a date on the calendar, we're ready to listen.
              </p>

              <div className="contact-cards-stack">
                <a href={`tel:${COMPANY_INFO.phone}`} className="contact-channel-card">
                  <div className="channel-icon-bubble">
                    <Phone size={22} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="channel-title">Phone</h4>
                    <p className="channel-value">{COMPANY_INFO.phone}</p>
                    <span className="channel-action">Tap to call directly</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hi!%20I'm%20interested%20in%20planning%20an%20event.%20Can%20you%20help%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card"
                >
                  <div className="channel-icon-bubble">
                    <MessageCircle size={22} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="channel-title">WhatsApp</h4>
                    <p className="channel-value">{COMPANY_INFO.phone}</p>
                    <span className="channel-action">Fastest response for quick questions</span>
                  </div>
                </a>

                <a href={`mailto:${COMPANY_INFO.email}`} className="contact-channel-card">
                  <div className="channel-icon-bubble">
                    <Mail size={22} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="channel-title">Email</h4>
                    <p className="channel-value">{COMPANY_INFO.email}</p>
                    <span className="channel-action">Send RFPs & briefs</span>
                  </div>
                </a>

                <div className="contact-channel-card no-hover">
                  <div className="channel-icon-bubble">
                    <MapPin size={22} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="channel-title">Studio & Office</h4>
                    <p className="channel-value">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="contact-channel-card no-hover">
                  <div className="channel-icon-bubble">
                    <Clock size={22} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="channel-title">Office Hours</h4>
                    <p className="channel-value text-sm">{COMPANY_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Consultation Form */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                {!submitted ? (
                  <div>
                    <h3 className="font-serif text-2xl mb-2">
                      Send us an <span className="gold-italic">Enquiry</span>
                    </h3>
                    <p className="text-secondary text-sm mb-6">
                      Fill out the form below and we'll prepare a custom overview for your date.
                    </p>

                    <form onSubmit={handleSubmit} className="site-contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            required
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone / WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            name="phone"
                            placeholder="+91 98765 00000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Email Address</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label>Event Type</label>
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="form-select"
                          >
                            <option value="Wedding">Wedding</option>
                            <option value="Corporate Event">Corporate Event</option>
                            <option value="Social Celebration">Social Celebration</option>
                            <option value="Private Function">Private Function</option>
                            <option value="Brand Activation">Brand Activation</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Estimated Date</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label>Guest Count</label>
                          <select
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            className="form-select"
                          >
                            <option value="Under 50">Under 50 guests</option>
                            <option value="50-100">50 – 100 guests</option>
                            <option value="100-250">100 – 250 guests</option>
                            <option value="250-500">250 – 500 guests</option>
                            <option value="500+">500+ guests</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Notes & Vision</label>
                        <textarea
                          rows="4"
                          name="message"
                          placeholder="Tell us about the vibe, location preferences, or specific styling ideas..."
                          value={formData.message}
                          onChange={handleChange}
                          className="form-textarea"
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary w-full">
                        <Send size={16} />
                        <span>Send Message</span>
                      </button>

                      <div className="text-center mt-3">
                        <button
                          type="button"
                          onClick={handleWhatsAppDirect}
                          className="wa-inline-btn"
                        >
                          <MessageCircle size={15} />
                          <span>Prefer WhatsApp? Message directly</span>
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle size={56} className="text-gold mx-auto mb-4" />
                    <h3 className="font-serif text-2xl mb-2">
                      Message <span className="gold-italic">Sent!</span>
                    </h3>
                    <p className="text-secondary mb-6">
                      Thank you, {formData.name}. We have received your inquiry and will connect with you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-dark"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

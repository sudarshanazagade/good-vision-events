import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/eventData';

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-widgets-wrapper">
      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* WhatsApp Floating Chat */}
      <a
        href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hi!%20I'm%20interested%20in%20planning%20an%20event.%20Can%20you%20help%3F`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn animate-pulse-green"
        aria-label="Chat with Good Vision Events on WhatsApp"
        title="Chat with an event planner on WhatsApp"
      >
        <MessageCircle size={26} fill="currentColor" strokeWidth={1} />
        <span className="wa-tooltip">Quick WhatsApp</span>
      </a>
    </div>
  );
}

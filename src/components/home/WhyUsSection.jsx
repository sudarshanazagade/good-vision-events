import React from 'react';
import { ClipboardCheck, Palette, Clock, Handshake, ShieldCheck } from 'lucide-react';
import { TRUST_PILLARS } from '../../data/eventData';

export default function WhyUsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'clipboard-check':
        return <ClipboardCheck size={26} className="text-gold" />;
      case 'palette':
        return <Palette size={26} className="text-gold" />;
      case 'clock':
        return <Clock size={26} className="text-gold" />;
      case 'handshake':
        return <Handshake size={26} className="text-gold" />;
      case 'shield-check':
        return <ShieldCheck size={26} className="text-gold" />;
      default:
        return <ShieldCheck size={26} className="text-gold" />;
    }
  };

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header-center">
          <span className="kicker">
            <span className="kicker-line"></span>
            No. 02 — WHY US
            <span className="kicker-line"></span>
          </span>
          <h2 className="section-title-light font-serif">
            Why clients <span className="gold-italic">trust us</span>
          </h2>
        </div>

        <div className="why-us-grid">
          {TRUST_PILLARS.map((item) => (
            <div key={item.id} className="why-us-item">
              <div className="why-icon-bubble">
                {getIcon(item.icon)}
              </div>
              <h3 className="why-item-title font-serif">{item.title}</h3>
              <p className="why-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { THEMES, COMPANY_INFO } from '../data/eventData';

export default function ThemesPage({ onOpenQuote, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Weddings',
    'Corporate',
    'Birthdays',
    'Social Celebrations',
    'Private Functions',
    'Brand Activations'
  ];

  const filteredThemes = selectedCategory === 'All'
    ? THEMES
    : THEMES.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleWhatsAppEnquiry = (theme) => {
    const text = encodeURIComponent(
      `Hi Good Vision Events! I'd like to discuss the ${theme.title} theme for ${theme.category}. Please share availability and a customised quote.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="themes-page-view">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="page-header-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
          alt="Event decor themes"
          className="page-header-bg"
        />
        <div className="container page-header-content">
          <span className="kicker">DESIGN MOODBOARDS</span>
          <h1 className="page-title font-serif">
            Event <span className="gold-italic">Themes</span>
          </h1>
          <p className="page-subtitle">
            From timeless traditions to playful celebrations, a setting for every occasion.
          </p>
        </div>
      </section>

      {/* Filter and Showcase */}
      <section className="themes-showcase-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-dark font-serif">
              An occasion. A <span className="gold-italic">world of possibilities.</span>
            </h2>
            <p className="section-subtitle-dark">
              Personalise every concept with your colours, venue and favourite details. Images are illustrative mood references.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="category-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="results-count-bar">
            {filteredThemes.length} {filteredThemes.length === 1 ? 'theme' : 'themes'} · {selectedCategory === 'All' ? 'All Events' : selectedCategory}
          </p>

          {/* Themes Grid */}
          <div className="themes-cards-grid">
            {filteredThemes.map((theme) => (
              <div key={theme.id} className="theme-card">
                <div className="theme-card-media">
                  <img src={theme.image} alt={theme.title} className="theme-card-img" loading="lazy" />
                  <span className="theme-category-badge">{theme.category}</span>
                </div>

                <div className="theme-card-body">
                  <h3 className="theme-card-title font-serif">{theme.title}</h3>
                  <p className="theme-card-tagline">{theme.tagline}</p>

                  <ul className="theme-elements-list">
                    {theme.elements.map((elem, eIdx) => (
                      <li key={eIdx}>
                        <span className="text-gold font-bold mr-1.5">✦</span>
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleWhatsAppEnquiry(theme)}
                    className="btn btn-outline-gold btn-sm w-full mt-4"
                  >
                    <MessageCircle size={15} />
                    <span>Enquire about this theme</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Link to Packages */}
          <div className="themes-bottom-banner">
            <h3 className="font-serif text-2xl mb-2">
              Pair your theme with a <span className="gold-italic">package</span>
            </h3>
            <p className="text-secondary mb-4">
              Planning, styling and coordination to bring it all together.
            </p>
            <button
              onClick={() => {
                onNavigate('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn btn-primary"
            >
              <span>Explore packages</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

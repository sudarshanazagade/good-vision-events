import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import QuoteModal from './components/QuoteModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ThemesPage from './pages/ThemesPage';
import PackagesPage from './pages/PackagesPage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteEventType, setQuoteEventType] = useState('Wedding');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Sync hash routing on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'themes', 'packages', 'portfolio', 'testimonials', 'blog', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (eventType = 'Wedding') => {
    setQuoteEventType(eventType);
    setQuoteModalOpen(true);
  };

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    navigateTo('services');
  };

  return (
    <div className="app-root">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        onOpenQuote={() => handleOpenQuote('General Inquiry')}
      />

      {/* Page Routing */}
      <main className="main-content">
        {currentPage === 'home' && (
          <HomePage
            onOpenQuote={() => handleOpenQuote('Wedding')}
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuote('General Inquiry')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenQuote={() => handleOpenQuote('Corporate Event')}
            selectedServiceId={selectedServiceId}
          />
        )}

        {currentPage === 'themes' && (
          <ThemesPage
            onOpenQuote={() => handleOpenQuote('Wedding')}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'packages' && (
          <PackagesPage
            onOpenQuote={() => handleOpenQuote('Custom Package')}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onOpenQuote={() => handleOpenQuote('Wedding')}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onOpenQuote={() => handleOpenQuote('Social Celebration')}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onOpenQuote={() => handleOpenQuote('Consultation')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Floating Action Buttons */}
      <FloatingWidgets />

      {/* Quote / Consultation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialEventType={quoteEventType}
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

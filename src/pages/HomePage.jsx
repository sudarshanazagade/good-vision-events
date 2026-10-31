import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import WhyUsSection from '../components/home/WhyUsSection';
import RecentWorkSection from '../components/home/RecentWorkSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaBanner from '../components/home/CtaBanner';

export default function HomePage({ onOpenQuote, onNavigate, onSelectService }) {
  return (
    <div className="home-page-view">
      <Hero
        onOpenQuote={onOpenQuote}
        onExploreWork={() => {
          onNavigate('portfolio');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <ServicesSection
        onSelectService={onSelectService}
        onNavigate={onNavigate}
      />
      <WhyUsSection />
      <RecentWorkSection onNavigate={onNavigate} />
      <BeforeAfterSlider />
      <TestimonialsSection onNavigate={onNavigate} />
      <CtaBanner onOpenQuote={onOpenQuote} />
    </div>
  );
}

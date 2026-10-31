import React, { useState, useRef, useCallback } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="before-after-section">
      <div className="container">
        <div className="section-header-center">
          <span className="kicker">
            <span className="kicker-line"></span>
            TRANSFORMATION
            <span className="kicker-line"></span>
          </span>
          <h2 className="section-title-dark font-serif">
            From empty hall to <span className="gold-italic">grand stage</span>
          </h2>
          <p className="section-subtitle-dark">
            Drag the handle to see how we reimagine a blank venue — lighting, florals, seating and story.
          </p>
        </div>

        <div
          ref={containerRef}
          className="slider-viewport"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* AFTER Image (Full background layer) */}
          <div className="slider-image-layer after-image">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
              alt="Grand Stage Venue After Transformation"
              draggable="false"
            />
            <span className="badge-after">AFTER</span>
          </div>

          {/* BEFORE Image (Clipped layer on top) */}
          <div
            className="slider-image-layer before-image"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85"
              alt="Empty Hall Venue Before Transformation"
              draggable="false"
              style={{ filter: 'grayscale(60%) contrast(90%) brightness(85%)' }}
            />
            <span className="badge-before">BEFORE</span>
          </div>

          {/* Draggable Divider Line & Handle */}
          <div
            className="slider-divider"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="slider-handle" title="Drag left/right to compare">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="slider-arrow-svg">
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="slider-caption-bar">
          <div className="slider-step-hint">
            <span className="dot dot-gray"></span>
            <span>Raw Space: Bare floors, standard acoustics</span>
          </div>
          <div className="slider-step-hint">
            <span className="dot dot-gold"></span>
            <span>Good Vision Touch: Custom drapery, intelligent lighting, bespoke florals</span>
          </div>
        </div>
      </div>
    </section>
  );
}

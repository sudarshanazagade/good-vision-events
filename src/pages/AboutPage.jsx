import React from 'react';
import { Target, Eye, Lightbulb, Search, HeartHandshake, ShieldCheck } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../components/SocialIcons';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/eventData';
import CtaBanner from '../components/home/CtaBanner';

export default function AboutPage({ onOpenQuote }) {
  const values = [
    {
      title: "Creativity",
      desc: "Innovative designs and fresh ideas for every event",
      icon: <Lightbulb size={24} className="text-gold" />
    },
    {
      title: "Attention to Detail",
      desc: "Every element, from lighting to linens, is carefully curated",
      icon: <Search size={24} className="text-gold" />
    },
    {
      title: "Client-First",
      desc: "Your vision is our priority; we listen and deliver",
      icon: <HeartHandshake size={24} className="text-gold" />
    },
    {
      title: "Integrity",
      desc: "Transparent pricing, honest communication, reliable execution",
      icon: <ShieldCheck size={24} className="text-gold" />
    }
  ];

  return (
    <div className="about-page-view">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="page-header-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
          alt="Good Vision Events team planning"
          className="page-header-bg"
        />
        <div className="container page-header-content">
          <span className="kicker">ABOUT US</span>
          <h1 className="page-title font-serif">
            About <span className="gold-italic">us</span>
          </h1>
          <p className="page-subtitle">
            Passionate planners, creative designers, detail-obsessed executors.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="story-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Good Vision Events planning studio"
                className="story-main-img"
              />
              <div className="story-img-accent-border"></div>
            </div>

            <div className="story-text-wrap">
              <span className="kicker">
                <span className="kicker-line"></span>
                No. 01 — OUR STORY
              </span>
              <h2 className="story-title font-serif">
                Born from a love of <span className="gold-italic">moments</span>
              </h2>
              <p className="story-p">
                Founded in 2025, Good Vision Events was born from a passion for creating memorable experiences. We saw a gap in the market for event planners who truly listen, innovate, and execute with precision.
              </p>
              <p className="story-p">
                Today, we're a team of creative minds and logistics experts dedicated to making every event unforgettable — whether it's a boardroom of twenty or a baraat of two thousand.
              </p>

              {/* Mission & Vision Cards */}
              <div className="mission-vision-grid">
                <div className="mv-card">
                  <div className="mv-icon-bubble">
                    <Target size={24} className="text-gold" />
                  </div>
                  <h3 className="mv-title font-serif">Our Mission</h3>
                  <p className="mv-desc">
                    To create seamless, memorable events that exceed expectations and leave lasting impressions.
                  </p>
                </div>

                <div className="mv-card">
                  <div className="mv-icon-bubble">
                    <Eye size={24} className="text-gold" />
                  </div>
                  <h3 className="mv-title font-serif">Our Vision</h3>
                  <p className="mv-desc">
                    To be the most trusted event management partner in Pune and beyond, known for creativity, reliability, and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header-center">
            <span className="kicker">
              <span className="kicker-line"></span>
              No. 02 — VALUES
              <span className="kicker-line"></span>
            </span>
            <h2 className="section-title-light font-serif">
              What we <span className="gold-italic">stand for</span>
            </h2>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon-bubble">
                  {v.icon}
                </div>
                <h3 className="value-title font-serif">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="about-stats-bar">
        <div className="container">
          <div className="stats-row">
            {COMPANY_INFO.stats.map((s, idx) => (
              <div key={idx} className="stat-col">
                <div className="stat-big-number font-serif">{s.value}</div>
                <div className="stat-label-text">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section">
        <div className="container">
          <div className="section-header-center">
            <span className="kicker">
              <span className="kicker-line"></span>
              LEADERSHIP & CREATIVES
              <span className="kicker-line"></span>
            </span>
            <h2 className="section-title-light font-serif">
              Meet the <span className="gold-italic">visionaries</span>
            </h2>
            <p className="section-subtitle-light">
              The seasoned minds ensuring every production runs like clockwork.
            </p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((m) => (
              <div key={m.id} className="team-card">
                <div className="team-img-wrap">
                  <img src={m.image} alt={m.name} className="team-img grayscale-filter" />
                  <div className="team-overlay-social">
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-icon" aria-label="LinkedIn">
                      <LinkedinIcon size={18} />
                    </a>
                    <a href={m.instagram} target="_blank" rel="noopener noreferrer" className="team-social-icon" aria-label="Instagram">
                      <InstagramIcon size={18} />
                    </a>
                  </div>
                </div>
                <div className="team-card-info">
                  <h3 className="team-name font-serif">{m.name}</h3>
                  <p className="team-role-tag">{m.role}</p>
                  <p className="team-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onOpenQuote={onOpenQuote} />
    </div>
  );
}

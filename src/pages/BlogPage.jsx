import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/eventData';

export default function BlogPage({ onOpenQuote }) {
  const [readingPost, setReadingPost] = useState(null);

  const featuredPost = {
    title: "The Ultimate Guide: What Our Planners Wish Every Couple Knew",
    summary: "Planning a wedding can be overwhelming, but with the right approach, it can be the most joyful project of your life. Here's what our lead planners swear by.",
    readTime: "5 min read",
    date: "Spring 2026",
    category: "Featured Guide",
    content: `Planning a wedding in Pune offers extraordinary choices, from picturesque hillside vineyards in Nashik/Lavasa to historic wadas and grand Koregaon Park ballrooms. 
    
    The most crucial secret to a joyful wedding is preserving your energy. Establish a non-negotiable guest count early before committing to venue deposits. Choose decor themes that enhance your venue's existing charm rather than battling against it. 
    
    Most importantly, designate an experienced team to manage the day's timeline and vendor cues, leaving you free to laugh, dance, and savor every irreplaceable second.`
  };

  return (
    <div className="blog-page-view">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="page-header-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=80"
          alt="Event planning insights"
          className="page-header-bg"
        />
        <div className="container page-header-content">
          <span className="kicker">KNOWLEDGE HUB</span>
          <h1 className="page-title font-serif">
            Event Planning <span className="gold-italic">Blog</span>
          </h1>
          <p className="page-subtitle">
            Tips, trends, and insider perspectives for planning your next unforgettable celebration.
          </p>
        </div>
      </section>

      {/* Featured Guide Banner */}
      <section className="featured-blog-section">
        <div className="container">
          <div className="featured-blog-card" onClick={() => setReadingPost(featuredPost)}>
            <div className="featured-blog-text">
              <span className="featured-badge font-sans">FEATURED GUIDE</span>
              <h2 className="featured-title font-serif">{featuredPost.title}</h2>
              <p className="featured-summary">{featuredPost.summary}</p>
              <div className="blog-card-meta">
                <span><Clock size={14} className="inline mr-1 text-gold" />{featuredPost.readTime}</span>
                <span>•</span>
                <span><Calendar size={14} className="inline mr-1 text-gold" />{featuredPost.date}</span>
              </div>
              <button className="btn btn-primary btn-sm mt-4">
                <span>Read Full Article</span>
                <ArrowRight size={15} />
              </button>
            </div>
            <div className="featured-blog-media">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Wedding guide"
                className="featured-blog-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-dark font-serif">
              Latest <span className="gold-italic">Articles & Tips</span>
            </h2>
          </div>

          <div className="blog-posts-grid">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="blog-card"
                onClick={() => setReadingPost(post)}
              >
                <div className="blog-card-top">
                  <span className="blog-category-tag">{post.category}</span>
                  <span className="blog-read-time">
                    <Clock size={13} className="text-gold mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="blog-card-title font-serif">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>

                <div className="blog-card-footer">
                  <span className="read-more-text">Read Article →</span>
                  <span className="blog-date">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {readingPost && (
        <div className="modal-backdrop" onClick={() => setReadingPost(null)}>
          <div className="article-reader-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setReadingPost(null)}
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            <div className="article-reader-header">
              <span className="badge-tag">{readingPost.category}</span>
              <h2 className="article-reader-title font-serif">{readingPost.title}</h2>
              <div className="article-reader-meta">
                <span><Clock size={14} className="text-gold mr-1" />{readingPost.readTime}</span>
                <span>•</span>
                <span>By Good Vision Editorial Team</span>
              </div>
            </div>

            <div className="article-reader-body">
              <p className="article-lead">{readingPost.summary}</p>
              <hr className="article-divider" />
              <div className="article-full-content">
                <p>{readingPost.content}</p>
              </div>
            </div>

            <div className="article-reader-footer">
              <button
                onClick={() => {
                  setReadingPost(null);
                  onOpenQuote();
                }}
                className="btn btn-primary"
              >
                Consult Our Planners
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

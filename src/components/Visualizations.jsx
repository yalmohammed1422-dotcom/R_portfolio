import { useState, useEffect, useCallback } from 'react';
import { vizProjects } from '../data/visualizations.js';

// Prepend the Vite base URL so images load correctly on GitHub Pages
const BASE = import.meta.env.BASE_URL;
const imgUrl = (src) => `${BASE}${src}`;

export default function Visualizations() {
  const [activeProject, setActiveProject] = useState(0);
  const [lightbox, setLightbox]           = useState(null); // { index }
  const [imgError, setImgError]           = useState({});   // track broken images

  const current = vizProjects[activeProject];

  // ── Lightbox keyboard navigation ──
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    setLightbox(lb => ({
      index: (lb.index - 1 + current.images.length) % current.images.length,
    }));
  }, [current]);

  const nextImage = useCallback(() => {
    setLightbox(lb => ({
      index: (lb.index + 1) % current.images.length,
    }));
  }, [current]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e) => {
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   prevImage();
      if (e.key === 'ArrowRight')  nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, closeLightbox, prevImage, nextImage]);

  // Reset lightbox when switching projects
  const handleProjectSwitch = (i) => {
    setActiveProject(i);
    setLightbox(null);
    setImgError({});
  };

  const activeImg = lightbox !== null ? current.images[lightbox.index] : null;

  return (
    <section id="visualizations" className="section">
      <div className="sec-header">
        <div className="divider" />
        <h2 className="g-text">Data Visualizations</h2>
        <p>Click any chart to expand · use arrow keys or buttons to navigate</p>
      </div>

      {/* ── Project tabs ── */}
      <div className="chart-tabs" style={{ marginBottom: 36 }}>
        {vizProjects.map((p, i) => (
          <button
            key={p.id}
            className={`chart-tab${activeProject === i ? ' active' : ''}`}
            onClick={() => handleProjectSwitch(i)}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* ── Project header ── */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 8 }}>
          {current.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: 720 }}>
          {current.description}
        </p>
        <p style={{
          marginTop: 10, color: 'var(--text-dim)',
          fontSize: '.8rem', fontFamily: "'Space Mono', monospace",
        }}>
          {current.images.length} chart{current.images.length !== 1 ? 's' : ''} · click to expand
        </p>
      </div>

      {/* ── Image grid ── */}
      <div className="viz-grid">
        {current.images.map((img, i) => (
          <div
            key={i}
            className="viz-card"
            style={{ cursor: 'zoom-in', position: 'relative' }}
            onClick={() => setLightbox({ index: i })}
          >
            {/* Hover overlay */}
            <div className="viz-hover-overlay">
              <span style={{ fontSize: '1.6rem' }}>🔍</span>
              <span style={{ fontSize: '.85rem', fontWeight: 600 }}>Click to expand</span>
            </div>

            {imgError[i] ? (
              <div className="viz-img-placeholder">
                <span>📊</span>
                <p>Image not found</p>
                <code>{img.src}</code>
              </div>
            ) : (
              <img
                src={imgUrl(img.src)}
                alt={img.title}
                className="viz-img"
                onError={() => setImgError(prev => ({ ...prev, [i]: true }))}
              />
            )}

            <div className="viz-caption">
              <h4>{img.title}</h4>
              <p>{img.caption}</p>
            </div>

            {/* Index badge */}
            <div className="viz-index-badge">{i + 1}/{current.images.length}</div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {activeImg && (
        <div className="modal-overlay" onClick={closeLightbox}>
          <div
            className="viz-lightbox-box"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button className="modal-close" onClick={closeLightbox}>✕</button>

            {/* Counter */}
            <div className="viz-lb-counter">
              {lightbox.index + 1} / {current.images.length}
            </div>

            {/* Image */}
            <div className="viz-lb-img-wrap">
              <img
                src={imgUrl(activeImg.src)}
                alt={activeImg.title}
                className="viz-lb-img"
              />
            </div>

            {/* Caption */}
            <div className="viz-lb-caption">
              <h4>{activeImg.title}</h4>
              <p>{activeImg.caption}</p>
            </div>

            {/* Navigation arrows */}
            {current.images.length > 1 && (
              <div className="viz-lb-nav">
                <button className="viz-lb-arrow" onClick={prevImage}>← Prev</button>
                <div className="viz-lb-dots">
                  {current.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox({ index: i })}
                      className={`viz-lb-dot${i === lightbox.index ? ' active' : ''}`}
                    />
                  ))}
                </div>
                <button className="viz-lb-arrow" onClick={nextImage}>Next →</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

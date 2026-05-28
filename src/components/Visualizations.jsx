import { useState } from 'react';
import { vizProjects } from '../data/visualizations.js';

export default function Visualizations() {
  return (
    <section id="visualizations" className="section">
      <div className="sec-header">
        <div className="divider" />
        <h2 className="g-text">Data Visualizations</h2>
        <p>Visual insights extracted from my data science projects</p>
      </div>

      {vizProjects.map(project => (
        <VizBlock key={project.id} project={project} />
      ))}
    </section>
  );
}

function VizBlock({ project }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="viz-block">
      <div className="viz-block-header">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="viz-grid">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="viz-card"
            style={{ cursor:'zoom-in' }}
            onClick={() => setLightbox(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="viz-img"
              onError={(e) => { e.target.style.display='none'; }}
            />
            <div className="viz-caption">
              <h4>{img.title}</h4>
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="modal-overlay"
          onClick={() => setLightbox(null)}
          style={{ cursor:'zoom-out' }}
        >
          <div style={{ maxWidth:960, width:'100%', padding:20 }} onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              style={{ width:'100%', borderRadius:16, display:'block' }}
            />
            <p style={{ textAlign:'center', color:'var(--text-muted)', marginTop:14, fontSize:'.95rem' }}>
              {lightbox.title} — {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

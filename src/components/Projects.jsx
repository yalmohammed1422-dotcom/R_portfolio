import { useState } from 'react';
import { projects } from '../data/projects.js';
import VideoModal from './VideoModal.jsx';

const ALL = 'All';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [videoProject, setVideoProject]  = useState(null);

  // Build unique category list
  const categories = [ALL, ...new Set(projects.map(p => p.category))];

  const filtered =
    activeFilter === ALL
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="sec-header">
        <div className="divider" />
        <h2 className="g-text">Featured Projects</h2>
        <p>Real-world applications of Artificial Intelligence and Machine Learning</p>
      </div>

      {/* ── Filter tabs ── */}
      <div className="filter-row">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Projects grid ── */}
      <div className="projects-grid">
        {filtered.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onWatch={() => setVideoProject(project)}
          />
        ))}
      </div>

      {/* ── Video modal ── */}
      {videoProject && (
        <VideoModal
          project={videoProject}
          onClose={() => setVideoProject(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, onWatch }) {
  return (
    <div className="card project-card">
      {/* Header with title + tech tags */}
      <div className="project-header">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12 }}>
          <h3>{project.title}</h3>
          <span className="tag tag-purple" style={{ whiteSpace:'nowrap', flexShrink:0 }}>
            {project.category}
          </span>
        </div>
        <div className="tags" style={{ marginTop:12 }}>
          {project.techStack.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Image or emoji */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          style={{ width:'100%', height:200, objectFit:'cover', display:'block' }}
        />
      ) : (
        <div className="project-emoji">{project.emoji}</div>
      )}

      {/* Body */}
      <div className="project-body">
        <p className="project-desc">{project.description}</p>
        {project.keyFeatures && (
          <p className="project-desc">
            <strong style={{ color:'var(--blue-light)' }}>Key Features: </strong>
            {project.keyFeatures}
          </p>
        )}

        <div className="project-actions">
          {/* Watch Video button — only shown if videoUrl is set */}
          {project.videoUrl ? (
            <button className="btn btn-video" onClick={onWatch}>
              ▶ Watch Demo
            </button>
          ) : (
            <button
              className="btn btn-video"
              style={{ opacity:.45, cursor:'not-allowed' }}
              title="No video added yet — add a videoUrl in projects.js"
              disabled
            >
              ▶ No Video Yet
            </button>
          )}

          {project.githubUrl && project.githubUrl !== '#' && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              GitHub →
            </a>
          )}

          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

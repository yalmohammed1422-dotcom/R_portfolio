import { useEffect } from 'react';

function getEmbedUrl(url) {
  if (!url) return '';
  // youtu.be short links
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  // Full YouTube watch links
  if (url.includes('youtube.com/watch')) {
    const id = new URLSearchParams(url.split('?')[1]).get('v');
    return `https://www.youtube.com/embed/${id}`;
  }
  // Already an embed URL or local file
  return url;
}

export default function VideoModal({ project, onClose }) {
  const isYouTube =
    project.videoUrl.includes('youtube.com') ||
    project.videoUrl.includes('youtu.be');

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h3 className="g-text">{project.title}</h3>

        <div className="modal-video-wrap">
          {isYouTube ? (
            <iframe
              src={getEmbedUrl(project.videoUrl)}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video controls autoPlay>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <p style={{ marginTop: 16, color: 'var(--text-muted)', fontSize: '.9rem' }}>
          {project.description}
        </p>
      </div>
    </div>
  );
}

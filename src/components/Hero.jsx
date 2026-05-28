import { personalInfo } from '../data/config.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="fade-up-1">
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '.8rem',
          color: 'var(--blue-light)',
          letterSpacing: '.15em',
          textTransform: 'uppercase',
          marginBottom: '20px',
          display: 'block',
        }}>
          // Portfolio
        </span>
      </div>

      <h1 className="g-text fade-up-2">{personalInfo.title}</h1>

      <p className="hero-sub fade-up-3">{personalInfo.subtitle}</p>

      <p className="hero-tagline fade-up-4">{personalInfo.tagline}</p>

      <div className="hero-cta fade-up-4">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get In Touch
        </a>
      </div>

      <div className="hero-scroll fade-up-4">
        <span className="scroll-line" />
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

import { personalInfo } from '../data/config.js';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="g-text fade-up-1">{personalInfo.title}</h1>

      <p className="hero-sub fade-up-2">{personalInfo.subtitle}</p>

      <p className="hero-tagline fade-up-3">{personalInfo.tagline}</p>

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

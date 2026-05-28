import { personalInfo } from '../data/config.js';

const expertiseCards = [
  {
    icon: '🔧',
    title: 'Professional Experience',
    desc: '1+ years applying digital solutions — Leak Detection Systems (LDS) and Digital Solutions on enterprise-scale projects.',
  },
  {
    icon: '⚙️',
    title: 'System Integration',
    desc: 'Supported integration and testing of 3+ automation systems with real-time data pipelines for critical alarm storage.',
  },
  {
    icon: '📊',
    title: 'Data & Visualization',
    desc: 'Created 10+ performance dashboards for executive oversight using Power BI / Tableau for operational metrics.',
  },
  {
    icon: '🤖',
    title: 'Advanced AI Skills',
    desc: 'NLP, Computer Vision, end-to-end ML deployment, and IoT integration with intelligent AI systems.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="sec-header">
        <div className="divider" />
        <h2 className="g-text">About Me</h2>
        <p>My journey in Artificial Intelligence and Data Science</p>
      </div>

      <div className="about-bio">
        <p>
          Hello! I'm <strong>{personalInfo.name}</strong>, a{' '}
          <strong>Computer Engineering graduate</strong> with a concentration in{' '}
          <strong>Internet of Things (IoT)</strong>. I'm passionate about leveraging
          data and intelligent systems to create real-world impact.
        </p>
        <p>
          My foundation lies at the intersection of <strong>hardware and software</strong>,
          specializing in <strong>Machine Learning, Deep Learning, and AI systems</strong>.
          I thrive on building production-ready solutions — from raw data pipelines all the
          way through to deployed, scalable applications.
        </p>
        <p style={{ marginBottom: 0, color: 'var(--text)', fontSize: '1.05rem' }}>
          I am driven to continuously expand my expertise and apply technical skills to
          complex problems, specifically in{' '}
          <strong>IoT integration with Artificial Intelligence systems</strong>.
        </p>
      </div>

      <div className="about-cards">
        {expertiseCards.map((card, i) => (
          <div key={i} className="card about-card">
            <div className="about-card-icon">{card.icon}</div>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

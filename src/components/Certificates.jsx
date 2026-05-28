import { certificates } from '../data/certificates.js';

const colorMap = {
  blue:   { bg:'rgba(59,130,246,0.12)',  text:'#60a5fa', border:'rgba(59,130,246,0.25)'  },
  purple: { bg:'rgba(139,92,246,0.12)',  text:'#a78bfa', border:'rgba(139,92,246,0.25)'  },
  pink:   { bg:'rgba(236,72,153,0.12)',  text:'#f472b6', border:'rgba(236,72,153,0.25)'  },
  cyan:   { bg:'rgba(34,211,238,0.12)',  text:'#67e8f9', border:'rgba(34,211,238,0.25)'  },
};

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="sec-header">
        <div className="divider" />
        <h2 className="g-text">Certifications</h2>
        <p>Continuous learning and professional development</p>
      </div>

      <div className="certs-grid">
        {certificates.map(cert => {
          const c = colorMap[cert.color] || colorMap.blue;
          return (
            <div key={cert.id} className="card cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-issuer-title">{cert.title}</h3>
              <p className="cert-issuer" style={{ color: c.text }}>{cert.issuer}</p>
              {cert.date && (
                <span style={{
                  display:'inline-block', marginBottom:10,
                  background: c.bg, color: c.text,
                  border:`1px solid ${c.border}`,
                  borderRadius:20, padding:'3px 12px',
                  fontSize:'.75rem', fontWeight:600,
                  fontFamily:"'Space Mono',monospace",
                }}>
                  {cert.date}
                </span>
              )}
              <p className="cert-desc">{cert.description}</p>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ marginTop:16, fontSize:'.82rem', padding:'7px 14px' }}
                >
                  View Certificate →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about',          label: 'About' },
  { href: '#projects',       label: 'Projects' },
  { href: '#dashboard',      label: 'Dashboard' },
  { href: '#visualizations', label: 'Visualizations' },
  { href: '#certificates',   label: 'Certifications' },
  { href: '#contact',        label: 'Contact' },
];

export default function Navigation() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="top-nav">
      <nav className="top-nav-inner">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`nav-link${active === href ? ' active' : ''}`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

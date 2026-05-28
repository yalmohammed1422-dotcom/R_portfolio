import Hero          from './components/Hero.jsx';
import Navigation    from './components/Navigation.jsx';
import About         from './components/About.jsx';
import Projects      from './components/Projects.jsx';
import Dashboard     from './components/Dashboard.jsx';
import Visualizations from './components/Visualizations.jsx';
import Certificates  from './components/Certificates.jsx';
import Contact       from './components/Contact.jsx';
import { personalInfo } from './data/config.js';

export default function App() {
  return (
    <>
      {/* Animated background gradient mesh */}
      <div className="bg-fx" />

      {/* Hero */}
      <div className="container">
        <Hero />
        <Navigation />
      </div>

      {/* Main sections */}
      <div className="container">
        <About />
        <Projects />
        <Dashboard />
        <Visualizations />
        <Certificates />
      </div>

      {/* Contact (full-width for border effect) */}
      <Contact />

      {/* Footer */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {personalInfo.name} · Built with React</p>
      </footer>
    </>
  );
}

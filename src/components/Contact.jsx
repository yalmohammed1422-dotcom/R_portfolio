import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../data/config.js';

export default function Contact() {
  const formRef  = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | ok | err
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus('err');
      setErrMsg('EmailJS not configured yet. See src/data/config.js for setup instructions.');
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('ok');
      formRef.current.reset();
    } catch (err) {
      setStatus('err');
      setErrMsg(err?.text || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="section" style={{ borderTop:'1px solid var(--border)' }}>
      <div className="container">
        <div className="sec-header">
          <div className="divider" />
          <h2 className="g-text">Get In Touch</h2>
          <p>Let's talk about your next AI project</p>
        </div>

        <div className="contact-wrap">
          {/* ── Left: info ── */}
          <div className="contact-info-block">
            <h3>Let's Work<br />Together</h3>
            <p>
              I'm open to full-time roles, freelance projects, and research
              collaborations in AI, Data Science, and IoT. Drop me a message
              and I'll get back to you within 24 hours.
            </p>

            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <span className="contact-link-icon">✉️</span>
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon">💼</span>
                <span>LinkedIn Profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon">🐙</span>
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* EmailJS setup note */}
            {EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' && (
              <div style={{
                marginTop:28, background:'rgba(245,158,11,0.1)',
                border:'1px solid rgba(245,158,11,0.25)',
                borderRadius:12, padding:'14px 18px', fontSize:'.85rem',
                color:'#fbbf24', lineHeight:1.7,
              }}>
                ⚠️ <strong>EmailJS not set up yet.</strong><br />
                Open <code style={{ fontFamily:"'Space Mono',monospace" }}>src/data/config.js</code> and
                follow the 4-step instructions to enable the contact form.
              </div>
            )}
          </div>

          {/* ── Right: form ── */}
          <div className="card contact-form-card">
            <form ref={formRef} onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="from_name">Your Name</label>
                  <input id="from_name" name="from_name" type="text" placeholder="John Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="from_email">Your Email</label>
                  <input id="from_email" name="from_email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Collaboration / Job Offer / Project Inquiry" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or opportunity..." required />
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ minWidth:140 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>

                {status === 'ok' && (
                  <span className="form-status ok">✓ Message sent! I'll reply soon.</span>
                )}
                {status === 'err' && (
                  <span className="form-status err">✗ {errMsg}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

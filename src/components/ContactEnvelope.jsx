import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Github = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ✅ Best Practice: Read your EmailJS values from environment variables.
// If using Vite: use import.meta.env.VITE_EMAILJS_SERVICE_ID
// If using Create React App (CRA): use process.env.REACT_APP_EMAILJS_SERVICE_ID
const EMAILJS_SERVICE_ID = import.meta.env?.VITE_EMAILJS_SERVICE_ID || 'service_27ngl8f';
const EMAILJS_TEMPLATE_ID = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || 'template_xquya1l';
const EMAILJS_PUBLIC_KEY = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || 'l68Zu9wnVOcru8CV1';

export default function ContactEnvelope() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isOpened, setIsOpened] = useState(false);
  // status: 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(formState.name && formState.email && formState.message)) return;

    setStatus('sending');
    try {
      // ✅ Using emailjs.send with the proper arguments and public key
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus('sent');
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setStatus('idle');
        setIsOpened(false);
      }, 3200);
    } catch (err) {
      console.error('EmailJS request failed:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Let's Connect</span>
          <h2 className="section-title">Let's build something together</h2>
          <p className="section-desc">
            Reach out via my contact details or send a direct letter using the interactive envelope below.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '64px', alignItems: 'start', marginTop: '48px' }} className="contact-grid">
          {/* Left Postcard */}
          <div className="glass-card" style={{ padding: '40px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '32px', border: '1px solid var(--border-color)', position: 'relative', background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(var(--accent-rust-rgb), 0.02) 100%)' }}>
            
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 500, marginBottom: '10px', color: 'var(--text-primary)' }}>Suruthi Vijaya R</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Full Stack Developer & Java Backend Engineer</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-secondary)', color: 'var(--accent-rust)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={16} /></div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Email</p>
                  <a href="mailto:suruthi.vijaya.aiml@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>suruthi.vijaya.aiml@gmail.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-secondary)', color: 'var(--accent-rust)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={16} /></div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Phone</p>
                  <a href="tel:+917418842688" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>+91 74188 42688</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-secondary)', color: 'var(--accent-rust)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={16} /></div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>Madurai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
              <a href="https://github.com/Suruthi-Vijaya02" className="social-btn" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', transition: 'all 0.2s' }}><Github size={16} /></a>
              <a href="https://www.linkedin.com/in/suruthi-rajeev/" className="social-btn" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', transition: 'all 0.2s' }}><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Right Interactive Envelope */}
          <div style={{ position: 'relative', width: '100%', minHeight: '480px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }} className="envelope-container">
            <div style={{ position: 'absolute', bottom: 0, width: '100%', maxWidth: '440px', height: '220px', backgroundColor: 'var(--bg-secondary)', border: '1.5px solid var(--border-color)', borderTop: 'none', borderRadius: '0 0 12px 12px', zIndex: isOpened ? 2 : 5, boxShadow: '0 12px 28px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: isOpened ? 'none' : 'auto' }} className="envelope-front">
              {!isOpened && (
                <motion.button
                  onClick={() => setIsOpened(true)}
                  className="btn btn-primary"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ zIndex: 6, pointerEvents: 'auto' }}
                >
                  Write Me A Letter <Send size={14} />
                </motion.button>
              )}
            </div>

            <div style={{ position: 'absolute', bottom: '219px', width: '100%', maxWidth: '440px', height: '0', borderLeft: '220px solid transparent', borderRight: '220px solid transparent', borderBottom: isOpened ? '0px solid transparent' : '110px solid var(--bg-secondary)', zIndex: isOpened ? 1 : 5, transition: 'all 0.4s ease' }} className="envelope-flap" />

            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  className="letter-page"
                  initial={{ y: -300, opacity: 0, rotate: -10, scale: 0.9 }}
                  animate={{ y: -60, opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 130, damping: 15 }}
                  style={{ width: '90%', maxWidth: '400px', backgroundColor: 'var(--bg-primary)', border: '1.5px solid var(--border-color)', borderRadius: '8px', padding: '28px', boxShadow: 'var(--shadow-lg)', zIndex: 10, position: 'absolute' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '280px', color: 'var(--accent-sage)', textAlign: 'center', gap: '12px' }}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.5 }}>
                      <CheckCircle size={48} />
                    </motion.div>
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>Letter Sealed & Sent!</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>It's on its way to Suruthi's inbox.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  className="letter-page"
                  animate={
                    status === 'sending'
                      ? { x: 220, y: -340, rotate: 22, scale: 0.3, opacity: 0 }
                      : isOpened
                      ? { x: 0, y: -60, opacity: 1, scale: 1, rotate: 0 }
                      : { x: 0, y: 120, opacity: 0, scale: 1, rotate: 0 }
                  }
                  transition={status === 'sending' ? { duration: 0.85, ease: [0.6, -0.05, 0.9, 0.35] } : { duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  style={{ width: '90%', maxWidth: '400px', backgroundColor: 'var(--bg-primary)', border: '1.5px solid var(--border-color)', borderRadius: '8px', padding: '28px 28px 24px 28px', boxShadow: 'var(--shadow-lg)', zIndex: isOpened ? 10 : 1, position: 'absolute', pointerEvents: isOpened && status !== 'sending' ? 'all' : 'none' }}
                >
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--border-color)', paddingBottom: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-rust)', letterSpacing: '0.05em' }}>NEW DISPATCH</span>
                      <button type="button" onClick={() => setIsOpened(false)} disabled={status === 'sending'} style={{ background: 'none', border: 'none', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', cursor: 'pointer' }}>Close Letter</button>
                    </div>

                    <input type="text" placeholder="Your Name" required disabled={status === 'sending'} value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border-color)', borderRadius: 'var(--radius-xs)', fontSize: '0.85rem', outline: 'none', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
                    <input type="email" placeholder="Your Email Address" required disabled={status === 'sending'} value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border-color)', borderRadius: 'var(--radius-xs)', fontSize: '0.85rem', outline: 'none', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
                    <textarea placeholder="Write your message here..." rows="4" required disabled={status === 'sending'} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border-color)', borderRadius: 'var(--radius-xs)', fontSize: '0.85rem', outline: 'none', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', resize: 'none' }} />

                    {status === 'error' && (
                      <p style={{ fontSize: '0.78rem', color: '#B3261E', textAlign: 'center' }}>Something went wrong — please check your environment variables or template keys.</p>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px', position: 'relative' }}>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        style={{
                          width: '68px', height: '68px', borderRadius: 'var(--radius-full)',
                          backgroundColor: '#A24A32', border: '2px solid #C57059',
                          boxShadow: '0 4px 10px rgba(162, 74, 50, 0.4), inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.2)',
                          cursor: status === 'sending' ? 'default' : 'pointer',
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                          color: '#FFFFFF', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          position: 'relative',
                        }}
                        className="wax-seal-btn"
                      >
                        {status === 'sending' ? (
                          <Loader2 size={22} className="spin" />
                        ) : (
                          <>
                            <span style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.08em', marginTop: '2px' }}>SEAL</span>
                            <span style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.08em' }}>& SEND</span>
                          </>
                        )}

                        {status === 'sending' && (
                          <>
                            {[...Array(8)].map((_, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                                animate={{
                                  opacity: 0,
                                  x: Math.cos((i / 8) * 2 * Math.PI) * 42,
                                  y: Math.sin((i / 8) * 2 * Math.PI) * 42,
                                  scale: 0,
                                }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                style={{ position: 'absolute', top: '50%', left: '50%', width: 6, height: 6, borderRadius: '50%', background: '#C57059' }}
                              />
                            ))}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .social-btn:hover { color: var(--accent-rust) !important; background-color: var(--bg-secondary) !important; transform: translateY(-2px); }
        .wax-seal-btn:hover:not(:disabled) { transform: scale(1.1) rotate(8deg); box-shadow: 0 6px 16px rgba(162, 74, 50, 0.5), inset -1px -1px 4px rgba(0,0,0,0.3), inset 1px 1px 4px rgba(255,255,255,0.2) !important; background-color: #B5583E !important; }
        .wax-seal-btn:active:not(:disabled) { transform: scale(0.95); }
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 991px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .envelope-container { margin-top: 140px; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
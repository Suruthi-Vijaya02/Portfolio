import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        padding: '40px 0',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            © {new Date().getFullYear()} Suruthi Vijaya R. All rights reserved.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            className="scroll-top-btn"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .scroll-top-btn:hover {
          color: var(--accent-rust) !important;
          border-color: var(--accent-rust) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}

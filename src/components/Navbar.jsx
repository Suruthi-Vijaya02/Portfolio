import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hobbies', href: '#hobbies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 24px',
        width: '100%',
        pointerEvents: 'none', /* Let scrolls pass through outside the bar */
      }}
    >
      {/* Floating Centered Nav Capsule */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          padding: '8px 24px',
          backgroundColor: 'var(--bg-glass)',
          backdropFilter: 'blur(var(--blur-glass))',
          WebkitBackdropFilter: 'blur(var(--blur-glass))',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--radius-full)',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          pointerEvents: 'all', /* Active interaction on the capsule itself */
          maxWidth: '100%',
        }}
        className="nav-capsule"
      >
        {/* Nav Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-menu-container"
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '24px',
            }}
          >
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 650,
                    color: 'var(--text-secondary)',
                    position: 'relative',
                    padding: '6px 2px',
                    letterSpacing: '0.02em',
                  }}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle inside Capsule */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--bg-secondary)',
              width: '34px',
              height: '34px',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile controls (Only active in mobile view) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '12px',
          }}
          className="mobile-controls"
        >
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--bg-secondary)',
              width: '34px',
              height: '34px',
            }}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '24px',
          right: '24px',
          backgroundColor: 'var(--bg-primary)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          maxHeight: isOpen ? '320px' : 0,
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: isOpen ? 'all' : 'none',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            textAlign: 'center',
          }}
        >
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'block',
                  padding: '8px 0',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CSS overrides */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu-container {
            display: flex !important;
          }
        }
        @media (max-width: 768px) {
          .mobile-controls {
            display: flex !important;
          }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--accent-pink);
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: var(--text-primary) !important;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}

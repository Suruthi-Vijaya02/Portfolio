import React, { useState } from 'react';
import { ExternalLink, BookOpen, Layers } from 'lucide-react';

const Github = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectsBookshelf() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const projects = [
    {
      title: 'Hospital Management System',
      desc: 'An enterprise-level clinical administration system. It features automated patient scheduling, secure electronic health records (EHR) management, and an interactive doctors portal to track diagnoses and prescriptions.',
      tech: ['Nest.js', 'Node.js', 'MongoDB', 'JWT Auth', 'WebSockets'],
      github: 'https://github.com/Suruthi-Vijaya02/hospitalManagement',
      demo: null,
      color: '#2D3E50', // Deep slate indigo
      accentColor: '#D29A44', // Soft ochre gold
      spineTitle: 'HOSPITAL ADMIN',
    },
    {
      title: 'Lung Disease Analyzer',
      desc: 'An AI-powered diagnostic helper that evaluates chest X-ray images. Built using custom convolutional neural network (CNN) models. Deployed as a lightweight API with web interfaces for medical technicians.',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'Next.js', 'Tailwind'],
      github: 'https://github.com/Suruthi-Vijaya02/ML-lung-disease-classifier',
      demo: null,
      color: '#4A5C52', // Deep forest sage
      accentColor: '#EB7E55', // Soft terracotta
      spineTitle: 'DISEASE ANALYZER',
    },
    {
      title: 'Student Management System',
      desc: 'A robust database system handling enrollment, grading modules, and course schedules. Incorporates optimized SQL queries and transactional integrity to manage academic records.',
      tech: ['Java SE', 'JDBC', 'MySQL', 'JavaFX', 'JUnit'],
      github: 'https://github.com/Suruthi-Vijaya02/student-management-system',
      demo: null,
      color: '#A24A32', // Muted terracotta/rust
      accentColor: '#F3ECE3', // Sand
      spineTitle: 'STUDENT REGISTRY',
    },
    {
      title: 'AI Freelance Marketplace',
      desc: 'A collaborative hub connecting freelance AI practitioners with enterprise clients. Built with real-time bidding, integrated chat utilities, and secure payment processing APIs.',
      tech: ['React.js', 'Express.js', 'Node.js', 'Socket.IO', 'Stripe'],
      github: null,
      demo: null,
      color: '#B5843C', // Dull mustard gold
      accentColor: '#2D3E50', // Indigo
      spineTitle: 'FREELANCE HUB',
    },
    {
      title: 'To-Do List App',
      desc: 'A highly responsive productivity dashboard supporting task categorization, priority rankings, drag-and-drop ordering, and persistent synchronization via client localStorage.',
      tech: ['React.js', 'TailwindCSS', 'LocalStorage', 'Lucide Icons'],
      github: null,
      demo: null,
      color: '#343B43', // Dark charcoal
      accentColor: '#7AA391', // Sage
      spineTitle: 'PRODUCTIVITY APP',
    },
  ];

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-desc">
            Explore my interactive virtual bookshelf. Click a book spine to view full project specifications and architecture.
          </p>
        </div>

        {/* Bookshelf Ledge & Book Grid Container */}
        <div
          style={{
            maxWidth: '760px',
            margin: '60px auto 30px auto',
            position: 'relative',
          }}
        >
          {/* Books Shelf Grid */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              gap: '12px',
              paddingBottom: '2px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {projects.map((proj, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`book-spine-btn ${isSelected ? 'active' : ''}`}
                  style={{
                    backgroundColor: proj.color,
                    border: `1.5px solid ${proj.accentColor}33`,
                    borderTop: `6px solid ${proj.accentColor}`,
                    borderBottom: '4px solid rgba(0,0,0,0.3)',
                    width: '60px',
                    height: isSelected ? '280px' : '260px',
                    borderRadius: '4px 4px 0 0',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 4px 12px 4px',
                    boxShadow: isSelected
                      ? '0 15px 35px rgba(0, 0, 0, 0.4), inset -4px 0 10px rgba(255,255,255,0.05), inset 4px 0 10px rgba(0,0,0,0.2)'
                      : '0 8px 16px rgba(0, 0, 0, 0.2), inset -3px 0 8px rgba(255,255,255,0.03), inset 3px 0 8px rgba(0,0,0,0.2)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: isSelected
                      ? 'translateY(-16px) rotate(-1.5deg)'
                      : 'translateY(0) rotate(0deg)',
                    outline: 'none',
                    position: 'relative',
                  }}
                >
                  {/* Decorative book bands */}
                  <div
                    style={{
                      width: '80%',
                      height: '2px',
                      backgroundColor: proj.accentColor,
                      opacity: 0.7,
                    }}
                  />

                  {/* Vertical Spine Title */}
                  <div
                    style={{
                      writingMode: 'vertical-rl',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      color: proj.color === '#F3ECE3' ? '#1F2226' : '#FFFFFF',
                      opacity: isSelected ? 1 : 0.75,
                      transform: 'rotate(180deg)',
                      textAlign: 'center',
                      flexGrow: 1,
                      marginTop: '12px',
                    }}
                  >
                    {proj.spineTitle}
                  </div>

                  {/* Tiny book icon on bottom */}
                  <div
                    style={{
                      color: proj.accentColor,
                      opacity: 0.8,
                    }}
                  >
                    <BookOpen size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Wooden Shelf Board */}
          <div
            style={{
              height: '18px',
              width: '100%',
              backgroundColor: '#523C27', /* Rich dark walnut */
              borderRadius: '3px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0,0,0,0.1)',
              position: 'relative',
              zIndex: 3,
            }}
          >
            {/* Shelf Shadow/Bevel */}
            <div
              style={{
                height: '4px',
                width: '100%',
                backgroundColor: '#3D2B1B',
                borderRadius: '0 0 3px 3px',
              }}
            />
          </div>
        </div>

        {/* Selected Project Detail Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '760px',
            margin: '40px auto 0 auto',
            padding: '36px',
            textAlign: 'left',
            position: 'relative',
            animation: 'slideUp 0.4s ease-out',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}
        >
          {/* Subtle colored accent light */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '6px',
              height: '100%',
              backgroundColor: projects[selectedIdx].color,
            }}
          />

          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '14px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.65rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
              >
                {projects[selectedIdx].title}
              </h3>
              
              {/* Render buttons conditionally - only if links are available */}
              {(projects[selectedIdx].github || projects[selectedIdx].demo) && (
                <div style={{ display: 'flex', gap: '10px' }}>
                  {projects[selectedIdx].github && (
                    <a
                      href={projects[selectedIdx].github}
                      className="project-link-btn"
                      title="Source Code"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.2s',
                      }}
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {projects[selectedIdx].demo && (
                    <a
                      href={projects[selectedIdx].demo}
                      className="project-link-btn"
                      title="Live Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.2s',
                      }}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '24px',
              }}
            >
              {projects[selectedIdx].desc}
            </p>

            <div>
              <p
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--text-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Layers size={12} /> Tech Stack & Tools
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                {projects[selectedIdx].tech.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .book-spine-btn:hover {
          transform: translateY(-16px) rotate(-1.5deg) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35) !important;
        }
        .project-link-btn:hover {
          color: var(--accent-rust) !important;
          border-color: var(--accent-rust) !important;
          transform: scale(1.05);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .book-spine-btn {
            width: 48px !important;
            height: 220px !important;
          }
          .book-spine-btn.active {
            height: 236px !important;
          }
          .book-spine-btn div {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { ArrowRight, Code, Cpu, Database, Award, Sparkles, Brain, Download } from 'lucide-react';
import profilePhoto from '../assets/photo.png';

export default function Hero() {
  const badges = [
    { label: 'Java Backend', icon: <Database size={14} />, top: '15%', left: '-5%', delay: '0s' },
    { label: 'React.js', icon: <Code size={14} />, top: '42%', left: '-15%', delay: '1s' },
    { label: 'AI & ML', icon: <Brain size={14} />, top: '70%', left: '-5%', delay: '2s' },
    { label: 'Problem Solver', icon: <Award size={14} />, top: '22%', right: '-12%', delay: '1.5s' },
    { label: 'Creative Design', icon: <Sparkles size={14} />, top: '55%', right: '-16%', delay: '0.5s' },
    { label: 'Full Stack', icon: <Cpu size={14} />, top: '80%', right: '-6%', delay: '2.5s' },
  ];

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 80% 20%, rgba(var(--accent-pink-rgb), 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(var(--accent-sage-rgb), 0.04) 0%, transparent 50%)',
        paddingTop: '100px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Floating background particles */}
      <div className="bg-particle particle-1" />
      <div className="bg-particle particle-2" />
      <div className="bg-particle particle-3" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.75fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Text Content */}
          <div style={{ textAlign: 'left' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: '28px',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Hi, I'm <br />
              <span
                style={{
                  color: 'var(--accent-pink)',
                  position: 'relative',
                  fontWeight: 600,
                }}
              >
                Suruthi Vijaya R
              </span>
            </h1>

            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '24px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 12px',
                alignItems: 'center',
              }}
            >
              <span>Full Stack Developer</span>
              <span style={{ color: 'var(--text-light)', fontWeight: 300 }}>•</span>
              <span>Java Backend Engineer</span>
              <span style={{ color: 'var(--text-light)', fontWeight: 300 }}>•</span>
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-secondary)',
                marginBottom: '44px',
                maxWidth: '540px',
                lineHeight: 1.7,
              }}
            >
              I build powerful, scalable backend systems and craft refined, creative digital experiences. Resolving complex algorithmic challenges with elegant, structured code.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <button
                className="btn btn-primary"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work <ArrowRight size={16} />
              </button>

              {/* Seamless Download Resume Link */}
              <a
                href="/resume.pdf"
                download="Suruthi_Vijaya_Resume.pdf"
                className="btn btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
              >
                Resume <Download size={16} />
              </a>

              <button
                className="btn btn-secondary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Graphic / Portrait Section */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
            className="hero-image-container"
          >
            {/* Elegant double offset background frame */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '420px',
                borderRadius: '160px 160px 40px 40px',
                border: '1.5px solid rgba(var(--accent-pink-rgb), 0.2)',
                transform: 'rotate(-4deg) translate(-8px, 4px)',
                zIndex: 1,
                pointerEvents: 'none',
                backgroundColor: 'rgba(var(--accent-pink-rgb), 0.02)',
              }}
              className="offset-frame-back"
            />

            {/* Main Profile Frame (Arched Shape) */}
            <div
              style={{
                width: '320px',
                height: '420px',
                borderRadius: '160px 160px 40px 40px',
                border: '3px solid var(--accent-pink)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(var(--accent-pink-rgb), 0.15)',
                zIndex: 2,
                backgroundColor: 'var(--bg-secondary)',
                animation: 'pulseFrame 6s ease-in-out infinite',
              }}
              className="portrait-frame"
            >
              {/* Profile Image reinstated from assets/photo.png */}
              <img
                src={profilePhoto}
                alt="Suruthi Vijaya R"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1,
                  transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                }}
                className="portrait-img"
              />

              {/* Glowing color gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(var(--accent-pink-rgb), 0.15) 0%, transparent 50%)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Floating Badges */}
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="glass-card hero-badge"
                style={{
                  position: 'absolute',
                  top: badge.top,
                  left: badge.left,
                  right: badge.right,
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 3,
                  whiteSpace: 'nowrap',
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: badge.delay,
                  cursor: 'default',
                  borderColor: 'rgba(var(--accent-pink-rgb), 0.15)',
                }}
              >
                <span style={{ color: 'var(--accent-pink)', display: 'flex', alignItems: 'center' }}>
                  {badge.icon}
                </span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .portrait-frame:hover .portrait-img {
          transform: scale(1.05);
        }
        
        /* Floating background particles style */
        .bg-particle {
          position: absolute;
          border-radius: var(--radius-full);
          filter: blur(40px);
          opacity: 0.35;
          z-index: 1;
          pointer-events: none;
        }
        .particle-1 {
          width: 250px;
          height: 250px;
          background: rgba(var(--accent-pink-rgb), 0.12);
          top: 15%;
          left: -50px;
          animation: float 8s ease-in-out infinite;
        }
        .particle-2 {
          width: 300px;
          height: 300px;
          background: rgba(var(--accent-sage-rgb), 0.08);
          bottom: 10%;
          right: -50px;
          animation: float 10s ease-in-out infinite alternate;
        }
        .particle-3 {
          width: 150px;
          height: 150px;
          background: rgba(var(--accent-pink-rgb), 0.06);
          top: 50%;
          left: 60%;
          animation: float 7s ease-in-out infinite alternate 1s;
        }

        @keyframes pulseFrame {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(0.5deg); }
        }

        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
            text-align: center;
          }
          .hero-grid > div {
            text-align: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 480px) {
          .portrait-frame, .offset-frame-back {
            width: 260px !important;
            height: 340px !important;
          }
          .hero-image-container .hero-badge {
            padding: 8px 12px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
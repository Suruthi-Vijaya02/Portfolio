import React from 'react';

export default function Hobbies() {
  const hobbies = [
    {
      id: 'crochet',
      title: 'Crochet',
      desc: 'Slow, looped, one stitch at a time. Crafting cozy textures.',
      icon: (
        <svg viewBox="0 0 100 80" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hobby-svg">
          {/* Yarn Ball (Skein) */}
          <circle cx="45" cy="45" r="22" stroke="var(--accent-rust)" strokeWidth="3" className="yarn-ball" />
          <path d="M 30,35 Q 45,45 60,35" stroke="var(--accent-rust)" strokeWidth="2" opacity="0.7" />
          <path d="M 32,45 Q 45,35 58,45" stroke="var(--accent-rust)" strokeWidth="2" opacity="0.7" />
          <path d="M 35,55 Q 45,45 55,55" stroke="var(--accent-rust)" strokeWidth="2" opacity="0.7" />
          {/* Loose Yarn Strand */}
          <path d="M 55,60 C 65,70 75,55 85,65" stroke="var(--accent-rust)" strokeWidth="2.5" className="yarn-strand" />
          {/* Crochet Hook */}
          <path d="M 25,65 L 75,22" stroke="var(--text-primary)" strokeWidth="3" className="crochet-hook" />
          {/* Hook Tip detail */}
          <path d="M 75,22 Q 78,20 75,17" stroke="var(--text-primary)" strokeWidth="3" fill="none" className="crochet-hook-tip" />
        </svg>
      ),
      blobShape: '30% 70% 70% 30% / 50% 60% 40% 50%',
      hoverBlob: '50% 50% 30% 70% / 50% 60% 30% 70%',
      bgTint: 'rgba(212, 106, 67, 0.05)',
      accent: 'var(--accent-rust)',
    },
    {
      id: 'organizing',
      title: 'Organizing',
      desc: 'Sorting spaces, cataloging items, and creating clean visual structures.',
      icon: (
        <svg viewBox="0 0 100 80" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hobby-svg">
          {/* Outer Cabinet frame */}
          <rect x="25" y="15" width="50" height="50" rx="4" stroke="var(--accent-indigo)" strokeWidth="3" />
          {/* Drawer 1 (Top) */}
          <line x1="25" y1="31" x2="75" y2="31" stroke="var(--accent-indigo)" />
          <circle cx="50" cy="23" r="2.5" fill="var(--accent-indigo)" />
          {/* Drawer 2 (Middle) - Slides out on hover */}
          <g className="middle-drawer">
            <rect x="22" y="32" width="56" height="15" rx="2" fill="var(--bg-primary)" stroke="var(--accent-indigo)" strokeWidth="2.5" />
            <circle cx="50" cy="39.5" r="2.5" fill="var(--accent-indigo)" />
          </g>
          {/* Drawer 3 (Bottom) */}
          <line x1="25" y1="48" x2="75" y2="48" stroke="var(--accent-indigo)" />
          <circle cx="50" cy="57" r="2.5" fill="var(--accent-indigo)" />
        </svg>
      ),
      blobShape: '60% 40% 50% 50% / 40% 40% 60% 60%',
      hoverBlob: '45% 55% 45% 55% / 55% 45% 55% 45%',
      bgTint: 'rgba(45, 62, 80, 0.05)',
      accent: 'var(--accent-indigo)',
    },
    {
      id: 'journaling',
      title: 'Journaling',
      desc: 'Bullet layouts, pressed botanicals, and hand-written reflections.',
      icon: (
        <svg viewBox="0 0 100 80" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hobby-svg">
          {/* Open Book Pages */}
          <path d="M 50,60 C 40,55 25,55 15,58 L 15,22 C 25,20 40,20 50,25" stroke="var(--accent-gold)" strokeWidth="3" className="book-page-left" />
          <path d="M 50,60 C 60,55 75,55 85,58 L 85,22 C 75,20 60,20 50,25" stroke="var(--accent-gold)" strokeWidth="3" className="book-page-right" />
          {/* Center binding line */}
          <line x1="50" y1="25" x2="50" y2="60" stroke="var(--accent-gold)" />
          {/* Lined paper details */}
          <line x1="22" y1="33" x2="43" y2="33" stroke="var(--accent-gold)" strokeWidth="1.5" opacity="0.4" />
          <line x1="22" y1="42" x2="43" y2="42" stroke="var(--accent-gold)" strokeWidth="1.5" opacity="0.4" />
          {/* Sparkles / Press star */}
          <path d="M 70,30 Q 73,33 76,30 Q 73,27 70,30 Z" fill="var(--accent-gold)" stroke="none" className="journal-sparkle" />
          {/* Writing Pencil */}
          <g className="journal-pencil">
            <line x1="62" y1="48" x2="78" y2="32" stroke="var(--text-primary)" strokeWidth="3" />
            <path d="M 62,48 L 58,52 L 64,50 Z" fill="var(--text-primary)" stroke="none" />
          </g>
        </svg>
      ),
      blobShape: '50% 50% 30% 70% / 50% 30% 70% 50%',
      hoverBlob: '30% 70% 70% 30% / 60% 40% 60% 40%',
      bgTint: 'rgba(210, 154, 68, 0.05)',
      accent: 'var(--accent-gold)',
    },
    {
      id: 'mehandi',
      title: 'Mehandi art',
      desc: 'Intricate paisleys and freehand patterns drawn on canvas.',
      icon: (
        <svg viewBox="0 0 100 80" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="hobby-svg">
          {/* Mandala center flower */}
          <circle cx="50" cy="45" r="4" fill="var(--accent-sage)" stroke="none" className="mehandi-center" />
          {/* Inner Petals ring */}
          <path d="M 50,37 Q 50,45 50,45 M 50,53 Q 50,45 50,45 M 42,45 Q 50,45 50,45 M 58,45 Q 50,45 50,45" stroke="var(--accent-sage)" strokeWidth="2" className="mehandi-petals" />
          {/* Paisley outline background */}
          <path d="M 50,18 C 65,30 65,58 50,68 C 35,58 35,30 50,18 Z" stroke="var(--accent-sage)" strokeWidth="2.5" className="mehandi-paisley" />
          {/* Henna Piping Cone (Drawing) */}
          <g className="henna-cone">
            <path d="M 75,15 L 56,38 L 62,42 Z" fill="var(--accent-sage)" opacity="0.9" />
            <line x1="56" y1="38" x2="52" y2="43" stroke="var(--accent-sage)" strokeWidth="3" />
          </g>
        </svg>
      ),
      blobShape: '40% 60% 70% 30% / 50% 40% 60% 50%',
      hoverBlob: '70% 30% 50% 50% / 40% 60% 40% 60%',
      bgTint: 'rgba(95, 122, 110, 0.05)',
      accent: 'var(--accent-sage)',
    },
  ];

  return (
    <section id="hobbies" className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Beyond Code</span>
          <h2 className="section-title">Things that bring me joy</h2>
          <p className="section-desc">
            Exploring visual rhythms and tactile details through traditional craft and creative play.
          </p>
        </div>

        {/* Staggered Organic Pinboard Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginTop: '60px',
            position: 'relative',
          }}
          className="hobbies-pinboard"
        >
          {/* Decorative background grid sheet to resemble a craft desk */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(var(--border-color) 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
              opacity: 0.45,
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          {hobbies.map((hob) => (
            <div
              key={hob.id}
              className={`hobby-blob-container blob-${hob.id}`}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 24px',
                minHeight: '320px',
                textAlign: 'center',
                cursor: 'pointer',
                zIndex: 1,
                transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                // Custom organic morphing shape
                borderRadius: hob.blobShape,
                backgroundColor: 'var(--bg-primary)',
                border: '2px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderRadius = hob.hoverBlob;
                e.currentTarget.style.borderColor = hob.accent;
                e.currentTarget.style.backgroundColor = hob.bgTint;
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.transform = 'translateY(-10px) rotate(1deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderRadius = hob.blobShape;
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
              }}
            >
              {/* SVG Graphic Center */}
              <div
                style={{
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: 'var(--text-primary)',
                  transition: 'transform 0.4s ease',
                }}
                className="svg-icon-wrapper"
              >
                {hob.icon}
              </div>

              {/* Text */}
              <div style={{ position: 'relative', zIndex: 3 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {hob.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    maxWidth: '190px',
                    margin: '0 auto',
                  }}
                >
                  {hob.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Staggered layout offsets for visual interest */
        @media (min-width: 992px) {
          .blob-organizing { transform: translateY(30px); }
          .blob-mehandi { transform: translateY(30px); }
        }

        /* SVG Micro-animations */
        .hobby-blob-container:hover .svg-icon-wrapper {
          transform: scale(1.15);
        }

        /* 1. Crochet Hook & Yarn Roll */
        .hobby-blob-container:hover .crochet-hook {
          animation: crochetHookWiggle 1.5s ease-in-out infinite;
          transform-origin: 25px 65px;
        }
        .hobby-blob-container:hover .yarn-ball {
          animation: spinYarn 6s linear infinite;
          transform-origin: 45px 45px;
        }
        .hobby-blob-container:hover .yarn-strand {
          animation: waveStrand 1.5s ease-in-out infinite alternate;
        }
        @keyframes crochetHookWiggle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg) translate(2px, -2px); }
        }
        @keyframes spinYarn {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waveStrand {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 15; }
        }

        /* 2. Organizing Drawer Slide */
        .hobby-blob-container:hover .middle-drawer {
          animation: slideOutDrawer 1.5s cubic-bezier(0.19, 1, 0.22, 1) infinite alternate;
        }
        @keyframes slideOutDrawer {
          0% { transform: translateX(0); }
          100% { transform: translateX(-5px) translateY(-2px); filter: drop-shadow(4px 4px 6px rgba(0,0,0,0.15)); }
        }

        /* 3. Journaling Pencil Write */
        .hobby-blob-container:hover .journal-pencil {
          animation: pencilWrite 1.5s ease-in-out infinite alternate;
          transform-origin: 58px 52px;
        }
        .hobby-blob-container:hover .journal-sparkle {
          animation: sparkleGrow 1.5s ease-in-out infinite alternate;
        }
        @keyframes pencilWrite {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-4px, 4px) rotate(-10deg); }
        }
        @keyframes sparkleGrow {
          0% { transform: scale(0.8) translate(-5px, -5px); opacity: 0.5; }
          100% { transform: scale(1.3) translate(0, 0); opacity: 1; }
        }

        /* 4. Mehandi Art Draw */
        .hobby-blob-container:hover .henna-cone {
          animation: coneDraw 2.5s ease-in-out infinite;
          transform-origin: 75px 15px;
        }
        .hobby-blob-container:hover .mehandi-paisley {
          animation: mehandiGlow 2s ease-in-out infinite alternate;
        }
        @keyframes coneDraw {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-3px, 2px) rotate(2deg); }
          66% { transform: translate(2px, -3px) rotate(-2deg); }
        }
        @keyframes mehandiGlow {
          from { stroke: var(--accent-sage); filter: drop-shadow(0 0 0px var(--accent-sage)); }
          to { stroke: #A7C5B6; filter: drop-shadow(0 0 4px var(--accent-sage)); }
        }
      `}</style>
    </section>
  );
}

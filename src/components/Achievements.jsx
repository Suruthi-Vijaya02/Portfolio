import React from 'react';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: '100+ Solved',
      platform: 'LeetCode',
      detail: 'Algorithmic Problems Solved in Java',
      icon: <Star size={24} />,
      badgeColor: 'linear-gradient(135deg, #F9D066 0%, #D29A44 100%)', // Gold
      textColor: '#D29A44',
      shadow: 'rgba(210, 154, 68, 0.12)',
    },
    {
      title: 'Gold Badge',
      platform: 'HackerRank (Java)',
      detail: 'Problem Solving & Language Proficiency',
      icon: <Trophy size={24} />,
      badgeColor: 'linear-gradient(135deg, #F9D066 0%, #D29A44 100%)', // Gold
      textColor: '#D29A44',
      shadow: 'rgba(210, 154, 68, 0.12)',
    },
    {
      title: 'Bronze Badge',
      platform: 'HackerRank (Python)',
      detail: 'Core Syntax & Logic Benchmarks',
      icon: <Award size={24} />,
      badgeColor: 'linear-gradient(135deg, #DF9C7B 0%, #A25D3D 100%)', // Bronze
      textColor: '#A25D3D',
      shadow: 'rgba(162, 93, 61, 0.12)',
    },
    {
      title: 'Bronze Badge',
      platform: 'HackerRank (SQL)',
      detail: 'Query Structuring & Schema Joins',
      icon: <ShieldCheck size={24} />,
      badgeColor: 'linear-gradient(135deg, #DF9C7B 0%, #A25D3D 100%)', // Bronze
      textColor: '#A25D3D',
      shadow: 'rgba(162, 93, 61, 0.12)',
    },
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Achievements</span>
          <h2 className="section-title">Milestones & Wins</h2>
          <p className="section-desc">
            Standard certifications and problem-solving benchmarks achieved across various technical platforms.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="glass-card achievement-card"
              style={{
                padding: '36px 24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {/* Medal Ring Graphic */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  background: ach.badgeColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: `0 8px 24px ${ach.shadow}`,
                  marginBottom: '8px',
                  position: 'relative',
                  zIndex: 2,
                }}
                className="medal-icon-container"
              >
                {ach.icon}
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {ach.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: ach.textColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '12px',
                  }}
                >
                  {ach.platform}
                </p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {ach.detail}
                </p>
              </div>

              {/* Decorative radial background flare */}
              <div
                style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  borderRadius: 'var(--radius-full)',
                  background: `radial-gradient(circle, ${ach.shadow} 0%, transparent 70%)`,
                  bottom: '-30px',
                  right: '-30px',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .achievement-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-hover);
        }
        .achievement-card:hover .medal-icon-container {
          transform: scale(1.08) rotate(5deg);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15) !important;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </section>
  );
}

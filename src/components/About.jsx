import React from 'react';
import { Lightbulb, Code2, Brain, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    {
      title: 'Problem Solver',
      desc: 'Enjoys dissecting complex algorithms and finding optimized pathways to address challenging performance hurdles.',
      actionNote: 'Focuses on runtime complexity and database query profiling.',
      icon: <Lightbulb size={22} />,
      color: 'var(--accent-pink)',
    },
    {
      title: 'Backend Lover',
      desc: 'Passionate about structured Java microservices, API architecture, performance tuning, and robust data integrity.',
      actionNote: 'Architects with Spring Boot REST services and transactional safeguards.',
      icon: <Code2 size={22} />,
      color: 'var(--accent-sage)',
    },
    {
      title: 'AI & ML Explorer',
      desc: 'Fascinated by neural networks, natural language processing, and integrating intelligent model layers into web projects.',
      actionNote: 'Applies TensorFlow and Python data pipelines for classification tasks.',
      icon: <Brain size={22} />,
      color: 'var(--accent-indigo)',
    },
    {
      title: 'Creative Mind',
      desc: 'Believes software is functional art. Merges design aesthetics with developer best practices for the ideal user flow.',
      actionNote: 'Combines elegant CSS layouts with structured reusable React hooks.',
      icon: <Palette size={22} />,
      color: 'var(--accent-gold)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background botanic sphere */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: 'var(--radius-full)',
          background: 'radial-gradient(circle, rgba(var(--accent-pink-rgb), 0.04) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: 'var(--radius-full)',
          background: 'radial-gradient(circle, rgba(var(--accent-sage-rgb), 0.03) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-subtitle" style={{ color: 'var(--accent-pink)' }}>About Me</span>
          <h2 className="section-title">More than just code</h2>
          <p className="section-desc">
            I am a software engineer dedicated to crafting clean, structured codebase systems and user interfaces that feel intuitive and responsive.
          </p>
        </div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            marginTop: '48px',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="about-stationery-card"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: '36px 28px',
                textAlign: 'left',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotate: 1,
                scale: 1.01,
                boxShadow: '0 16px 36px rgba(var(--accent-pink-rgb), 0.15)',
                borderColor: 'var(--accent-pink)',
              }}
              transition={{ duration: 0.4, cubicBezier: [0.165, 0.84, 0.44, 1] }}
            >
              {/* Top Colored Accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  backgroundColor: card.color,
                }}
              />

              {/* Icon Container with subtle animation */}
              <motion.div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                }}
                className="about-icon-box"
                whileHover={{ scale: 1.1, rotate: -5, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}
              >
                {card.icon}
              </motion.div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {card.desc}
                </p>
              </div>

              {/* Dotted divider line - grows on hover */}
              <div
                style={{
                  height: '1px',
                  width: '0%',
                  borderBottom: '1px dashed var(--border-hover)',
                  transition: 'width 0.4s ease',
                  margin: '4px 0',
                }}
                className="about-card-divider"
              />

              {/* Revealable action note */}
              <motion.p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-light)',
                  fontWeight: 650,
                  opacity: 0.7,
                  lineHeight: 1.4,
                }}
                className="about-card-action"
                initial={{ y: 4, opacity: 0.7, color: 'var(--text-light)' }}
                whileHover={{ y: 0, opacity: 1, color: 'var(--text-primary)' }}
                transition={{ duration: 0.4 }}
              >
                {card.actionNote}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .about-stationery-card:hover .about-card-divider {
          width: 100% !important;
        }
      `}</style>
    </section>
  );
}
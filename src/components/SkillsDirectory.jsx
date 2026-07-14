import React, { useState, useEffect } from 'react';
import { Server, Layout, Database, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'backend', label: 'Backend Development', icon: <Server size={16} /> },
  { id: 'frontend', label: 'Frontend & UI', icon: <Layout size={16} /> },
  { id: 'database', label: 'Databases & Tools', icon: <Database size={16} /> },
  { id: 'aiml', label: 'AI & Machine Learning', icon: <Cpu size={16} /> },
];

const skillsData = {
  backend: [
    { name: 'Java', level: 90, desc: 'Core Java, Multithreading, OOP standards, robust architectures.', usage: 'Enterprise Application Foundations' },
    { name: 'Node.js', level: 80, desc: 'Asynchronous event-driven server runtime environment.', usage: 'Lightweight Server Solutions' },
    { name: 'Express.js', level: 80, desc: 'Web framework for Node.js, routing, and middlewares.', usage: 'Fast API Endpoints' },
  ],
  frontend: [
    { name: 'React.js', level: 85, desc: 'Virtual DOM, component-driven UI, state management, hooks.', usage: 'Interactive User Dashboards' },
    { name: 'JavaScript (ES6+)', level: 88, desc: 'Modern scripting, functional programming, DOM APIs.', usage: 'Core Client Logic' },
    { name: 'HTML5 & CSS3', level: 90, desc: 'Semantic layouts, Flexbox/Grid, custom variables, responsive web.', usage: 'Responsive Visual Structures' },
  ],
  database: [
    { name: 'MySQL', level: 85, desc: 'Relational design, indexing, queries optimization, foreign keys.', usage: 'Relational Data Storage' },
    { name: 'MongoDB', level: 80, desc: 'NoSQL collections, document validation, schema structures.', usage: 'Dynamic JSON Datastores' },
    { name: 'Git & GitHub', level: 88, desc: 'Version control, branching strategies, actions for CI/CD.', usage: 'Collaborative Code Versioning' },
    { name: 'Postman', level: 85, desc: 'API testing collections, mock servers, automated validation.', usage: 'Endpoint Integration Testing' },
  ],
  aiml: [
    { name: 'Python', level: 82, desc: 'Data structures, NumPy, Pandas, scripting logic.', usage: 'ML Modeling & Analytics' },
    { name: 'TensorFlow / PyTorch', level: 75, desc: 'Model architectures, training, dataset pipelines.', usage: 'AI Predictive Frameworks' },
    { name: 'FastAPI / Flask', level: 80, desc: 'Microframeworks to serve models as light HTTP services.', usage: 'AI Model Deployment' },
  ],
};

// counts up from 0 to `value` whenever the card mounts (i.e. every tab switch)
function CountUp({ value }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 700;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{n}%</>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function SkillsDirectory() {
  const [activeTab, setActiveTab] = useState('backend');
  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* faint oversized icon watermark, swaps per category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
          animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 8 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', top: '-40px', right: '-40px', color: 'var(--accent-rust)', pointerEvents: 'none' }}
        >
          {React.cloneElement(activeCategory.icon, { size: 260 })}
        </motion.div>
      </AnimatePresence>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-subtitle">Expertise Directory</span>
          <h2 className="section-title">Tools &amp; Technologies</h2>
          <p className="section-desc">
            A comprehensive overview of my technical toolkit, structured by specialization.
          </p>
        </div>

        {/* Tab Headers with sliding pill indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="tab-button"
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--accent-rust)' : 'var(--border-color)',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-card)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(var(--accent-rust-rgb), 0.08)',
                      zIndex: 0,
                    }}
                  />
                )}
                <span
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: isActive ? 'var(--accent-rust)' : 'var(--text-secondary)',
                  }}
                >
                  {cat.icon}
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', minHeight: '280px' }}
          >
            {skillsData[activeTab].map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 22px 40px rgba(0,0,0,0.08)' }}
                transition={{ boxShadow: { duration: 0.25 }, y: { duration: 0.25 } }}
                className="glass-card"
                style={{ padding: '28px 24px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                      {skill.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--accent-rust)',
                        backgroundColor: 'rgba(var(--accent-rust-rgb), 0.08)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-xs)',
                        minWidth: '38px',
                        textAlign: 'right',
                      }}
                    >
                      <CountUp value={skill.level} />
                    </span>
                  </div>

                  <p style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: 'var(--text-light)', marginBottom: '10px' }}>
                    {skill.usage}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{skill.desc}</p>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <div style={{ height: '5px', width: '100%', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: skill.level / 100 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      style={{ height: '100%', width: '100%', transformOrigin: 'left', backgroundColor: 'var(--accent-rust)', borderRadius: 'var(--radius-full)' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .tab-button:hover { border-color: var(--accent-rust) !important; }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
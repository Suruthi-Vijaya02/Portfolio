import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsDirectory from './components/SkillsDirectory';
import ProjectsBookshelf from './components/ProjectsBookshelf';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import ContactEnvelope from './components/ContactEnvelope';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections Layout */}
      <main style={{ flexGrow: 1, width: '100%' }}>
        {/* Intro Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Professional Tech Skills Directory */}
        <SkillsDirectory />

        {/* Virtual Projects Bookshelf */}
        <ProjectsBookshelf />

        {/* Milestones & Wins */}
        <Achievements />

        {/* Creative Beyond Code/Hobbies */}
        <Hobbies />

        {/* Postcard & Slide-out Contact Envelope */}
        <ContactEnvelope />
      </main>

      {/* Footer copyright and scroll button */}
      <Footer />
    </div>
  );
}

export default App;


import React, { useState, useEffect, useRef } from 'react';
import type { Page, Project } from './types';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Section from './components/Section';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Page);
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background-dark overflow-x-hidden">
      <div className="code-stream-animation"></div>
      <CustomCursor />
      
      <Header activeSection={activeSection} />
      
      <main className="flex flex-col relative z-10">
        <Section id="home" ref={sectionRefs.home}>
          <HeroSection />
        </Section>
        <Section id="about" ref={sectionRefs.about}>
          <AboutSection />
        </Section>
        <Section id="experience" ref={sectionRefs.experience}>
          <ExperienceSection />
        </Section>
        <Section id="skills" ref={sectionRefs.skills}>
          <SkillsSection />
        </Section>
        <Section id="projects" ref={sectionRefs.projects}>
          <ProjectsSection onProjectClick={setSelectedProject} />
        </Section>
        <Section id="contact" ref={sectionRefs.contact}>
          <ContactSection />
        </Section>
      </main>

      <Footer />

      {/* Project "Page" Overlay */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;


import React, { useState, useEffect, useRef } from 'react';
import type { Page } from './types';
import { NAV_LINKS } from './constants';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Section from './components/Section';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Page>('home');

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
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
      { rootMargin: '-30% 0px -30% 0px', threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="code-stream-animation"></div>
      <CustomCursor />
      <Header activeSection={activeSection} />
      <main className="flex flex-col">
        <Section id="home" ref={sectionRefs.home}>
          <HeroSection />
        </Section>
        <Section id="about" ref={sectionRefs.about}>
          <AboutSection />
        </Section>
        <Section id="skills" ref={sectionRefs.skills}>
          <SkillsSection />
        </Section>
        <Section id="projects" ref={sectionRefs.projects}>
          <ProjectsSection />
        </Section>
        <Section id="contact" ref={sectionRefs.contact}>
          <ContactSection />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default App;

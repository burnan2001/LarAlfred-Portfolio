import React, { useState } from 'react';
import type { Page } from '../types';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  activeSection: Page;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: Page) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-10 py-3 glassmorphism">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-3 text-text-light">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
              </svg>
            </div>
            <h1 className="text-xl font-black tracking-tighter text-text-light" style={{ textShadow: '0 0 8px rgba(0, 255, 255, 0.4)' }}>
              LAR ALFRED
            </h1>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-primary shadow-glow-cyan'
                    : 'text-text-light/80 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hidden md:flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/10 px-4 text-sm font-bold tracking-widest text-primary ring-1 ring-inset ring-primary/50 transition-all duration-300 hover:bg-primary hover:text-background-dark font-mono">
              GET IN TOUCH
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background-dark/95 backdrop-blur-md md:hidden animate-fade-in">
          <div className="flex items-center justify-between p-4 sm:px-6 border-b border-primary/10">
              <span className="text-lg font-bold text-primary font-mono">Navigation</span>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <span className="material-symbols-outlined text-3xl">close</span>
              </button>
          </div>
          <nav className="flex flex-col items-center justify-center text-center h-full -mt-16 gap-8">
              {NAV_LINKS.map((link) => (
                  <a key={link.id} href={`#${link.id}`} className="text-2xl font-bold text-text-light/80 hover:text-primary transition-colors" onClick={(e) => { handleNavClick(e, link.id); setIsMenuOpen(false); }}>
                      {link.name}
                  </a>
              ))}
              <a href="#contact" className="mt-6 flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold tracking-widest text-background-dark font-mono transition-shadow hover:shadow-glow-cyan" onClick={(e) => { handleNavClick(e, 'contact'); setIsMenuOpen(false); }}>
                  GET IN TOUCH
              </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
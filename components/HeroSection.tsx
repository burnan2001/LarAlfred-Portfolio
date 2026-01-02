
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[80vh] w-full px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          alt="Abstract background"
          className="h-full w-full object-cover opacity-10 md:opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKZ_1bA4VOD5mRaCjziynGWQ_N0FTVry8GC3oV_QG75N0oRtCtR5Ukz9FbbibL5-8Wcn3VPurfzqyyuVr_nM1IdMFD05iABxNzacSRvgrqeO4bPJpWJYXIJJmZLVfuWvu3862lT7hbc2zx2m_N6wfH7QmC4GFVVyMFeEIk0GOvug6ypx7fEnEvMY7dT67L4-DjcO_stXxwBHAK3HvaChiSMiBe3AIZ077VkoOUcH0k_AnDHLozFNJX64cWRuKYyzNZK35o2KDc5jnu"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark"></div>
      </div>

      <div className="max-w-4xl flex flex-col items-center gap-8 md:gap-10">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="inline-flex self-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs md:text-sm font-mono tracking-widest animate-fade-in">
            AVAILABLE FOR PROJECTS // 2024
          </div>
          <h1 
            className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter text-text-light animate-fade-in-up" 
            style={{ animationDelay: '200ms', opacity: 0 }}
          >
            Crafting Digital <br className="hidden md:block" /> <span className="text-primary italic">Interfaces</span> With <span className="text-accent-orange">Code.</span>
          </h1>
          <p 
            className="text-sm sm:text-base md:text-xl font-normal leading-relaxed text-text-light/60 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '400ms', opacity: 0 }}
          >
            LAR ALFRED is a Creative Developer specializing in high-performance web applications and immersive visual experiences.
          </p>
        </div>
        <div 
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: '600ms', opacity: 0 }}
        >
          <a 
            href="#projects" 
            className="flex h-14 min-w-[200px] items-center justify-center rounded-xl bg-accent-orange text-background-dark text-sm md:text-base font-bold tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,140,66,0.4)]"
          >
            EXPLORE WORK
          </a>
          <a 
            href="#contact" 
            className="flex h-14 min-w-[200px] items-center justify-center rounded-xl border border-primary/40 text-primary text-sm md:text-base font-bold tracking-widest transition-all hover:bg-primary/10"
          >
            SAY HELLO
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

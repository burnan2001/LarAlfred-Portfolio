import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center h-full">
      <div className="absolute inset-0 -z-10">
        <img
          alt="Abstract dark background with glowing cyan geometric shapes resembling a data core."
          className="h-full w-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKZ_1bA4VOD5mRaCjziynGWQ_N0FTVry8GC3oV_QG75N0oRtCtR5Ukz9FbbibL5-8Wcn3VPurfzqyyuVr_nM1IdMFD05iABxNzacSRvgrqeO4bPJpWJYXIJJmZLVfuWvu3862lT7hbc2zx2m_N6wfH7QmC4GFVVyMFeEIk0GOvug6ypx7fEnEvMY7dT67L4-DjcO_stXxwBHAK3HvaChiSMiBe3AIZ077VkoOUcH0k_AnDHLozFNJX64cWRuKYyzNZK35o2KDc5jnu"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark"></div>
      </div>

      <div className="flex flex-col items-center gap-6 px-4">
        <div className="flex flex-col gap-2">
          <h1 
            className="text-5xl font-black leading-tight tracking-tighter text-text-light md:text-7xl animate-fade-in-up" 
            style={{ animationDelay: '200ms', opacity: 0 }}
          >
            Lar Alfred. Creative Developer.
          </h1>
          <p 
            className="text-base font-normal leading-normal text-text-light/80 md:text-xl animate-fade-in-up"
            style={{ animationDelay: '400ms', opacity: 0 }}
          >
            Building immersive and performant digital experiences.
          </p>
        </div>
        <a 
          href="#projects" 
          className="flex min-w-[84px] max-w-[480px] cursor-none items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-accent-orange text-background-dark text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '600ms', opacity: 0 }}
        >
          <span className="truncate">View Projects</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
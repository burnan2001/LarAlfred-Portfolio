
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase">Professional Journey</h1>
        <p className="text-text-light/60">An evolution of technical mastery and design thinking across diverse industries.</p>
      </div>

      <div className="relative max-w-5xl mx-auto w-full px-4">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden md:block"></div>

        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 size-4 rounded-full bg-background-dark border-2 border-primary shadow-glow-cyan hidden md:block"></div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] p-6 md:p-8 rounded-2xl glassmorphism border border-white/5 hover:border-primary/20 transition-all group">
                <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                <h4 className="text-accent-orange font-bold text-sm mb-4 uppercase">{exp.company}</h4>
                <p className="text-text-light/60 text-sm leading-relaxed mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-bold text-text-light/40 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer for MD screens */}
              <div className="hidden md:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

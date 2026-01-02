
import React, { useEffect, useState, useRef } from 'react';
import type { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const LiveDemoEnvironment: React.FC<{ type: Project['demoType'] }> = ({ type }) => {
  const [logs, setLogs] = useState<string[]>(['Initializing kernel...', 'Accessing project nodes...']);
  const [pulse, setPulse] = useState<number[]>(new Array(20).fill(20));

  useEffect(() => {
    const logInterval = setInterval(() => {
      const messages = [
        'Syncing blockchain ledger...',
        'Optimizing rendering pipeline...',
        'Compiling neural layers...',
        'Requesting API handshake...',
        'Buffer stream established.',
        'Analyzing metadata packets...',
        'Latency stable at 14ms.',
        'Resource load: 34%'
      ];
      setLogs(prev => [...prev.slice(-8), messages[Math.floor(Math.random() * messages.length)]]);
    }, 2000);

    const pulseInterval = setInterval(() => {
      setPulse(prev => [...prev.slice(1), Math.floor(Math.random() * 80) + 10]);
    }, 200);

    return () => {
      clearInterval(logInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div className="w-full h-full bg-black rounded-xl border border-primary/20 p-4 font-mono overflow-hidden flex flex-col gap-4">
      {/* Simulation Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] text-primary/60 tracking-widest uppercase">Live Simulation Instance</span>
        </div>
        <span className="text-[10px] text-white/20">PID: 0491-X</span>
      </div>

      {/* Main Simulation View */}
      <div className="flex-grow flex flex-col md:flex-row gap-4">
        {/* Terminal Section */}
        <div className="flex-grow bg-white/[0.02] p-3 rounded-lg flex flex-col gap-1 overflow-hidden">
          {logs.map((log, i) => (
            <div key={i} className="text-[10px] md:text-xs text-primary flex gap-2">
              <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
              <span className="opacity-80">{log}</span>
            </div>
          ))}
          <div className="mt-auto flex gap-2 text-xs text-white">
            <span className="animate-pulse">_</span>
            <span className="text-primary/40">awaiting user input...</span>
          </div>
        </div>

        {/* Pulse / Data Section */}
        <div className="w-full md:w-32 bg-white/[0.02] p-3 rounded-lg flex flex-col justify-between items-center">
            <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] text-white/40 uppercase">System Pulse</span>
                <div className="h-16 flex items-end gap-[1px]">
                    {pulse.map((h, i) => (
                        <div key={i} className="w-1 bg-primary/40" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[14px] font-black text-primary">98.2%</span>
                <span className="text-[8px] text-white/40 uppercase">Efficiency</span>
            </div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [viewMode, setViewMode] = useState<'image' | 'demo'>('image');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-background-dark overflow-y-auto animate-fade-in">
      {/* Header / Nav */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 md:p-6 glassmorphism">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-primary font-mono text-sm hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          BACK TO PORTFOLIO
        </button>
        <div className="flex items-center gap-6">
            <div className="hidden sm:flex p-1 bg-white/5 rounded-lg border border-white/10">
                <button 
                    onClick={() => setViewMode('image')}
                    className={`px-4 py-1 text-[10px] font-bold rounded-md transition-all ${viewMode === 'image' ? 'bg-primary text-background-dark' : 'text-text-light/40 hover:text-text-light'}`}
                >
                    PREVIEW
                </button>
                <button 
                    onClick={() => setViewMode('demo')}
                    className={`px-4 py-1 text-[10px] font-bold rounded-md transition-all ${viewMode === 'demo' ? 'bg-primary text-background-dark' : 'text-text-light/40 hover:text-text-light'}`}
                >
                    LIVE SIM
                </button>
            </div>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-bold text-accent-orange hover:underline">
                EXTERNAL LINK <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <header className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-primary font-mono text-sm tracking-widest">{project.year}</span>
                <span className="text-white/20">//</span>
                <span className="text-text-light/60 font-mono text-sm tracking-widest uppercase">{project.role}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="space-y-8 text-text-light/70 text-base md:text-lg leading-relaxed">
              <section>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="size-1.5 bg-primary rounded-full"></span>
                    Project Objective
                </h3>
                <p>{project.description}</p>
              </section>
              
              <section>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="size-1.5 bg-accent-orange rounded-full"></span>
                    Deep Dive
                </h3>
                <p>{project.longDescription}</p>
              </section>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href={project.liveUrl} className="h-14 px-10 flex items-center justify-center bg-primary text-background-dark font-black text-xs tracking-[0.2em] rounded-xl hover:shadow-glow-cyan transition-all transform hover:-translate-y-1">
                LAUNCH PROJECT
              </a>
              <a href={project.sourceUrl} className="h-14 px-10 flex items-center justify-center border border-primary/40 text-primary font-black text-xs tracking-[0.2em] rounded-xl hover:bg-primary/5 transition-all">
                VIEW SOURCE
              </a>
            </div>
          </div>

          {/* Right Column - Media / Sticky */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 aspect-video md:aspect-square lg:aspect-video bg-black/40">
                {viewMode === 'image' ? (
                    <img 
                        src={project.image} 
                        alt={project.imageAlt} 
                        className="w-full h-full object-cover animate-fade-in"
                    />
                ) : (
                    <LiveDemoEnvironment type={project.demoType} />
                )}
              </div>
              
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center justify-between">
                    <span>Tech Stack Nodes</span>
                    <span className="material-symbols-outlined text-primary text-sm">hub</span>
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {project.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-3 group">
                      <div className="size-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                      <span className="text-xs text-text-light/60 group-hover:text-text-light transition-colors">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 flex items-center justify-center gap-2 bg-accent-orange/10 border border-accent-orange/20 rounded-xl">
                <span className="material-symbols-outlined text-accent-orange text-sm animate-pulse">priority_high</span>
                <span className="text-[10px] text-accent-orange font-bold uppercase tracking-widest">Confidential repository rules apply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

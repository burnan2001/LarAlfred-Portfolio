
import React, { useState, useMemo } from 'react';
import type { Project } from '../types';
import { PROJECTS } from '../constants';

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

const ProjectCard: React.FC<Project & { onClick: () => void }> = ({ title, description, image, imageAlt, tags, onClick }) => (
    <div 
        onClick={onClick}
        className="group flex flex-col glassmorphism rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 border border-white/5 hover:border-primary/30 animate-fade-in"
    >
        <div className="relative overflow-hidden aspect-video">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <span className="bg-background-dark text-primary px-6 py-2 rounded-full font-bold text-sm tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform">
                    VIEW PROJECT
                </span>
            </div>
            <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-white text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{title}</h3>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">arrow_outward</span>
            </div>
            <p className="text-text-light/60 text-sm md:text-base font-normal leading-relaxed mb-6 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-primary/80 border border-primary/20 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
                {tags.length > 3 && (
                    <span className="text-text-light/40 text-[10px] font-bold py-1">+{tags.length - 3} MORE</span>
                )}
            </div>
        </div>
    </div>
);

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => {
    const [filter, setFilter] = useState<string>('ALL');

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        PROJECTS.forEach(p => p.tags.forEach(t => tags.add(t)));
        return ['ALL', ...Array.from(tags).sort()];
    }, []);

    const filteredProjects = useMemo(() => {
        if (filter === 'ALL') return PROJECTS;
        return PROJECTS.filter(p => p.tags.includes(filter));
    }, [filter]);

    return (
        <div className="flex flex-col gap-12 py-10">
            <div className="flex flex-col gap-6 text-center w-full max-w-3xl mx-auto px-4">
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter">SELECTED WORKS</h1>
                <p className="text-text-light/60 text-base md:text-lg font-normal leading-relaxed">
                    A curated selection of digital experiments and professional solutions, merging technical precision with creative vision.
                </p>
                
                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                                filter === tag 
                                ? 'bg-primary text-background-dark border-primary shadow-glow-cyan' 
                                : 'bg-transparent text-text-light/40 border-white/10 hover:border-primary/50 hover:text-text-light'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                {filteredProjects.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        {...project} 
                        onClick={() => onProjectClick(project)}
                    />
                ))}
            </div>
            
            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-text-light/20 font-mono italic">No projects found matching the selected filter node.</p>
                </div>
            )}
        </div>
    );
};

export default ProjectsSection;

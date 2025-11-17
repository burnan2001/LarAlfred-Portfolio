
import React from 'react';
import type { Project } from '../types';
import { PROJECTS } from '../constants';

const ProjectCard: React.FC<Project> = ({ title, description, image, imageAlt, tags, liveUrl, sourceUrl }) => (
    <div className="flex flex-col glassmorphism rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
        <div className="p-2">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg neon-border" 
                 style={{ backgroundImage: `url("${image}")` }}
                 aria-label={imageAlt}>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-white text-xl font-semibold leading-normal mb-2">{title}</h3>
            <p className="text-text-light/80 text-sm font-normal leading-normal mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="text-background-dark bg-primary text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="flex items-center gap-4 mt-auto">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-accent-orange text-white text-sm font-bold transition-transform hover:scale-105">
                    <span>Live Demo</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-primary text-primary text-sm font-bold transition-colors hover:bg-primary/20">
                    <span>Source Code</span>
                    <span className="material-symbols-outlined text-base">code</span>
                </a>
            </div>
        </div>
    </div>
);


const ProjectsSection: React.FC = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3 text-center w-full">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">My Work</h1>
                <p className="text-white/70 text-base font-normal leading-normal max-w-2xl mx-auto">A collection of projects I've built, showcasing my skills in modern web development and design.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {PROJECTS.map(project => <ProjectCard key={project.title} {...project} />)}
            </div>
        </div>
    );
};

export default ProjectsSection;

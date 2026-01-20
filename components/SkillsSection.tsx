
import React from 'react';
import type { Skill } from '../types';
import { FRONTEND_SKILLS, BACKEND_SKILLS, DEVOPS_SKILLS, THREE_D_SKILLS, DESIGN_SKILLS } from '../constants';

const SkillCard: React.FC<Skill> = ({ name, icon, proficiency }) => (
    <div aria-label={`${name}: ${proficiency}% proficiency`} className="group flex flex-1 flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1">
        <div className="text-primary h-8 w-8 icon-glow"><span className="material-symbols-outlined text-4xl">{icon}</span></div>
        <div className="flex flex-col gap-2">
            <h2 className="text-text-light text-base font-bold leading-tight">{name}</h2>
            <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-1000 ease-out w-0 group-[.is-visible]:w-full"
                  style={{ maxWidth: `${proficiency}%` }}
                ></div>
            </div>
        </div>
    </div>
);

const SkillsSection: React.FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 text-center">
                <h1 className="text-text-light text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">My Tech Stack</h1>
                <p className="text-white/60 text-base font-normal leading-normal max-w-2xl mx-auto">A collection of tools and technologies I use to build and design things.</p>
            </div>

            <div className='flex flex-col gap-10'>
                <SkillCategory title="UI/UX & Design" skills={DESIGN_SKILLS} />
                <SkillCategory title="Front-end Development" skills={FRONTEND_SKILLS} />
                <SkillCategory title="Back-end & Databases" skills={BACKEND_SKILLS} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    <SkillCategory title="DevOps & Tools" skills={DEVOPS_SKILLS} gridClassName="grid-cols-[repeat(auto-fit,minmax(158px,1fr))]" />
                    <SkillCategory title="3D / VFX" skills={THREE_D_SKILLS} gridClassName="grid-cols-[repeat(auto-fit,minmax(158px,1fr))]" />
                </div>
            </div>
        </div>
    );
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  gridClassName?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, gridClassName }) => (
  <div>
    <h2 className="text-text-light text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{title}</h2>
    <div className={`grid ${gridClassName || 'grid-cols-[repeat(auto-fit,minmax(158px,1fr))]'} gap-4`}>
        {skills.map(skill => <SkillCard key={skill.name} {...skill} />)}
    </div>
  </div>
)

export default SkillsSection;

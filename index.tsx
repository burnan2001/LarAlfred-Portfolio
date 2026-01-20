
import React, { useState, useEffect, useRef, forwardRef, ReactNode, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

// --- Types ---
export type Page = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  year: string;
  role: string;
  demoType: 'terminal' | 'analytics' | 'visualizer';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

// --- Constants ---
const NAV_LINKS: { name: string, id: Page }[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const FRONTEND_SKILLS: Skill[] = [
  { name: 'React', icon: 'code', proficiency: 95 },
  { name: 'JavaScript', icon: 'javascript', proficiency: 95 },
  { name: 'TypeScript', icon: 'code', proficiency: 90 },
  { name: 'Next.js', icon: 'web', proficiency: 85 },
  { name: 'HTML5', icon: 'html', proficiency: 98 },
  { name: 'CSS3', icon: 'css', proficiency: 98 },
];

const DESIGN_SKILLS: Skill[] = [
  { name: 'Figma', icon: 'draw', proficiency: 95 },
  { name: 'Adobe Creative Suite', icon: 'palette', proficiency: 90 },
  { name: 'UI/UX Prototyping', icon: 'layers', proficiency: 92 },
  { name: 'User Research', icon: 'search_insights', proficiency: 85 },
];

const BACKEND_SKILLS: Skill[] = [
  { name: 'Node.js', icon: 'hub', proficiency: 92 },
  { name: 'PostgreSQL', icon: 'database', proficiency: 88 },
  { name: 'MongoDB', icon: 'folder_zip', proficiency: 85 },
  { name: 'Python', icon: 'data_object', proficiency: 80 },
];

const DEVOPS_SKILLS: Skill[] = [
    { name: 'Docker', icon: 'deployed_code', proficiency: 90 },
    { name: 'Git', icon: 'commit', proficiency: 98 },
];

const THREE_D_SKILLS: Skill[] = [
    { name: 'Blender', icon: 'view_in_ar', proficiency: 75 },
    { name: 'Three.js', icon: '3d_rotation', proficiency: 80 },
];

const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'Quantum Dynamics',
    role: 'Senior Fullstack Engineer & UI/UX Designer',
    period: '2022 - Present',
    description: 'Leading the development of cloud-native analytics platforms and AI-driven data visualization tools. Focused on performance optimization, scalable architecture, and user-centric design systems.',
    technologies: ['Next.js', 'Go', 'Figma', 'Kubernetes', 'AWS']
  },
  {
    id: 'exp-2',
    company: 'Neural Edge Systems',
    role: 'Frontend Architect',
    period: '2020 - 2022',
    description: 'Architected complex web applications for real-time monitoring and control of edge computing nodes. Implemented standardized design systems and component libraries with a focus on usability.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Tailwind']
  },
  {
    id: 'exp-3',
    company: 'Stellar Creative Agency',
    role: 'Interactive Developer & Designer',
    period: '2018 - 2020',
    description: 'Built immersive 3D web experiences and high-fidelity marketing sites for global brands. Pioneered the use of Three.js for interactive product showcases and high-end UI animations.',
    technologies: ['Three.js', 'WebGL', 'GSAP', 'React', 'Adobe XD']
  }
];

const PROJECTS: Project[] = [
    {
        id: 'analytics-dashboard',
        title: 'AI Analytics Dashboard',
        description: 'Predictive analytics for modern enterprises.',
        longDescription: 'A sophisticated data visualization platform built to handle massive datasets. It utilizes machine learning models to provide predictive insights, anomaly detection, and real-time reporting. The frontend leverages high-performance WebGL components for smooth rendering of thousands of data points, all wrapped in a meticulously designed UX.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvRRujLvJVWZA9bHmz4_xFyLf6CeZtN6KpO6veWWAgvvdovQlkgK4dW9nSIboBBTTmgzEeQUOuxP362SafK1_xYkXHCI_t_kZJpQLf3_Je4_abRYV_AjRgq-Ru5YaMpg--xtyc3UP-g_tU0WrGDfwNiG7DvqYmV8V_kw4pzuG7F_SepyMvsbRfhPaz5ZRmsBb63hAO9cjpCmBtq3UrC_JBbqRFYDNXkTVYSft2cZFmVqG0bfpPnU6Ga19Nbmz2x-O0QENv0nGztXI',
        imageAlt: "AI Analytics Dashboard",
        tags: ['React', 'Three.js', 'Figma', 'AI'],
        liveUrl: '#',
        sourceUrl: '#',
        year: '2024',
        role: 'Lead Fullstack Developer & Designer',
        demoType: 'analytics'
    },
    {
        id: 'defi-platform',
        title: 'Nexus DeFi Protocol',
        description: 'Next-generation decentralized finance ecosystem.',
        longDescription: 'Nexus is a comprehensive DeFi suite allowing for high-yield farming, automated market making, and cross-chain asset swaps. The architecture prioritizes security and low gas consumption, featuring a custom-built smart contract auditing dashboard and real-time wallet analytics.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
        imageAlt: "DeFi Platform UI",
        tags: ['Solidity', 'ethers.js', 'Next.js', 'UI/UX Design'],
        liveUrl: '#',
        sourceUrl: '#',
        year: '2024',
        role: 'Blockchain Architect',
        demoType: 'terminal'
    },
    {
        id: '3d-visualizer',
        title: '3D Product Visualizer',
        description: 'Interactive e-commerce experiences in 3D.',
        longDescription: 'Breaking the barriers of static product photos, this visualizer allows users to manipulate objects in real-time. Features include dynamic lighting, texture swapping, and AR capabilities. Optimized for mobile browsers to ensure every user has a high-fidelity experience.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkjEu1h7ROKIHNoAohuYy5VIDNPJccZgC4lhPRhSJOnm-5NZkRpNKX9gC5pELq96GGbyHpof2HneBBtlm0LYk151l8RGR65fnw_DbQhnHV0otxHYF55XjzJL0APyHWe1ju29muZW3GyVerGUjrJW49F3NLYmd81lJn35mprdggS5c-SNFRKjW8V4zS7b0oTUfZ7Q4oIlR5BogC5TfQebChtTvwykTwnkITj0UUerw7b7zUTwtuIsasfseQnKdFeyZhry3E3g8E4ABq',
        imageAlt: "3D Visualizer",
        tags: ['WebGL', 'Three.js', 'Design Systems', '3D'],
        liveUrl: '#',
        sourceUrl: '#',
        year: '2023',
        role: 'Creative Technologist',
        demoType: 'visualizer'
    },
    {
        id: 'neural-viz',
        title: 'Neural Network Explorer',
        description: 'Visualizing high-dimensional AI model layers.',
        longDescription: 'An educational tool designed to peel back the "black box" of artificial intelligence. It maps neural network layers in a 3D space, allowing researchers to observe how data transforms through various activation functions and weight biases in real-time.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop',
        imageAlt: "Neural Viz Tool",
        tags: ['TensorFlow.js', 'React-Three-Fiber', 'UI Design', 'AI'],
        liveUrl: '#',
        sourceUrl: '#',
        year: '2023',
        role: 'AI Developer',
        demoType: 'analytics'
    },
    {
        id: 'code-editor',
        title: 'Collaborative Editor',
        description: 'Real-time multi-user code collaboration.',
        longDescription: 'A cloud-based IDE designed for remote teams. Implements Operational Transformation (OT) for conflict-free concurrent editing. Includes integrated terminal access, git integration, and live preview environments.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0etHMjbKN2b2PO1fIIAhRM5_Zobe2qT6TQMz1HMNyAkJONfIS8kMVpKwaN65OuM0Brnmhq2rb_6Muqk-pkUTe8wDxBQenUuozNQoHkpbxxeoKnYyOfhe-y_mcmbNLcJkC0hfNhK6riQulvHbqMVPLUawVU_pvdE2rKZbL0YaKutkqYAoFh8VGyHeKGXbhiqSA_cKdXlO15qkOTf-MH_-G3nZL7rr8YfuXXfXeTju6ZBcxLWT14J7nMjeXmxR2srytY3JMDATalw5S',
        imageAlt: "Code Editor",
        tags: ['SvelteKit', 'WebSockets', 'UX Research', 'Web'],
        liveUrl: '#',
        sourceUrl: '#',
        year: '2023',
        role: 'System Architect',
        demoType: 'terminal'
    },
    {
        id: 'supply-chain',
        title: 'Logistics Core V2',
        description: 'Enterprise-grade supply chain optimization.',
        longDescription: 'A robust SaaS platform for global shipping logistics. It provides real-time tracking for thousands of shipments, automated customs documentation generation, and route optimization using genetic algorithms to minimize carbon footprint and cost.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop',
        imageAlt: "Supply Chain Dashboard",
        tags: ['PostgreSQL', 'Go', 'React', 'Interface Design'],
        liveUrl: '#',
        sourceUrl: '#',
        year: '2022',
        role: 'Fullstack Lead',
        demoType: 'analytics'
    }
];

// --- Components ---

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', updatePosition);
    return () => document.removeEventListener('mousemove', updatePosition);
  }, []);

  return <div className="custom-cursor hidden md:block" style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

const Header: React.FC<{ activeSection: Page }> = ({ activeSection }) => {
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

const Section = forwardRef<HTMLElement, { id: string, children: ReactNode, className?: string }>(({ id, children, className = '' }, ref) => {
  return (
    <section 
      id={id} 
      ref={ref} 
      className={`group min-h-screen flex items-center justify-center py-12 px-4 sm:px-10 lg:px-20 section-fade-in ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
});

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
            Crafting Digital <br className="hidden md:block" /> <span className="text-primary italic">Experiences</span> With <span className="text-accent-orange">Vision.</span>
          </h1>
          <p 
            className="text-sm sm:text-base md:text-xl font-normal leading-relaxed text-text-light/60 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '400ms', opacity: 0 }}
          >
            LAR ALFRED is a Senior Fullstack Engineer & UI/UX Designer specializing in high-performance web applications and human-centered visual experiences.
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

const CountUp: React.FC<{ end: number, suffix?: string }> = ({ end, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-10 md:p-16 shadow-2xl backdrop-blur-xl">
            <div className="absolute top-0 right-0 p-8 text-primary/10 select-none hidden lg:block">
                <span className="material-symbols-outlined text-9xl">fingerprint</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-10 md:gap-20">
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                    <div className="relative h-56 w-56 md:h-72 md:w-72">
                        <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/40 p-2">
                             <div className="h-full w-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-2 border-primary">
                                <img 
                                    src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?q=80&w=2835&auto=format&fit=crop" 
                                    alt="Lar Alfred"
                                    className="h-full w-full object-cover"
                                />
                             </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-background-dark border border-primary/50 px-3 py-1 rounded-full animate-bounce">
                            <span className="text-[10px] text-primary font-mono font-bold uppercase tracking-tighter">Verified Dev & Designer</span>
                        </div>
                    </div>
                    <div className="mt-8 text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-white">Lar Alfred</h2>
                        <p className="text-primary font-mono text-sm uppercase tracking-widest">Fullstack Engineer & UI/UX Designer</p>
                    </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-accent-orange font-mono text-xs uppercase tracking-widest">Biography</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">Design. <br className="hidden sm:block" />Code. Reality.</h1>
                    </div>
                    
                    <div className="space-y-6 text-base md:text-lg leading-relaxed text-text-light/70">
                        <p>I specialize in building bridges between <span className="text-primary font-semibold">complex backend logic</span> and <span className="text-primary font-semibold">human-centered design</span>. With over 10 years in the industry, I've learned that the best digital products are born at the intersection of technical excellence and intuitive usability.</p>
                        <p>My journey started in graphic design, which taught me the importance of visual balance and empathy. Today, as a senior engineer and designer, I apply that same rigor to system architecture and UI prototyping, ensuring that every line of code serves a user need.</p>
                    </div>

                    <div className="flex flex-wrap gap-8 pt-4">
                        <button className="flex h-12 px-8 items-center justify-center rounded-xl bg-white text-background-dark font-bold text-sm tracking-widest hover:bg-primary transition-all transform hover:-translate-y-1">
                            DOWNLOAD CV
                        </button>
                        <div className="flex items-center gap-10">
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-white"><CountUp end={10} suffix="+" /></span>
                                <span className="text-[10px] uppercase text-text-light/40 font-bold tracking-widest">Years Exp</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-white"><CountUp end={65} suffix="+" /></span>
                                <span className="text-[10px] uppercase text-text-light/40 font-bold tracking-widest">Nodes Deployed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

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

const SkillCategory: React.FC<{ title: string, skills: Skill[], gridClassName?: string }> = ({ title, skills, gridClassName }) => (
  <div>
    <h2 className="text-text-light text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{title}</h2>
    <div className={`grid ${gridClassName || 'grid-cols-[repeat(auto-fit,minmax(158px,1fr))]'} gap-4`}>
        {skills.map(skill => <SkillCard key={skill.name} {...skill} />)}
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 text-center">
                <h1 className="text-text-light text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">My Tech Stack</h1>
                <p className="text-white/60 text-base font-normal leading-normal max-w-2xl mx-auto">A collection of tools and technologies I use to build and design.</p>
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

const ProjectsSection: React.FC<{ onProjectClick: (project: Project) => void }> = ({ onProjectClick }) => {
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

const ExperienceSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase">Professional Journey</h1>
        <p className="text-text-light/60">An evolution of technical mastery and design thinking across diverse industries.</p>
      </div>

      <div className="relative max-w-5xl mx-auto w-full px-4">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden md:block"></div>
        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 size-4 rounded-full bg-background-dark border-2 border-primary shadow-glow-cyan hidden md:block"></div>
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
              <div className="hidden md:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
    const [copied, setCopied] = useState<string | null>(null);
    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="w-full max-w-6xl rounded-3xl border border-primary/20 bg-black/30 p-8 shadow-2xl shadow-primary/10 backdrop-blur-md md:p-12 mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
                <div className="flex flex-col">
                    <h2 className="font-black text-primary text-4xl tracking-tighter uppercase sm:text-5xl">Contact Node</h2>
                    <p className="mt-3 text-base font-normal leading-normal text-text-light/60">Feel free to reach out for collaborations or just to say hi. Let's build something amazing together.</p>
                    <form className="mt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold tracking-widest pb-2 text-text-light/40">Name</span>
                                <input className="form-input flex w-full rounded-xl border border-primary/20 bg-black/50 p-4 text-base font-normal text-white placeholder:text-text-light/20 transition-all duration-300 focus:border-primary focus:outline-0 focus:ring-1 focus:ring-primary/40" placeholder="Identity" type="text" />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold tracking-widest pb-2 text-text-light/40">Email</span>
                                <input className="form-input flex w-full rounded-xl border border-primary/20 bg-black/50 p-4 text-base font-normal text-white placeholder:text-text-light/20 transition-all duration-300 focus:border-primary focus:outline-0 focus:ring-1 focus:ring-primary/40" placeholder="Communication Node" type="email" />
                            </label>
                        </div>
                        <label className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold tracking-widest pb-2 text-text-light/40">Message</span>
                            <textarea className="form-input flex w-full min-h-[140px] resize-none rounded-xl border border-primary/20 bg-black/50 p-4 text-base font-normal text-white placeholder:text-text-light/20 transition-all duration-300 focus:border-primary focus:outline-0 focus:ring-1 focus:ring-primary/40" placeholder="Input Data Packet..."></textarea>
                        </label>
                        <button className="group relative mt-2 inline-flex items-center justify-center overflow-hidden rounded-xl bg-accent-orange px-8 py-5 font-black uppercase tracking-[0.2em] text-background-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,140,66,0.5)] transform hover:-translate-y-1" type="submit">
                            SEND DATA PACKET
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="w-full glassmorphism p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-8">Direct Access</h3>
                         <div className="space-y-6">
                            <div className="group flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all cursor-pointer" onClick={() => handleCopy('burnan40@gmail.com', 'email')}>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">alternate_email</span>
                                    <span className="text-sm font-mono text-text-light/80">burnan40@gmail.com</span>
                                </div>
                                <span className="text-[8px] font-bold text-primary/40 group-hover:text-primary uppercase tracking-widest">{copied === 'email' ? 'COPIED!' : 'COPY'}</span>
                            </div>
                            
                            <div className="group flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all cursor-pointer" onClick={() => handleCopy('+2347057371830', 'tel')}>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">call</span>
                                    <span className="text-sm font-mono text-text-light/80">+234 705 737 1830</span>
                                </div>
                                <span className="text-[8px] font-bold text-primary/40 group-hover:text-primary uppercase tracking-widest">{copied === 'tel' ? 'COPIED!' : 'COPY'}</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-black text-white mt-12 mb-6 uppercase tracking-tighter">Follow Data Streams</h3>
                        <div className="flex items-center gap-4">
                            <a aria-label="GitHub Profile" className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-primary transition-all duration-300 hover:bg-primary hover:text-background-dark hover:shadow-glow-cyan" href="https://github.com/burnan2001" target="_blank" rel="noopener noreferrer">
                                <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.33 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"></path></svg>
                            </a>
                            <a aria-label="WhatsApp Profile" className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-primary transition-all duration-300 hover:bg-primary hover:text-background-dark hover:shadow-glow-cyan" href="https://wa.me/2347057371830" target="_blank" rel="noopener noreferrer">
                                <svg aria-hidden="true" className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.59C8.75 21.38 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.24 20.9 6.78 19.05 4.94C17.2 3.1 14.71 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.5 17.87 6.05C19.42 7.6 20.28 9.66 20.28 11.88C20.28 16.47 16.65 20.1 12.04 20.1C10.55 20.1 9.12 19.71 7.89 19L7.22 18.61L4.62 19.33L5.38 16.84L4.97 16.14C4.17 14.81 3.79 13.3 3.79 11.88C3.79 7.29 7.42 3.67 12.04 3.67M16.54 14.3C16.34 14.75 15.34 15.24 14.94 15.34C14.53 15.44 14.12 15.49 13.57 15.34C12.87 15.14 11.91 14.81 10.88 13.91C9.57 12.72 8.65 11.23 8.45 10.78C8.25 10.33 8.35 9.92 8.5 9.77C8.67 9.6 8.86 9.38 9.06 9.18C9.23 8.95 9.28 8.82 9.43 8.57C9.58 8.32 9.53 8.12 9.43 7.97C9.33 7.82 8.87 6.63 8.67 6.18C8.47 5.73 8.27 5.78 8.12 5.78C7.97 5.78 7.77 5.78 7.57 5.78C7.37 5.78 7.07 5.83 6.82 6.08C6.57 6.33 5.92 6.91 5.92 8.1C5.92 9.29 6.82 10.43 6.97 10.63C7.12 10.83 8.82 13.41 11.4 14.56C13.29 15.36 13.75 15.29 14.22 15.24C14.7 15.19 15.65 14.69 15.85 14.24C16.05 13.79 16.05 13.41 15.95 13.26C15.85 13.11 15.7 13.06 15.5 12.96C15.3 12.86 14.89 12.66 14.69 12.56C14.49 12.46 14.34 12.41 14.54 12.81C14.74 13.21 15.14 13.74 15.31 13.91C15.51 14.11 15.61 14.16 15.76 14.11C15.91 14.06 16.74 13.61 16.94 13.51C17.14 13.41 17.29 13.46 17.39 13.56C17.49 13.66 17.44 14.21 17.39 14.3Z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center gap-6 px-5 py-10 text-center text-text-light/60 border-t border-solid border-primary/10">
      <div className="flex justify-center gap-6">
        <a className="transition-colors hover:text-primary" href="https://github.com/burnan2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.33 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"></path></svg>
        </a>
        <a className="transition-colors hover:text-primary" href="mailto:burnan40@gmail.com" aria-label="Email">
            <span className="material-symbols-outlined">alternate_email</span>
        </a>
      </div>
      <p className="text-sm font-normal leading-normal">© 2024 Lar Alfred. All Rights Reserved.</p>
    </footer>
  );
};

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
    return () => { clearInterval(logInterval); clearInterval(pulseInterval); };
  }, []);

  return (
    <div className="w-full h-full bg-black rounded-xl border border-primary/20 p-4 font-mono overflow-hidden flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] text-primary/60 tracking-widest uppercase">Live Simulation</span>
        </div>
        <span className="text-[10px] text-white/20">PID: 0491-X</span>
      </div>
      <div className="flex-grow flex flex-col md:flex-row gap-4 overflow-hidden">
        <div className="flex-grow bg-white/[0.02] p-3 rounded-lg flex flex-col gap-1 overflow-hidden">
          {logs.map((log, i) => (
            <div key={i} className="text-[10px] text-primary flex gap-2">
              <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
              <span className="opacity-80 truncate">{log}</span>
            </div>
          ))}
          <div className="mt-auto flex gap-2 text-xs text-white">
            <span className="animate-pulse">_</span>
            <span className="text-primary/40 text-[10px]">awaiting user input...</span>
          </div>
        </div>
        <div className="w-full md:w-24 bg-white/[0.02] p-3 rounded-lg flex flex-row md:flex-col justify-between items-center">
            <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] text-white/40 uppercase">Pulse</span>
                <div className="h-10 md:h-16 flex items-end gap-[1px]">
                    {pulse.map((h, i) => (
                        <div key={i} className="w-1 bg-primary/40" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[12px] font-black text-primary">98.2%</span>
            </div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail: React.FC<{ project: Project, onClose: () => void }> = ({ project, onClose }) => {
  const [viewMode, setViewMode] = useState<'image' | 'demo'>('image');
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-background-dark overflow-y-auto animate-fade-in">
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 md:p-6 glassmorphism">
        <button onClick={onClose} className="flex items-center gap-2 text-primary font-mono text-sm hover:opacity-70 transition-opacity">
          <span className="material-symbols-outlined">arrow_back</span> BACK
        </button>
        <div className="flex items-center gap-4">
            <div className="hidden sm:flex p-1 bg-white/5 rounded-lg border border-white/10">
                <button onClick={() => setViewMode('image')} className={`px-4 py-1 text-[10px] font-bold rounded-md transition-all ${viewMode === 'image' ? 'bg-primary text-background-dark' : 'text-text-light/40 hover:text-text-light'}`}>PREVIEW</button>
                <button onClick={() => setViewMode('demo')} className={`px-4 py-1 text-[10px] font-bold rounded-md transition-all ${viewMode === 'demo' ? 'bg-primary text-background-dark' : 'text-text-light/40 hover:text-text-light'}`}>LIVE SIM</button>
            </div>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-bold text-accent-orange hover:underline">
                OPEN <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
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
                  <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </header>
            <div className="space-y-8 text-text-light/70 text-base md:text-lg leading-relaxed">
              <section>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="size-1.5 bg-primary rounded-full"></span> Objective
                </h3>
                <p>{project.description}</p>
              </section>
              <section>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="size-1.5 bg-accent-orange rounded-full"></span> Deep Dive
                </h3>
                <p>{project.longDescription}</p>
              </section>
            </div>
            <div className="flex flex-wrap gap-4 pt-6">
              <a href={project.liveUrl} className="h-14 px-10 flex items-center justify-center bg-primary text-background-dark font-black text-xs tracking-[0.2em] rounded-xl hover:shadow-glow-cyan transition-all transform hover:-translate-y-1">LAUNCH</a>
              <a href={project.sourceUrl} className="h-14 px-10 flex items-center justify-center border border-primary/40 text-primary font-black text-xs tracking-[0.2em] rounded-xl hover:bg-primary/5 transition-all">SOURCE</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-32 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 aspect-video md:aspect-square lg:aspect-video bg-black/40">
                {viewMode === 'image' ? (
                    <img src={project.image} alt={project.imageAlt} className="w-full h-full object-cover animate-fade-in" />
                ) : (
                    <LiveDemoEnvironment type={project.demoType} />
                )}
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center justify-between">
                    <span>Tech Stack</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- App Root ---

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
      { rootMargin: '0px', threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
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

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

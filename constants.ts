
import type { Page, Skill, Project, Experience } from './types';

export const NAV_LINKS: { name: string, id: Page }[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const FRONTEND_SKILLS: Skill[] = [
  { name: 'React', icon: 'code', proficiency: 95 },
  { name: 'JavaScript', icon: 'javascript', proficiency: 95 },
  { name: 'TypeScript', icon: 'code', proficiency: 90 },
  { name: 'Next.js', icon: 'web', proficiency: 85 },
  { name: 'HTML5', icon: 'html', proficiency: 98 },
  { name: 'CSS3', icon: 'css', proficiency: 98 },
];

export const BACKEND_SKILLS: Skill[] = [
  { name: 'Node.js', icon: 'hub', proficiency: 92 },
  { name: 'PostgreSQL', icon: 'database', proficiency: 88 },
  { name: 'MongoDB', icon: 'folder_zip', proficiency: 85 },
  { name: 'Python', icon: 'data_object', proficiency: 80 },
];

export const DEVOPS_SKILLS: Skill[] = [
    { name: 'Docker', icon: 'deployed_code', proficiency: 90 },
    { name: 'Git', icon: 'commit', proficiency: 98 },
];

export const THREE_D_SKILLS: Skill[] = [
    { name: 'Blender', icon: 'view_in_ar', proficiency: 75 },
    { name: 'Three.js', icon: '3d_rotation', proficiency: 80 },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'Quantum Dynamics',
    role: 'Senior Fullstack Engineer',
    period: '2022 - Present',
    description: 'Leading the development of cloud-native analytics platforms and AI-driven data visualization tools. Focused on performance optimization and scalable architecture.',
    technologies: ['Next.js', 'Go', 'Kubernetes', 'AWS']
  },
  {
    id: 'exp-2',
    company: 'Neural Edge Systems',
    role: 'Frontend Architect',
    period: '2020 - 2022',
    description: 'Architected complex web applications for real-time monitoring and control of edge computing nodes. Implemented standardized design systems and component libraries.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Tailwind']
  },
  {
    id: 'exp-3',
    company: 'Stellar Creative Agency',
    role: 'Interactive Developer',
    period: '2018 - 2020',
    description: 'Built immersive 3D web experiences and high-fidelity marketing sites for global brands. Pioneered the use of Three.js for interactive product showcases.',
    technologies: ['Three.js', 'WebGL', 'GSAP', 'React']
  }
];

export const PROJECTS: Project[] = [
    {
        id: 'analytics-dashboard',
        title: 'AI Analytics Dashboard',
        description: 'Predictive analytics for modern enterprises.',
        longDescription: 'A sophisticated data visualization platform built to handle massive datasets. It utilizes machine learning models to provide predictive insights, anomaly detection, and real-time reporting. The frontend leverages high-performance WebGL components for smooth rendering of thousands of data points.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvRRujLvJVWZA9bHmz4_xFyLf6CeZtN6KpO6veWWAgvvdovQlkgK4dW9nSIboBBTTmgzEeQUOuxP362SafK1_xYkXHCI_t_kZJpQLf3_Je4_abRYV_AjRgq-Ru5YaMpg--xtyc3UP-g_tU0WrGDfwNiG7DvqYmV8V_kw4pzuG7F_SepyMvsbRfhPaz5ZRmsBb63hAO9cjpCmBtq3UrC_JBbqRFYDNXkTVYSft2cZFmVqG0bfpPnU6Ga19Nbmz2x-O0QENv0nGztXI',
        imageAlt: "AI Analytics Dashboard",
        tags: ['React', 'Three.js', 'Python', 'AWS', 'AI'],
        liveUrl: '#',
        sourceUrl: '#',
        year: '2024',
        role: 'Lead Fullstack Developer',
        demoType: 'analytics'
    },
    {
        id: 'defi-platform',
        title: 'Nexus DeFi Protocol',
        description: 'Next-generation decentralized finance ecosystem.',
        longDescription: 'Nexus is a comprehensive DeFi suite allowing for high-yield farming, automated market making, and cross-chain asset swaps. The architecture prioritizes security and low gas consumption, featuring a custom-built smart contract auditing dashboard and real-time wallet analytics.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
        imageAlt: "DeFi Platform UI",
        tags: ['Solidity', 'ethers.js', 'Next.js', 'Tailwind', 'Blockchain'],
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
        tags: ['WebGL', 'Three.js', 'React', '3D'],
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
        tags: ['TensorFlow.js', 'React-Three-Fiber', 'D3.js', 'AI'],
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
        tags: ['SvelteKit', 'WebSockets', 'Redis', 'Web'],
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
        tags: ['PostgreSQL', 'Go', 'React', 'Docker', 'SaaS'],
        liveUrl: '#',
        sourceUrl: '#',
        year: '2022',
        role: 'Fullstack Lead',
        demoType: 'analytics'
    }
];

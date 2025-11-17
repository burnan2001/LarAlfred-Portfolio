
import type { Page, Skill, Project } from './types';

export const NAV_LINKS: { name: string, id: Page }[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
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


export const PROJECTS: Project[] = [
    {
        title: 'AI-Powered Analytics Dashboard',
        description: 'A comprehensive dashboard for visualizing complex data sets using machine learning insights to predict trends and identify anomalies in real-time.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvRRujLvJVWZA9bHmz4_xFyLf6CeZtN6KpO6veWWAgvvdovQlkgK4dW9nSIboBBTTmgzEeQUOuxP362SafK1_xYkXHCI_t_kZJpQLf3_Je4_abRYV_AjRgq-Ru5YaMpg--xtyc3UP-g_tU0WrGDfwNiG7DvqYmV8V_kw4pzuG7F_SepyMvsbRfhPaz5ZRmsBb63hAO9cjpCmBtq3UrC_JBbqRFYDNXkTVYSft2cZFmVqG0bfpPnU6Ga19Nbmz2x-O0QENv0nGztXI',
        imageAlt: "Screenshot of an AI-powered analytics dashboard with various charts and graphs on a dark theme.",
        tags: ['React', 'Three.js', 'Python', 'AWS'],
        liveUrl: '#',
        sourceUrl: '#'
    },
    {
        title: 'Interactive 3D Product Visualizer',
        description: 'A web-based tool for customers to explore and customize products in a fully interactive 3D space, built with performance and realism in mind.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkjEu1h7ROKIHNoAohuYy5VIDNPJccZgC4lhPRhSJOnm-5NZkRpNKX9gC5pELq96GGbyHpof2HneBBtlm0LYk151l8RGR65fnw_DbQhnHV0otxHYF55XjzJL0APyHWe1ju29muZW3GyVerGUjrJW49F3NLYmd81lJn35mprdggS5c-SNFRKjW8V4zS7b0oTUfZ7Q4oIlR5BogC5TfQebChtTvwykTwnkITj0UUerw7b7zUTwtuIsasfseQnKdFeyZhry3E3g8E4ABq',
        imageAlt: "Screenshot of an interactive 3D product visualizer showing a customizable sneaker.",
        tags: ['Vue.js', 'WebGL', 'Node.js'],
        liveUrl: '#',
        sourceUrl: '#'
    },
    {
        title: 'Real-Time Collaborative Code Editor',
        description: 'A cloud-native application allowing multiple developers to write and test code together seamlessly, featuring live syntax highlighting and shared terminals.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0etHMjbKN2b2PO1fIIAhRM5_Zobe2qT6TQMz1HMNyAkJONfIS8kMVpKwaN65OuM0Brnmhq2rb_6Muqk-pkUTe8wDxBQenUuozNQoHkpbxxeoKnYyOfhe-y_mcmbNLcJkC0hfNhK6riQulvHbqMVPLUawVU_pvdE2rKZbL0YaKutkqYAoFh8VGyHeKGXbhiqSA_cKdXlO15qkOTf-MH_-G3nZL7rr8YfuXXfXeTju6ZBcxLWT14J7nMjeXmxR2srytY3JMDATalw5S',
        imageAlt: "Screenshot of a real-time collaborative code editor with multiple cursors active.",
        tags: ['SvelteKit', 'WebSockets', 'Docker', 'Redis'],
        liveUrl: '#',
        sourceUrl: '#'
    },
    {
        title: 'E-commerce Platform with Recommendation Engine',
        description: 'A full-stack online store featuring a personalized shopping experience driven by user behavior, complete with secure payments and inventory management.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxtlabnF7AXM7dTWreFnXKbZhOfBRqw6dGG-2zXTR3fauKacLHuzczz-KaB8ETObc3U_OfTpz2x9QLfhE7yWbKyqBQskp95Y95OM5A2vqaT83xzXevDVBgujGQZyGH3yGWX1XQdI6xQ6-AP5xgFTh4-futuQEj4YF7c-zzR5rmwI8EG122Zg4uhXH5InXBf-I2lNkvn-YAIkKiQGWVQ9lgPaaB_YpPM1TqeenvGsq8O5oFD9KUyT5P5CJVGD0ezxgzZEZrI1bJVdOL',
        imageAlt: "Screenshot of a sleek e-commerce website showing product listings.",
        tags: ['Next.js', 'GraphQL', 'Stripe', 'PostgreSQL'],
        liveUrl: '#',
        sourceUrl: '#'
    }
];

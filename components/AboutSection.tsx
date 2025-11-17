
import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="rounded-xl border border-white/10 bg-black/30 p-8 shadow-2xl backdrop-blur-md md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
                <div className="flex justify-center md:col-span-1">
                    <div className="relative h-48 w-48 shrink-0 md:h-56 md:w-56">
                        <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse"></div>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-full w-full p-1">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-full w-full" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?q=80&w=2835&auto=format&fit=crop")` }}></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:col-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About Me</h1>
                    <div className="space-y-4 text-base leading-relaxed text-text-light/90">
                        <p>I'm a passionate software developer with over a decade of experience in building high-quality, scalable web applications. My expertise lies in full-stack development, with a deep understanding of modern JavaScript frameworks, cloud infrastructure, and API design. I thrive on solving complex problems and turning innovative ideas into reality.</p>
                        <p>My philosophy revolves around clean code, user-centric design, and continuous learning. Originally from a background in graphic design, I bring a unique perspective to the development process, blending aesthetics with functionality to create seamless and intuitive digital experiences.</p>
                        <p>When I'm not coding, you can find me exploring new hiking trails, contributing to open-source projects, or experimenting with generative art.</p>
                    </div>
                    <div className="mt-4">
                        <button className="flex min-w-[84px] cursor-none items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-orange text-background-dark text-base font-bold leading-normal tracking-wide transition-transform hover:scale-105">
                            <span className="truncate">Download Resume</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
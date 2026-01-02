
import React, { useEffect, useState, useRef } from 'react';

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
                            <span className="text-[10px] text-primary font-mono font-bold uppercase tracking-tighter">Verified Dev</span>
                        </div>
                    </div>
                    <div className="mt-8 text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-white">Lar Alfred</h2>
                        <p className="text-primary font-mono text-sm uppercase tracking-widest">Fullstack Engineer</p>
                    </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-accent-orange font-mono text-xs uppercase tracking-widest">Biography</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">Code. <br className="hidden sm:block" />Design. Reality.</h1>
                    </div>
                    
                    <div className="space-y-6 text-base md:text-lg leading-relaxed text-text-light/70">
                        <p>I specialize in building bridges between <span className="text-primary font-semibold">complex backend logic</span> and <span className="text-primary font-semibold">intuitive frontend design</span>. With over 10 years in the industry, I've learned that the best digital products aren't just seen; they are felt.</p>
                        <p>My journey started in graphic design, which taught me the importance of visual balance. Today, as a senior developer, I apply that same aesthetic rigor to system architecture and API design, ensuring that every line of code serves a purpose.</p>
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

export default AboutSection;

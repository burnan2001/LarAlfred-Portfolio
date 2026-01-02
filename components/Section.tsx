
import React, { forwardRef, ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, children, className = '' }, ref) => {
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

export default Section;

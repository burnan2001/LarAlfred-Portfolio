
import React, { useState, useEffect } from 'react';

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

export default CustomCursor;

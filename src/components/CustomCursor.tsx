import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        animate={{ scale: isHovering ? 1.5 : 1, rotate: isHovering ? -15 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <svg 
          width={24} height={24} 
          viewBox="0 0 32 32" 
          fill={isHovering ? "rgba(255,0,0,0.8)" : "none"}
          stroke={isHovering ? "none" : "rgba(255,0,0,0.6)"}
          strokeWidth="1.5"
          className="drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]"
        >
          <path d="M16 23 C23 23 28 20 28 16 C28 15 26 14 24 14 C21 14 19 15 16 15 C13 15 11 14 8 14 C6 14 4 15 4 16 C4 20 9 23 16 23 Z" />
          <path d="M16 13 C19 13 23 11 26 14 C27 15 28 15 29 16 C31 14 29 11 27 9 C24 7 19 10 16 10 C13 10 8 7 5 9 C3 11 1 14 3 16 C4 15 5 15 6 14 C9 11 13 14 16 13 Z" />
        </svg>
      </motion.div>
    </>
  );
}

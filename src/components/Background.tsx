import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// Generate some random positions for petals
const generatePetals = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage string
    y: -Math.random() * 100, // start above
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 10,
    size: 4 + Math.random() * 8, // mostly small
    skewX: Math.random() * 20 - 10,
  }));
};

export default function Background() {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    setPetals(generatePetals(30));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
      {/* Background Image provided by user */}
      <img 
        src="https://i.ibb.co/rKYGDRkL/Chat-GPT-Image-May-5-2026-05-32-42-PM.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black/20 to-black/90" />
      
      {/* A subtle red radial glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px]" />

      {/* Falling red sparks/petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full"
          style={{
            left: `${petal.x}vw`,
            top: `-10vh`, // Start just above viewport
            width: petal.size,
            height: petal.size * (1 + Math.random()),
            background: 'linear-gradient(to bottom, #ff3333, #aa0000)',
            opacity: 0.6,
            filter: 'blur(1px)',
            transform: `skewX(${petal.skewX}deg)`
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [`${petal.x}vw`, `${petal.x - 5 + Math.random() * 10}vw`],
            rotate: [0, 360],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

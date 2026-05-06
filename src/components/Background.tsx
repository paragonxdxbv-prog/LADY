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
    setPetals(generatePetals(60));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#020101]">
      {/* Background Image provided by user */}
      <img 
        src="https://i.postimg.cc/ZRmCd1f0/Chat-GPT-Image-May-5-2026-05-32-42-PM.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      {/* Falling leaves */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-xl origin-center"
          style={{
            left: `${petal.x}vw`,
            top: `-10vh`, // Start just above viewport
            filter: 'drop-shadow(0 0 5px rgba(255,0,0,0.5))',
            transform: `skewX(${petal.skewX}deg)`
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [`${petal.x}vw`, `${petal.x - 5 + Math.random() * 10}vw`],
            rotate: [0, 360, 720],
            rotateX: [0, 180, 360],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-900/60 fill-current">
            <path d="M12 2C8 2 4 6 4 12c0 6 8 10 8 10s8-4 8-10c0-6-4-10-8-10z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

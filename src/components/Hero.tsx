import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex flex-col items-center justify-end pb-8 md:pb-12 px-4 z-10 w-full">
      {/* Main Title Group */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="flex flex-col items-center max-w-5xl text-center absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full"
      >
        <h1 className="text-[12vw] md:text-[120px] font-sans font-bold leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 filter drop-shadow-[0_0_50px_rgba(255,0,0,0.8)] select-none">
          LADY
        </h1>
        <p className="mt-4 text-[7px] md:text-[10px] font-bold tracking-[0.8em] uppercase text-red-100/90 drop-shadow-lg">
          High-End Luxury • Pure Elegance
        </p>
      </motion.div>
    </section>
  );
}

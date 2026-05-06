import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { memo } from 'react';

export default memo(function Hero() {
  return (
    <section className="relative h-[100svh] flex flex-col items-center justify-end pb-2 md:pb-4 px-4 z-10 w-full overflow-hidden">
      {/* Main Title Group */}
      <motion.div 
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="flex flex-col items-center max-w-7xl text-center absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-full z-20"
      >
        <motion.h1 
          initial={{ letterSpacing: '0.2em', opacity: 0 }}
          animate={{ letterSpacing: '0em', opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
          className="text-[12vw] md:text-[100px] font-sans font-black leading-[0.75] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent flex drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] select-none"
        >
          LADY
        </motion.h1>
        
        <div className="overflow-hidden mt-8 md:mt-12 mb-4">
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            className="text-[14px] md:text-[20px] font-sans font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-4"
          >
            <span className="w-8 md:w-16 h-[1px] bg-white/50 block"></span>
            A Symphony of Darkness and Desire
            <span className="w-8 md:w-16 h-[1px] bg-white/50 block"></span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
});

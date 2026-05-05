import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function SectionEditorial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative flex flex-col items-center justify-center px-4 pt-12 pb-24 w-full max-w-6xl mx-auto overflow-hidden">
      <div className="w-full flex justify-between items-end mb-16 px-4">
        <div className="flex flex-col items-start text-left">
          <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            Heritage
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mb-2">
            The <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Legacy</span>
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Left Column */}
        <motion.div 
          style={{ y: y1 }}
          className="w-full md:w-1/2 flex justify-end px-4"
        >
          <div className="w-full md:w-4/5 aspect-[4/5] bg-[#050202] border border-red-900/30 rounded-3xl relative overflow-hidden flex items-center justify-center group pointer-events-none">
            <span className="text-white/20 font-mono text-[10px] text-center px-4 tracking-widest uppercase absolute z-10">Add Heritage Image</span>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.1)_0%,transparent_60%)]" />
            <div className="absolute inset-x-8 bottom-8 z-20 text-center">
               <h4 className="font-serif italic text-2xl text-white">Crafted by Hand</h4>
               <p className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Since 1928</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          style={{ y: y2 }}
          className="w-full md:w-1/2 flex flex-col justify-start px-4 mt-12 md:mt-0"
        >
          <p className="text-sm text-balance text-white/60 leading-loose mb-10 max-w-md">
            Before there was a brand, there was a feeling. An obsession with perfection, translated into fabrics, stones, and scents that demand attention. LADY is not just a label; it is a declaration of power, an artifact of beauty preserved in a chaotic world. 
          </p>
          
          <p className="text-sm text-balance text-white/60 leading-loose max-w-md mb-12">
            Every piece we create is an extension of our founding philosophy: uncompromising quality, relentless innovation, and a deep reverence for the artistry of the human hand. We do not chase trends. We forge timeless relics.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full aspect-[16/9] bg-[#050202] border border-red-900/30 rounded-3xl relative overflow-hidden flex items-center justify-center group"
          >
             <span className="text-white/20 font-mono text-[10px] text-center px-4 tracking-widest uppercase absolute z-10">Add Workshop Video</span>
             <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/20 transition-colors duration-500 z-0" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

import { motion } from 'motion/react';
import { Gift } from 'lucide-react';

export default function SectionGifting() {
  return (
    <section className="w-full max-w-7xl px-4 md:px-8 py-24 md:py-32 relative z-10 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="w-full flex justify-between items-end border-b border-red-900/30 pb-6 mb-16"
      >
        <div>
          <span className="font-mono text-white/50 text-[10px] tracking-[0.3em] uppercase">016</span>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mt-2">
            The Art of <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Gifting</span>
          </h2>
        </div>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl overflow-hidden">
        <div className="p-8 md:p-16 flex flex-col">
          <Gift className="text-red-100/50 mb-8" size={32} />
          <h3 className="text-3xl font-serif italic text-white mb-6">Unforgettable Desires</h3>
          <p className="text-white/70 font-sans font-light text-base leading-relaxed mb-10 max-w-sm">
            Every piece from LADY is presented in our signature dark crimson velvet box, sealed with the Obsidian crest. A testament to affection, crafted for eternity.
          </p>
          <button className="self-start px-8 py-3 border border-red-900/40 text-white font-mono text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500">
            Explore Curated Gifts
          </button>
        </div>
        
        <div className="relative h-full min-h-[400px]">
          <img src="https://i.pinimg.com/736x/fe/5d/27/fe5d27e46f4af4c13d28a5a6d67aeb2b.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Gifting" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050202]" />
        </div>
      </div>
    </section>
  );
}

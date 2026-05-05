import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SectionJewelry() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center">
        
        {/* Right Column (content) displayed first on mobile */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="w-full md:w-1/2 flex flex-col justify-center px-4 order-2 md:order-1"
        >
          <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            High Jewelry
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mb-6">
            Blood <span className="font-serif italic text-red-100/90 font-light">&</span> Diamonds
          </h2>
          <p className="text-sm text-balance text-white/60 leading-loose mb-10 max-w-md">
            Cut to pierce the soul. Our bespoke high jewelry collection merges avant-garde forms with the most flawless stones discovered in the last century. Wearable declarations of absolute power.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-red-400 group transition-colors w-fit cursor-pointer"
          >
            Discover the Vault
            <span className="w-10 h-10 rounded-full border border-red-900/50 flex items-center justify-center group-hover:bg-red-500/20 group-hover:border-red-500 transition-colors shadow-lg">
              <ArrowRight size={16} />
            </span>
          </motion.button>
        </motion.div>

        {/* Left Column (Image) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          className="w-full md:w-1/2 px-4 order-1 md:order-2"
        >
          <div className="w-full aspect-[4/5] bg-[#050202] border border-red-900/30 rounded-t-full relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-[0_0_50px_rgba(255,0,0,0.1)]">
            <span className="text-white/20 font-mono text-[10px] text-center px-4 tracking-widest uppercase absolute z-10 transition-transform duration-700 group-hover:scale-110">Add Jewelry Image</span>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/50 rounded-t-full transition-colors duration-700 m-2" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

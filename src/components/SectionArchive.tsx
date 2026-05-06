import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SectionArchive() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col md:flex-row-reverse w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl overflow-hidden min-h-[500px]"
      >
        {/* Right Side image placeholder */}
        <div className="w-full md:w-1/2 relative bg-[#050202] border-b md:border-b-0 md:border-l border-red-900/30 flex items-center justify-center overflow-hidden min-h-[400px]">
           <img src="https://i.pinimg.com/736x/2b/be/24/2bbe246a10bec01084d409f5729adb95.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Jewelry" />
           <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent opacity-50" />
        </div>

        {/* Left Side text & CTA */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          
          <span className="text-[9px] uppercase tracking-[0.2em] text-red-500 mb-6 flex items-center gap-4">
            <span className="w-6 h-[1px] bg-red-500/50"></span>
            Exclusive Jewelry
          </span>

          <h3 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white mb-6">
            Eternity <span className="font-serif italic text-red-100/90 font-light block mt-2">Collection</span>
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-sm">
            Handcrafted rings and earrings that define modern opulence. Set with flawless diamonds in pure platinum and white gold.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-red-400 group transition-colors w-fit cursor-pointer"
          >
            Explore Collection 
            <span className="w-10 h-10 rounded-full border border-red-900/50 flex items-center justify-center group-hover:bg-red-500/20 group-hover:border-red-500 transition-colors">
              <ArrowRight size={16} />
            </span>
          </motion.button>

        </div>
      </motion.div>

    </section>
  );
}

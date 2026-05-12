import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SectionJewelry() {
  return (
    <section id="bijuterii" className="relative flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto pt-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 justify-center items-center shadow-[0_0_40px_rgba(255,0,0,0.05)]"
      >
        
        {/* Right Column (content) displayed first on mobile */}
        <div 
          className="w-full md:w-1/2 flex flex-col justify-center px-4 order-2 md:order-1"
        >
          <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            Bijuterii Fine
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-5">
            Diamante <span className="font-serif italic text-red-100/90 font-light">&</span> Lux
          </h2>
          <p className="text-xs text-balance text-white/60 leading-loose mb-8 max-w-md">
            Cut to pierce the soul. Colecția noastră de bijuterii fine îmbină formele avangardiste cu cele mai pure pietre prețioase. Declarații portabile de putere absolută și rafinament.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-red-400 group transition-colors w-fit cursor-pointer"
          >
            Descoperă Seiful
            <span className="w-8 h-8 rounded-full border border-red-900/50 flex items-center justify-center group-hover:bg-red-500/20 group-hover:border-red-500 transition-colors shadow-lg">
              <ArrowRight size={14} />
            </span>
          </motion.button>
        </div>

        {/* Left Column (Image) */}
        <div 
          className="w-full md:w-1/2 px-4 order-1 md:order-2"
        >
          <div className="w-full aspect-[4/5] bg-[#050202] border border-red-900/30 rounded-t-full relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-[0_0_50px_rgba(255,0,0,0.1)] mb-4 md:mb-0">
            <div className="absolute inset-0 w-full h-full bg-red-900/10 flex items-center justify-center text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase text-center p-4 border border-red-900/40">AICEA VINE POZELE</div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/50 rounded-t-full transition-colors duration-700 m-2" />
          </div>
        </div>

      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SectionCampaign() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8"
      >
        <div className="w-full md:w-1/3 flex flex-col justify-between order-2 md:order-1">
           <div>
              <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-red-500/50"></span>
                Campaign 004
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white mb-6">
                Midnight <span className="font-serif italic text-red-100/90 font-light block mt-2 text-5xl md:text-6xl">Mirage</span>
              </h2>
              <p className="text-sm text-balance text-white/60 leading-loose mb-10">
                A surreal exploration of shadows and silk. The new campaign captures the essence of a fleeting dream, set against the brutalist architecture of an abandoned chateau.
              </p>
           </div>
           
           <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-red-400 group transition-colors w-fit cursor-pointer"
          >
            Watch Full Film
            <span className="w-10 h-10 rounded-full border border-red-900/50 flex items-center justify-center group-hover:bg-red-500/20 group-hover:border-red-500 transition-colors shadow-lg">
              <ArrowRight size={14} />
            </span>
          </motion.button>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 order-1 md:order-2">
            <motion.div 
               whileHover={{ scale: 0.98 }}
               className="w-full aspect-[3/4] bg-[#050202] border border-red-900/20 rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer"
            >
               <span className="text-white/20 font-mono text-[10px] text-center px-2 tracking-widest uppercase absolute z-10 transition-transform duration-700 group-hover:scale-110">Campaign Image 1</span>
               <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/30 transition-colors duration-500 z-0" />
            </motion.div>
            <div className="flex flex-col gap-4">
               <motion.div 
                 whileHover={{ scale: 0.98 }}
                 className="w-full aspect-square bg-[#050202] border border-red-900/20 rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer"
               >
                 <span className="text-white/20 font-mono text-[10px] text-center px-2 tracking-widest uppercase absolute z-10 transition-transform duration-700 group-hover:scale-110">Details</span>
                 <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/30 transition-colors duration-500 z-0" />
               </motion.div>
               <motion.div 
                 whileHover={{ scale: 0.98 }}
                 className="w-full flex-1 min-h-[100px] bg-[#050202] border border-red-900/20 rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer"
               >
                 <span className="text-white/20 font-mono text-[10px] text-center px-2 tracking-widest uppercase absolute z-10 transition-transform duration-700 group-hover:scale-110">Video Loop</span>
                 <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/30 transition-colors duration-500 z-0" />
               </motion.div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Calendar, User, Sparkles } from 'lucide-react';

export default function SectionConcierge() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-12 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-[0_0_40px_rgba(255,0,0,0.05)]"
      >
        {/* Decorative background flare */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)] pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="w-full md:w-1/2 flex flex-col items-start relative z-10">
          <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            Servicii Private
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-white mb-5">
            Serviciul <span className="font-serif italic text-red-100/90 font-light">Concierge</span>
          </h2>
          <p className="text-xs text-balance text-white/60 leading-loose mb-8">
            Pentru cei mai exigenți clienți ai noștri. Solicitați o vizualizare privată, consultați-vă cu bijutierii noștri meșteri pentru comenzi personalizate sau rezervați o probă privată cu experții noștri în cosmetice.
          </p>

          <div className="flex flex-col gap-5 w-full max-w-md">
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full border border-red-900/50 flex flex-shrink-0 items-center justify-center text-red-500 bg-black">
                 <User size={16} />
               </div>
               <div>
                 <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-1">Stilist Personal</h4>
                 <p className="text-[10px] text-white/50 leading-relaxed">Experți dedicați pentru a vă alege parfumul și nuanțele ideale.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full border border-red-900/50 flex flex-shrink-0 items-center justify-center text-red-500 bg-black">
                 <Sparkles size={16} />
               </div>
               <div>
                 <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-1">Bijuterii la Comandă</h4>
                 <p className="text-[10px] text-white/50 leading-relaxed">Comandați piese unice cu pietre prețioase rare.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
           <motion.div 
             whileHover={{ scale: 1.02 }}
             className="w-full max-w-sm bg-[#0a0505]/60 backdrop-blur-md border border-red-900/40 rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,0,0,0.1)]"
           >
             <Calendar size={32} strokeWidth={1} className="text-white/80 mb-5" />
             <h3 className="text-base font-serif italic text-white mb-2">Solicită o Audiență</h3>
             <p className="text-[9px] uppercase tracking-widest text-white/40 mb-6 border-b border-white/10 pb-5 w-full">Doar pe bază de invitație</p>
             
             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] font-sans hover:bg-black hover:text-white border border-transparent hover:border-red-500 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
              >
                Cere Detalii
              </motion.button>
           </motion.div>
        </div>

      </motion.div>
    </section>
  );
}

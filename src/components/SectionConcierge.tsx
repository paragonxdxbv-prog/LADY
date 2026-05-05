import { motion } from 'motion/react';
import { Calendar, User, Sparkles } from 'lucide-react';

export default function SectionConcierge() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative"
      >
        {/* Decorative background flare */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)] pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="w-full md:w-1/2 flex flex-col items-start relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            Private Services
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white mb-6">
            The <span className="font-serif italic text-red-100/90 font-light">Concierge</span>
          </h2>
          <p className="text-sm text-balance text-white/60 leading-loose mb-10">
            For our most discerning clients. Request a private viewing at your estate, consult with our master jewelers for custom commissions, or book a private fitting with our head couturier. Minimum spend applies.
          </p>

          <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full border border-red-900/50 flex flex-shrink-0 items-center justify-center text-red-500 bg-black">
                 <User size={16} />
               </div>
               <div>
                 <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-1">Personal Stylist</h4>
                 <p className="text-xs text-white/50 leading-relaxed">Dedicated experts to curate your wardrobe for the season.</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full border border-red-900/50 flex flex-shrink-0 items-center justify-center text-red-500 bg-black">
                 <Sparkles size={16} />
               </div>
               <div>
                 <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-1">Bespoke Jewelry</h4>
                 <p className="text-xs text-white/50 leading-relaxed">Commission one-of-a-kind heirlooms with rare stones.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
           <motion.div 
             whileHover={{ scale: 1.02 }}
             className="w-full max-w-sm bg-[#050202] border border-red-900/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,0,0,0.1)]"
           >
             <Calendar size={32} strokeWidth={1} className="text-white/80 mb-6" />
             <h3 className="text-lg font-serif italic text-white mb-2">Request an Audience</h3>
             <p className="text-[10px] uppercase tracking-widest text-white/40 mb-8 border-b border-white/10 pb-6 w-full">Invitation Only</p>
             
             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] font-sans hover:bg-black hover:text-white border border-transparent hover:border-red-500 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
              >
                Inquire Now
              </motion.button>
           </motion.div>
        </div>

      </motion.div>
    </section>
  );
}

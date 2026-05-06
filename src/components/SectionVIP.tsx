import { motion } from 'motion/react';
import { Key } from 'lucide-react';

export default function SectionVIP() {
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
          <span className="font-mono text-white/50 text-[10px] tracking-[0.3em] uppercase">014</span>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mt-2">
            Private <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Society</span>
          </h2>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full relative rounded-3xl overflow-hidden bg-[#110505]/40 backdrop-blur-md border border-red-900/30 py-32 px-8 flex flex-col items-center justify-center text-center group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/10 rounded-full blur-[100px]" />
        
        <motion.div 
          initial={{ rotate: -10 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="w-16 h-16 rounded-full border border-red-900/50 flex items-center justify-center mb-8 bg-black z-10"
        >
          <Key className="text-red-100/70" size={24} />
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6 z-10">LADY Maison<br/>Private Society</h2>
        
        <p className="text-white/60 font-sans font-light max-w-lg mb-12 z-10 leading-relaxed">
          Access the imperceptible. By invitation only, Members of the LADY Maison Private Society are granted early access to runway collections, high jewelry bespoke creations, and invitations to extraordinary galas across the globe.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 border border-red-900/50 text-white font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 z-10"
        >
          Request Invitation
        </motion.button>
      </motion.div>
    </section>
  );
}

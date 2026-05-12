import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SectionRelics() {
  const product = { id: 'special_1', name: 'Set Cadou Lux', price: 850.00, category: 'Seturi Cadou' };

  return (
    <section id="seturi" className="relative flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto pt-12">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col md:flex-row w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] overflow-hidden min-h-[500px] shadow-[0_0_40px_rgba(255,0,0,0.05)]"
      >
        {/* Left Side image placeholder */}
        <div className="w-full md:w-1/2 relative bg-[#050202] border-b md:border-b-0 md:border-r border-red-900/30 flex items-center justify-center overflow-hidden min-h-[400px]">
           <div className="absolute inset-0 w-full h-full bg-red-900/10 flex items-center justify-center text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase text-center p-4 border border-red-900/40">AICEA VINE POZELE</div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)]" />
        </div>

        {/* Right Side text & CTA */}
        <div className="w-full md:w-[55%] p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br from-transparent to-[#2a0808]/10">
          
          <span className="text-[8px] uppercase tracking-[0.2em] text-red-500 mb-5 flex items-center gap-4">
            <span className="w-6 h-[1px] bg-red-500/50"></span>
            Cadoul Perfect
          </span>

          <h3 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white mb-5">
            Set <span className="font-serif italic text-red-100/90 font-light pl-2">Cadou LADY</span>
          </h3>
          <p className="text-xs text-white/50 leading-relaxed mb-8 max-w-md text-justify">
            Surprinde-ți apropiații cu un set exclusivist ce conține produsele noastre de top: un parfum de nișă, bijuterii fine și cosmetice premium, ambalate elegant într-o cutie de lux.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center w-full">
            <motion.a 
              href="#magazin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] font-sans hover:bg-black hover:text-white border border-transparent hover:border-red-500 transition-all flex items-center justify-center gap-3 group cursor-pointer shadow-lg"
            >
              <ArrowRight size={14} /> Vezi în Magazin
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

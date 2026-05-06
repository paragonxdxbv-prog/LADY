import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function SectionExperience() {
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
            The <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Experience</span>
          </h2>
        </div>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full aspect-[4/5] md:aspect-square bg-[#050202] rounded-3xl relative overflow-hidden group border border-red-900/20"
        >
          <img src="https://i.pinimg.com/736x/f4/b7/c7/f4b7c7c922751ed7440d4a2cc4f3479f.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="Boutique" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
          
          <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col items-start">
            <h3 className="text-3xl font-serif italic text-white mb-2">Flagship Boutiques</h3>
            <p className="text-white/60 font-sans font-light text-sm mb-6 max-w-sm">
              Discover the world of LADY in our exclusive sanctuaries located in globally renowned fashion capitals.
            </p>
            <button className="flex items-center gap-3 text-red-100/90 font-mono text-[10px] tracking-[0.2em] uppercase hover:gap-6 transition-all">
              <MapPin size={14} /> Find a Boutique <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full flex items-center justify-center relative min-h-[400px] md:min-h-full border border-red-900/20 rounded-3xl p-8 overflow-hidden bg-[#0a0505]/50 backdrop-blur-sm"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-[80px]" />
          
          <div className="text-center z-10 flex flex-col items-center">
            <span className="font-serif italic text-red-100/90 text-2xl mb-4 block">Private Appointments</span>
            <div className="w-12 h-[1px] bg-red-900/50 mb-8" />
            <p className="text-white/80 font-sans font-light text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
              Experience fashion as it was meant to be. Our private concierges stand ready to prepare an exclusive selection tailored specifically to your exact measurements and aesthetic desires.
            </p>
            <button className="px-8 py-4 border border-red-900/30 text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500">
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

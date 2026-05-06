import { motion } from 'motion/react';
import { Scissors } from 'lucide-react';

export default function SectionArtistry() {
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
          <span className="font-mono text-white/50 text-[10px] tracking-[0.3em] uppercase">004</span>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mt-2">
            Masterly <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Artistry</span>
          </h2>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full relative rounded-3xl overflow-hidden bg-[#110505]/40 backdrop-blur-md border border-red-900/30 flex flex-col md:flex-row group"
      >
        <div className="w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-[100px]" />
          
          <Scissors className="text-red-500/50 mb-8" size={32} />
          
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-8 z-10 leading-tight">Mastery in <br/>Every Thread</h2>
          
          <div className="space-y-6 z-10">
            <p className="text-white/70 font-sans font-light leading-relaxed">
              True creation requires an obsessive devotion to the imperceptible details. Our Master Tailors work in silence, shaping darkness into form with techniques passed down through generations.
            </p>
            <p className="text-white/50 font-sans font-light leading-relaxed text-sm">
              It takes up to 400 hours to construct a single LADY gown, employing structural boning cut from obsidian-glass and hand-embroidered metallic threading.
            </p>
          </div>
          
          <motion.div 
            className="w-24 h-[1px] bg-red-900/50 mt-12 mb-8 z-10"
            whileInView={{ width: ['0px', '96px'] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <button className="self-start text-white font-mono text-[10px] tracking-[0.3em] uppercase hover:text-red-400 transition-colors z-10 flex items-center gap-4">
            Discover the Process <span className="w-8 h-[1px] bg-current" />
          </button>
        </div>

        <div className="w-full md:w-1/2 min-h-[400px] aspect-square md:aspect-auto relative overflow-hidden rounded-[3rem] border border-red-900/30">
            <img src="https://i.pinimg.com/736x/cc/5b/ce/cc5bceba364ff57f3c2f7db87712ae4a.jpg" alt="Atelier Artistry" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[3s]" />
            <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
        </div>
      </motion.div>
    </section>
  );
}

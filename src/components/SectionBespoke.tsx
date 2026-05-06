import { motion } from 'motion/react';
import { PenTool } from 'lucide-react';

export default function SectionBespoke() {
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
          <span className="font-mono text-white/50 text-[10px] tracking-[0.3em] uppercase">018</span>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mt-2">
            Bespoke <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Creation</span>
          </h2>
        </div>
      </motion.div>

      <div className="w-full bg-[#110505]/40 backdrop-blur-md rounded-3xl border border-red-900/30 px-8 py-16 md:px-16 md:py-24 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
                <PenTool className="text-red-500/50 mb-8" size={32} />
                <h3 className="text-3xl md:text-5xl font-serif italic text-white mb-6">Designed For <br/>You Alone</h3>
                <p className="text-white/60 font-sans font-light leading-relaxed mb-8">
                    Our atelier opens its doors for private commissions. From the initial sketch over a glass of vintage champagne to the final fitting, experience the ultimate luxury of creating your own masterpiece.
                </p>
                <button className="px-8 py-4 border border-red-900/40 text-white font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors duration-500">
                    Commence Your Journey
                </button>
            </div>
            
            <div className="w-full md:w-1/2 min-h-[400px] aspect-[4/5] md:aspect-square relative rounded-3xl border border-red-900/30 overflow-hidden">
                <img src="https://i.pinimg.com/1200x/eb/6b/80/eb6b8043b31aa7e8482635c6f119dee0.jpg" alt="Bespoke Process" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
            </div>
        </div>
      </div>
    </section>
  );
}

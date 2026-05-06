import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function SectionLookbook() {
  return (
    <section id="lookbook" className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-12 overflow-hidden"
      >
        <div className="w-full flex justify-between items-end mb-12">
          <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              Editorial
            </span>
            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white">
              The <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Lookbook</span>
            </h2>
          </div>
        </div>

        <div className="w-full aspect-video bg-[#050202] rounded-2xl border border-red-900/20 relative overflow-hidden group cursor-pointer flex items-center justify-center">
            <img src="https://i.pinimg.com/736x/1f/ac/8c/1fac8c341c587c421433c45a24973e94.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Lookbook" />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent opacity-60 z-10" />
            
            {/* Play Button */}
            <motion.div 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 rounded-full border border-white/20 bg-black/40 backdrop-blur-md z-20 flex items-center justify-center text-white group-hover:bg-red-900/40 transition-all duration-300"
            >
              <Play fill="white" size={24} className="ml-1" />
            </motion.div>

            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-red-100/90 font-bold drop-shadow-md">Spring / Summer</span>
              <h3 className="text-3xl font-serif italic text-white mt-2">Parisian Nights</h3>
            </div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function SectionRunway() {
  const looks = [
    { name: "Look 01", desc: "Velvet Obsidian Dress", index: 1 },
    { name: "Look 02", desc: "Crimson Silhouette", index: 2 },
    { name: "Look 03", desc: "Platinum Mesh Top", index: 3 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-0 pb-12 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-12 overflow-hidden"
      >
        <div className="w-full flex justify-between items-end mb-12">
          <div className="flex flex-col items-start text-left">
            <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              Live from Paris
            </span>
            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mb-2">
              The <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Runway</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white hover:text-red-400 pb-2 border-b border-red-900/50 hover:border-red-400 transition-colors cursor-pointer"
          >
            <Sparkles size={14} /> View Gallery
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {looks.map((look, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              viewport={{ once: false, margin: "-50px" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[2/3] bg-[#050202] border border-red-900/30 rounded-2xl relative overflow-hidden flex items-center justify-center mb-4">
                 <span className="text-white/20 font-mono text-[10px] text-center px-4 tracking-widest uppercase absolute z-10">Add Picture Here</span>
                 <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/20 transition-colors duration-500 z-0" />
                 {/* Number indicator */}
                 <div className="absolute top-4 left-4 font-mono text-xs text-white/50 tracking-widest z-10">
                   0{look.index}
                 </div>
              </div>
              <div className="flex flex-col px-2">
                <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors mb-1">{look.name}</span>
                <span className="text-xs text-white/50">{look.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

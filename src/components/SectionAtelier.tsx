import { motion } from 'motion/react';
import { ShoppingBag, Gem, Droplets } from 'lucide-react';

export default function SectionAtelier() {
  return (
    <section id="parfumuri" className="relative flex flex-col items-center justify-center px-4 pt-12 z-10 w-full max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-12"
      >
        <div className="w-full flex justify-between items-end mb-10">
          <div className="flex flex-col items-start">
            <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              Profil de Companie
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-2">
              Domenii de <span className="font-serif italic text-red-100/90 font-light text-4xl md:text-6xl">Activitate</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Category 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="w-[calc(100%-8px)] mx-auto aspect-[3/4] bg-[#0a0505]/60 backdrop-blur-md border border-red-900/30 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <img src="/Skincare_Spa_with_logo_LADY_202605181023_3.jpeg" alt="Producție și R&D" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0a0505]/20 group-hover:bg-[#0a0505]/0 transition-colors duration-500 z-0" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white mb-1 group-hover:text-red-400 transition-colors">Producție și R&D</h3>
                <p className="text-xs text-white/50 group-hover:text-white/80 transition-colors">Laboratoare proprii de excelență</p>
              </div>
              <Droplets className="text-red-500/50" size={20} strokeWidth={1} />
            </div>
          </motion.div>

          {/* Category 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="flex flex-col group cursor-pointer md:mt-12"
          >
            <div className="w-[calc(100%-8px)] mx-auto aspect-[3/4] bg-[#0a0505]/60 backdrop-blur-md border border-red-900/30 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <img src="/Semi-precious_stones_with_logo_202605181023_2.jpeg" alt="Retail Premium" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0a0505]/20 group-hover:bg-[#0a0505]/0 transition-colors duration-500 z-0" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white mb-1 group-hover:text-red-400 transition-colors">Retail Premium</h3>
                <p className="text-xs text-white/50 group-hover:text-white/80 transition-colors">Rețea națională de magazine</p>
              </div>
              <ShoppingBag className="text-red-500/50" size={20} strokeWidth={1} />
            </div>
          </motion.div>

          {/* Category 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="w-[calc(100%-8px)] mx-auto aspect-[3/4] bg-[#0a0505]/60 backdrop-blur-md border border-red-900/30 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <img src="/Perfumes_with_logo_LADY_202605181023_4.jpeg" alt="Distribuție B2B" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0a0505]/20 group-hover:bg-[#0a0505]/0 transition-colors duration-500 z-0" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white mb-1 group-hover:text-red-400 transition-colors">Distribuție B2B</h3>
                <p className="text-xs text-white/50 group-hover:text-white/80 transition-colors">Parteneriate strategice internaționale</p>
              </div>
              <Gem className="text-red-500/50" size={20} strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

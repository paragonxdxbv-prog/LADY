import { motion } from 'motion/react';
import { ShoppingBag, Gem, Droplets } from 'lucide-react';

export default function SectionAtelier() {
  return (
    <section id="collection" className="relative flex flex-col items-center justify-center px-4 pt-12 z-10 w-full max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-12"
      >
        <div className="w-full flex flex-col items-start mb-12">
          <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            The Collection
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mb-2">
            Curated <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Exclusivity</span>
          </h2>
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
            <div className="w-full aspect-[3/4] bg-[#0a0505]/60 backdrop-blur-md border border-red-900/30 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <img src="https://i.pinimg.com/1200x/eb/6b/80/eb6b8043b31aa7e8482635c6f119dee0.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Brasless Couture" />
              <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/40 transition-colors duration-500 z-0" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-red-400 transition-colors">Brasless Couture</h3>
                <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors">Absolute freedom</p>
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
            <div className="w-full aspect-[3/4] bg-[#0a0505]/60 backdrop-blur-md border border-red-900/30 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
               <img src="https://i.pinimg.com/1200x/9e/52/56/9e5256e872a60f997ebdd782045e230e.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Signature Parfumes" />
               <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/40 transition-colors duration-500 z-0" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-red-400 transition-colors">Signature Parfumes</h3>
                <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors">Immortal essences</p>
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
            <div className="w-full aspect-[3/4] bg-[#0a0505]/60 backdrop-blur-md border border-red-900/30 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
               <img src="https://i.pinimg.com/1200x/99/c8/7b/99c87bc12a24b96ec8b14fdd640ebb5d.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="High Jewelry" />
               <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/40 transition-colors duration-500 z-0" />
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-red-400 transition-colors">High Jewelry</h3>
                <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors">Rings & Earrings</p>
              </div>
              <Gem className="text-red-500/50" size={20} strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

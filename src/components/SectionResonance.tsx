import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SectionResonance() {
  const products = [
    { id: '1', name: "LADY Midnight Perfume", price: 450.00, category: "Parfumuri", image: "/Perfumes_with_logo_LADY_202605181023_2.jpeg" },
    { id: '2', name: "LADY intense Rouge", price: 120.00, category: "Makeup", image: "/Makeup_cosmetics_with_logo_LADY_202605181023_2.jpeg" },
    { id: '3', name: "Cercei Handmade Aur", price: 380.00, category: "Bijuterii Handmade", image: "/Bijuterii_Handmade_LADY_logo_202605181023_2.jpeg" },
    { id: '4', name: "Inel Obsidian Nobil", price: 490.00, category: "Bijuterii", image: "/Semi-precious_stones_with_logo_202605181023.jpeg" },
  ];

  return (
    <section id="noutati" className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-12 shadow-[0_0_40px_rgba(255,0,0,0.05)]"
      >
        <div className="w-full flex justify-between items-end mb-10">
          <div className="flex flex-col items-start">
            <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              Ultimele Apariții
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white">
              Noutăți <span className="font-serif italic text-red-100/90 font-light text-4xl md:text-6xl">LADY</span>
            </h2>
          </div>
          <a href="#magazin" className="hidden md:flex text-[9px] tracking-[0.2em] uppercase text-white hover:text-red-400 pb-2 border-b border-red-900/50 hover:border-red-400 transition-colors cursor-pointer">
            Mergi la Magazin
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] bg-[#0a0505]/60 backdrop-blur-md border border-red-900/40 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505]/80 via-[#0a0505]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-0" />
                
                <motion.a 
                  href="#magazin"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-black hover:text-white border border-white z-20 w-[80%] justify-center cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                   <ArrowRight size={14} /> Vezi Detalii
                </motion.a>
              </div>
              <div className="flex flex-col bg-transparent px-1">
                <span className="text-[8px] uppercase tracking-widest text-red-500/80 mb-1">{product.category}</span>
                <h3 className="text-xs font-bold text-white mb-2 line-clamp-1 group-hover:text-red-400 transition-colors">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <a href="#magazin" className="md:hidden mt-10 text-[9px] tracking-[0.2em] uppercase text-white hover:text-red-400 pb-2 border-b border-red-900/50 transition-colors cursor-pointer w-fit mx-auto block text-center">
          Către Magazin
        </a>
      </motion.div>
    </section>
  );
}

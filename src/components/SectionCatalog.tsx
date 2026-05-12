import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';
import { useState } from 'react';

interface Props {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

export default function SectionCatalog({ addToCart }: Props) {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const categories = ["Toate", "Parfumuri", "Bijuterii", "Makeup", "Accesorii & Genți", "Handmade", "Seturi Cadou"];

  const products = [
    { id: 'c1', name: "Esență Dark Orchid", price: 450.00, category: "Parfumuri", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c2', name: "Parfum Golden Aura", price: 350.00, category: "Parfumuri", image: "https://images.unsplash.com/photo-1595425970377-c9703bc48b2d?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c3', name: "LADY Midnight", price: 500.00, category: "Parfumuri", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c4', name: "LADY Pandantiv Rubin", price: 6500.00, category: "Bijuterii", image: "https://images.unsplash.com/photo-1599643478524-fb66f7fa3656?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c5', name: "Cercei Swarovski", price: 4200.00, category: "Bijuterii", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c6', name: "Inel Obsidian Nobil", price: 5200.00, category: "Bijuterii", image: "https://images.unsplash.com/photo-1605100804763-247f67b254a6?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c7', name: "LADY Intense Rouge", price: 120.00, category: "Makeup", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c8', name: "Set Pensule Onyx", price: 280.00, category: "Makeup", image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c9', name: "Paletă Nopți în Paris", price: 340.00, category: "Makeup", image: "https://images.unsplash.com/photo-1512496115841-db0aaf528000?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c10', name: "Geantă LADY Leather", price: 1800.00, category: "Accesorii & Genți", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c11', name: "Clutch de Seară Noir", price: 950.00, category: "Accesorii & Genți", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c12', name: "Oglindă pentru poșetă", price: 140.00, category: "Accesorii & Genți", image: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c13', name: "Săpun Artizanal LADY", price: 80.00, category: "Handmade", image: "https://images.unsplash.com/photo-1600857062241-9eb0e02aa114?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c14', name: "Brățară Handmade Șnur", price: 50.00, category: "Handmade", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c15', name: "Set Cadou Lux", price: 850.00, category: "Seturi Cadou", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" },
    { id: 'c16', name: "Set Experiență Spa", price: 420.00, category: "Seturi Cadou", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop" },
  ];

  const filteredProducts = activeCategory === "Toate" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="magazin" className="relative flex flex-col items-center justify-center px-4 pt-12 w-full max-w-6xl mx-auto z-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-6 md:p-10"
      >
        <div className="w-full flex-col flex items-center mb-10 text-center">
          <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            Magazinul Nostru Oficial
            <span className="w-8 h-[1px] bg-red-500/50"></span>
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-6">
            Colecția <span className="font-serif italic text-red-100/90 font-light text-4xl md:text-6xl">Completă</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  activeCategory === cat 
                  ? 'border-red-500 bg-red-500/10 text-white' 
                  : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id} 
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] bg-[#050202] border border-red-900/20 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 w-full h-full bg-red-900/10 flex items-center justify-center text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase text-center p-4 border border-red-900/40 group-hover:bg-red-900/20 transition-all duration-700">AICEA VINE POZELE</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-black hover:text-white border border-white z-20 w-[80%] justify-center cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                     <ShoppingCart size={14} /> Adaugă
                  </motion.button>
                </div>
                <div className="flex flex-col bg-transparent px-1">
                  <span className="text-[8px] uppercase tracking-widest text-red-500/80 mb-1">{product.category}</span>
                  <h3 className="text-xs font-bold text-white mb-2 line-clamp-1 group-hover:text-red-400 transition-colors">{product.name}</h3>
                  <span className="font-mono text-xs text-white/70">${product.price.toFixed(2)}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </motion.div>
    </section>
  );
}

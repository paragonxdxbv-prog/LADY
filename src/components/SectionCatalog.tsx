import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';
import { useState } from 'react';

interface Props {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

export default function SectionCatalog({ addToCart }: Props) {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const categories = ["Toate", "Parfumuri", "Bijuterii", "Makeup", "Handmade", "Seturi Cadou", "Skin & Hair", "Pentru El"];

  const products = [
    { id: 'c1', name: "Esență Dark Orchid", price: 450.00, category: "Parfumuri", image: "/Perfumes_with_logo_LADY_202605181023.jpeg" },
    { id: 'c2', name: "Parfum Golden Aura", price: 350.00, category: "Parfumuri", image: "/Perfumes_with_logo_LADY_202605181023_2.jpeg" },
    { id: 'c3', name: "LADY Midnight", price: 500.00, category: "Parfumuri", image: "/Perfumes_with_logo_LADY_202605181023_3.jpeg" },
    { id: 'h1', name: "Parfum de Cameră Santal", price: 180.00, category: "Parfumuri", image: "/Home_Fragrances_with_logo_LADY_202605181023.jpeg" },
    { id: 'c4', name: "LADY Pandantiv Rubin", price: 480.00, category: "Bijuterii", image: "/Bijuterii_Handmade_LADY_logo_202605181023.jpeg" },
    { id: 'c5', name: "Cercei Swarovski", price: 420.00, category: "Bijuterii", image: "/Bijuterii_Handmade_LADY_logo_202605181023_2.jpeg" },
    { id: 'c6', name: "Inel Obsidian Nobil", price: 490.00, category: "Bijuterii", image: "/Semi-precious_stones_with_logo_202605181023.jpeg" },
    { id: 'c7', name: "LADY Intense Rouge", price: 120.00, category: "Makeup", image: "/Makeup_cosmetics_with_logo_LADY_202605181023.jpeg" },
    { id: 'c8', name: "Set Pensule Onyx", price: 280.00, category: "Makeup", image: "/Makeup_cosmetics_with_logo_LADY_202605181023_2.jpeg" },
    { id: 'c9', name: "Paletă Nopți în Paris", price: 340.00, category: "Makeup", image: "/Makeup_cosmetics_with_logo_LADY_202605181023_3.jpeg" },
    { id: 'c12', name: "Oglindă de buzunar", price: 140.00, category: "Makeup", image: "/Makeup_cosmetics_with_logo_LADY_202605181023_4.jpeg" },
    { id: 'c13', name: "Săpun Artizanal LADY", price: 80.00, category: "Handmade", image: "/Skincare_Spa_with_logo_LADY_202605181023.jpeg" },
    { id: 'c14', name: "Brățară Handmade Șnur", price: 50.00, category: "Handmade", image: "/Bijuterii_Handmade_LADY_logo_202605181023_3.jpeg" },
    { id: 'c15', name: "Set Cadou Lux", price: 480.00, category: "Seturi Cadou", image: "/Gift_sets_with_logo_202605181023.jpeg" },
    { id: 'c16', name: "Set Experiență Spa", price: 420.00, category: "Seturi Cadou", image: "/Gift_sets_with_logo_202605181023_2.jpeg" },
    { id: 's1', name: "LADY Hair Elixir", price: 210.00, category: "Skin & Hair", image: "/Make_body_care_products_logo_202605181811.jpeg" },
    { id: 's2', name: "Șampon Revitalizant", price: 90.00, category: "Skin & Hair", image: "/Make_body_care_products_logo_202605181811_2.jpeg" },
    { id: 's3', name: "Ser cu Acid Hialuronic", price: 150.00, category: "Skin & Hair", image: "/make_me_som_pordcuts_for_202605181811.jpeg" },
    { id: 'm1', name: "Parfum LADY Homme", price: 480.00, category: "Pentru El", image: "/Make_products_for_Men's_Collection_202605181811.jpeg" },
    { id: 'm2', name: "Set Îngrijire Barbă", price: 230.00, category: "Pentru El", image: "/make_me_som_pordcuts_for_202605181811_2.jpeg" },
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
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050202] via-[#050202]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-0" />
                  
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
                  <span className="font-mono text-xs text-white/70">{product.price.toFixed(2)} RON</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </motion.div>
    </section>
  );
}

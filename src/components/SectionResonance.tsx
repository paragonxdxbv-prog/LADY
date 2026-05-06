import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

interface Props {
  addToCart: (product: any) => void;
}

export default function SectionResonance({ addToCart }: Props) {
  const products = [
    { id: '1', name: "LADY Midnight Perfume", price: 450.00, category: "Fragrance", image: "https://i.pinimg.com/736x/2b/be/24/2bbe246a10bec01084d409f5729adb95.jpg" },
    { id: '2', name: "Crimson Silk Slip", price: 1200.00, category: "Brasless Couture", image: "https://i.pinimg.com/736x/42/c3/0e/42c30ee7e0cdf22e1bdd54bc414538cc.jpg" },
    { id: '3', name: "LADY Diamond Studs", price: 3800.00, category: "Jewelry", image: "https://i.pinimg.com/736x/c3/99/b1/c399b19670382335a9caa7df775bd617.jpg" },
    { id: '4', name: "Obsidian Halo Ring", price: 5200.00, category: "Jewelry", image: "https://i.pinimg.com/736x/74/05/a5/7405a500c3fb4d845e8ad3b242997c0f.jpg" },
  ];

  return (
    <section id="boutique" className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-12"
      >
        <div className="w-full flex justify-between items-end mb-12">
          <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              The Boutique
            </span>
            <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white">
              New <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Arrivals</span>
            </h2>
          </div>
          <button className="hidden md:flex text-[10px] tracking-[0.2em] uppercase text-white hover:text-red-400 pb-2 border-b border-red-900/50 hover:border-red-400 transition-colors cursor-pointer">
            View All
          </button>
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
                <img src={product.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={product.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-black hover:text-white border border-white z-20 w-[80%] justify-center cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                   <ShoppingCart size={14} /> Add
                </motion.button>
              </div>
              <div className="flex flex-col bg-transparent px-1">
                <span className="text-[9px] uppercase tracking-widest text-red-500/80 mb-1">{product.category}</span>
                <h3 className="text-sm font-bold text-white mb-2 line-clamp-1 group-hover:text-red-400 transition-colors">{product.name}</h3>
                <span className="font-mono text-sm text-white/70">${product.price.toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 text-[10px] tracking-[0.2em] uppercase text-white hover:text-red-400 pb-2 border-b border-red-900/50 transition-colors cursor-pointer w-fit">
          View All Products
        </button>
      </motion.div>
    </section>
  );
}

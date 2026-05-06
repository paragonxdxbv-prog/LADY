import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

interface Props {
  addToCart: (product: any) => void;
}

export default function SectionRelics({ addToCart }: Props) {
  const product = { id: 'special_1', name: 'LADY No. 1', price: 850.00, category: 'Signature Essence' };

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col md:flex-row w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl overflow-hidden min-h-[500px]"
      >
        {/* Left Side image placeholder */}
        <div className="w-full md:w-1/2 relative bg-[#050202] border-b md:border-b-0 md:border-r border-red-900/30 flex items-center justify-center overflow-hidden min-h-[400px]">
           <img src="https://i.pinimg.com/736x/88/b1/22/88b122cb190f662633822a6b76323378.jpg" className="absolute inset-0 w-full h-full object-cover" alt="LADY No. 1" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)]" />
        </div>

        {/* Right Side text & CTA */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          
          <span className="text-[9px] uppercase tracking-[0.2em] text-red-500 mb-6 flex items-center gap-4">
            <span className="w-6 h-[1px] bg-red-500/50"></span>
            Signature Essence
          </span>

          <h3 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white mb-6">
            LADY <span className="font-serif italic text-red-100/90 font-light pl-2">No. 1</span>
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-md text-justify">
            A perfume that transcends physical boundaries. Formulated exclusively for the elite, it captures the raw, untamed essence of luxury. Notes of dark cherry, burning amber, and absolute power.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center w-full">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] font-sans hover:bg-black hover:text-white border border-transparent hover:border-red-500 transition-all flex items-center justify-center gap-3 group cursor-pointer shadow-lg"
            >
              <ShoppingBag size={16} /> Add to Cart
            </motion.button>
            <span className="font-mono text-lg text-white/80">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

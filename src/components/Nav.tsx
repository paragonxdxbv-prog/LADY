import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { MouseEvent } from 'react';

interface NavProps {
  onOpenCart: () => void;
  cartItemsCount: number;
}

export default function Nav({ onOpenCart, cartItemsCount }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-3 md:px-6 py-2 md:py-3 rounded-full bg-black/60 backdrop-blur-md border border-red-900/30 w-[95vw] lg:w-max max-w-5xl"
      >
        <div className="flex items-center gap-2 pr-2 md:pr-4 border-r border-red-900/30 shrink-0">
          <motion.div 
            animate={{ boxShadow: ['0 0 10px rgba(255,0,0,0.2)', '0 0 20px rgba(255,0,0,0.6)', '0 0 10px rgba(255,0,0,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-full overflow-hidden border-[2px] border-red-500 bg-black"
          >
            <img 
              src="https://i.ibb.co/Tx4GQrNk/Jennifer.jpg" 
              alt="LADY Logo" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <span className="font-sans font-bold tracking-tight text-[10px] md:text-xs text-white uppercase whitespace-nowrap">F.E. LADY S.R.L.</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex flex-row items-center gap-5 text-[10px] font-semibold tracking-widest text-white/70 uppercase whitespace-nowrap px-4 shrink-0 overflow-x-auto max-w-[60vw]">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#parfumuri" onClick={(e) => scrollTo(e, 'parfumuri')} className="hover:text-white transition-colors cursor-pointer">Parfumuri</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#bijuterii" onClick={(e) => scrollTo(e, 'bijuterii')} className="hover:text-white transition-colors cursor-pointer">Bijuterii</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#makeup" onClick={(e) => scrollTo(e, 'makeup')} className="hover:text-white transition-colors cursor-pointer">Makeup</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#seturi" onClick={(e) => scrollTo(e, 'seturi')} className="hover:text-white transition-colors cursor-pointer">Seturi Cadou</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#skin" onClick={(e) => scrollTo(e, 'skin')} className="hover:text-white transition-colors cursor-pointer">Skin & Hair</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#pentruel" onClick={(e) => scrollTo(e, 'pentruel')} className="hover:text-white transition-colors cursor-pointer">Pentru El</motion.a>
        </div>

        <div className="px-3 border-l border-red-900/30 items-center shrink-0 hidden lg:flex">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#parfumuri"
            onClick={(e) => scrollTo(e, 'parfumuri')}
            className="flex items-center gap-2 group text-[9px] md:text-xs font-semibold tracking-widest text-red-400 hover:text-red-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span className="uppercase animate-pulse">Derulează în jos &darr;</span>
          </motion.a>
        </div>

        <div className="flex items-center justify-end flex-grow lg:flex-none gap-3 pl-2 lg:pl-4 lg:border-l lg:border-red-900/30">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white/70 hover:text-white cursor-pointer transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCart}
            className="flex items-center gap-2 group text-[9px] md:text-[10px] font-semibold tracking-widest text-white/70 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            <ShoppingCart size={14} className="md:w-[14px] md:h-[14px] w-3 h-3" />
            <span className="uppercase">Coș ({cartItemsCount})</span>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 bg-black/80 backdrop-blur-xl border border-red-900/50 rounded-3xl p-6 w-[90vw] max-w-sm flex flex-col gap-4 text-center lg:hidden"
          >
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2 border-b border-white/10 pb-2">Meniu</span>
            <a href="#parfumuri" onClick={(e) => scrollTo(e, 'parfumuri')} className="text-xs font-bold tracking-widest text-white uppercase hover:text-red-400 transition-colors py-2">Parfumuri</a>
            <a href="#bijuterii" onClick={(e) => scrollTo(e, 'bijuterii')} className="text-xs font-bold tracking-widest text-white uppercase hover:text-red-400 transition-colors py-2">Bijuterii</a>
            <a href="#makeup" onClick={(e) => scrollTo(e, 'makeup')} className="text-xs font-bold tracking-widest text-white uppercase hover:text-red-400 transition-colors py-2">Makeup</a>
            <a href="#seturi" onClick={(e) => scrollTo(e, 'seturi')} className="text-xs font-bold tracking-widest text-white uppercase hover:text-red-400 transition-colors py-2">Seturi Cadou</a>
            <a href="#skin" onClick={(e) => scrollTo(e, 'skin')} className="text-xs font-bold tracking-widest text-white uppercase hover:text-red-400 transition-colors py-2">Skin & Hair</a>
            <a href="#pentruel" onClick={(e) => scrollTo(e, 'pentruel')} className="text-xs font-bold tracking-widest text-white uppercase hover:text-red-400 transition-colors py-2">Pentru El</a>
            <a href="#parfumuri" onClick={(e) => scrollTo(e, 'parfumuri')} className="text-[10px] font-bold tracking-widest text-red-500 uppercase hover:text-red-400 transition-colors py-2 mt-2 border-t border-red-900/30 pt-4">Derulează în jos &darr;</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

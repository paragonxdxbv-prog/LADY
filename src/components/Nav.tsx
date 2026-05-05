import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

interface NavProps {
  onOpenCart: () => void;
  cartItemsCount: number;
}

export default function Nav({ onOpenCart, cartItemsCount }: NavProps) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full bg-black/60 backdrop-blur-md border border-red-900/30 w-[95vw] md:w-max max-w-2xl"
    >
      <div className="flex items-center gap-2 md:gap-3 pr-2 md:pr-6 border-r border-red-900/30">
        <div className="relative w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-full overflow-hidden border border-red-900/50 bg-black">
          <img 
            src="https://i.ibb.co/Tx4GQrNk/Jennifer.jpg" 
            alt="LADY Logo" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <span className="font-sans font-bold tracking-widest text-[10px] md:text-sm text-white">LADY</span>
      </div>
      
      <div className="flex flex-row items-center gap-3 md:gap-6 text-[8px] md:text-xs font-semibold tracking-[0.15em] text-white/70 uppercase whitespace-nowrap pl-2 md:pl-0">
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#collection" onClick={(e) => scrollTo(e, 'collection')} className="hover:text-white transition-colors cursor-pointer hidden sm:block">Couture</motion.a>
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#collection" onClick={(e) => scrollTo(e, 'collection')} className="hover:text-white transition-colors cursor-pointer">Parfumes</motion.a>
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#boutique" onClick={(e) => scrollTo(e, 'boutique')} className="hover:text-white transition-colors cursor-pointer">Jewelry</motion.a>
      </div>

      <div className="pl-2 md:pl-6 border-l border-red-900/30 flex items-center">
        <motion.button
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          onClick={onOpenCart}
          className="flex items-center gap-2 group text-[9px] md:text-xs font-semibold tracking-widest text-white/70 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
        >
          <ShoppingCart size={14} className="md:w-[14px] md:h-[14px] w-3 h-3" />
          <span className="uppercase">Bag ({cartItemsCount})</span>
        </motion.button>
      </div>
    </motion.nav>
  );
}

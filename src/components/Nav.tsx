import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { memo, useState, type MouseEvent } from 'react';

interface NavProps {
  onOpenCart: () => void;
  cartItemsCount: number;
}

export default memo(function Nav({ onOpenCart, cartItemsCount }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Couture', id: 'collection' },
    { label: 'Jewelry', id: 'jewelry' },
    { label: 'Lookbook', id: 'lookbook' },
    { label: 'Catalog', id: 'catalog' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[60] flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full bg-black/60 backdrop-blur-md border border-red-900/30 w-[95vw] md:w-max max-w-3xl"
      >
        <div className="flex items-center gap-2 md:gap-3 pr-2 md:pr-6 border-r border-red-900/30">
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
          <span className="font-sans font-bold tracking-widest text-[10px] md:text-sm text-white">LADY</span>
        </div>
        
        <div className="hidden md:flex flex-row items-center gap-3 md:gap-6 text-[8px] md:text-xs font-semibold tracking-[0.15em] text-white/70 uppercase whitespace-nowrap px-4 border-r border-red-900/30 pr-6">
          {navLinks.map((link) => (
             <motion.a 
                key={link.id}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                href={`#${link.id}`} 
                onClick={(e) => scrollTo(e, link.id)} 
                className="hover:text-white transition-colors cursor-pointer"
             >
               {link.label}
             </motion.a>
          ))}
        </div>

        <div className="pl-2 flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCart}
            className="flex items-center gap-2 group text-[9px] md:text-xs font-semibold tracking-widest text-white/70 hover:text-white transition-colors whitespace-nowrap cursor-pointer mr-2 md:mr-0"
          >
            <ShoppingCart size={14} className="md:w-[14px] md:h-[14px] w-3 h-3" />
            <span className="uppercase hidden sm:inline">Bag ({cartItemsCount})</span>
            <span className="uppercase sm:hidden">{cartItemsCount}</span>
          </motion.button>
          
          <button 
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollTo(e, link.id)}
                  whileHover={{ scale: 1.05, color: '#ffffff' }}
                  className="text-2xl font-serif text-white/70 uppercase tracking-widest"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
               animate={{ boxShadow: ['0 0 10px rgba(255,0,0,0.2)', '0 0 20px rgba(255,0,0,0.6)', '0 0 10px rgba(255,0,0,0.2)'] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="mt-16 relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-[2px] border-red-500 bg-black"
            >
              <img 
                src="https://i.ibb.co/Tx4GQrNk/Jennifer.jpg" 
                alt="LADY Logo" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

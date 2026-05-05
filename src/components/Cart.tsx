import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, cartItems, onRemove }: CartProps) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0505] border-l border-red-900/50 z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-red-900/30">
              <h2 className="font-sans font-bold text-xl uppercase tracking-widest text-white flex items-center gap-3">
                <ShoppingBag size={20} /> Your Bag
              </h2>
              <button onClick={onClose} className="p-2 border border-red-900/30 rounded-full text-white hover:text-red-500 hover:border-red-500 transition-colors cursor-pointer">
                <X size={16} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-white/50 gap-4">
                  <ShoppingBag size={48} strokeWidth={1} className="opacity-20" />
                  <p className="tracking-widest uppercase text-xs">Your bag is empty.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div key={item.id} layout className="flex gap-4 p-4 border border-red-900/20 rounded-2xl bg-black/40">
                    <div className="w-20 h-24 bg-[#110505] rounded-xl flex items-center justify-center border border-red-900/10 shrink-0">
                       <span className="text-[8px] uppercase text-white/20">IMG</span>
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[8px] uppercase tracking-widest text-red-500/80">{item.category}</span>
                          <h4 className="text-sm font-bold text-white leading-tight mt-1">{item.name}</h4>
                        </div>
                        <button onClick={() => onRemove(item.id)} className="text-white/40 hover:text-red-500 transition-colors cursor-pointer">
                          <X size={14} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3 border border-red-900/30 rounded-full px-2 py-1">
                           <Minus size={10} className="opacity-50 cursor-pointer" />
                           <span className="text-xs font-mono">{item.quantity}</span>
                           <Plus size={10} className="opacity-50 cursor-pointer" />
                        </div>
                        <span className="font-mono text-sm text-white/90">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-red-900/30 bg-black flex flex-col gap-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60 tracking-widest uppercase text-xs">Subtotal</span>
                  <span className="font-mono text-lg text-white">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-white text-black py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white border border-transparent hover:border-red-500 transition-all cursor-pointer">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

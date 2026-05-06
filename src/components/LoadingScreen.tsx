import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, memo } from 'react';

export default memo(function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050202]/60 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-white uppercase select-none drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]">
              LADY
            </h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-red-500/50 mt-4 origin-left"
              style={{ width: "100%" }}
            />
            <p className="mt-4 text-[10px] font-bold tracking-[0.5em] text-white/50 uppercase">
              Initializing Experience
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

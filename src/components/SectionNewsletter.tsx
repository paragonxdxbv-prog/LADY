import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function SectionNewsletter() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-12 pb-24 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-10 md:p-20 flex flex-col items-center text-center overflow-hidden relative"
      >
        {/* Subtle radial background inside the card */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.1)_0%,transparent_60%)] pointer-events-none" />

        <div className="w-16 h-16 rounded-full border border-red-900/50 bg-black flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
          <Mail strokeWidth={1} size={24} />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-4 relative z-10">
          Join The <span className="font-serif italic text-red-100/90 font-light">Inner Circle</span>
        </h2>
        
        <p className="text-sm text-white/60 max-w-md mx-auto mb-10 leading-relaxed relative z-10">
          Subscribe to receive exclusive invitations to private viewings, early access to new collections, and bespoke editorial content.
        </p>

        <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-1 relative">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full bg-[#050202] border border-red-900/50 rounded-full px-6 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors shadow-inner"
              required
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] font-sans hover:bg-black hover:text-white border border-transparent hover:border-red-500 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
          >
            Subscribe
          </motion.button>
        </form>
        
        <p className="text-[10px] text-white/30 mt-6 tracking-widest uppercase relative z-10">
          By subscribing, you agree to our Terms & Privacy Policy.
        </p>
      </motion.div>
    </section>
  );
}

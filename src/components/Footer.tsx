import { motion } from 'motion/react';
import { Twitter, Instagram, Facebook, Link2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto px-4 py-8 mt-24">
      <div className="bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-14 mb-8 shadow-[0_0_40px_rgba(255,0,0,0.05)] flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
               <div className="w-6 h-6 rounded-full overflow-hidden border border-red-500">
                 <img src="https://i.ibb.co/Tx4GQrNk/Jennifer.jpg" alt="LADY" className="w-full h-full object-cover filter grayscale" />
               </div>
               <span className="font-sans font-bold tracking-widest text-lg text-white">LADY</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              LADY oferă frumusețe absolută prin esențe rare, bijuterii lucrate manual și cosmetice premium - creat pentru doamnele din întreaga lume.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 text-sm mt-8 md:mt-0 w-full md:w-auto">
            <div className="flex flex-col gap-4">
              <h5 className="font-bold tracking-widest text-[10px] uppercase text-white mb-2">Colecții</h5>
              {['Parfumuri', 'Cosmetice', 'Bijuterii', 'Handmade'].map((link) => (
                <a key={link} href="#" className="text-white/50 hover:text-red-400 transition-colors">{link}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-bold tracking-widest text-[10px] uppercase text-white mb-2">Filosofie</h5>
              {['Povestea LADY', 'Artizanii noștri', 'Materiale'].map((link) => (
                <a key={link} href="#" className="text-white/50 hover:text-red-400 transition-colors">{link}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h5 className="font-bold tracking-widest text-[10px] uppercase text-white mb-2">Servicii</h5>
              {['Concierge', 'Confidențialitate', 'Termeni'].map((link) => (
                <a key={link} href="#" className="text-white/50 hover:text-red-400 transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-red-900/20 my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-white/30 uppercase gap-4 text-center md:text-left">
          <span>© 2026 LADY CORP / TOATE DREPTURILE REZERVATE.</span>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-white/50">Urmăriți-ne pe</span>
            <div className="flex items-center gap-6 text-white/40">
              <motion.div whileHover={{ scale: 1.2, color: "white" }}><Link2 size={16} className="cursor-pointer" /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "white" }}><Facebook size={16} className="cursor-pointer" /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "white" }}><Twitter size={16} className="cursor-pointer" /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "white" }}><Instagram size={16} className="cursor-pointer" /></motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'motion/react';

export default function SectionPress() {
  const pressLogos = [
    { name: "VOGUE", delay: 0 },
    { name: "ELLE", delay: 0.1 },
    { name: "HARPER'S BAZAAR", delay: 0.2 },
    { name: "VANITY FAIR", delay: 0.3 },
    { name: "GQ", delay: 0.4 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-12 w-full max-w-6xl mx-auto z-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-14 shadow-[0_0_40px_rgba(255,0,0,0.05)] flex flex-col items-center"
      >
        <span className="text-[9px] uppercase tracking-widest text-red-500 mb-8 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-red-500/50"></span>
          Recunoaștere Globală
          <span className="w-8 h-[1px] bg-red-500/50"></span>
        </span>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {pressLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: logo.delay, duration: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl font-serif font-light tracking-widest hover:text-white transition-colors cursor-pointer"
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ShieldCheck, Gem, Wine } from 'lucide-react';

export default function SectionPhilosophy() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Unyielding Standards",
      desc: "We accept nothing short of perfection. Every piece is rigorously tested."
    },
    {
      icon: Gem,
      title: "Rare Materials",
      desc: "Sourcing only the most exclusive resources from across the globe."
    },
    {
      icon: Wine,
      title: "Timeless Allure",
      desc: "Creating masterworks that outlive generations and transcend trends."
    }
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-16 flex flex-col items-center"
      >
        <div className="w-full mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-2 w-full text-center">
            The <span className="font-serif italic text-red-100/90 font-light text-4xl md:text-6xl">Philosophy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full px-4 md:px-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full border border-red-900/40 bg-[#0a0505] flex items-center justify-center mb-8 relative overflow-hidden shadow-lg group-hover:border-red-500 transition-colors duration-300">
                 <div className="absolute inset-0 bg-red-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                 <pillar.icon className="text-red-500/80 group-hover:text-white transition-colors relative z-10" strokeWidth={1} size={32} />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-4">{pillar.title}</h3>
              <p className="text-xs text-white/50 leading-loose max-w-[250px]">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

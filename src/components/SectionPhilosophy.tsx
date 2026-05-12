import { motion } from 'motion/react';
import { ShieldCheck, Gem, Wine } from 'lucide-react';

export default function SectionPhilosophy() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Misiunea Noastră",
      desc: "Să oferim produse de o calitate incomparabilă, celebrând frumusețea și eleganța feminină la nivel global."
    },
    {
      icon: Gem,
      title: "Viziunea F.E. LADY",
      desc: "Să devenim reperul absolut în materie de lux, rafinament și inovație în industria de beauty și accesorii."
    },
    {
      icon: Wine,
      title: "Valori Fundamentale",
      desc: "Integritate, pasiune pentru excelență, respect pentru autenticitate și orientare absolută către client."
    }
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-12 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-14 flex flex-col items-center shadow-[0_0_40px_rgba(255,0,0,0.05)]"
      >
        <div className="w-full mb-14 text-center">
          <h2 className="text-2xl md:text-4xl font-sans font-medium tracking-tight text-white mb-2 w-full text-center">
            Marea <span className="font-serif italic text-red-100/90 font-light text-3xl md:text-5xl">Filosofie</span>
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
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-white mb-3">{pillar.title}</h3>
              <p className="text-[10px] text-white/50 leading-loose max-w-[250px]">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

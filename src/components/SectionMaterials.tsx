import { motion } from 'motion/react';
import { Diamond, Droplet, Sparkles } from 'lucide-react';

export default function SectionMaterials() {
  const materials = [
    {
      icon: Diamond,
      title: "Croială Impecabilă",
      desc: "Diamante obținute etic, modelate de meșteri artizani pentru o strălucire maximă."
    },
    {
      icon: Droplet,
      title: "Aur Lichid",
      desc: "Parfumurile noastre folosesc extracte rare, învechite timp de decenii."
    },
    {
      icon: Sparkles,
      title: "Ingrediente Fine",
      desc: "Fiecare nuanță de makeup este creată la perfecțiune pentru acoperire optimă."
    }
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto py-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-12 shadow-[0_0_40px_rgba(255,0,0,0.05)]"
      >
        <div className="w-full flex justify-center mb-10">
            <h2 className="text-2xl md:text-4xl font-sans font-medium tracking-tight text-white mb-2 text-center">
              Adevăratele <span className="font-serif italic text-red-100/90 font-light text-3xl md:text-5xl pl-2">Elemente</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full">
          {materials.map((mat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-[#0a0505]/60 backdrop-blur-sm border border-red-900/20 rounded-3xl group"
            >
              <div className="w-16 h-16 rounded-full border border-red-900/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-900/20 group-hover:border-red-500 transition-all duration-300">
                <mat.icon className="text-white/60 group-hover:text-white transition-colors" strokeWidth={1} size={24} />
              </div>
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-white mb-3">{mat.title}</h3>
              <p className="text-[10px] text-white/50 leading-relaxed balance">{mat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

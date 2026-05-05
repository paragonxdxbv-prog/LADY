import { motion } from 'motion/react';
import { Diamond, Droplet, Sparkles } from 'lucide-react';

export default function SectionMaterials() {
  const materials = [
    {
      icon: Diamond,
      title: "Flawless Cut",
      desc: "Ethically sourced diamonds, shaped by master artisans for maximum brilliance."
    },
    {
      icon: Droplet,
      title: "Liquid Gold",
      desc: "Our signature perfumes use rare extracts aged over decades."
    },
    {
      icon: Sparkles,
      title: "Finest Silks",
      desc: "Each thread woven to perfection, offering unparalleled comfort and drape."
    }
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto py-12">
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
            <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-3">{mat.title}</h3>
            <p className="text-xs text-white/50 leading-relaxed balance">{mat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

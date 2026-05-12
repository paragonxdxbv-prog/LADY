import { motion } from 'motion/react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

export default function SectionAbout() {
  const stats = [
    { icon: Award, label: "Ani de Excelență", value: "15+" },
    { icon: Users, label: "Clienți Fidele", value: "10K+" },
    { icon: Globe, label: "Țări Acoperite", value: "12" },
    { icon: TrendingUp, label: "Colecții Lansate", value: "50+" },
  ];

  return (
    <section id="despre-noi" className="relative flex flex-col items-center justify-center px-4 pt-12 w-full max-w-6xl mx-auto z-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-14 shadow-[0_0_40px_rgba(255,0,0,0.05)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              Despre F.E. LADY S.R.L.
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-6">
              Sinteza <span className="font-serif italic text-red-100/90 font-light text-4xl md:text-6xl">Succesului</span>
            </h2>
            <p className="text-sm text-white/60 leading-relaxed max-w-md mb-8">
              Suntem o companie cu viziune internațională, dedicată segmentului de beauty și accesorii de lux. Inovația, atenția la detalii și parteneriatele solide au definit creșterea constantă a F.E. LADY S.R.L., impunându-ne ca lideri de încredere pe piața din România și dincolo de ea.
            </p>
            
            <div className="grid grid-cols-2 gap-6 w-full">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon size={20} className="text-red-500/80" />
                    <span className="text-3xl font-serif text-white">{stat.value}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full aspect-square md:aspect-auto md:h-full bg-[#050202] rounded-xl border border-red-900/20 relative overflow-hidden flex items-center justify-center min-h-[400px]">
            <div className="absolute inset-0 w-full h-full bg-red-900/10 flex items-center justify-center text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase text-center p-4 border border-red-900/40">AICEA VINE POZELE</div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

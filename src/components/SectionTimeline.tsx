import { motion } from 'motion/react';

export default function SectionTimeline() {
  const events = [
    { year: "2018", title: "Înființarea Companiei", desc: "Se naște F.E. LADY S.R.L., punând bazele unei viziuni despre lux și rafinament." },
    { year: "2020", title: "Lansare Națională", desc: "Deschiderea primei linii proprii de accesorii premium." },
    { year: "2023", title: "Divizia Parfumerie", desc: "Introducerea semnăturilor olfactive unice și a esențelor rare." },
    { year: "2026", title: "Extindere Globală", desc: "Pătrunderea pe piețele internaționale și consolidarea brandului F.E. LADY." },
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
        <div className="w-full mb-16 text-center flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            Evoluție & Strategie
            <span className="w-8 h-[1px] bg-red-500/50"></span>
          </span>
          <h2 className="text-2xl md:text-5xl font-sans font-medium tracking-tight text-white mb-2">
            Istoricul <span className="font-serif italic text-red-100/90 font-light text-3xl md:text-5xl">Companiei</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-red-900/50 md:-translate-x-1/2" />
          
          <div className="flex flex-col gap-12 w-full">
            {events.map((ev, i) => (
              <div key={i} className={`relative flex items-center w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}>
                
                {/* Node marker */}
                <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-red-500 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(255,0,0,0.8)] z-10" />
                
                <div className={`w-full md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} pl-12 md:pl-0`}>
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:pl-10 md:text-left text-left' : 'md:pr-10 md:text-right text-left'}`}>
                    <span className="text-2xl md:text-4xl font-serif text-white/50 mb-2">{ev.year}</span>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-2">{ev.title}</h3>
                    <p className="text-xs text-white/70 max-w-[280px]">{ev.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

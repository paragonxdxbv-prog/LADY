import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function SectionTestimonials() {
  const testimonials = [
    { quote: "O experiență absolut divină. Detaliile bijuteriilor sunt de o precizie și o finețe uluitoare.", author: "Elena M.", role: "Clientă Premium" },
    { quote: "Parfumurile F.E. LADY m-au cucerit instant. Fiecare notă reflectă luxul autentic și eleganța pură.", author: "Maria S.", role: "Colecționar" },
    { quote: "Serviciul de concierge este impecabil. O atenție la detalii care redefinește standardele exclusivității.", author: "Diana P.", role: "Clubul LADY" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-12 w-full max-w-6xl mx-auto z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#130606]/45 backdrop-blur-lg border border-red-900/40 rounded-[2rem] p-8 md:p-14 shadow-[0_0_40px_rgba(255,0,0,0.05)]"
      >
        <div className="w-full mb-12 text-center flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            Vocea Clienților
            <span className="w-8 h-[1px] bg-red-500/50"></span>
          </span>
          <h2 className="text-2xl md:text-4xl font-sans font-medium tracking-tight text-white mb-2">
            Aprecieri <span className="font-serif italic text-red-100/90 font-light text-3xl md:text-5xl">Elegante</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 border border-red-900/20 rounded-2xl bg-black/20 hover:bg-black/40 hover:border-red-900/40 transition-all duration-500">
              <Quote className="text-red-500/30 mb-6" size={32} />
              <p className="text-sm text-white/70 italic mb-8 flex-grow leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">{t.author}</h4>
                <span className="text-[9px] text-red-400 uppercase tracking-widest">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

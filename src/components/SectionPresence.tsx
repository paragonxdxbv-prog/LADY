import { motion } from 'motion/react';
import { ShieldAlert, Package, RefreshCcw } from 'lucide-react';

export default function SectionPresence() {
  const benefits = [
    { icon: Package, title: 'Global Delivery', desc: 'Complimentary overnight shipping via secure, insured luxury couriers worldwide.' },
    { icon: ShieldAlert, title: 'Authenticity Guarantee', desc: 'Every piece is cryptographically verified and accompanied by a forged certificate of purity.' },
    { icon: RefreshCcw, title: 'Bespoke Returns', desc: 'White-glove return service. We collect directly from your estate within 30 days.' }
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-0 w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-16"
      >
        <div className="w-full flex justify-center mb-16 relative">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white z-10 text-center tracking-tight">
              The LADY <span className="font-serif italic text-red-100/90 font-light pl-2">Standard</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: false, margin: "-50px" }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-20 h-20 rounded-full border border-red-900/50 flex items-center justify-center text-red-500 mb-6 group-hover:border-red-500 group-hover:bg-red-500/10 transition-colors shadow-lg">
                   <Icon strokeWidth={1} size={28} />
                </div>
                <h4 className="text-sm font-bold tracking-[0.1em] uppercase text-white mb-4">{benefit.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed max-w-[250px]">{benefit.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  );
}

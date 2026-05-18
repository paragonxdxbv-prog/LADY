import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function SectionStoreLocations() {
  const stores = [
    { city: "Paris", location: "Rue du Faubourg Saint-Honoré", phone: "+33 1 42 65 24 24" },
    { city: "Tokyo", location: "Ginza Chuo-dori", phone: "+81 3 3569 3300" },
    { city: "New York", location: "Fifth Avenue", phone: "+1 212 755 8000" },
    { city: "Milano", location: "Via Monte Napoleone", phone: "+39 02 7600 3233" }
  ];

  return (
    <section className="w-full max-w-7xl px-4 md:px-8 py-24 md:py-32 relative z-10 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="w-full flex justify-between items-end border-b border-red-900/30 pb-6 mb-16"
      >
        <div>
          <span className="font-mono text-white/50 text-[10px] tracking-[0.3em] uppercase">019</span>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-white mt-2">
            Global <span className="font-serif italic text-red-100/90 font-light text-5xl md:text-7xl">Presence</span>
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-12">
        {stores.map((store, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-start p-8 bg-[#0a0505]/60 backdrop-blur-md rounded-3xl border border-red-900/30 group hover:border-red-500 transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-red-900/30 flex items-center justify-center mb-6 group-hover:bg-red-900/20 transition-all duration-500">
                <MapPin size={20} className="text-red-500/70" />
            </div>
            <h3 className="text-2xl font-serif italic text-white mb-2 group-hover:text-red-100/90 transition-colors">{store.city}</h3>
            <p className="text-white/60 font-sans font-light text-sm mb-4 h-10">{store.location}</p>
            <p className="text-red-500/50 font-mono text-[10px] tracking-widest">{store.phone}</p>
            <div className="w-full h-[1px] bg-red-900/20 mt-6 group-hover:bg-red-900/50 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

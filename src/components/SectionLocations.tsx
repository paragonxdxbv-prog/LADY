import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function SectionLocations() {
  const locations = [
    { city: "Paris", address: "Avenue des Champs-Élysées, 75008", phone: "+33 1 40 00 00 00" },
    { city: "London", address: "New Bond Street, Mayfair, W1S", phone: "+44 20 7000 0000" },
    { city: "București", address: "Calea Victoriei, Sector 1", phone: "+40 21 000 0000" },
    { city: "Dubai", address: "Fashion Avenue, Dubai Mall", phone: "+971 4 000 0000" },
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="flex flex-col items-start">
            <span className="text-[9px] uppercase tracking-widest text-red-500 mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-500/50"></span>
              Prezență Globală
            </span>
            <h2 className="text-2xl md:text-4xl font-sans font-medium tracking-tight text-white mb-2">
              Boutique-uri <span className="font-serif italic text-red-100/90 font-light text-3xl md:text-5xl">Exclusive</span>
            </h2>
          </div>
          <p className="text-xs text-white/50 max-w-xs md:text-right leading-relaxed">
            Descoperiți universul F.E. LADY în locațiile noastre premium din întreaga lume.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {locations.map((loc, i) => (
            <div key={i} className="flex flex-col items-start p-6 border border-red-900/20 rounded-2xl bg-black/20 group hover:bg-[#1a0808]/50 hover:border-red-500/40 transition-all duration-500">
              <MapPin className="text-red-500 mb-5 group-hover:scale-110 transition-transform duration-500" size={24} strokeWidth={1} />
              <h3 className="text-xl font-serif tracking-tight text-white mb-3">{loc.city}</h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-6 flex-grow leading-relaxed">{loc.address}</p>
              <span className="text-[10px] text-white/80 font-bold tracking-widest">{loc.phone}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

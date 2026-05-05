import { motion } from 'motion/react';

export default function SectionWhispers() {
  const reviews = [
    {
      quote: "LADY has redefined modern opulence. It is not just clothing; it is a weapon of seduction.",
      author: "Vogue Paris"
    },
    {
      quote: "The jewelry collection belongs in a museum, yet breathes life on the skin.",
      author: "Harper's Bazaar"
    },
    {
      quote: "Unapologetic, raw, and undeniably elegant. A masterclass in dark couture.",
      author: "The New York Times Prestige"
    }
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, margin: "-100px" }}
        className="w-full bg-[#110505]/40 backdrop-blur-md border border-red-900/30 rounded-3xl p-8 md:p-12 mb-16 px-4"
      >
        <div className="w-full flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] uppercase tracking-widest text-red-500 mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-red-500/50"></span>
            The Word
            <span className="w-8 h-[1px] bg-red-500/50"></span>
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-2">
            Industry <span className="font-serif italic text-red-100/90 font-light pl-2">Whispers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-10 bg-[#0a0505]/40 backdrop-blur-sm border border-red-900/20 rounded-2xl group cursor-default"
            >
              <span className="text-4xl font-serif text-red-900/40 mb-4">"</span>
              <p className="text-sm font-serif italic text-white/80 leading-relaxed flex-1">
                {review.quote}
              </p>
              <div className="mt-8 pt-6 border-t border-red-900/20 w-full">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-red-500/80">
                  {review.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

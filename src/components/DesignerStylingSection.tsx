import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { STYLING_SERVICES } from '../data/automotiveData';

interface DesignerStylingSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function DesignerStylingSection({ onOpenBooking }: DesignerStylingSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="styling" className="relative py-20 lg:py-28 bg-[#04060a] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              BESPOKE AUTOMOTIVE SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
              YOUR CAR.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                YOUR SIGNATURE.
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              From subtle upgrades to complete visual transformations. Tailored automotive styling executed with master craftsmanship.
            </p>
          </div>

          {/* Scroll Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-xl bg-neutral-900 border border-white/10 hover:border-cyan-400 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-xl bg-neutral-900 border border-white/10 hover:border-cyan-400 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Luxury Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth snap-x snap-mandatory"
        >
          {STYLING_SERVICES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex-shrink-0 w-80 sm:w-96 rounded-2xl overflow-hidden bg-neutral-900/70 border border-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] group flex flex-col justify-between snap-start"
            >
              {/* Image & Overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                {/* Index tag */}
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-tech text-cyan-400 tracking-wider">
                  0{index + 1} // STYLING
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-cyan-400/90 text-xs font-tech tracking-wider uppercase mt-1">
                    {item.tagline}
                  </p>
                  <p className="text-neutral-300 text-xs mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-black/60 border border-white/5 text-[10px] font-tech text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking(item.title)}
                    className="w-full py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/40 font-tech text-xs font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>CONSULT ON STYLING</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

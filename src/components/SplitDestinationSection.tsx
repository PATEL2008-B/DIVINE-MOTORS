import { useState } from 'react';
import { motion } from 'motion/react';
import { Wrench, Sparkles, ArrowRight } from 'lucide-react';

interface SplitDestinationSectionProps {
  onSelectServices: () => void;
  onSelectAccessories: () => void;
}

export default function SplitDestinationSection({
  onSelectServices,
  onSelectAccessories,
}: SplitDestinationSectionProps) {
  const [activeSide, setActiveSide] = useState<'left' | 'right' | null>(null);

  return (
    <section id="two-worlds" className="relative py-12 lg:py-16 bg-[#04060a] border-y border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT: CAR REPAIR & SERVICE CARD */}
          <motion.div
            onMouseEnter={() => setActiveSide('left')}
            onMouseLeave={() => setActiveSide(null)}
            onClick={onSelectServices}
            className={`cursor-pointer rounded-2xl relative overflow-hidden transition-all duration-500 border group ${
              activeSide === 'left'
                ? 'lg:col-span-5 border-cyan-400 shadow-[0_0_35px_rgba(0,212,255,0.3)]'
                : activeSide === 'right'
                ? 'lg:col-span-4 border-white/10 opacity-75'
                : 'lg:col-span-4 border-white/10 hover:border-cyan-500/40'
            } h-64 sm:h-72`}
          >
            {/* Background workshop image with dark vignette */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80"
                alt="Car Repair and Service Workshop"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  activeSide === 'left' ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
            </div>

            {/* Glowing Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-sky-400" />

            <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.25)] group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-tech tracking-[0.2em] text-cyan-400 uppercase">
                    WORLD 01 • PRECISION
                  </span>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-wider uppercase">
                    CAR REPAIR & SERVICE
                  </h3>
                </div>
              </div>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                Keep your car running at its best with our expert mechanical diagnostics, periodic maintenance, and precision repairs.
              </p>

              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/15 group-hover:bg-cyan-500 group-hover:text-black border border-cyan-500/40 text-cyan-400 font-tech text-xs tracking-widest uppercase transition-all duration-300">
                  EXPLORE SERVICES
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* CENTER: TWO WORLDS. ONE DESTINATION. */}
          <div className="lg:col-span-4 text-center py-4 px-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[1px] w-8 bg-cyan-500/50" />
                <span className="text-[10px] font-tech tracking-[0.3em] text-cyan-400 uppercase">
                  UNIFIED EXPERIENCE
                </span>
                <span className="h-[1px] w-8 bg-cyan-500/50" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight uppercase leading-tight">
                TWO WORLDS.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                  ONE DESTINATION.
                </span>
              </h2>

              <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-3 max-w-xs mx-auto leading-relaxed">
                Keep your car performing at its best — and make it look the part. All under one roof in Nikol, Ahmedabad.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: CAR ACCESSORIES & DESIGNER CARD */}
          <motion.div
            onMouseEnter={() => setActiveSide('right')}
            onMouseLeave={() => setActiveSide(null)}
            onClick={onSelectAccessories}
            className={`cursor-pointer rounded-2xl relative overflow-hidden transition-all duration-500 border group ${
              activeSide === 'right'
                ? 'lg:col-span-5 border-cyan-400 shadow-[0_0_35px_rgba(0,212,255,0.3)]'
                : activeSide === 'left'
                ? 'lg:col-span-4 border-white/10 opacity-75'
                : 'lg:col-span-4 border-white/10 hover:border-cyan-500/40'
            } h-64 sm:h-72`}
          >
            {/* Background styling / interior image with dark vignette */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80"
                alt="Car Accessories and Designer Styling Cockpit"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  activeSide === 'right' ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
            </div>

            {/* Glowing Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-500" />

            <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.25)] group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-tech tracking-[0.2em] text-cyan-400 uppercase">
                    WORLD 02 • UPGRADE & STYLE
                  </span>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-wider uppercase">
                    CAR ACCESSORIES & DESIGNER
                  </h3>
                </div>
              </div>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                Premium accessories and custom styling to enhance your car's comfort, technology, and aesthetic performance.
              </p>

              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/15 group-hover:bg-cyan-500 group-hover:text-black border border-cyan-500/40 text-cyan-400 font-tech text-xs tracking-widest uppercase transition-all duration-300">
                  EXPLORE ACCESSORIES
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

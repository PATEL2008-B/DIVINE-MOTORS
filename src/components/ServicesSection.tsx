import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Home, 
  Clock, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { SERVICES_LIST } from '../data/automotiveData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const whyChoosePillars = [
    {
      icon: ShieldCheck,
      title: 'PREMIUM QUALITY',
      subtitle: 'Original OEM grade components only'
    },
    {
      icon: Wrench,
      title: 'QUALITY FITMENT',
      subtitle: 'Precision zero-wire-cut installation'
    },
    {
      icon: Layers,
      title: 'WIDE RANGE OF ACCESSORIES',
      subtitle: 'Android screens, LED & sound systems'
    },
    {
      icon: Home,
      title: 'MULTIPLE SERVICES UNDER ONE ROOF',
      subtitle: 'Mechanical repairs + bespoke styling'
    }
  ];

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#04060a] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching user mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
              PRECISION CAR CARE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">SERVICES</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Professional automotive repair and maintenance solutions focused on keeping your vehicle reliable, comfortable, and road-ready.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking('Car Service & Maintenance')}
              className="px-5 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/30 font-tech text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] flex items-center gap-2"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Top Grid: 6 Services Cards + Right Side "Why Choose Divine Motors?" pillar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left / Center 8 Columns: 6 Service Cards in a 3x2 / 2x3 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_LIST.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-xl overflow-hidden bg-neutral-900/50 border border-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.2)] flex flex-col justify-between"
              >
                {/* Service Image with Dark Workshop Overlay */}
                <div className="relative h-36 w-full overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                  
                  {/* Category Chip */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-cyan-500/30 text-[9px] font-tech text-cyan-400 tracking-wider uppercase">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors uppercase leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-[11px] font-tech text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      Details
                    </button>

                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="px-3 py-1.5 rounded-md bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/30 font-tech text-[10px] font-bold tracking-wider uppercase transition-all duration-200"
                    >
                      BOOK THIS SERVICE
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right 4 Columns: "WHY CHOOSE DIVINE MOTORS?" panel as shown in mockup */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,180,255,0.15)] relative overflow-hidden h-full flex flex-col justify-between">
              {/* Silhouette watermark vehicle */}
              <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
                <svg className="w-40 h-20 text-cyan-400" viewBox="0 0 100 40" fill="currentColor">
                  <path d="M5 28 C 15 28, 22 27, 28 20 C 34 13, 50 10, 68 10 C 80 10, 88 16, 95 24 L 98 28 L 5 28 Z" />
                </svg>
              </div>

              <div>
                <div className="text-[10px] font-tech tracking-[0.25em] text-cyan-400 uppercase mb-1">
                  EXCELLENCE STANDARD
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white tracking-wide uppercase mb-6">
                  WHY CHOOSE DIVINE MOTORS?
                </h3>

                <div className="space-y-4">
                  {whyChoosePillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex-shrink-0 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-tech text-xs font-bold text-white tracking-wider uppercase group-hover:text-cyan-300 transition-colors">
                            {pillar.title}
                          </h4>
                          <p className="text-[11px] text-neutral-400 mt-0.5">
                            {pillar.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-wider block">
                    LOCATION
                  </span>
                  <span className="text-xs text-neutral-300 font-medium">
                    Madhav Complex, Nikol
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking()}
                  className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-tech font-bold text-xs tracking-wider uppercase hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                >
                  SCHEDULE VISIT
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg rounded-2xl bg-neutral-900 border border-cyan-500/40 p-6 sm:p-7 shadow-[0_0_40px_rgba(0,212,255,0.25)] relative text-left"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-widest">
                  SERVICE SPECIFICATIONS
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white uppercase">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
              {selectedService.shortDesc}
            </p>

            <div className="space-y-2 mb-5">
              <span className="text-xs font-tech text-neutral-400 uppercase tracking-wider block">
                WHAT'S INCLUDED:
              </span>
              {selectedService.details.map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-black/50 border border-white/5 mb-6 text-xs font-tech">
              <div>
                <span className="text-neutral-400 block text-[10px]">ESTIMATED DURATION</span>
                <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {selectedService.duration}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px]">INTERVAL</span>
                <span className="text-cyan-300">{selectedService.recommended}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenBooking(serviceName);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-tech font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all"
              >
                BOOK THIS SERVICE NOW
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

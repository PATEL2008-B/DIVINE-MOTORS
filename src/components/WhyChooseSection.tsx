import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Wrench, 
  Layers, 
  Award, 
  Home, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Star 
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/automotiveData';

export default function WhyChooseSection() {
  const iconMap: { [key: string]: any } = {
    ShieldCheck,
    Wrench,
    Layers,
    Award,
    Home,
    Sparkles,
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#030508] border-t border-white/5 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            UNCOMPROMISING STANDARDS
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
            CRAFTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">FOR YOUR CAR.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Experience the convenience of high-performance workshop care combined with luxury designer styling under one roof.
          </p>
        </div>

        {/* 6 High-Tech Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-7 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.18)] group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-tech text-cyan-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  VERIFIED WORKSHOP GUARANTEE
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Numbers & Trust Section (Section 14) - strictly verified information */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,180,255,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Stat 1: Google Rating */}
            <div className="pt-4 md:pt-0 md:px-4">
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-3xl font-heading font-extrabold text-white tracking-tight">
                5.0 / 5.0
              </div>
              <p className="text-xs text-neutral-400 font-tech uppercase tracking-wider mt-1">
                GOOGLE CUSTOMER RATING
              </p>
            </div>

            {/* Stat 2: Complete Service Range */}
            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-3xl font-heading font-extrabold text-cyan-400 tracking-tight">
                1 DESTINATION
              </div>
              <p className="text-xs text-neutral-400 font-tech uppercase tracking-wider mt-1">
                MECHANICAL CARE + STYLING UNDER ONE ROOF
              </p>
            </div>

            {/* Stat 3: Zero Wire Cut */}
            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-3xl font-heading font-extrabold text-white tracking-tight">
                100% OEM FIT
              </div>
              <p className="text-xs text-neutral-400 font-tech uppercase tracking-wider mt-1">
                COUPLER-TO-COUPLER ZERO-CUT PROMISE
              </p>
            </div>

            {/* Stat 4: Nikol Location */}
            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-2xl font-heading font-extrabold text-cyan-400 tracking-tight flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-5 h-5 text-cyan-400" />
                NIKOL, AHD
              </div>
              <p className="text-xs text-neutral-400 font-tech uppercase tracking-wider mt-1">
                SHOP 21, MADHAV COMPLEX
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import { useState, FC } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Navigation, 
  Wrench, 
  ShieldCheck, 
  Sparkles,
  ChevronDown,
  Layers,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';
import { DivineLogo } from './DivineLogo';

interface HeroSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  onExploreAccessories: () => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ onOpenBooking, onExploreAccessories }) => {
  const [headlightsOn, setHeadlightsOn] = useState<boolean>(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>('android');

  const perks = [
    {
      icon: Wrench,
      title: 'EXPERT TECHNICIANS',
      subtitle: 'Precision Mechanical Care',
    },
    {
      icon: ShieldCheck,
      title: 'ZERO WIRE-CUT',
      subtitle: '100% Coupler-to-Coupler',
    },
    {
      icon: Layers,
      title: 'ALL UNDER ONE ROOF',
      subtitle: 'Repair + Accessories + Styling',
    },
    {
      icon: Sparkles,
      title: 'BESPOKE FINISH',
      subtitle: 'Customized for Your Car',
    },
  ];

  const hotspots = [
    {
      id: 'android',
      label: 'Android HD Display',
      price: '₹9,000',
      x: '38%',
      y: '48%',
      detail: 'IPS touchscreen with Wireless CarPlay & DSP'
    },
    {
      id: 'headlights',
      label: 'LED Headlights',
      price: '₹5,000',
      x: '75%',
      y: '56%',
      detail: '6000K Pure White 24,000 LM Projectors'
    },
    {
      id: 'seats',
      label: 'Nappa Bucket Seats',
      price: '₹9,000',
      x: '24%',
      y: '42%',
      detail: 'Handcrafted memory foam leatherette'
    }
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hello Divine Motors, I would like to inquire about car service, accessories, and styling."
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${BUSINESS_INFO.phone}`;
  };

  const handleDirectionsClick = () => {
    window.open(BUSINESS_INFO.location.directNavUrl, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 pb-16 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#030508]"
    >
      {/* Cinematic dark studio backdrop with moving light streaks & fog */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial blue glow behind vehicle */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px]" />
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[120px]" />
        
        {/* Animated neon blue light streak */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 3
          }}
          className="absolute top-1/4 left-0 w-96 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
        />

        {/* Studio grid floor subtle perspective */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030508] via-[#04070e]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Grid: Left Content + Right Vehicle Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Brand Identity, Headlines & 4 Core Hero Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Top Location & Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-4 w-fit shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>NIKOL, AHMEDABAD • GUJARAT</span>
            </motion.div>

            {/* Custom Emblem & Brand Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-3"
            >
              <DivineLogo size="md" showText={false} />
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight uppercase leading-[0.95]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_0_25px_rgba(0,212,255,0.5)]">
                  DIVINE
                </span>{' '}
                <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  MOTORS
                </span>
              </h1>
            </motion.div>

            {/* Tagline: REPAIR. UPGRADE. DRIVE. */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-3"
            >
              <h2 className="text-base sm:text-lg md:text-xl font-tech font-bold tracking-[0.28em] text-cyan-400 uppercase drop-shadow-[0_0_12px_rgba(0,212,255,0.6)]">
                {BUSINESS_INFO.tagline}
              </h2>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-3"
            >
              <p className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide uppercase">
                {BUSINESS_INFO.headline}
              </p>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl mb-7"
            >
              {BUSINESS_INFO.supportingText}
            </motion.p>

            {/* 4 Hero Action Buttons (Exact User Requirement) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 mb-8"
            >
              {/* Row 1: Primary Service Booking & WhatsApp */}
              <div className="flex flex-wrap items-center gap-3">
                {/* 1. BOOK A SERVICE */}
                <button
                  onClick={() => onOpenBooking()}
                  className="group px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-500 bg-[length:200%_auto] hover:bg-[position:right_center] text-black font-tech font-bold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4 text-black" />
                  <span>BOOK A SERVICE</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* 2. WHATSAPP */}
                <button
                  onClick={handleWhatsAppClick}
                  className="px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 font-tech font-bold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 fill-current" />
                  <span>WHATSAPP</span>
                </button>
              </div>

              {/* Row 2: Direct Call & Navigation */}
              <div className="flex flex-wrap items-center gap-3">
                {/* 3. CALL NOW */}
                <button
                  onClick={handleCallClick}
                  className="px-5 sm:px-6 py-3 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-white/15 hover:border-cyan-400/60 text-white font-tech text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>CALL NOW</span>
                  <span className="text-[11px] text-neutral-400 hidden sm:inline font-mono">
                    {BUSINESS_INFO.displayPhone}
                  </span>
                </button>

                {/* 4. GET DIRECTIONS */}
                <button
                  onClick={handleDirectionsClick}
                  className="px-5 sm:px-6 py-3 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-tech text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-cyan-400" />
                  <span>GET DIRECTIONS</span>
                </button>
              </div>
            </motion.div>

            {/* Quick stats / reassurance */}
            <div className="flex items-center gap-4 text-xs font-tech text-neutral-400">
              <span className="flex items-center gap-1 text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Google Rating 5.0
              </span>
              <span>•</span>
              <span>Shop 21, Madhav Complex, Nikol</span>
            </div>
          </div>

          {/* Right Column: Art-Directed Vehicle Showcase & Reactive Hotspots */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_60px_rgba(0,180,255,0.25)] group bg-black"
            >
              {/* High-Resolution Performance Car Visual */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
                  alt="Divine Motors Automotive Experience Nikol Ahmedabad"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Electric Blue Headlight Glow Overlays (Interactive Toggle) */}
                {headlightsOn && (
                  <>
                    {/* Left Projector Beam */}
                    <div className="absolute top-[51%] left-[40%] w-24 h-10 bg-cyan-400/60 rounded-full blur-lg animate-pulse pointer-events-none shadow-[0_0_30px_#00e5ff]" />
                    {/* Right Projector Beam */}
                    <div className="absolute top-[49%] left-[59%] w-24 h-10 bg-cyan-400/60 rounded-full blur-lg animate-pulse pointer-events-none shadow-[0_0_30px_#00e5ff]" />
                    {/* Ground Horizon Laser Reflection */}
                    <div className="absolute top-[65%] left-[30%] w-64 h-12 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent blur-md pointer-events-none" />
                  </>
                )}

                {/* Vignette & studio lighting gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060a] via-transparent to-black/40 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />

                {/* Interactive Hotspots */}
                {hotspots.map((spot) => {
                  const isActive = activeHotspot === spot.id;
                  return (
                    <div
                      key={spot.id}
                      style={{ top: spot.y, left: spot.x }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                      onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                    >
                      <div className="relative">
                        <span className="relative flex h-6 w-6">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-6 w-6 bg-cyan-500 text-black text-[9px] font-tech font-bold items-center justify-center shadow-[0_0_12px_#00e5ff]">
                            +
                          </span>
                        </span>

                        {/* Popover Card */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 5 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="absolute left-1/2 -translate-x-1/2 bottom-8 w-48 p-2.5 rounded-xl bg-black/90 backdrop-blur-md border border-cyan-500/50 shadow-[0_0_20px_rgba(0,229,255,0.4)] text-left z-30"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-tech text-[11px] font-bold text-white uppercase">
                                {spot.label}
                              </span>
                              <span className="font-tech text-[10px] text-cyan-400 font-bold">
                                {spot.price}
                              </span>
                            </div>
                            <p className="text-[10px] text-neutral-400 mt-1 leading-snug">
                              {spot.detail}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Top Left Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-500/40 text-[10px] font-tech text-cyan-300 tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  PERFORMANCE WORKSHOP & LUXURY STUDIO
                </div>

                {/* Headlight Beam Toggle Switch */}
                <button
                  onClick={() => setHeadlightsOn(!headlightsOn)}
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 hover:border-cyan-400 text-[10px] font-tech text-neutral-300 hover:text-white tracking-wider flex items-center gap-1.5 transition-all"
                  title="Toggle Projector Beams"
                >
                  <Sliders className="w-3 h-3 text-cyan-400" />
                  <span>BEAMS: {headlightsOn ? 'ON' : 'OFF'}</span>
                </button>

                {/* Direct Google Maps Nikol Location Badge */}
                <button
                  onClick={handleDirectionsClick}
                  className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 hover:border-cyan-400 text-xs font-tech text-cyan-300 hover:text-white tracking-wider flex items-center gap-1.5 transition-all hover:scale-105 shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Nikol, Ahmedabad →</span>
                </button>
              </div>
            </motion.div>

            {/* Automotive Perks Stack (4 Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={perk.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="p-3 rounded-xl bg-neutral-900/70 backdrop-blur-md border border-white/5 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] flex flex-col items-center text-center"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-tech font-bold tracking-wider text-white group-hover:text-cyan-300 transition-colors uppercase leading-tight">
                      {perk.title}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-sans mt-0.5">
                      {perk.subtitle}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Down Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#two-worlds"
            className="flex flex-col items-center text-neutral-400 hover:text-cyan-400 transition-colors group"
            aria-label="Explore the Destination"
          >
            <span className="text-[10px] font-tech tracking-[0.25em] uppercase mb-1">
              EXPLORE THE TWO WORLDS
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

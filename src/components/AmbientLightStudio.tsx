import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sliders, Smartphone, Check, Calendar, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

interface AmbientLightStudioProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface AmbientTheme {
  id: string;
  name: string;
  hex: string;
  glowRgba: string;
  mood: string;
  accentClass: string;
}

export default function AmbientLightStudio({ onOpenBooking }: AmbientLightStudioProps) {
  const themes: AmbientTheme[] = [
    {
      id: 'blue',
      name: 'ELECTRIC BLUE',
      hex: '#00d4ff',
      glowRgba: 'rgba(0, 212, 255, 0.7)',
      mood: 'Cyber Performance & High Speed',
      accentClass: 'text-cyan-400'
    },
    {
      id: 'red',
      name: 'RACING RED',
      hex: '#ff1744',
      glowRgba: 'rgba(255, 23, 68, 0.7)',
      mood: 'Adrenaline Sport & Night Track',
      accentClass: 'text-red-400'
    },
    {
      id: 'white',
      name: 'PURE DIAMOND WHITE',
      hex: '#ffffff',
      glowRgba: 'rgba(255, 255, 255, 0.7)',
      mood: 'Ultra Clean Luxury & Clarity',
      accentClass: 'text-white'
    },
    {
      id: 'purple',
      name: 'NEON PURPLE',
      hex: '#c026d3',
      glowRgba: 'rgba(192, 38, 211, 0.7)',
      mood: 'Futuristic VIP Lounge & Symphony',
      accentClass: 'text-purple-400'
    },
    {
      id: 'orange',
      name: 'SUNSET ORANGE',
      hex: '#f97316',
      glowRgba: 'rgba(249, 115, 22, 0.7)',
      mood: 'Warm GT Touring & Grand Horizon',
      accentClass: 'text-orange-400'
    },
    {
      id: 'green',
      name: 'EMERALD GREEN',
      hex: '#10b981',
      glowRgba: 'rgba(16, 185, 129, 0.7)',
      mood: 'High-Tech Matrix & Precision Flow',
      accentClass: 'text-emerald-400'
    }
  ];

  const [selectedTheme, setSelectedTheme] = useState<AmbientTheme>(themes[0]);
  const [brightness, setBrightness] = useState<number>(85);
  const [isPulsing, setIsPulsing] = useState<boolean>(false);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Divine Motors, I tested your Ambient Light Studio with ${selectedTheme.name}. I would like to get this installed in my car.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="ambient-studio" className="relative py-20 lg:py-28 bg-[#04060a] overflow-hidden">
      {/* Dynamic ambient backdrop influenced by current selected light color */}
      <div
        className="absolute inset-0 transition-all duration-700 pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${selectedTheme.hex} 0%, transparent 65%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-tech tracking-[0.25em] uppercase mb-3 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            INTERACTIVE VEHICLE CONFIGURATOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
            LIGHT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">YOUR DRIVE.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Experience our multi-colour stealth acrylic ambient lighting before installation. Select a color to transform the cockpit in real-time.
          </p>
        </div>

        {/* Configurator Stage Box */}
        <div className="rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-6 lg:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 8 Cols: Cockpit View with SVG/Canvas Neon Light Guides */}
            <div className="lg:col-span-8 relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
              {/* Cockpit Photo */}
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury Car Cockpit Ambient Lighting"
                className="w-full h-full object-cover"
              />

              {/* Dynamic Color Multi-Layer Glow Overlay */}
              <div
                className={`absolute inset-0 mix-blend-screen transition-all duration-700 pointer-events-none ${
                  isPulsing ? 'animate-pulse' : ''
                }`}
                style={{
                  backgroundColor: selectedTheme.hex,
                  opacity: (brightness / 100) * 0.45
                }}
              />

              {/* Realistic Laser/Fiber-Optic Dashboard & Door Light Accents */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450" fill="none">
                <defs>
                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Dashboard Trim Light Strip */}
                <path
                  d="M 120 280 Q 250 250, 400 250 T 680 285"
                  stroke={selectedTheme.hex}
                  strokeWidth="3.5"
                  filter="url(#neon-glow)"
                  opacity={(brightness / 100) * 0.9}
                  className="transition-all duration-500"
                />

                {/* Left Door Contour */}
                <path
                  d="M 40 240 Q 100 290, 160 380"
                  stroke={selectedTheme.hex}
                  strokeWidth="3"
                  filter="url(#neon-glow)"
                  opacity={(brightness / 100) * 0.85}
                  className="transition-all duration-500"
                />

                {/* Right Door Contour */}
                <path
                  d="M 760 240 Q 700 290, 640 380"
                  stroke={selectedTheme.hex}
                  strokeWidth="3"
                  filter="url(#neon-glow)"
                  opacity={(brightness / 100) * 0.85}
                  className="transition-all duration-500"
                />

                {/* Center Console Light Arc */}
                <path
                  d="M 330 300 L 320 420 L 480 420 L 470 300"
                  stroke={selectedTheme.hex}
                  strokeWidth="2.5"
                  filter="url(#neon-glow)"
                  opacity={(brightness / 100) * 0.8}
                  className="transition-all duration-500"
                />
              </svg>

              {/* Footwell Ambient Glow Wells */}
              <div
                className="absolute bottom-4 left-1/4 w-36 h-20 rounded-full blur-2xl pointer-events-none transition-all duration-500"
                style={{
                  backgroundColor: selectedTheme.hex,
                  opacity: (brightness / 100) * 0.7
                }}
              />
              <div
                className="absolute bottom-4 right-1/4 w-36 h-20 rounded-full blur-2xl pointer-events-none transition-all duration-500"
                style={{
                  backgroundColor: selectedTheme.hex,
                  opacity: (brightness / 100) * 0.7
                }}
              />

              {/* Overlay HUD indicators */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-tech text-neutral-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedTheme.hex }} />
                <span>ZONE: COCKPIT + 4 DOORS + FOOTWELL</span>
              </div>

              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-tech text-white flex items-center gap-2">
                <span className="text-neutral-400">ACTIVE PROFILE:</span>
                <span className="font-bold" style={{ color: selectedTheme.hex }}>{selectedTheme.name}</span>
              </div>
            </div>

            {/* Right 4 Cols: Interactive Controls */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-tech uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                  COLOUR PALETTE
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white uppercase mb-4">
                  SELECT SHADE
                </h3>

                {/* 6 Color Options from User Prompt */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {themes.map((theme) => {
                    const isSelected = selectedTheme.id === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => setSelectedTheme(theme)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all duration-200 ${
                          isSelected
                            ? 'bg-neutral-800 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                            : 'bg-neutral-900/60 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <span
                          className="w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110"
                          style={{
                            backgroundColor: theme.hex,
                            boxShadow: isSelected ? `0 0 15px ${theme.hex}` : 'none'
                          }}
                        >
                          {isSelected && <Check className="w-4 h-4 text-black" />}
                        </span>
                        <span className="text-[10px] font-tech tracking-wider text-neutral-300 font-semibold uppercase text-center leading-tight">
                          {theme.id}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Mood Description */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 mb-6">
                  <div className="text-[10px] font-tech uppercase tracking-wider text-neutral-400 mb-1">
                    ATMOSPHERE
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {selectedTheme.mood}
                  </div>
                </div>

                {/* Sliders: Brightness & Mode */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs font-tech text-neutral-400 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                        BRIGHTNESS
                      </span>
                      <span className="text-white font-bold">{brightness}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={brightness}
                      onChange={(e) => setBrightness(Number(e.target.value))}
                      className="w-full accent-cyan-400 bg-neutral-800 rounded-lg cursor-pointer h-1.5"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/80 border border-white/5">
                    <span className="text-xs font-tech text-neutral-300 flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-cyan-400" />
                      PULSE / BREATHING MODE
                    </span>
                    <button
                      onClick={() => setIsPulsing(!isPulsing)}
                      className={`px-3 py-1 rounded-md text-[10px] font-tech tracking-wider uppercase transition-colors ${
                        isPulsing
                          ? 'bg-cyan-500 text-black font-bold'
                          : 'bg-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {isPulsing ? 'ACTIVE' : 'OFF'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <button
                  onClick={() => onOpenBooking(`Ambient Light Installation (${selectedTheme.name})`)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-500 text-black font-tech font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  BOOK THIS INSTALLATION
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-tech text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  ASK PRICING FOR MY CAR
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

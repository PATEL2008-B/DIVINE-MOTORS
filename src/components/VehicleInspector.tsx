import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Wrench, Sparkles, Volume2, ShieldCheck, Cpu } from 'lucide-react';

interface VehicleInspectorProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  category: string;
  desc: string;
  image: string;
  service: string;
}

export default function VehicleInspector({ onOpenBooking }: VehicleInspectorProps) {
  const [activeAngle, setActiveAngle] = useState<'exterior' | 'cockpit' | 'engine'>('exterior');
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const angleViews = {
    exterior: {
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
      label: 'EXTERIOR & MATRIX LIGHTING',
      hotspots: [
        {
          id: 'headlight',
          x: 48,
          y: 52,
          title: 'Matrix 6000K LED Projectors',
          category: 'Lighting',
          desc: '160W high-lumens projector conversion with razor-sharp horizontal cut-off.',
          image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
          service: 'LED Light'
        },
        {
          id: 'wheels',
          x: 22,
          y: 68,
          title: 'Wheel Balancing & Suspension Audit',
          category: 'Performance',
          desc: 'Computerized laser wheel alignment and multi-link suspension calibration.',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
          service: 'Vehicle Inspection'
        },
        {
          id: 'diffuser',
          x: 78,
          y: 62,
          title: 'Custom Aerodynamic Styling',
          category: 'Styling',
          desc: 'Piano black mirror caps, gloss aero side skirts, and rear diffuser splitters.',
          image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
          service: 'Car Styling'
        }
      ]
    },
    cockpit: {
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85',
      label: 'COCKPIT & AMBIENT SYMPHONY',
      hotspots: [
        {
          id: 'android-screen',
          x: 52,
          y: 42,
          title: 'HD IPS Android Screen',
          category: 'Technology',
          desc: 'Wireless Apple CarPlay & Android Auto with 32-band DSP audio equalizer.',
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
          service: 'Android System'
        },
        {
          id: 'ambient-trim',
          x: 28,
          y: 56,
          title: '64-Colour Symphony Ambient Kit',
          category: 'Lighting',
          desc: 'Stealth acrylic fiber-optic strips contouring doors and center console.',
          image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
          service: 'Ambient Light'
        },
        {
          id: 'leather-seat',
          x: 68,
          y: 72,
          title: 'Custom Handcrafted Bucket Leather',
          category: 'Interior',
          desc: 'High-density memory foam bucket fitment in dual-tone sport stitching.',
          image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
          service: 'Seat Cover'
        }
      ]
    },
    engine: {
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1600&q=85',
      label: 'ENGINE BAY & MECHANICAL BAY',
      hotspots: [
        {
          id: 'obd-diagnostic',
          x: 45,
          y: 38,
          title: 'ECU & Sensor Diagnostics',
          category: 'Diagnostics',
          desc: 'OBD-II computer fault scanning, live sensor feedback, and error elimination.',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
          service: 'Troubleshooting'
        },
        {
          id: 'fluids-service',
          x: 65,
          y: 54,
          title: 'Synthetic Oil & Filter Service',
          category: 'Maintenance',
          desc: 'High-grade fully synthetic engine oil renewal and OEM filter replacement.',
          image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
          service: 'Car Service & Maintenance'
        }
      ]
    }
  };

  const currentView = angleViews[activeAngle];

  return (
    <section id="inspector" className="relative py-20 lg:py-28 bg-[#030508] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
            <Eye className="w-3.5 h-3.5" />
            VIRTUAL VEHICLE INSPECTOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
            360° PRECISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">EXPLORER</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Switch viewpoints and tap active inspection nodes to discover our precision upgrades and diagnostic capabilities.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center items-center gap-2 mb-8">
          {(['exterior', 'cockpit', 'engine'] as const).map((angle) => (
            <button
              key={angle}
              onClick={() => {
                setActiveAngle(angle);
                setActiveHotspot(null);
              }}
              className={`px-5 py-2.5 rounded-xl font-tech text-xs tracking-widest uppercase transition-all duration-300 ${
                activeAngle === angle
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : 'bg-neutral-900/80 text-neutral-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {angle === 'exterior' ? 'EXTERIOR VIEW' : angle === 'cockpit' ? 'INTERIOR COCKPIT' : 'ENGINE & POWERTRAIN'}
            </button>
          ))}
        </div>

        {/* Stage Container */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_60px_rgba(0,0,0,0.9)] bg-neutral-950 select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAngle}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full"
            >
              <img
                src={currentView.image}
                alt={currentView.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30 pointer-events-none" />

              {/* View Title Indicator */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-xs font-tech text-cyan-300 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                {currentView.label}
              </div>

              {/* Interactive Hotspot Pins */}
              {currentView.hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                  aria-label={`Inspect ${spot.title}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span className="absolute w-8 h-8 rounded-full bg-cyan-400/40 animate-ping" />
                    {/* Core pin button */}
                    <span className="relative w-6 h-6 rounded-full bg-cyan-500 border-2 border-white text-black font-bold flex items-center justify-center text-[10px] shadow-[0_0_15px_rgba(0,212,255,0.9)] group-hover:scale-125 transition-transform">
                      +
                    </span>
                  </div>
                </button>
              ))}

              {/* Hotspot Drawer Overlay if clicked */}
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md p-5 rounded-2xl bg-neutral-950/95 backdrop-blur-xl border border-cyan-500/50 shadow-[0_0_30px_rgba(0,212,255,0.3)] z-30 text-left"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] font-tech text-cyan-400 tracking-widest uppercase">
                        {activeHotspot.category}
                      </span>
                      <h4 className="font-heading font-extrabold text-base text-white uppercase">
                        {activeHotspot.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="w-7 h-7 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center text-xs"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-neutral-300 text-xs leading-relaxed mb-4">
                    {activeHotspot.desc}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(activeHotspot.service)}
                      className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-tech font-bold text-xs tracking-wider uppercase transition-colors"
                    >
                      BOOK THIS UPGRADE
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

import { FC } from 'react';
import { MapPin, Phone, MessageSquare, ArrowUp, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';
import { DivineLogo } from './DivineLogo';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020305] border-t border-white/10 pt-16 pb-24 md:pb-12 overflow-hidden text-left">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <DivineLogo size="md" showText={true} showLocation={true} />

            <p className="text-sm font-tech text-cyan-300 tracking-[0.2em] uppercase font-bold">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Ahmedabad&apos;s premier automotive destination where mechanical repair mastery meets bespoke cockpit luxury and high-end automotive styling under one roof.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-tech font-bold text-xs tracking-wider uppercase hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                BOOK APPOINTMENT
              </button>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-tech text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WHATSAPP
              </a>
              <a
                href={BUSINESS_INFO.location.directNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-white/10 font-tech text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                DIRECTIONS
              </a>
            </div>
          </div>

          {/* Precision Services Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-tech text-cyan-400 uppercase tracking-[0.2em] font-bold">
              PRECISION CARE
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#services" className="hover:text-white transition-colors">General Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Car Service & Oil</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Vehicle Inspection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Troubleshooting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Diagnostics</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brake & Suspension</a></li>
            </ul>
          </div>

          {/* Styling & Accessories (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-tech text-cyan-400 uppercase tracking-[0.2em] font-bold">
              UPGRADE & STYLE
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#ambient-studio" className="hover:text-white transition-colors">Ambient Light Studio</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Android Systems (₹9,000)</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Hi-Fi Audio (₹2,000)</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Matrix LED Lights (₹5,000)</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Seat Covers (₹9,000)</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Wiper Blades (from ₹500)</a></li>
            </ul>
          </div>

          {/* Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-tech text-cyan-400 uppercase tracking-[0.2em] font-bold">
              EXPERIENCE CENTER
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.location.shop},<br />
                  {BUSINESS_INFO.location.landmark},<br />
                  {BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.state} {BUSINESS_INFO.location.pincode}
                </span>
              </p>
              <p className="text-[11px] text-neutral-400">
                Landmark: <span className="text-cyan-300 font-tech">{BUSINESS_INFO.location.landmark}</span>
              </p>
              <p className="flex items-center gap-2 pt-2 text-white font-tech">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-cyan-400 transition-colors">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </p>
              <p className="text-[11px] text-neutral-400 pt-1">
                Mon - Sun: <span className="text-neutral-200">{BUSINESS_INFO.hours}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-tech">
          <div>
            © {new Date().getFullYear()} DIVINE MOTORS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-neutral-400">
              NIKOL, AHMEDABAD • GUJARAT
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-cyan-500 hover:text-black border border-white/10 flex items-center justify-center transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FC } from 'react';
import { Phone, MessageSquare, Navigation, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Divine Motors, I would like to inquire about car service and accessories."
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleDirections = () => {
    window.open(BUSINESS_INFO.location.directNavUrl, '_blank');
  };

  return (
    <div
      id="mobile-sticky-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#04060a]/95 backdrop-blur-xl border-t border-cyan-500/30 px-3 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-white hover:border-cyan-400 active:scale-95 transition-all text-center min-h-[48px]"
          aria-label="Call Divine Motors"
        >
          <Phone className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span className="font-tech text-[10px] tracking-wider uppercase font-semibold text-neutral-200">
            CALL
          </span>
        </a>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/50 active:scale-95 transition-all text-center min-h-[48px]"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="font-tech text-[10px] tracking-wider uppercase font-semibold text-emerald-300">
            WHATSAPP
          </span>
        </button>

        {/* Directions */}
        <button
          onClick={handleDirections}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-white hover:border-cyan-400 active:scale-95 transition-all text-center min-h-[48px]"
          aria-label="Get Directions to Divine Motors"
        >
          <Navigation className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span className="font-tech text-[10px] tracking-wider uppercase font-semibold text-neutral-200">
            DIRECTIONS
          </span>
        </button>

        {/* Book Service */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-black active:scale-95 transition-all text-center min-h-[48px] shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          aria-label="Book a Service"
        >
          <Calendar className="w-4 h-4 text-black mb-0.5" />
          <span className="font-tech text-[10px] tracking-wider uppercase font-bold text-black">
            BOOK
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileStickyBar;

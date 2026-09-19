import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Calendar, CheckCircle2, Shield } from 'lucide-react';
import { AccessoryItem } from '../types';
import { BUSINESS_INFO } from '../data/automotiveData';

interface ProductModalProps {
  product: AccessoryItem | null;
  onClose: () => void;
  onOpenBooking: (serviceName?: string) => void;
}

export default function ProductModal({ product, onClose, onOpenBooking }: ProductModalProps) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Divine Motors, I would like to inquire about the ${product.name} (${product.price}). Please share availability and fitment details for my vehicle.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-2xl bg-neutral-950 border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,212,255,0.25)] text-left overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image Stage */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black mb-6 border border-white/10">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-tech text-cyan-400 tracking-wider uppercase">
                {product.category}
              </span>
              {product.badge && (
                <span className="px-3 py-1 rounded-md bg-cyan-500/20 backdrop-blur-md border border-cyan-400/50 text-[10px] font-tech text-cyan-300 tracking-wider uppercase font-bold">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="text-[10px] font-tech tracking-[0.25em] text-cyan-400 uppercase">
                DIVINE MOTORS CERTIFIED FITMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white uppercase tracking-tight">
                {product.name}
              </h2>
            </div>
            <div className="text-cyan-400 font-tech font-bold text-xl sm:text-2xl tracking-wider">
              {product.price}
            </div>
          </div>

          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-5">
            {product.description}
          </p>

          {/* Key Features list */}
          <div className="mb-6">
            <span className="text-xs font-tech text-neutral-400 uppercase tracking-wider block mb-2">
              ENGINEERED HIGHLIGHTS:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 mb-6">
              <span className="text-[11px] font-tech text-neutral-400 uppercase tracking-wider block mb-3">
                PRODUCT SPECIFICATIONS:
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-neutral-400 text-[10px] uppercase font-tech block">{key}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fitment Guarantee Note */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 bg-cyan-950/20 p-3 rounded-lg border border-cyan-500/20 mb-6">
            <Shield className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Zero wire-cutting warranty protected fitment by master technicians in Nikol workshop.</span>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleWhatsApp}
              className="py-3 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 font-tech text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              ASK ON WHATSAPP
            </button>

            <button
              onClick={() => {
                const pName = product.name;
                onClose();
                onOpenBooking(pName);
              }}
              className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-tech font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              BOOK INSTALLATION
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

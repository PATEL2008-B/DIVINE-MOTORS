import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ArrowRight, MessageSquare, Info, Sparkles } from 'lucide-react';
import { ACCESSORIES_LIST, BUSINESS_INFO } from '../data/automotiveData';
import { AccessoryItem } from '../types';

interface ShowroomFilterProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenProductModal: (product: AccessoryItem) => void;
}

export default function ShowroomFilter({ onOpenBooking, onOpenProductModal }: ShowroomFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'INTERIOR',
    'LIGHTING',
    'AUDIO',
    'TECHNOLOGY',
    'EXTERIOR',
    'COMFORT'
  ];

  const filteredProducts = activeCategory === 'ALL'
    ? ACCESSORIES_LIST
    : ACCESSORIES_LIST.filter(item => {
        if (activeCategory === 'COMFORT') {
          return item.category === 'Interior' || item.name.toLowerCase().includes('seat');
        }
        return item.category.toUpperCase() === activeCategory;
      });

  const handleWhatsAppEnquiry = (productName: string) => {
    const text = encodeURIComponent(
      `Hello Divine Motors, I would like to inquire about the ${productName} from your showroom catalogue.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="showroom" className="relative py-20 lg:py-28 bg-[#030508] border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
              <Filter className="w-3.5 h-3.5" />
              PRODUCT CATALOGUE
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
              ACCESSORY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">SHOWROOM</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Filter by vehicle upgrade category to find tailored enhancements, factory-spec fitments, and guaranteed performance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-tech text-neutral-400 uppercase">
              SHOWING: <span className="text-cyan-400 font-bold">{filteredProducts.length} ITEMS</span>
            </span>
          </div>
        </div>

        {/* Filter Pills with Glowing States */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-tech tracking-[0.15em] uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.6)] scale-105'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-neutral-900/70 border border-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-tech text-cyan-400 tracking-wider uppercase">
                    {product.category}
                  </span>

                  {product.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-[9px] font-tech text-cyan-300 tracking-wider font-bold uppercase">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors uppercase tracking-wide">
                      {product.name}
                    </h3>
                    
                    <div className="text-cyan-400 font-tech font-bold text-base mt-1.5">
                      {product.price}
                    </div>

                    <p className="text-neutral-300 text-xs mt-3 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-4 space-y-1.5">
                      {product.highlights.slice(0, 2).map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onOpenProductModal(product)}
                        className="w-full py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-tech text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Info className="w-3.5 h-3.5 text-cyan-400" />
                        VIEW DETAILS
                      </button>

                      <button
                        onClick={() => handleWhatsAppEnquiry(product.name)}
                        className="w-full py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-tech text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        WHATSAPP
                      </button>
                    </div>

                    <button
                      onClick={() => onOpenBooking(product.name)}
                      className="w-full py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/40 font-tech text-xs font-bold tracking-widest uppercase transition-all duration-200"
                    >
                      BOOK INSTALLATION
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Sparkles, Check, Info } from 'lucide-react';
import { ACCESSORIES_LIST, WIPER_BLADES, BUSINESS_INFO } from '../data/automotiveData';
import { AccessoryItem } from '../types';

interface AccessoriesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenProductModal: (product: AccessoryItem) => void;
  onOpenAmbientStudio: () => void;
}

export default function AccessoriesSection({
  onOpenBooking,
  onOpenProductModal,
  onOpenAmbientStudio,
}: AccessoriesSectionProps) {
  const [activeColorDot, setActiveColorDot] = useState<string>('#00e5ff');

  const ambientColors = [
    { name: 'Cyan', color: '#00e5ff' },
    { name: 'Blue', color: '#2563eb' },
    { name: 'Purple', color: '#a855f7' },
    { name: 'Red', color: '#ef4444' },
    { name: 'Orange', color: '#f97316' },
  ];

  const handleWhatsAppEnquiry = (productName: string) => {
    const text = encodeURIComponent(
      `Hello Divine Motors, I would like to enquire about the ${productName} for my car.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="accessories" className="relative py-20 lg:py-28 bg-[#030508] overflow-hidden border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
              UPGRADE YOUR DRIVE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
              PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">ACCESSORIES</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              From service accessories for better comfort to advanced cockpit technology and styling — precision crafted for your vehicle.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#showroom"
              className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 hover:border-cyan-400/50 font-tech text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2"
            >
              <span>VIEW ALL ACCESSORIES</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Row 1: 4 Core Accessory Cards (Android System, Seat Cover, Sound System, LED Light) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {ACCESSORIES_LIST.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] flex flex-col justify-between"
            >
              {/* Image with zoom and badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                {/* Badge if present */}
                {product.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-[9px] font-tech text-cyan-300 tracking-wider font-bold uppercase">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors uppercase tracking-wide">
                    {product.name}
                  </h3>
                  
                  {/* Verified Price from user request */}
                  <div className="mt-2 text-cyan-400 font-tech font-bold text-lg tracking-wider">
                    {product.price}
                  </div>

                  <p className="text-neutral-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-4 border-t border-white/5 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProductModal(product)}
                      className="w-full py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-tech text-[11px] tracking-wider uppercase transition-colors flex items-center justify-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      DETAILS
                    </button>

                    <button
                      onClick={() => handleWhatsAppEnquiry(product.name)}
                      className="w-full py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-tech text-[11px] tracking-wider uppercase transition-all flex items-center justify-center gap-1"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      ENQUIRE
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenBooking(product.name)}
                    className="w-full py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/40 font-tech text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm"
                  >
                    BOOK INSTALLATION
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: Wiper Blade Offers + Ambient Lighting Banner (Exact match to mockup!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Wiper Blade Offers Panel (Col 7) */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-tech text-cyan-400 tracking-[0.2em] uppercase block">
                    GENUINE REPLACEMENT
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-white tracking-wide uppercase">
                    WIPER BLADE OFFERS
                  </h3>
                </div>
                <span className="text-xs font-tech text-neutral-400 bg-neutral-800 px-2.5 py-1 rounded-md border border-white/5">
                  ALL SIZES IN STOCK
                </span>
              </div>

              {/* Exact Verified Prices Table */}
              <div className="space-y-3 mt-4">
                {WIPER_BLADES.map((blade) => (
                  <div
                    key={blade.type}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-sm text-white uppercase group-hover:text-cyan-300 transition-colors">
                          {blade.type}
                        </span>
                        {blade.popular && (
                          <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[9px] font-tech tracking-wider uppercase">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                        {blade.features}
                      </p>
                    </div>

                    <div className="text-right flex items-center gap-3">
                      <span className="font-tech text-lg font-bold text-cyan-400">
                        {blade.price}
                      </span>
                      <button
                        onClick={() => handleWhatsAppEnquiry(`${blade.type} Wiper Blade`)}
                        className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                        title="Enquire on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span>Premium quality automotive products at competitive prices.</span>
              <button
                onClick={() => onOpenBooking('Wiper Blade Replacement')}
                className="text-cyan-400 hover:text-cyan-300 font-tech tracking-wider uppercase underline"
              >
                Book Replacement →
              </button>
            </div>
          </div>

          {/* Ambient Lighting Interactive Teaser Panel (Col 5) */}
          <div
            className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-cyan-500/30 relative overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(0,180,255,0.15)] group"
          >
            {/* Background image of glowing interior */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
                alt="Multi colour ambient lighting cockpit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-colors duration-500"
                style={{
                  background: `linear-gradient(to right, rgba(4,6,10,0.95) 20%, ${activeColorDot}20 60%, rgba(4,6,10,0.85) 100%)`
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/40 text-[10px] font-tech text-cyan-400 tracking-widest uppercase mb-3">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" />
                SIGNATURE COCKPIT UPGRADE
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white tracking-wide uppercase">
                AMBIENT LIGHTING
              </h3>
              <p className="text-cyan-300 font-tech text-sm tracking-wider uppercase mt-1">
                MULTI COLOUR OPTIONS
              </p>

              <p className="text-neutral-300 text-xs sm:text-sm mt-3 max-w-sm leading-relaxed">
                Experience dynamic symphony fiber-optic lighting seamlessly integrated into doors, dashboard, and footwells. Control via smartphone app.
              </p>

              {/* Interactive Color Dots matching mockup */}
              <div className="mt-5 flex items-center gap-3">
                <span className="text-[11px] font-tech text-neutral-400 uppercase tracking-wider">
                  PREVIEW TINT:
                </span>
                <div className="flex items-center gap-2">
                  {ambientColors.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setActiveColorDot(item.color)}
                      style={{ backgroundColor: item.color }}
                      className={`w-6 h-6 rounded-full transition-all duration-300 ${
                        activeColorDot === item.color
                          ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-black shadow-[0_0_15px_currentColor]'
                          : 'opacity-70 hover:opacity-100 hover:scale-110'
                      }`}
                      title={item.name}
                      aria-label={`Select ${item.name} ambient light`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onOpenAmbientStudio}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-tech font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all flex items-center gap-2"
              >
                <span>OPEN LIGHT STUDIO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenBooking('Ambient Lighting')}
                className="text-xs font-tech text-neutral-300 hover:text-white uppercase tracking-wider underline"
              >
                Book Custom Install
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

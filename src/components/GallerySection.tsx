import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ZoomIn, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/automotiveData';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['ALL', 'CAR ACCESSORIES', 'CAR INTERIORS', 'LIGHTING', 'AUDIO', 'STYLING', 'WORKSHOP'];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#04060a] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              IMMERSIVE AUTOMOTIVE GALLERY
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
              GALLERY: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">OUR WORK.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Real projects delivered in our Nikol facility. From precision mechanical overhauls to bespoke ambient cockpits.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-[11px] font-tech tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxItem(item)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-950 border border-white/10 hover:border-cyan-400/60 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Floating Category Tag */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-cyan-500/30 text-[9px] font-tech text-cyan-400 tracking-wider uppercase">
                  {item.category}
                </span>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Title & Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors uppercase leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-neutral-950 border border-cyan-500/40 p-2 shadow-[0_0_50px_rgba(0,212,255,0.3)] text-left"
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-5 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-tech text-cyan-400 tracking-widest uppercase block">
                  {lightboxItem.category}
                </span>
                <h4 className="font-heading font-extrabold text-lg text-white uppercase mt-0.5">
                  {lightboxItem.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  {lightboxItem.caption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

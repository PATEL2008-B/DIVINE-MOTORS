import { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/automotiveData';

interface BeforeAfterSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function BeforeAfterSection({ onOpenBooking }: BeforeAfterSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_ITEMS[currentIndex];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformation" className="relative py-20 lg:py-28 bg-[#030508] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            WORKSHOP CRAFTSMANSHIP
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
            SEE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">TRANSFORMATION.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Drag the slider to compare factory OEM stock setups against Divine Motors custom engineered upgrades.
          </p>
        </div>

        {/* Category / Example Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-tech tracking-wider uppercase transition-all duration-200 ${
                currentIndex === idx
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : 'bg-neutral-900/80 text-neutral-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Box */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] cursor-ew-resize select-none bg-neutral-950"
          >
            {/* "AFTER" Image (Full background) */}
            <img
              src={activeItem.afterImage}
              alt={`${activeItem.title} - After Upgrade`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* "BEFORE" Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeItem.beforeImage}
                alt={`${activeItem.title} - Before Upgrade`}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current?.clientWidth || '100%',
                  height: containerRef.current?.clientHeight || '100%'
                }}
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.9)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-500 text-black border-2 border-white shadow-[0_0_20px_rgba(0,212,255,0.8)] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Before / After Label Badges */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-xs font-tech tracking-widest text-neutral-300 uppercase">
              BEFORE (FACTORY STOCK)
            </div>

            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-cyan-950/80 backdrop-blur-md border border-cyan-400/50 text-xs font-tech tracking-widest text-cyan-300 uppercase font-bold shadow-[0_0_12px_rgba(0,212,255,0.4)]">
              AFTER (DIVINE MOTORS)
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-wider block">
                  {activeItem.category}
                </span>
                <p className="text-xs text-neutral-200 mt-0.5">
                  {activeItem.description}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenBooking(activeItem.title);
                }}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-tech font-bold text-xs tracking-wider uppercase hover:bg-cyan-400 transition-colors flex-shrink-0"
              >
                GET THIS UPGRADE
              </button>
            </div>
          </div>

          {/* Quick Slider Helper Instruction */}
          <div className="flex justify-between items-center mt-3 text-xs font-tech text-neutral-400">
            <span>← Slide left to reveal upgraded transformation</span>
            <span>Slide right to view original stock →</span>
          </div>
        </div>

      </div>
    </section>
  );
}

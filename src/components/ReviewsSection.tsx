import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, ExternalLink, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/automotiveData';

export default function ReviewsSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
  };

  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-[#04060a] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
              CUSTOMER TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
              WHAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">CUSTOMERS SAY</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Authentic customer experiences from our verified Google Business profile in Nikol, Ahmedabad.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 hover:border-cyan-400 font-tech text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2"
          >
            <span>VIEW GOOGLE REVIEWS</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Review Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 4 Cols: Verified Google Rating Card */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,180,255,0.15)] flex flex-col justify-between text-left">
            <div>
              {/* Google Brand Logo styling */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-2xl font-bold text-blue-500">G</span>
                <span className="text-2xl font-bold text-red-500">o</span>
                <span className="text-2xl font-bold text-yellow-500">o</span>
                <span className="text-2xl font-bold text-blue-500">g</span>
                <span className="text-2xl font-bold text-green-500">l</span>
                <span className="text-2xl font-bold text-red-500">e</span>
                <span className="text-xs font-tech text-neutral-400 ml-2 uppercase tracking-wider">
                  RATING
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-heading font-extrabold text-white tracking-tight">
                  5.0
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-xs font-tech text-neutral-400 tracking-wider uppercase mb-6">
                BASED ON 2 VERIFIED GOOGLE REVIEWS
              </p>

              <div className="space-y-3 border-t border-white/5 pt-4">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Recommended by Customers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Genuine Products & Expert Workmanship</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Fast Turnaround Time & Clean Handover</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/30 font-tech text-xs tracking-wider uppercase font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>WRITE A REVIEW ON GOOGLE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right 8 Cols: 2 Verified Customer Reviews Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GOOGLE_REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-7 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] flex flex-col justify-between text-left group relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-800 group-hover:text-cyan-500/20 transition-colors" />

                <div>
                  {/* Stars */}
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                      {review.author}
                    </h4>
                    <span className="text-[11px] text-neutral-400 font-tech block mt-0.5">
                      {review.timeAgo}
                    </span>
                  </div>

                  {review.carOrService && (
                    <span className="px-2.5 py-1 rounded bg-black/60 border border-cyan-500/30 text-[10px] font-tech text-cyan-400 tracking-wider uppercase">
                      {review.carOrService}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';
import { DivineLogo } from './DivineLogo';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'two-worlds', 'services', 'accessories', 'styling', 'gallery', 'about', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'ACCESSORIES', href: '#accessories', id: 'accessories' },
    { label: 'STYLING', href: '#styling', id: 'styling' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'REVIEWS', href: '#reviews', id: 'reviews' },
    { label: 'LOCATION', href: '#contact', id: 'contact' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Divine Motors, I would like to inquire about car repair and accessories.");
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${BUSINESS_INFO.phone}`;
  };

  return (
    <>
      {/* Top micro ribbon */}
      <div className="hidden lg:block w-full bg-black/85 border-b border-white/5 py-1 text-[11px] font-tech text-neutral-400 tracking-[0.2em] uppercase text-center relative z-40">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="text-cyan-400/90 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            CAR REPAIR • PREMIUM ACCESSORIES • CAR STYLING • ALL UNDER ONE ROOF
          </span>
          <span className="text-neutral-400 flex items-center gap-3">
            <span>SHOP 21, MADHAV COMPLEX, NIKOL, AHMEDABAD</span>
            <span className="text-cyan-400 font-bold">CALL: {BUSINESS_INFO.displayPhone}</span>
          </span>
        </div>
      </div>

      <header
        id="main-navigation"
        className={`fixed top-0 lg:top-7 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#06090f]/90 backdrop-blur-md border-b border-cyan-500/20 py-2.5 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Custom Divine Motors Automotive Badge & Brand */}
            <a href="#home" className="flex items-center group select-none">
              <DivineLogo size="md" showText={true} showLocation={true} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative text-xs font-tech tracking-[0.18em] transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-cyan-400 font-bold'
                        : 'text-neutral-300 hover:text-cyan-300'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-sky-400 shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp Quick Icon */}
              <button
                onClick={handleWhatsAppClick}
                title="Chat on WhatsApp"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all duration-200 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105"
                aria-label="WhatsApp Divine Motors"
              >
                <MessageSquare className="w-4 h-4" />
              </button>

              {/* Call Now Icon */}
              <button
                onClick={handleCallClick}
                title="Call Divine Motors"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all duration-200 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-105"
                aria-label="Call Divine Motors"
              >
                <Phone className="w-4 h-4" />
              </button>

              {/* Primary Book Now Button */}
              <button
                onClick={() => onOpenBooking()}
                className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 text-black font-tech font-bold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  BOOK NOW
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-30 bg-[#06090f]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-8 flex flex-col justify-between xl:hidden"
          >
            <div className="space-y-4">
              <div className="text-[10px] font-tech uppercase tracking-[0.25em] text-neutral-400 border-b border-white/5 pb-2">
                DIVINE MOTORS MENU
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-tech tracking-wider text-neutral-200 hover:text-cyan-400 transition-colors border-b border-white/5"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-tech font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                BOOK A SERVICE
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-tech text-xs tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WHATSAPP
                </button>
                <button
                  onClick={handleCallClick}
                  className="py-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-tech text-xs tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  CALL NOW
                </button>
              </div>

              <div className="text-center pt-2 text-[11px] font-tech text-neutral-400">
                Shop No. 21, Madhav Complex, Near Bhavani Chowk, Nikol, Ahmedabad
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

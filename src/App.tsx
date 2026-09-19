import { useState, FC } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SplitDestinationSection from './components/SplitDestinationSection';
import ServicesSection from './components/ServicesSection';
import AccessoriesSection from './components/AccessoriesSection';
import AmbientLightStudio from './components/AmbientLightStudio';
import BeforeAfterSection from './components/BeforeAfterSection';
import DesignerStylingSection from './components/DesignerStylingSection';
import VehicleInspector from './components/VehicleInspector';
import ShowroomFilter from './components/ShowroomFilter';
import GallerySection from './components/GallerySection';
import WhyChooseSection from './components/WhyChooseSection';
import ReviewsSection from './components/ReviewsSection';
import LocationContactSection from './components/LocationContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ProductModal from './components/ProductModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AccessoryItem } from './types';
import { BUSINESS_INFO } from './data/automotiveData';
import { MessageSquare, Calendar } from 'lucide-react';

export const App: FC = () => {
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<AccessoryItem | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName || '');
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleOpenProductModal = (product: AccessoryItem) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const handleScrollToAmbient = () => {
    const el = document.getElementById('ambient-studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#04060a] text-neutral-100 selection:bg-cyan-500 selection:text-black font-sans antialiased relative">
      {/* Cinematic Entrance Loader */}
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Luxury Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenBooking={() => handleOpenBooking()} 
          onExploreAccessories={() => {
            const el = document.getElementById('accessories');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Split Destination: Two Worlds Under One Roof */}
        <SplitDestinationSection 
          onSelectServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectAccessories={() => {
            const el = document.getElementById('accessories');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Precision Car Care (Workshop Services & Why Choose Panel) */}
        <ServicesSection onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* 4. Upgrade Your Drive: Core Accessories & Wiper Blade Offers & Ambient Teaser */}
        <AccessoriesSection
          onOpenBooking={(srv) => handleOpenBooking(srv)}
          onOpenProductModal={handleOpenProductModal}
          onOpenAmbientStudio={handleScrollToAmbient}
        />

        {/* 5. Light Your Drive: Interactive Ambient Light Cockpit Configurator */}
        <AmbientLightStudio onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* 6. Virtual 360 Vehicle Inspector with Clickable Diagnostic Hotspots */}
        <VehicleInspector onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* 7. See The Transformation: Interactive Before / After Comparison Slider */}
        <BeforeAfterSection onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* 8. Designer Car Styling: Bespoke Automotive Craftsmanship Horizontal Scroll */}
        <DesignerStylingSection onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* 9. Interactive Accessory Showroom with Category Filters */}
        <ShowroomFilter
          onOpenBooking={(srv) => handleOpenBooking(srv)}
          onOpenProductModal={handleOpenProductModal}
        />

        {/* 10. Immersive Automotive Gallery with Lightbox */}
        <GallerySection />

        {/* 11. Crafted For Your Car: Why Choose Us & Verified Trust Indicators */}
        <WhyChooseSection />

        {/* 12. Verified Google Reviews & Customer Testimonials */}
        <ReviewsSection />

        {/* 13. Visit Our Experience Center: Map Embed, Landmark, and Contact Form */}
        <LocationContactSection onOpenBooking={(srv) => handleOpenBooking(srv)} />
      </main>

      {/* 14. Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Desktop Floating Action Buttons (Hidden on mobile where StickyBar handles it) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {/* Instant WhatsApp Chat */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Divine Motors, I would like to inquire about services for my car.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-110 transition-all group"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 text-black fill-current" />
        </a>

        {/* Quick Book Appointment Button */}
        <button
          onClick={() => handleOpenBooking()}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-tech font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-105 transition-all flex items-center gap-2"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span>BOOK BAY</span>
        </button>
      </div>

      {/* Persistent Mobile Action Bar for Maximum Conversion */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive 6-Step Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForBooking}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
        onOpenBooking={(srv) => handleOpenBooking(srv)}
      />
    </div>
  );
};

export default App;

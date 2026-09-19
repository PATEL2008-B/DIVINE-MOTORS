import { useState, FC, FormEvent } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  MessageSquare, 
  ExternalLink, 
  Navigation, 
  ShieldCheck,
  Compass,
  Calendar
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/automotiveData';

interface LocationContactSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const LocationContactSection: FC<LocationContactSectionProps> = ({ onOpenBooking }) => {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    car: '',
    message: ''
  });

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Divine Motors,\nI need help with my car.\n\nName: ${quickForm.name}\nMobile: ${quickForm.phone}\nCar Model: ${quickForm.car}\nMessage: ${quickForm.message || 'General inquiry'}\n\nPlease let me know about service availability.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${BUSINESS_INFO.phone}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Divine Motors, I would like to enquire about visiting your workshop in Nikol, Ahmedabad.");
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleDirections = () => {
    window.open(BUSINESS_INFO.location.directNavUrl, '_blank');
  };

  const handleOpenMaps = () => {
    window.open(BUSINESS_INFO.location.googleMapsUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#030508] border-t border-white/5 overflow-hidden">
      {/* Background radial light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-tech tracking-[0.2em] uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            FIND DIVINE MOTORS
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
            VISIT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">WORKSHOP & STUDIO</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Located at Madhav Complex, near Bhavani Chowk in Nikol, Ahmedabad. Drop by for custom consultations and expert fitting.
          </p>
        </div>

        {/* Section 10 Direct Search / Navigation Action Buttons Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-cyan-500/30 mb-10 shadow-[0_0_30px_rgba(0,180,255,0.12)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-tech text-cyan-400 tracking-widest uppercase block">
                DIRECT GPS NAVIGATION
              </span>
              <h3 className="font-heading font-bold text-white text-base uppercase">
                ONE-CLICK DIRECTIONS TO DIVINE MOTORS
              </h3>
            </div>

            {/* The 6 Explicit Navigation & Contact Actions */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5">
              {/* GET DIRECTIONS */}
              <button
                onClick={handleDirections}
                className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-tech font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center gap-1.5"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </button>

              {/* START NAVIGATION */}
              <button
                onClick={handleDirections}
                className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-white/10 hover:border-cyan-400 font-tech text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>START NAVIGATION</span>
              </button>

              {/* OPEN IN GOOGLE MAPS */}
              <button
                onClick={handleOpenMaps}
                className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-white/10 hover:border-cyan-400 font-tech text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>OPEN IN GOOGLE MAPS</span>
              </button>

              {/* CALL */}
              <button
                onClick={handleCall}
                className="px-3.5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-cyan-400 border border-cyan-500/30 font-tech text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>CALL</span>
              </button>

              {/* WHATSAPP */}
              <button
                onClick={handleWhatsApp}
                className="px-3.5 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 font-tech text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP</span>
              </button>

              {/* BOOK SERVICE */}
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-black font-tech font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK SERVICE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Location Map Embed + Quick Contact Form (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 7 Columns: Embedded Google Map & Location Details */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900/60 border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-tech text-cyan-400 tracking-widest uppercase block">
                    REGISTERED LOCATION
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-white uppercase">
                    DIVINE MOTORS
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5 font-tech">
                    Place ID: {BUSINESS_INFO.location.placeId}
                  </p>
                </div>

                <button
                  onClick={handleOpenMaps}
                  className="px-4 py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/40 font-tech text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 self-start"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GOOGLE MAPS PLACE
                </button>
              </div>

              {/* Verified Address & Landmark */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-neutral-400 uppercase font-tech text-[10px] block mb-1">
                    WORKSHOP ADDRESS
                  </span>
                  <p className="text-white font-medium leading-relaxed">
                    {BUSINESS_INFO.location.shop},<br />
                    {BUSINESS_INFO.location.landmark},<br />
                    {BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.state} {BUSINESS_INFO.location.pincode}, {BUSINESS_INFO.location.country}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-neutral-400 uppercase font-tech text-[10px] block mb-1">
                    OPERATING HOURS & LANDMARK
                  </span>
                  <p className="text-white font-medium">
                    Landmark: <strong className="text-cyan-400">{BUSINESS_INFO.location.landmark}</strong>
                  </p>
                  <p className="text-neutral-300 mt-1">
                    Monday – Sunday: <strong className="text-white">09:30 AM – 09:00 PM</strong>
                  </p>
                  <p className="text-[10px] text-emerald-400 mt-1">
                    ● Workshop Open Everyday for Fitting & Repair
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Embedded Google Map Iframe */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
              <iframe
                title="Divine Motors Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0549495408544!2d72.6631481!3d23.0584441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871e5cb7358d%3A0xe54536780775a18a!2sMadhav%20Complex!5e0!3m2!1sen!2sin!4v1710780000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-tech text-cyan-300 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>DIVINE MOTORS • NIKOL</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Quick Inquiry Form */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900/60 border border-white/10 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-tech text-cyan-400 tracking-widest uppercase block mb-1">
                MESSAGE OUR ADVISORS
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white uppercase mb-2">
                QUICK INQUIRY
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                Tell us what service or accessory you need. We will respond with pricing, fitment options, and slot availability.
              </p>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-tech text-neutral-300 uppercase tracking-wider block mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-tech text-neutral-300 uppercase tracking-wider block mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-tech text-neutral-300 uppercase tracking-wider block mb-1">
                      CAR MODEL *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Swift / Creta"
                      value={quickForm.car}
                      onChange={(e) => setQuickForm({ ...quickForm, car: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-tech text-neutral-300 uppercase tracking-wider block mb-1">
                    SERVICE OR ACCESSORY REQUIRED
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Ambient lighting, Android screen, general service..."
                    value={quickForm.message}
                    onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-tech font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND INQUIRY VIA WHATSAPP</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>We never share your contact details. Direct connection with Nikol workshop.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationContactSection;

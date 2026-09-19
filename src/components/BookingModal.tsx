import { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Car, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  MessageSquare, 
  AlertTriangle,
  Disc,
  Wind,
  Lightbulb,
  BatteryCharging,
  Volume2,
  Smartphone,
  Radio,
  Wrench,
  Package,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Send
} from 'lucide-react';
import { BookingFormData } from '../types';
import { BUSINESS_INFO, COMMON_CAR_BRANDS, PROBLEM_CARDS } from '../data/automotiveData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    mobile: '',
    carBrand: '',
    carModel: '',
    carNumber: '',
    problem: initialService || 'SERVICE REQUIRED',
    serviceRequired: initialService || 'Car Service & Maintenance',
    preferredDate: '',
    preferredTime: '10:00 AM – 12:00 PM',
    additionalMessage: ''
  });

  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        problem: initialService,
        serviceRequired: initialService
      }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const problemIconMap: { [key: string]: any } = {
    AlertTriangle,
    Disc,
    Wind,
    Lightbulb,
    BatteryCharging,
    Volume2,
    Smartphone,
    Radio,
    Wrench,
    Package,
    Sparkles,
    HelpCircle
  };

  const timeSlotOptions = [
    '09:30 AM – 11:30 AM (Morning Slot)',
    '11:30 AM – 01:30 PM (Mid-Day Slot)',
    '02:00 PM – 04:00 PM (Afternoon Slot)',
    '04:00 PM – 06:00 PM (Evening Slot)',
    '06:00 PM – 08:30 PM (Night Rush Slot)'
  ];

  // Validation per step
  const handleNext = () => {
    setValidationError('');
    if (step === 1) {
      if (!formData.name.trim()) {
        setValidationError('Please enter your full name.');
        return;
      }
      if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, '').length < 10) {
        setValidationError('Please enter a valid 10-digit mobile number.');
        return;
      }
      if (!formData.carBrand.trim()) {
        setValidationError('Please select or specify your car brand.');
        return;
      }
      if (!formData.carModel.trim()) {
        setValidationError('Please enter your car model (e.g. Creta, Swift, Harrier).');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.problem) {
        setValidationError('Please select the primary problem or service requirement.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!formData.preferredDate) {
        setValidationError('Please select your preferred date.');
        return;
      }
      if (!formData.preferredTime) {
        setValidationError('Please choose a preferred time slot.');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      // Step 4 is additional message (optional)
      setStep(5);
    } else if (step === 5) {
      // Review step proceeds to Step 6 (WhatsApp Submit)
      setStep(6);
    }
  };

  const handlePrev = () => {
    setValidationError('');
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const constructWhatsAppText = () => {
    return `Hello Divine Motors,
I need help with my car.

Name: ${formData.name || 'Not Provided'}
Mobile: ${formData.mobile || 'Not Provided'}
Car Brand: ${formData.carBrand || 'Not Provided'}
Car Model: ${formData.carModel || 'Not Provided'}
Car Number: ${formData.carNumber || 'Not Provided'}
Problem: ${formData.problem || 'Not Specified'}
Service Required: ${formData.serviceRequired || formData.problem || 'Not Specified'}
Preferred Date: ${formData.preferredDate || 'Earliest Available'}
Preferred Time: ${formData.preferredTime || 'Standard Hours'}
Additional Message: ${formData.additionalMessage || 'None'}

Please let me know about the service and availability.`;
  };

  const handleSendOnWhatsApp = () => {
    const text = encodeURIComponent(constructWhatsAppText());
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#060911] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.2)] overflow-hidden my-auto"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-900/60">
          <div>
            <span className="text-[10px] font-tech text-cyan-400 tracking-[0.2em] uppercase block">
              DIVINE MOTORS • NIKOL, AHMEDABAD
            </span>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-wide uppercase mt-0.5">
              BOOK A SERVICE / REPORT A PROBLEM
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progression Bar (1 to 6) */}
        <div className="px-6 py-3 bg-black/40 border-b border-white/5">
          <div className="flex items-center justify-between gap-1 text-center">
            {[
              { num: 1, label: 'Car Info' },
              { num: 2, label: 'Problem' },
              { num: 3, label: 'Schedule' },
              { num: 4, label: 'Notes' },
              { num: 5, label: 'Review' },
              { num: 6, label: 'WhatsApp' }
            ].map((s) => {
              const isCompleted = step > s.num;
              const isCurrent = step === s.num;
              return (
                <div key={s.num} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-tech font-bold transition-all ${
                      isCompleted
                        ? 'bg-emerald-500 text-black shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                        : isCurrent
                        ? 'bg-cyan-500 text-black shadow-[0_0_12px_rgba(0,229,255,0.8)] scale-110'
                        : 'bg-neutral-800 text-neutral-400 border border-white/5'
                    }`}
                  >
                    {isCompleted ? '✓' : s.num}
                  </div>
                  <span
                    className={`text-[9px] font-tech tracking-wider uppercase mt-1 hidden sm:block ${
                      isCurrent ? 'text-cyan-400 font-bold' : 'text-neutral-500'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {validationError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-tech flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{validationError}</span>
            </motion.div>
          )}

          {/* STEP 1: Tell us about your car */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-tech text-cyan-400 tracking-[0.15em] uppercase">STEP 1 OF 6</span>
                <h4 className="text-lg font-heading font-bold text-white uppercase mt-0.5">
                  TELL US ABOUT YOUR CAR & CONTACT
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-tech text-neutral-300 uppercase tracking-wider mb-1.5">
                    YOUR NAME <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-neutral-300 uppercase tracking-wider mb-1.5">
                    MOBILE NUMBER <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Car Brand Selection */}
              <div>
                <label className="block text-xs font-tech text-neutral-300 uppercase tracking-wider mb-2">
                  CAR BRAND <span className="text-cyan-400">*</span>
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {COMMON_CAR_BRANDS.map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setFormData({ ...formData, carBrand: brand })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-tech tracking-wider uppercase transition-all ${
                        formData.carBrand === brand
                          ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                          : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-white/10'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Or type your car brand..."
                  value={formData.carBrand}
                  onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-900/60 border border-white/10 focus:border-cyan-400 text-white text-xs focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-tech text-neutral-300 uppercase tracking-wider mb-1.5">
                    CAR MODEL <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Creta, Nexon, Swift, Thar, City"
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-neutral-300 uppercase tracking-wider mb-1.5">
                    CAR NUMBER <span className="text-neutral-500">(OPTIONAL)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. GJ 01 XX 1234"
                    value={formData.carNumber}
                    onChange={(e) => setFormData({ ...formData, carNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors uppercase"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Tell us the problem (Clickable Interactive Cards) */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-tech text-cyan-400 tracking-[0.15em] uppercase">STEP 2 OF 6</span>
                <h4 className="text-lg font-heading font-bold text-white uppercase mt-0.5">
                  TELL US THE PROBLEM OR SERVICE
                </h4>
                <p className="text-neutral-400 text-xs mt-1">
                  Select the condition that best matches your vehicle&apos;s current symptom:
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PROBLEM_CARDS.map((card) => {
                  const Icon = problemIconMap[card.icon] || Wrench;
                  const isSelected = formData.problem === card.label;
                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => setFormData({
                        ...formData,
                        problem: card.label,
                        serviceRequired: card.label
                      })}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[90px] ${
                        isSelected
                          ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.3)] scale-[1.02]'
                          : 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10 text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-neutral-400'}`} />
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <span className={`font-tech text-xs tracking-wider uppercase font-semibold leading-tight mt-2 ${
                        isSelected ? 'text-white' : 'text-neutral-300'
                      }`}>
                        {card.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Service Required refinement */}
              <div className="pt-2">
                <label className="block text-xs font-tech text-neutral-400 uppercase tracking-wider mb-1">
                  SPECIFIC SERVICE REQUIREMENT / UPGRADE (AUTO-FILLED)
                </label>
                <input
                  type="text"
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  placeholder="e.g. Brake pad renewal, Android 10-inch fitting, periodic service"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Preferred Date & Time */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-tech text-cyan-400 tracking-[0.15em] uppercase">STEP 3 OF 6</span>
                <h4 className="text-lg font-heading font-bold text-white uppercase mt-0.5">
                  CHOOSE PREFERRED DATE & TIME
                </h4>
                <p className="text-neutral-400 text-xs mt-1">
                  Select your convenient slot for vehicle drop-off or workshop inspection:
                </p>
              </div>

              <div>
                <label className="block text-xs font-tech text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  PREFERRED DATE <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-white/10 focus:border-cyan-400 text-white text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-tech text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  PREFERRED TIME SLOT <span className="text-cyan-400">*</span>
                </label>
                <div className="space-y-2">
                  {timeSlotOptions.map((slot) => {
                    const isSelected = formData.preferredTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredTime: slot })}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs font-tech tracking-wider transition-all ${
                          isSelected
                            ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                            : 'bg-neutral-900/60 hover:bg-neutral-800/80 border-white/10 text-neutral-300'
                        }`}
                      >
                        <span>{slot}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Additional Message */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-tech text-cyan-400 tracking-[0.15em] uppercase">STEP 4 OF 6</span>
                <h4 className="text-lg font-heading font-bold text-white uppercase mt-0.5">
                  ADDITIONAL MESSAGE & NOTES
                </h4>
                <p className="text-neutral-400 text-xs mt-1">
                  Optional: Mention any sound symptoms, past repairs, or specific accessory preferences.
                </p>
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="e.g. Squeaking noise while braking at slow speed, or interested in 9-inch Android screen with wireless Apple CarPlay for Creta..."
                  value={formData.additionalMessage}
                  onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                  className="w-full p-4 rounded-xl bg-neutral-900/90 border border-white/10 focus:border-cyan-400 text-white text-sm focus:outline-none leading-relaxed"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Our master technicians in Nikol will review your details prior to appointment confirmation. Coupler-to-coupler zero-wire-cut guarantee applies on all accessories.
                </p>
              </div>
            </div>
          )}

          {/* STEP 5: Review Request */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="border-b border-white/5 pb-3">
                <span className="text-xs font-tech text-cyan-400 tracking-[0.15em] uppercase">STEP 5 OF 6</span>
                <h4 className="text-lg font-heading font-bold text-white uppercase mt-0.5">
                  REVIEW YOUR SERVICE REQUEST
                </h4>
                <p className="text-neutral-400 text-xs mt-1">
                  Verify the inquiry details before sending directly to Divine Motors via WhatsApp:
                </p>
              </div>

              <div className="rounded-xl bg-neutral-900/80 border border-cyan-500/30 p-4 divide-y divide-white/10 space-y-3">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-tech text-neutral-400 uppercase">CUSTOMER NAME</span>
                  <span className="text-sm font-semibold text-white">{formData.name}</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs font-tech text-neutral-400 uppercase">MOBILE NUMBER</span>
                  <span className="text-sm font-tech text-cyan-400 font-bold">{formData.mobile}</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs font-tech text-neutral-400 uppercase">CAR BRAND & MODEL</span>
                  <span className="text-sm font-semibold text-white">
                    {formData.carBrand} {formData.carModel}
                  </span>
                </div>

                {formData.carNumber && (
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-xs font-tech text-neutral-400 uppercase">CAR NUMBER</span>
                    <span className="text-sm font-tech text-white uppercase">{formData.carNumber}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs font-tech text-neutral-400 uppercase">REPORTED PROBLEM / UPGRADE</span>
                  <span className="text-sm font-bold text-cyan-300 uppercase">{formData.problem}</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs font-tech text-neutral-400 uppercase">SERVICE REQUIRED</span>
                  <span className="text-sm text-neutral-200">{formData.serviceRequired}</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs font-tech text-neutral-400 uppercase">PREFERRED DATE & TIME</span>
                  <span className="text-xs font-tech text-white text-right">
                    {formData.preferredDate} ({formData.preferredTime})
                  </span>
                </div>

                {formData.additionalMessage && (
                  <div className="pt-3">
                    <span className="text-xs font-tech text-neutral-400 uppercase block mb-1">ADDITIONAL NOTES</span>
                    <p className="text-xs text-neutral-300 italic bg-black/40 p-2.5 rounded-lg border border-white/5">
                      &ldquo;{formData.additionalMessage}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 6: SEND REQUEST ON WHATSAPP */}
          {step === 6 && (
            <div className="space-y-5 text-center py-2">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <Send className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-tech text-cyan-400 tracking-[0.2em] uppercase block mb-1">
                  READY TO CONNECT
                </span>
                <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white uppercase">
                  SEND REQUEST TO DIVINE MOTORS
                </h4>
                <p className="text-neutral-400 text-xs sm:text-sm mt-2 max-w-md mx-auto">
                  Click below to open WhatsApp with your pre-filled inquiry. Our team at Nikol, Ahmedabad will reply immediately to confirm your schedule.
                </p>
              </div>

              {/* Formatted Message Preview Card */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-left font-tech text-xs text-neutral-300 max-h-48 overflow-y-auto whitespace-pre-line leading-relaxed">
                {constructWhatsAppText()}
              </div>

              {/* Main Actions */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleSendOnWhatsApp}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-tech font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-black fill-current" />
                  <span>SEND REQUEST ON WHATSAPP</span>
                </button>

                <div className="flex items-center gap-2 justify-center">
                  <span className="text-xs text-neutral-500 font-tech uppercase">OR PREFER A CALL?</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-cyan-500/30 text-cyan-400 font-tech text-xs font-bold hover:bg-neutral-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL {BUSINESS_INFO.displayPhone}</span>
                  </a>
                </div>
              </div>

              {/* Mandatory User Reassurance Note */}
              <p className="text-[11px] text-neutral-400 font-tech leading-relaxed pt-2">
                Note: This request will be sent directly to Divine Motors via WhatsApp for immediate confirmation and scheduling.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Controls (Step Navigation) */}
        <div className="px-6 py-4 border-t border-white/10 bg-neutral-900/60 flex items-center justify-between">
          {step > 1 && step < 6 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-tech text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK</span>
            </button>
          ) : (
            <div />
          )}

          {step < 5 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-tech text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center gap-1.5"
            >
              <span>NEXT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {step === 5 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-black font-tech text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,229,255,0.5)] flex items-center gap-1.5"
            >
              <span>CONTINUE TO WHATSAPP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {step === 6 && (
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-tech text-xs uppercase tracking-wider transition-colors"
            >
              CLOSE
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;

import { ServiceItem, AccessoryItem, StylingFeature, BeforeAfterItem, ReviewItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: "DIVINE MOTORS",
  tagline: "REPAIR. UPGRADE. DRIVE.",
  headline: "Premium Automotive Care, Accessories & Styling.",
  supportingText: "Professional car repair, premium accessories and modern automotive styling — all under one roof in Ahmedabad.",
  location: {
    shop: "Shop No. 21, Madhav Complex",
    landmark: "Near Bhavani Chowk, Nikol",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "382350",
    country: "India",
    placeId: "ChIJgTo1fACHXjkRGBh8jm0DyWQ",
    googleMapsUrl: "https://maps.app.goo.gl/wSY3zk1GHarbw1KCA",
    directNavUrl: "https://www.google.com/maps/dir/?api=1&destination=Divine+Motors+Nikol+Ahmedabad&destination_place_id=ChIJgTo1fACHXjkRGBh8jm0DyWQ",
    embedMapUrl: "https://maps.google.com/maps?q=Divine%20Motors,%20Shop%20No.%2021,%20Madhav%20Complex,%20Near%20Bhavani%20Chowk,%20Nikol,%20Ahmedabad,%20Gujarat%20382350&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  phone: "+919574379432",
  displayPhone: "+91 95743 79432",
  whatsappNumber: "919574379432",
  rating: 5.0,
  reviewCount: 2,
  hours: "Mon – Sun: 9:30 AM – 9:00 PM"
};

export const COMMON_CAR_BRANDS = [
  'Hyundai',
  'Tata',
  'Mahindra',
  'Maruti Suzuki',
  'Toyota',
  'Kia',
  'Honda',
  'Volkswagen',
  'Skoda',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Other Brand'
];

export const PROBLEM_CARDS = [
  { id: 'not-starting', label: 'CAR NOT STARTING', icon: 'AlertTriangle' },
  { id: 'brake-problem', label: 'BRAKE PROBLEM', icon: 'Disc' },
  { id: 'ac-problem', label: 'AC PROBLEM', icon: 'Wind' },
  { id: 'light-problem', label: 'LIGHT PROBLEM', icon: 'Lightbulb' },
  { id: 'battery-problem', label: 'BATTERY PROBLEM', icon: 'BatteryCharging' },
  { id: 'sound-problem', label: 'SOUND SYSTEM PROBLEM', icon: 'Volume2' },
  { id: 'android-problem', label: 'ANDROID SYSTEM PROBLEM', icon: 'Smartphone' },
  { id: 'noise-problem', label: 'STRANGE NOISE', icon: 'Radio' },
  { id: 'service-required', label: 'SERVICE REQUIRED', icon: 'Wrench' },
  { id: 'accessory-installation', label: 'ACCESSORY INSTALLATION', icon: 'Package' },
  { id: 'car-styling', label: 'CAR STYLING', icon: 'Sparkles' },
  { id: 'other-problem', label: 'OTHER PROBLEM', icon: 'HelpCircle' }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'general-repair',
    title: 'GENERAL CAR REPAIR',
    category: 'repair',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Comprehensive engine, transmission, suspension, and brake repairs performed by certified mechanics.',
    details: ['Engine tune-ups & mechanical overhaul', 'Brake pad renewal & disc skimming', 'Suspension bushes & steering rack alignment', 'Transmission fluid & clutch overhaul'],
    duration: '2 - 5 Hours',
    recommended: 'Upon mechanical wear or warning lights'
  },
  {
    id: 'car-service-maintenance',
    title: 'CAR SERVICE & MAINTENANCE',
    category: 'maintenance',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Complete periodic vehicle servicing, premium synthetic oil changes, multi-point electronic and mechanical audits.',
    details: ['Synthetic engine oil replacement', 'Oil filter, air filter & AC cabin filter change', 'Coolant, brake fluid & battery test', '45-point bumper-to-bumper checkup'],
    duration: '2 - 3 Hours',
    recommended: 'Every 5,000 to 10,000 km'
  },
  {
    id: 'vehicle-inspection',
    title: 'VEHICLE INSPECTION',
    category: 'diagnostics',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Detailed pre-trip, pre-monsoon, and general health evaluation across underbody, steering, and electronics.',
    details: ['Chassis & underbody structural rust check', 'Tyre tread depth & brake pad wear assessment', 'Belt tension & hose clearance inspection', 'Fluid levels & exhaust inspection'],
    duration: '1 - 2 Hours',
    recommended: 'Before highway long drives or seasonal shifts'
  },
  {
    id: 'troubleshooting',
    title: 'TROUBLESHOOTING',
    category: 'diagnostics',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Advanced computer diagnostic scanning to eliminate check-engine lights, sensor glitches, and electrical faults.',
    details: ['Live sensor data evaluation (O2, MAF, MAP)', 'ECU error code reading & clearing', 'Electrical wiring fault isolation', 'Fuel injector performance analysis'],
    duration: '1 - 2 Hours',
    recommended: 'When warning indicators flash or engine lags'
  },
  {
    id: 'maintenance-support',
    title: 'MAINTENANCE SUPPORT',
    category: 'maintenance',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Dedicated technical advice, seasonal fluid checks, AC servicing, and cooling system overhauls.',
    details: ['Radiator flushing & coolant top-up', 'AC gas recovery & cooling coil disinfection', 'Wheel balancing & laser alignment', 'Spark plug cleaning & calibration'],
    duration: '1 - 3 Hours',
    recommended: 'Before peak summer and monsoon seasons'
  },
  {
    id: 'automotive-check-up',
    title: 'AUTOMOTIVE CHECK-UP',
    category: 'diagnostics',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Full electronic, sensor, lighting, and mechanical health audit ensuring peak reliability and fuel economy.',
    details: ['Digital health audit certificate', 'Suspension rebound & shocker test', 'Headlight beam lux test & alignment', 'Road test verification by master technician'],
    duration: '2 Hours',
    recommended: 'Annual comprehensive audit'
  }
];

export const ACCESSORIES_LIST: AccessoryItem[] = [
  {
    id: 'android-system',
    name: 'ANDROID SYSTEM',
    category: 'Technology',
    price: '₹9,000',
    priceNum: 9000,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    description: 'High-definition IPS touchscreen Android infotainment head unit with Wireless Apple CarPlay, Android Auto, Google Maps navigation, DSP audio equalizer, and Bluetooth.',
    highlights: ['IPS 2.5D Curved Glass Display', 'Wireless Apple CarPlay & Android Auto', 'Built-in 32-Band DSP Audio Equalizer', 'Split Screen Multitasking & Reverse Cam Input'],
    specs: {
      'Screen Size': '9-inch / 10.1-inch HD IPS',
      'Operating System': 'Android with Google Play Store',
      'Connectivity': 'Wireless CarPlay, Android Auto, Bluetooth, Wi-Fi',
      'Fitment': 'Coupler-to-coupler zero wire cut installation'
    },
    badge: 'POPULAR UPGRADE'
  },
  {
    id: 'seat-cover',
    name: 'SEAT COVER',
    category: 'Interior',
    price: '₹9,000',
    priceNum: 9000,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke custom-tailored bucket seat covers crafted from premium Nappa-finish leatherette for unmatched ergonomic lumbar support and executive styling.',
    highlights: ['Bucket Fitment Precision Stitching', 'High-Density Memory Foam Cushioning', 'UV-Resistant & Non-Fading PU Leather', 'Airbag-Compatible Side Seams'],
    specs: {
      'Material': 'High-Grade Nappa Leatherette',
      'Fitment': 'Custom Molded to Exact Car Variant',
      'Padding': '12mm High Density Memory Sponge',
      'Color Choices': 'Tan, Carbon Black, Cognac, Dual-Tone'
    },
    badge: 'LUXURY COMFORT'
  },
  {
    id: 'sound-system',
    name: 'SOUND SYSTEM',
    category: 'Audio',
    price: '₹2,000',
    priceNum: 2000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Audiophile grade coaxial and component car speakers, silk dome tweeters, and active bass subwoofers delivering crystal-clear acoustic fidelity on the road.',
    highlights: ['Deep Punchy Bass Response', 'Silk Dome Tweeters for Crisp Highs', 'Heavy-Duty Butyl Rubber Surround', 'Acoustic Door Damping Integration'],
    specs: {
      'Power Handling': 'Up to 350W Peak Power',
      'Frequency Response': '30Hz – 22kHz',
      'Configuration': '2-Way Component / 3-Way Coaxial',
      'Fitment': 'Direct OEM Door Speaker Replacement'
    },
    badge: 'ACOUSTIC STAGE'
  },
  {
    id: 'led-light',
    name: 'LED LIGHT',
    category: 'Lighting',
    price: '₹5,000',
    priceNum: 5000,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-bright high-lumens LED headlight bulbs and fog lamp projector kits engineered with razor-sharp horizon cut-off lines and pure 6000K daylight white projection.',
    highlights: ['High-Powered CSP LED Chips', 'Razor-Sharp Horizon Cut-Off Line', 'Aviation-Grade Aluminum Body + 12,000 RPM Fan', 'Plug & Play IP68 Waterproof Harness'],
    specs: {
      'Luminous Flux': 'Up to 24,000 Lumens Pair',
      'Color Temperature': '6000K Diamond Pure White',
      'Cooling': 'Active Copper Core + High Speed Fan',
      'Sockets': 'H4, H7, H11, HB3, HB4'
    },
    badge: 'NIGHT VISION'
  },
  {
    id: 'ambient-lighting',
    name: 'AMBIENT LIGHTING',
    category: 'Lighting',
    price: 'Contact for Price',
    priceNum: 0,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    description: 'Integrated stealth fiber-optic and acrylic symphony ambient lighting strips controlled via smartphone app or dashboard touch, featuring millions of colors and dynamic modes.',
    highlights: ['Stealth Seamless Acrylic Fitment', '64-Color RGB Symphony Flow Effects', 'Smartphone App & Wireless RF Controller', 'Footwell, Door Trim, & Center Console Accents'],
    specs: {
      'Zones': 'Dashboard, 4 Doors, Footwells, Console',
      'Light Source': 'High-Density Optical Strips',
      'Control': 'iOS/Android App + Wireless Key',
      'Warranty': '1 Year Replacement Warranty'
    },
    badge: 'ATMOSPHERE'
  },
  {
    id: 'car-styling',
    name: 'CAR STYLING',
    category: 'Exterior',
    price: 'Contact for Price',
    priceNum: 0,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    description: 'Complete aesthetic transformations including piano black de-chroming, aerodynamic rear spoilers, sporty diffusers, side cladding, and customized badges.',
    highlights: ['Piano Black Trim Accents', 'Aerodynamic Rear Spoilers', 'Custom Door Mouldings & Side Cladding', 'Matrix Dynamic Indicator Strips'],
    specs: {
      'Style Package': 'Customizable to Vehicle Variant',
      'Finish': 'Gloss Piano Black / Carbon Texture',
      'Installation': 'Double-Sided Automotive 3M Seal',
      'Fitment': 'Vehicle Specific Precision Moulds'
    },
    badge: 'SPORT APEX'
  },
  {
    id: 'accessory-installation',
    name: 'ACCESSORY INSTALLATION',
    category: 'Technology',
    price: 'Contact for Price',
    priceNum: 0,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    description: 'Professional zero-wire-cut installation for reverse parking cameras, dashcams, TPMS tire monitors, GPS trackers, and high-power horns.',
    highlights: ['Coupler-to-Coupler OEM Wiring', 'Zero Factory Warranty Risk', 'Concealed Cable Routing', 'Tested by Master Electricians'],
    specs: {
      'Turnaround': '30 Minutes to 2 Hours',
      'Tools Used': 'Automotive Crimping & Insulated Harnesses',
      'Warranty': 'Lifetime Workmanship Guarantee',
      'Supported Devices': 'Dashcams, TPMS, Horns, Cameras'
    },
    badge: 'PRECISION FIT'
  },
  {
    id: 'general-car-service',
    name: 'GENERAL CAR SERVICE',
    category: 'Technology',
    price: 'Contact for Price',
    priceNum: 0,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    description: 'Routine general service covering synthetic lubrication, brake overhaul, fluid flushing, battery testing, and computerized vehicle scanning.',
    highlights: ['Top-Brand Engine Lubricants', 'OE Certified Replacement Filters', 'Brake Dust Cleaning & Bleeding', 'Full Diagnostics Scan Included'],
    specs: {
      'Duration': '2 - 3 Hours',
      'Report': 'Comprehensive 45-Point Check Sheet',
      'Fluid Grade': 'Synthetic 5W-30 / 5W-40 / 0W-20',
      'Free Checks': 'Wiper fluid, tyre pressure, battery'
    },
    badge: 'ESSENTIAL CARE'
  },
  {
    id: 'repair-maintenance',
    name: 'REPAIR & MAINTENANCE',
    category: 'Technology',
    price: 'Contact for Price',
    priceNum: 0,
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    description: 'Targeted mechanical diagnostics and component replacements for suspension thuds, clutch shudder, AC cooling loss, or engine overheating.',
    highlights: ['Genuine OEM/OES Spare Parts', 'Transparent Written Estimates', 'Hydraulic Lift Bay Diagnostics', 'Road Test Confirmation'],
    specs: {
      'Diagnostics': 'OBD-II Computer Scanners',
      'Spares': 'Genuine OEM / Guaranteed OES',
      'Technicians': 'Experienced Automotive Specialists',
      'Warranty': 'Service Warranty on Repaired Components'
    },
    badge: 'MECHANICAL'
  }
];

export const WIPER_BLADES = [
  { type: 'Metal', price: '₹500', features: 'Durable galvanized steel frame, balanced pressure distribution for clear monsoon visibility.', popular: false },
  { type: 'Banana', price: '₹600', features: 'Aerodynamic frameless beam curved design, silent swipe with dual-coated silicone rubber.', popular: true },
  { type: 'Hybrid', price: '₹900', features: 'Ultimate hybrid blend: metal skeleton with aerodynamic protective polymer shell for high-speed rain clearing.', popular: false }
];

export const STYLING_SERVICES: StylingFeature[] = [
  {
    id: 'interior-styling',
    title: 'INTERIOR STYLING',
    tagline: 'Cockpit luxury tailored to your taste',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    description: 'Carbon fiber dash wraps, leather steering wheel hand-stitching, customized pillar trims, and luxury 7D floor mats.',
    tags: ['Carbon Trims', 'Nappa Leather Stitch', '7D Mats']
  },
  {
    id: 'ambient-lighting',
    title: 'AMBIENT LIGHTING',
    tagline: 'Breathtaking 64-color neon symphony',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke acrylic light guides contouring your vehicle doors, console, and footwells with dynamic sound response.',
    tags: ['64 RGB Colors', 'Smartphone App Sync', 'Stealth Strip']
  },
  {
    id: 'led-upgrades',
    title: 'LED UPGRADES',
    tagline: 'Razor-sharp road illumination',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    description: 'Transform night driving with ultra-bright projector LEDs, matrix dynamic indicators, and crisp daylight fog lamps.',
    tags: ['6000K Pure White', 'Anti-Glare Beam', 'Projector Retrofit']
  },
  {
    id: 'seat-customization',
    title: 'SEAT CUSTOMIZATION',
    tagline: 'Executive comfort & handcrafted luxury',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    description: 'Artisanal bucket seating upholstery with memory foam cushioning, diamond quilting, and contrast sport stitching.',
    tags: ['Perforated Leather', 'Ergonomic Bolsters', 'Custom Colors']
  },
  {
    id: 'audio-upgrades',
    title: 'AUDIO UPGRADES',
    tagline: 'Concert hall acoustics on four wheels',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Precision stage acoustics with tuned crossovers, multi-layer door sound dampening sheets, and dedicated active subs.',
    tags: ['Hi-Res Audio', 'Acoustic Damping', 'Punchy Bass']
  },
  {
    id: 'android-systems',
    title: 'ANDROID SYSTEMS',
    tagline: 'Next-gen connected cockpit screen',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    description: 'High-speed touch panels, navigation, wireless mirroring, HD rear cameras, and digital tire pressure monitoring integration.',
    tags: ['Apple CarPlay', 'Wireless Android Auto', 'HD IPS Display']
  },
  {
    id: 'exterior-accessories',
    title: 'EXTERIOR ACCESSORIES',
    tagline: 'Sporty silhouette and aerodynamic poise',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek door visors, side cladding, front bumper diffusers, spoiler accents, and chrome/blackout delete packages.',
    tags: ['Piano Black Accents', 'Aerodynamic Spoilers', 'Body Moldings']
  },
  {
    id: 'designer-car-accessories',
    title: 'DESIGNER CAR ACCESSORIES',
    tagline: 'Exclusive signature automotive accents',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    description: 'Curated luxury key fobs, solar aromatic diffusers, magnetic phone chargers, and ceramic body enhancement accessories.',
    tags: ['Designer Details', 'Solar Aromatics', 'Fast Charging']
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ambient-transformation',
    title: 'Ambient Lighting Upgrade',
    category: 'Lighting & Interior',
    beforeImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    description: 'From dull dim factory yellow dashboard into a futuristic 64-color neon ambient cockpit experience.'
  },
  {
    id: 'android-transformation',
    title: 'Android Infotainment Screen',
    category: 'Technology',
    beforeImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    description: 'Upgrading a small buttons-only radio console to a 10-inch IPS touchscreen with Wireless Apple CarPlay & Google Maps.'
  },
  {
    id: 'seat-transformation',
    title: 'Custom Nappa Bucket Seat Covers',
    category: 'Comfort & Upholstery',
    beforeImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    description: 'Replacing worn stock fabric with handcrafted ergonomic bucket leatherette in dual-tone sports stitching.'
  },
  {
    id: 'led-transformation',
    title: 'LED Headlight Illumination Upgrade',
    category: 'Visibility & Safety',
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    description: 'From faint yellow halogen 55W bulbs to razor-sharp 24,000 Lumens pure daylight 6000K LED projection.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Custom Android Display & Dash Trim',
    category: 'CAR ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80',
    caption: 'Clean OEM flush fitment with DSP amplifier integration'
  },
  {
    id: 'g-2',
    title: 'Neon Symphony Ambient Cockpit',
    category: 'LIGHTING',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80',
    caption: 'Multi-color acrylic stealth ambient glow in Nikol workshop'
  },
  {
    id: 'g-3',
    title: 'Acoustic Stage Sound System',
    category: 'AUDIO',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
    caption: 'Component speakers with sound damping installed'
  },
  {
    id: 'g-4',
    title: 'Bespoke Nappa Leather Bucket Seats',
    category: 'CAR INTERIORS',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80',
    caption: 'Handcrafted fitment tailored for long-distance comfort'
  },
  {
    id: 'g-5',
    title: 'Performance Workshop Service Bay',
    category: 'WORKSHOP',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80',
    caption: 'Hydraulic lift inspection and synthetic fluid renewals'
  },
  {
    id: 'g-6',
    title: 'Matrix LED Projector Headlights',
    category: 'STYLING',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
    caption: 'Aggressive electric blue halo rings with sharp beam cutoff'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Bhagy Patel',
    rating: 5,
    timeAgo: 'Local Guide • Google Verified',
    text: 'Excellent service and genuine products. Highly recommended!',
    verified: true,
    carOrService: 'Car Service & LED Lights'
  },
  {
    id: 'rev-2',
    author: 'Bhavin Trivedi',
    rating: 5,
    timeAgo: 'Google Verified Customer',
    text: 'Excellent service and genuine products. Very satisfied with the fitment and professional work.',
    verified: true,
    carOrService: 'Car Repair & Accessories'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'ShieldCheck',
    title: 'PREMIUM QUALITY',
    desc: 'Only certified, high-grade components and authentic accessories backed by genuine manufacturer warranty.'
  },
  {
    icon: 'Wrench',
    title: 'QUALITY FITMENT',
    desc: 'Precision zero-wire-cut installation by seasoned automotive technicians with OEM-spec factory finish.'
  },
  {
    icon: 'Layers',
    title: 'MODERN ACCESSORIES',
    desc: 'The latest Android touch systems, crystal LED lighting, ambient kits, and high-fidelity sound setups.'
  },
  {
    icon: 'Award',
    title: 'PROFESSIONAL SERVICE',
    desc: 'Transparent diagnostics, honest pricing, and meticulous care given to every vehicle in our Nikol facility.'
  },
  {
    icon: 'Home',
    title: 'MULTIPLE SERVICES UNDER ONE ROOF',
    desc: 'No need to visit multiple shops. Get full mechanical repairs, scheduled servicing, and custom styling in one place.'
  },
  {
    icon: 'Sparkles',
    title: 'CUSTOMIZATION OPTIONS',
    desc: 'Personalized lighting palettes, bespoke leather upholstery, and custom body accents tailored to your vision.'
  }
];

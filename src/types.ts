export interface ServiceItem {
  id: string;
  title: string;
  category: 'repair' | 'maintenance' | 'diagnostics';
  image: string;
  shortDesc: string;
  details: string[];
  duration: string;
  recommended: string;
}

export interface AccessoryItem {
  id: string;
  name: string;
  category: 'Interior' | 'Lighting' | 'Audio' | 'Technology' | 'Exterior' | 'Comfort';
  price: string;
  priceNum: number;
  image: string;
  description: string;
  highlights: string[];
  specs: { [key: string]: string };
  badge?: string;
}

export interface StylingFeature {
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  tags: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  verified: boolean;
  carOrService?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'CAR ACCESSORIES' | 'CAR INTERIORS' | 'LIGHTING' | 'AUDIO' | 'STYLING' | 'WORKSHOP';
  image: string;
  caption: string;
}

export interface BookingFormData {
  name: string;
  mobile: string;
  carBrand: string;
  carModel: string;
  carNumber: string;
  problem: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  additionalMessage: string;
}

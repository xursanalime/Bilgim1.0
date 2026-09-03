export type ThemeMode = 'light' | 'dark';

export type Language = 'uz' | 'ru' | 'en';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: 'go' | 'pro' | 'max';
  name: string;
  priceMonth: string;
  priceRaw: number;
  badge?: string;
  popular?: boolean;
  studentsLimit: string;
  coursesLimit: string;
  liveHours: string;
  recordingInfo: string;
  storageInfo: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatarText: string;
  avatarBg: string;
  date: string;
  rating: string;
  text: string;
  angleClass: string;
}

export interface ToolkitCard {
  id: string;
  stepNum: string;
  pinColor: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

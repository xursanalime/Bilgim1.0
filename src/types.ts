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

export interface UserSession {
  id: string;
  fullName: string;
  username: string;
  email?: string;
  phone?: string;
  role: 'teacher' | 'student';
  telegramConnected?: boolean;
  school?: SchoolWizardData;
  hasSetupSchool?: boolean;
  registeredAt?: string;
}

export interface SchoolWizardData {
  name: string;
  slug: string;
  field: string;
  timezone: string;
}

export interface SchoolCourse {
  id: string;
  title: string;
  description: string;
  priceMonth: string;
  priceTotal: string;
  duration: string;
  format: string;
  level: string;
  badge?: string;
  modulesCount: number;
  lessonsCount: number;
  curriculum: string[];
}

export interface SchoolTestimonial {
  id: string;
  studentName: string;
  achievement: string;
  comment: string;
  avatar: string;
  rating: number;
  date: string;
}

export interface SchoolPricingPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface SchoolLandingData {
  slug: string;
  name: string;
  tagline: string;
  field: string;
  timezone: string;
  teacherName: string;
  teacherRole: string;
  teacherBio: string;
  teacherExperience: string;
  teacherStudentsCount: string;
  teacherRating: string;
  heroPromise: string;
  heroSubtext: string;
  previewVideoTitle: string;
  forWhom: string[];
  notForWhom: string[];
  courses: SchoolCourse[];
  testimonials: SchoolTestimonial[];
  pricingPlans: SchoolPricingPlan[];
  faqs: FaqItem[];
  telegramChannel?: string;
}


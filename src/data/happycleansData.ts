export type ServiceId = 'regular' | 'deep' | 'move' | 'one-time';

export type FrequencyId = 'one-time' | 'weekly' | 'biweekly' | 'monthly';

export const BUSINESS_INFO = {
  name: 'HappyCleans of Oklahoma City',
  shortName: 'HappyCleans',
  tagline: 'Less Cleaning. More Living.',
  phoneDisplay: '(405) 353-2665',
  phoneHref: 'tel:+14053532665',
  email: 'contact@happycleans.com',
  emailHref: 'mailto:contact@happycleans.com',
  address: '6608 N Western Ave. #1034, Oklahoma City, OK 73116',
  urls: {
    home: 'https://www.happycleans.com/',
    okc: 'https://www.happycleans.com/oklahoma-city/',
    book: 'https://www.happycleans.com/book',
    faq: 'https://www.happycleans.com/faq',
  },
} as const;

export const IMAGES = {
  heroLivingRoom: '/images/hero-living-room.webp',
  serviceKitchen: '/images/service-regular-kitchen.webp',
  serviceBath: '/images/service-deep-bath.webp',
  serviceMove: '/images/service-move-interior.webp',
  editorialBedroom: '/images/editorial-bedroom.webp',
} as const;

export interface CleaningService {
  id: ServiceId;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  recommendedFrequency: FrequencyId;
  image: string;
  imageAlt: string;
  ctaLabel: string;
}

export const CLEANING_SERVICES: CleaningService[] = [
  {
    id: 'regular',
    number: '01',
    title: 'Regular Cleaning',
    subtitle: 'Routine household upkeep',
    description:
      'Keep your home consistently fresh with dependable routine cleaning. Designed for lived-in kitchens, bathrooms, bedrooms, and shared living spaces on the schedule that fits your household.',
    highlights: [
      'Kitchen counters, sink, stovetop exterior, and appliance fronts',
      'Bathroom vanities, mirrors, toilets, tubs, and shower surfaces',
      'Dusting, vacuuming, and mopping across bedrooms and living areas',
    ],
    recommendedFrequency: 'biweekly',
    image: IMAGES.serviceKitchen,
    imageAlt: 'Bright, freshly cleaned residential kitchen with honed marble island and cream cabinetry',
    ctaLabel: 'Select Regular Cleaning',
  },
  {
    id: 'deep',
    number: '02',
    title: 'Deep Cleaning',
    subtitle: 'Detail-focused reset',
    description:
      'A more thorough cleaning experience for homes needing extra attention. Ideal before starting recurring service, hosting family, or refreshing areas where everyday buildup collects.',
    highlights: [
      'Detailed attention to baseboards, trim, and high-touch fixtures',
      'Extra care around kitchen grease, tile grout, and bath buildup',
      'Available optional upgrades such as inside oven, fridge, or windows',
    ],
    recommendedFrequency: 'one-time',
    image: IMAGES.serviceBath,
    imageAlt: 'Spotless sunlit bathroom with stone vanity, folded cream towels, and fresh sage botanicals',
    ctaLabel: 'Select Deep Cleaning',
  },
  {
    id: 'move',
    number: '03',
    title: 'Move-In / Move-Out Cleaning',
    subtitle: 'Transition-ready homes',
    description:
      'Detailed cleaning tailored around moving into a new Oklahoma City home or preparing a residence for its next occupants, with empty-room focus across floors, cabinets, and fixtures.',
    highlights: [
      'Comprehensive floor-to-ceiling care for vacant homes and apartments',
      'Cabinet exteriors, closets, baseboards, and interior surfaces',
      'Helps welcome new homeowners or wrap up a lease smoothly',
    ],
    recommendedFrequency: 'one-time',
    image: IMAGES.serviceMove,
    imageAlt: 'Empty sunlit residential room with gleaming oak hardwood floors ready for move-in',
    ctaLabel: 'Select Move Cleaning',
  },
  {
    id: 'one-time',
    number: '04',
    title: 'One-Time Cleaning',
    subtitle: 'Flexible single visit',
    description:
      'A convenient standalone visit when your schedule gets busy, seasonal guests are arriving, or you simply want a professional reset without committing to a recurring plan.',
    highlights: [
      'Flat-rate pricing structured around your home size and service level',
      'Simple online scheduling without long-term contracts',
      'Easy option to transition into recurring care later if desired',
    ],
    recommendedFrequency: 'one-time',
    image: IMAGES.editorialBedroom,
    imageAlt: 'Peaceful freshly made bedroom with crisp linen bedding and warm morning light',
    ctaLabel: 'Select One-Time Cleaning',
  },
];

export const RECURRING_FREQUENCIES: {
  id: FrequencyId;
  label: string;
  description: string;
}[] = [
  {
    id: 'one-time',
    label: 'One-Time',
    description: 'Single scheduled visit with no ongoing commitment.',
  },
  {
    id: 'weekly',
    label: 'Weekly',
    description: 'Consistent weekly upkeep for busy households.',
  },
  {
    id: 'biweekly',
    label: 'Every Other Week',
    description: 'Balanced bi-weekly rhythm for steady home freshness.',
  },
  {
    id: 'monthly',
    label: 'Monthly',
    description: 'Monthly maintenance to keep everyday tasks manageable.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Book',
    description:
      'Choose the cleaning service, home details, and schedule that fit your week through HappyCleans’ online booking system.',
  },
  {
    step: '02',
    title: 'Clean',
    description:
      'A vetted, background-checked cleaning partner arrives equipped with cleaning supplies to care for your home.',
  },
  {
    step: '03',
    title: 'Relax',
    description:
      'Return to freshly cared-for rooms and enjoy your evenings and weekends—backed by HappyCleans’ satisfaction guarantee.',
  },
];

export const TRUST_BENEFITS = [
  {
    title: 'Background-Checked Cleaning Partners',
    description:
      'HappyCleans connects you with vetted professional cleaning partners who undergo background screening before taking appointments.',
  },
  {
    title: 'Insured & Bonded Company',
    description:
      'HappyCleans operates as an insured and bonded cleaning booking platform for added peace of mind in your home.',
  },
  {
    title: 'Flat-Rate Pricing',
    description:
      'Transparent flat-rate structure based on your home’s bedrooms, bathrooms, and chosen service—rather than open-ended hourly guessing.',
  },
  {
    title: 'Secure Online Payments',
    description:
      'Cashless, encrypted online payment processing means no scrambling for checks or cash on cleaning day.',
  },
  {
    title: 'Satisfaction Guarantee',
    description:
      'If something in your clean didn’t meet expectations, HappyCleans asks you to reach out promptly so the team can return and make it right.',
  },
  {
    title: 'Customer Feedback & Ratings',
    description:
      'Ongoing post-cleaning feedback helps HappyCleans keep partner quality consistent across the Oklahoma City metro.',
  },
];

export interface CustomerTestimonial {
  name: string;
  context: string;
  quote: string;
  sourceLabel: string;
  sourceUrl: string;
}

export const AUTHENTIC_TESTIMONIALS: CustomerTestimonial[] = [
  {
    name: 'Adrianna Dong',
    context: 'Published HappyCleans customer review',
    quote:
      'Shared that booking was effortless and the experience felt thoroughly professional—highlighting her cleaning partner Lori for being warm, respectful, and attentive to detail.',
    sourceLabel: 'Read published reviews on HappyCleans.com',
    sourceUrl: BUSINESS_INFO.urls.okc,
  },
  {
    name: 'Mellisa Yockey',
    context: 'Published HappyCleans customer review',
    quote:
      'Requested an appointment just a day ahead and noted that her team, Christian and Monica, arrived promptly, listened carefully to her priorities, and left her home looking great.',
    sourceLabel: 'Read published reviews on HappyCleans.com',
    sourceUrl: BUSINESS_INFO.urls.okc,
  },
  {
    name: 'Irene Khouri',
    context: 'Published HappyCleans customer review',
    quote:
      'Booked a thorough clean after purchasing a new house and appreciated both the quality of the cleanup and the team’s willingness to accommodate her preference for gentler, organic cleaning options.',
    sourceLabel: 'Read published reviews on HappyCleans.com',
    sourceUrl: BUSINESS_INFO.urls.okc,
  },
];

export const SERVICE_COMMUNITIES = [
  { name: 'Oklahoma City', note: 'Central OKC, Midtown, Plaza, Paseo & South/North OKC' },
  { name: 'Edmond', note: 'North metro & surrounding residential neighborhoods' },
  { name: 'Norman', note: 'South metro & campus-area neighborhoods' },
  { name: 'Moore', note: 'I-35 corridor between OKC and Norman' },
  { name: 'Yukon', note: 'West metro residential communities' },
  { name: 'Midwest City', note: 'East metro neighborhoods' },
  { name: 'Bethany', note: 'Northwest metro community' },
  { name: 'Nichols Hills', note: 'Inner-metro residential enclave' },
  { name: 'Mustang', note: 'Southwest metro neighborhoods' },
  { name: 'Piedmont', note: 'Northwest suburban communities' },
  { name: 'Del City', note: 'Southeast metro area' },
  { name: 'Shawnee', note: 'East corridor communities' },
];

export const KNOWN_OKC_ZIP_MAP: Record<string, string> = {
  '73102': 'Downtown Oklahoma City',
  '73103': 'Midtown / Heritage Hills, Oklahoma City',
  '73104': 'Bricktown / Deep Deuce, Oklahoma City',
  '73105': 'Lincoln Terrace / Capitol Hill North, Oklahoma City',
  '73106': 'Plaza District / Gatewood, Oklahoma City',
  '73107': 'Linwood / West OKC',
  '73110': 'Midwest City',
  '73112': 'Belle Isle / Northwest OKC',
  '73114': 'Northwest Oklahoma City',
  '73115': 'Del City',
  '73116': 'Nichols Hills / Western Ave, Oklahoma City',
  '73118': 'Paseo / Crown Heights, Oklahoma City',
  '73120': 'The Village / Quail Creek, Oklahoma City',
  '73127': 'Northwest OKC / Warr Acres',
  '73130': 'Midwest City / Choctaw West',
  '73132': 'Northwest Oklahoma City',
  '73134': 'Quail Springs / North OKC',
  '73139': 'South Oklahoma City',
  '73142': 'Northwest Oklahoma City',
  '73159': 'South Oklahoma City',
  '73160': 'Moore',
  '73162': 'Northwest Oklahoma City',
  '73170': 'South OKC / Moore Border',
  '73003': 'Edmond',
  '73008': 'Bethany',
  '73012': 'Edmond',
  '73013': 'Edmond',
  '73025': 'Edmond',
  '73034': 'Edmond',
  '73064': 'Mustang',
  '73069': 'Norman',
  '73071': 'Norman',
  '73072': 'Norman',
  '73078': 'Piedmont',
  '73099': 'Yukon',
  '74801': 'Shawnee',
  '74804': 'Shawnee',
};

export interface FaqItem {
  id: string;
  topic: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'online-booking',
    topic: 'Online Booking',
    question: 'How does HappyCleans online booking work?',
    answer:
      'You select your cleaning type, enter your home’s bedroom and bathroom count, pick a preferred date and arrival window, and complete checkout online with cashless payment. HappyCleans then matches your reservation with a vetted cleaning partner.',
  },
  {
    id: 'service-differences',
    topic: 'Service Differences',
    question: 'What is the difference between Regular, Deep, and Move-In/Move-Out cleaning?',
    answer:
      'Regular Cleaning covers routine surface upkeep across kitchens, baths, bedrooms, and living rooms. Deep Cleaning adds extra time and focus for areas with heavier buildup, baseboards, and detailed fixtures. Move-In / Move-Out Cleaning is tailored for empty residences during a move.',
  },
  {
    id: 'supplies',
    topic: 'Supplies & Equipment',
    question: 'Do I need to provide cleaning supplies or equipment?',
    answer:
      'No. Your assigned cleaning partner arrives with standard cleaning supplies and equipment needed for the visit. If you have specialty surface products or organic preferences you’d like used, you can note them during booking.',
  },
  {
    id: 'home-presence',
    topic: 'Being Home',
    question: 'Do I have to be home during my cleaning appointment?',
    answer:
      'You do not need to be home as long as clear entry instructions are provided—such as a door code, lockbox, or property management access—when you book.',
  },
  {
    id: 'recurring-cleaner',
    topic: 'Cleaner Preferences',
    question: 'Can I request the same cleaning partner for recurring visits?',
    answer:
      'HappyCleans strives to pair recurring customers with a consistent cleaning partner whenever schedules align, though exact partner assignment cannot be guaranteed on every visit due to partner availability and demand.',
  },
  {
    id: 'pricing-payments',
    topic: 'Pricing & Payments',
    question: 'How do pricing and payments work?',
    answer:
      'HappyCleans uses flat-rate pricing based primarily on home size (bedrooms and bathrooms), service level, optional add-ons, and frequency. Payments are handled cashlessly and securely online.',
  },
  {
    id: 'cancellations',
    topic: 'Cancellations',
    question: 'What is the cancellation and rescheduling policy?',
    answer:
      'Appointments canceled or rescheduled ahead of the cutoff window incur no fee. Per HappyCleans’ published policy, cancellations made after 5:00 PM the day before a scheduled cleaning are subject to a late cancellation fee.',
  },
  {
    id: 'guarantee',
    topic: 'Satisfaction Guarantee',
    question: 'What does the HappyCleans satisfaction guarantee cover?',
    answer:
      'If any part of your scheduled cleaning falls short of expectations, contact HappyCleans promptly after your visit so they can arrange for a partner to return and address the missed areas.',
  },
  {
    id: 'service-area',
    topic: 'Service Areas',
    question: 'Which Oklahoma City communities are covered?',
    answer:
      'HappyCleans serves Oklahoma City along with surrounding communities including Edmond, Norman, Moore, Yukon, Midwest City, Bethany, Nichols Hills, Mustang, Piedmont, Del City, and Shawnee. Exact address coverage is confirmed when you enter your address at HappyCleans.com/book.',
  },
];

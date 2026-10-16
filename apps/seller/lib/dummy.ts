export type ProductStatus = 'live' | 'retired' | 'draft';
export type ProductDelivery = 'protected' | 'download';

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  coverColors: [string, string];
  status: ProductStatus;
  price: number;
  views: number;
  buyers: number;
  delivery: ProductDelivery;
  revenue: number;
  publishedAt: string;
  chapters?: number;
  about?: string;
  author?: { name: string; id: string };
}

export const products: Product[] = [
  {
    id: 'quiet-engineer',
    title: 'The Quiet Engineer',
    description: 'Essays on craft, systems, and staying sane in Lagos traffic',
    category: 'Engineering',
    coverColors: ['#333749', '#262a3a'],
    status: 'live',
    price: 1800,
    views: 5214,
    buyers: 313,
    delivery: 'protected',
    revenue: 563400,
    publishedAt: '2026-04-20',
    chapters: 12,
    about:
      'Every founder building in Nigeria faces the same wall: infrastructure that works elsewhere breaks here. This book is the field guide for the 200 million people who pay in Naira, transfer via USSD, and buy on trust.',
    author: { name: 'Ada Nwosu', id: 'ada-nwosu' },
  },
  {
    id: 'naira-dust-time',
    title: 'Naira, Dust, and Time',
    description: 'A novella about Lagos and what money costs',
    category: 'Fiction',
    coverColors: ['#5c2723', '#6e3430'],
    status: 'live',
    price: 3200,
    views: 2893,
    buyers: 156,
    delivery: 'protected',
    revenue: 499200,
    publishedAt: '2026-07-01',
    chapters: 12,
    about:
      'Every founder building in Nigeria faces the same wall: infrastructure that works elsewhere breaks here. This book is the field guide for the 200 million people who pay in Naira, transfer via USSD, and buy on trust.',
    author: { name: 'Ada Nwosu', id: 'ada-nwosu' },
  },
  {
    id: 'first-draft',
    title: 'First Draft',
    description: 'How to ship your first book without perfectionism killing it',
    category: 'Self-help',
    coverColors: ['#7c7c7c', '#727272'],
    status: 'retired',
    price: 600,
    views: 1820,
    buyers: 340,
    delivery: 'download',
    revenue: 204000,
    publishedAt: '2025-11-05',
    chapters: 12,
    about:
      'Every founder building in Nigeria faces the same wall: infrastructure that works elsewhere breaks here. This book is the field guide for the 200 million people who pay in Naira, transfer via USSD, and buy on trust.',
    author: { name: 'Ada Nwosu', id: 'ada-nwosu' },
  },
  {
    id: 'become-a-billionaire',
    title: 'How to become a billionaire',
    description: 'Billionaire Mindset',
    category: 'Business',
    coverColors: ['#6b2f39', '#8a4c54'],
    status: 'live',
    price: 4000,
    views: 2,
    buyers: 0,
    delivery: 'protected',
    revenue: 0,
    publishedAt: '2026-08-25',
    chapters: 12,
    about:
      'Every founder building in Nigeria faces the same wall: infrastructure that works elsewhere breaks here. This book is the field guide for the 200 million people who pay in Naira, transfer via USSD, and buy on trust.',
    author: { name: 'Ada Nwosu', id: 'ada-nwosu' },
  },
  {
    id: 'naira-dust-time-2',
    title: 'Naira, Dust, and Time',
    description: 'A novella about Lagos and what money costs',
    category: 'Fiction',
    coverColors: ['#5c2723', '#6e3430'],
    status: 'live',
    price: 3200,
    views: 2893,
    buyers: 156,
    delivery: 'protected',
    revenue: 499200,
    publishedAt: '2026-07-01',
    chapters: 9,
    about:
      'A novella told across three timelines in Lagos, following a currency trader, a street vendor, and a returnee as their lives brush against each other over the course of one chaotic week.',
    author: { name: 'Ada Nwosu', id: 'ada-nwosu' },
  },
  {
    id: 'first-draft-2',
    title: 'First Draft',
    description: 'How to ship your first book without perfectionism killing it',
    category: 'Self-help',
    coverColors: ['#7c7c7c', '#727272'],
    status: 'retired',
    price: 600,
    views: 1820,
    buyers: 340,
    delivery: 'download',
    revenue: 204000,
    publishedAt: '2025-11-05',
    chapters: 7,
    about:
      'A short, practical guide for first-time authors stuck between an idea and a finished manuscript. Covers outlining, momentum, and the editing traps that kill most first drafts before they get to the end.',
    author: { name: 'Ada Nwosu', id: 'ada-nwosu' },
  },
  {
    id: 'building-for-nigeria-2',
    title: 'Building for Nigeria',
    description: 'A playbook for founders building in the Naira economy',
    category: 'Business',
    coverColors: ['#1a6b52', '#1a6b52dd'],
    status: 'live',
    price: 2400,
    views: 8438,
    buyers: 489,
    delivery: 'protected',
    revenue: 1171200,
    publishedAt: '2026-04-10',
    chapters: 12,
    about:
      'Every founder building in Nigeria faces the same wall: infrastructure that works elsewhere breaks here. This book is the field guide for the 200 million people who pay in Naira, transfer via USSD, and buy on trust.',
    author: { name: 'Ada Nwosu', id: 'ada-nwosu' },
  },
  {
    id: 'letters-to-a-young-writer-2',
    title: 'Letters to a Young Writer',
    description: 'On building an audience without losing your voice',
    category: 'Essays',
    coverColors: ['#a0522d', '#a0522ddd'],
    status: 'live',
    price: 1200,
    views: 3141,
    buyers: 212,
    delivery: 'download',
    revenue: 237600,
    publishedAt: '2026-03-18',
    chapters: 10,
    about:
      'A collection of letters written to a younger writer finding her way — on craft, rejection, consistency, and building an audience that cares about the work rather than the noise around it.',
    author: { name: 'Ada Nwosu', id: 'ada-nwosu' },
  },
];

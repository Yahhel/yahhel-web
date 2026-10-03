export type ContactSegment =
  'vip' | 'new' | 'active' | 'lead' | 'refunded' | 'inactive';
export type TimelineEventType = 'purchase' | 'visit' | 'ai_chat' | 'referral';

export type TimelineEvent = {
  id: string;
  type: TimelineEventType;
  label: string;
  date: string;
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  city: string | null;
  purchases: number;
  ltv: number;
  lastActive: string;
  segments: ContactSegment[];
  sinceDays: number;
  timeline: TimelineEvent[];
};

export const CONTACTS: Contact[] = [
  {
    id: '1',
    name: 'Ngozi Okafor',
    email: 'ngozi@gmail.com',
    city: 'Enugu',
    purchases: 6,
    ltv: 14400,
    lastActive: '2026-08-25',
    segments: ['vip', 'active'],
    sinceDays: 8,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '2',
    name: 'Chika Okonkwo',
    email: 'chika@fluxa.ng',
    city: 'Lagos',
    purchases: 5,
    ltv: 11200,
    lastActive: '2026-08-25',
    segments: ['vip', 'active'],
    sinceDays: 95,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '3',
    name: 'Tunde Adeyemi',
    email: 'tunde@example.com',
    city: 'Lagos',
    purchases: 4,
    ltv: 9600,
    lastActive: '2026-08-24',
    segments: ['vip', 'active'],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '4',
    name: 'Zainab Bello',
    email: 'zainab@yahoo.com',
    city: 'Kano',
    purchases: 3,
    ltv: 7200,
    lastActive: '2026-08-18',
    segments: ['active'],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '5',
    name: 'Yusuf Ibrahim',
    email: 'yusuf@tech.ng',
    city: 'Abuja',
    purchases: 2,
    ltv: 5000,
    lastActive: '2026-05-20',
    segments: ['inactive'],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '6',
    name: 'dsbsdfbs',
    email: 'iamsmizz@gmail.com',
    city: null,
    purchases: 2,
    ltv: 4200,
    lastActive: '2026-08-25',
    segments: ['new'],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '7',
    name: 'Ifeoma Nwafor',
    email: 'ifeoma@techcabal.com',
    city: 'Abuja',
    purchases: 2,
    ltv: 3600,
    lastActive: '2026-08-22',
    segments: ['new'],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '8',
    name: 'Amara Eze',
    email: 'amara@gmail.com',
    city: 'Lagos',
    purchases: 1,
    ltv: 3200,
    lastActive: '2026-08-23',
    segments: ['new'],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '9',
    name: 'Emeka Obi',
    email: 'emeka@gmail.com',
    city: 'Port Harcourt',
    purchases: 1,
    ltv: 2400,
    lastActive: '2026-08-20',
    segments: [],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '10',
    name: 'Funke Adebayo',
    email: 'funke@gmail.com',
    city: 'Ibadan',
    purchases: 1,
    ltv: 1800,
    lastActive: '2026-07-03',
    segments: [],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '11',
    name: 'Kemi Adeleke',
    email: 'kemi@fluxa.ng',
    city: 'Lagos',
    purchases: 1,
    ltv: 1200,
    lastActive: '2026-08-19',
    segments: [],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '12',
    name: 'Daniel Okafor',
    email: 'daniel@outlook.com',
    city: 'Lagos',
    purchases: 0,
    ltv: 0,
    lastActive: '2026-08-24',
    segments: ['lead'],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
  {
    id: '13',
    name: 'Bola Tinubu',
    email: 'bola@hotmail.com',
    city: 'Port Harcourt',
    purchases: 0,
    ltv: 0,
    lastActive: '2026-08-24',
    segments: ['lead'],
    sinceDays: 1,
    timeline: [
      {
        id: 't1',
        type: 'purchase',
        label: 'Purchased Building for Nigeria · ₦2,400',
        date: '2026-08-24',
      },
      {
        id: 't2',
        type: 'visit',
        label: 'Visited storefront from WhatsApp',
        date: '2026-08-24',
      },
      {
        id: 't3',
        type: 'ai_chat',
        label: 'Asked AI: "Why does USSD matter?"',
        date: '2026-08-24',
      },
      {
        id: 't4',
        type: 'purchase',
        label: 'Purchased The Quiet Engineer · ₦1,800',
        date: '2026-07-15',
      },
      {
        id: 't5',
        type: 'visit',
        label: 'Visited from Twitter',
        date: '2026-07-15',
      },
      {
        id: 't6',
        type: 'purchase',
        label: 'Purchased Letters to a Young Writer · ₦1,200',
        date: '2026-05-20',
      },
      {
        id: 't7',
        type: 'referral',
        label: 'Referred via chika-wa-8f3',
        date: '2026-08-24',
      },
    ],
  },
];

export const SEGMENT_TABS: { value: 'all' | ContactSegment; label: string }[] =
  [
    { value: 'all', label: 'All' },
    { value: 'vip', label: 'VIP' },
    { value: 'new', label: 'New this month' },
    { value: 'active', label: 'Active buyers' },
    { value: 'lead', label: 'Leads' },
    { value: 'refunded', label: 'Refunded' },
    { value: 'inactive', label: 'Inactive' },
  ];

  export function getSegmentCounts(contacts: Contact[]) {
    const counts: Record<string, number> = { all: contacts.length }
  
    for (const tab of SEGMENT_TABS) {
      if (tab.value === "all") continue
  
      const segment: ContactSegment = tab.value
      counts[segment] = contacts.filter((c) => c.segments.includes(segment)).length
    }
  
    return counts
  }
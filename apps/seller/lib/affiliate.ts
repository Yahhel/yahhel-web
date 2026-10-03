export type AffiliateLinkStatus = 'active' | 'paused';

export type AffiliateLink = {
  id: string;
  label: string;
  ref: string;
  promoter: string;
  isSelf?: boolean;
  commission: number; // percentage
  clicks: number;
  conversions: number;
  revenue: number;
  status: AffiliateLinkStatus;
};

export const AFFILIATE_LINKS: AffiliateLink[] = [
  {
    id: '1',
    label: 'Twitter launch · self-promo',
    ref: '?ref=twitter-launch',
    promoter: 'Ada Nwosu (self)',
    isSelf: true,
    commission: 0,
    clicks: 1204,
    conversions: 68,
    revenue: 163200,
    status: 'active',
  },
  {
    id: '2',
    label: 'Chika · WhatsApp launch',
    ref: '?ref=chika-wa-8f3',
    promoter: 'Chika Okonkwo',
    commission: 20,
    clicks: 842,
    conversions: 47,
    revenue: 112800,
    status: 'active',
  },
  {
    id: '3',
    label: 'Instagram launch · self-promo',
    ref: '?ref=ig-launch-9c4',
    promoter: 'Ada Nwosu (self)',
    isSelf: true,
    commission: 0,
    clicks: 680,
    conversions: 31,
    revenue: 99200,
    status: 'active',
  },
  {
    id: '4',
    label: 'TechCabal editorial · Ifeoma',
    ref: '?ref=techcabal-editorial',
    promoter: 'Ifeoma Nwafor',
    commission: 0,
    clicks: 412,
    conversions: 22,
    revenue: 52800,
    status: 'active',
  },
  {
    id: '5',
    label: 'Chika · Newsletter feature',
    ref: '?ref=chika-nl-2a1',
    promoter: 'Chika Okonkwo',
    commission: 15,
    clicks: 520,
    conversions: 28,
    revenue: 50400,
    status: 'active',
  },
  {
    id: '6',
    label: 'WhatsApp group · general',
    ref: '?ref=wa-group-3b2',
    promoter: 'Chika Okonkwo',
    commission: 10,
    clicks: 310,
    conversions: 12,
    revenue: 14400,
    status: 'paused',
  },
];

export function getAffiliateSummary(links: AffiliateLink[]) {
  const attributedRevenue = links.reduce((sum, l) => sum + l.revenue, 0);
  const commissionPaid = links.reduce(
    (sum, l) => sum + (l.revenue * l.commission) / 100,
    0,
  );
  const totalClicks = links.reduce((sum, l) => sum + l.clicks, 0);
  const totalConversions = links.reduce((sum, l) => sum + l.conversions, 0);
  const conversionRate =
    totalClicks === 0 ? 0 : (totalConversions / totalClicks) * 100;

  return {
    attributedRevenue,
    commissionPaid,
    totalClicks,
    totalConversions,
    conversionRate,
  };
}

export const SELLER_PRODUCTS = [
  {
    value: 'how-to-become-a-billionaire',
    label: 'How to become a billionaire',
  },
  { value: 'building-for-nigeria', label: 'Building for Nigeria' },
  { value: 'the-quiet-engineer', label: 'The Quiet Engineer' },
  { value: 'naira-dust-time', label: 'Naira, Dust, and Time' },
  { value: 'letters-to-a-young-writer', label: 'Letters to a Young Writer' },
];

export const ATTRIBUTION_WINDOWS = [
  { value: '7d_first', label: '7 days · First-touch' },
  { value: '30d_first', label: '30 days · First-touch (default)' },
  { value: '30d_last', label: '30 days • Last-touch (opt in)' },
] as const;

export const PRODUCT_PRICES: Record<string, number> = {
  'how-to-become-a-billionaire': 4000,
  'building-for-nigeria': 2400,
  'the-quiet-engineer': 1800,
  'naira-dust-time': 3200,
  'letters-to-a-young-writer': 1200,
};

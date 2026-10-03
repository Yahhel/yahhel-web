'use client';

import * as React from 'react';

import {
  ArrowDown,
  ArrowRight,
  Eye,
  MoveRight,
  Percent,
  ShoppingBag,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';

import { Tabs, TabsList, TabsTrigger } from '@repo/ui/components/ui/tabs';

import { logo } from '@/constants/assets.constants';
import {
  AI_CHAT_FUNNEL,
  AI_CHAT_FUNNEL_ICONS,
  AI_CHAT_SUMMARY,
  BROWSER_BREAKDOWN,
  BUYER_FUNNEL,
  CHANNEL_SOURCE,
  DEVICE_BREAKDOWN,
  SUMMARY_STATS,
  TOP_AFFILIATE_LINKS,
  TOP_LINKS,
  TOP_LOCATIONS,
  TOP_REFERRERS,
  TRAFFIC_SERIES,
  TRAFFIC_SOURCES,
  type TimeRange,
} from '@/lib/analytics';
import { formatCompactNumber, formatNaira } from '@/lib/utils';

import { BarListCard } from './bar-list-card';
import { DevicesDonut } from './devices-donut';
import { FunnelBar } from './funnel-bar';
import { StatCard } from './stat-card';
import { TrafficChart } from './traffic-chart';

const TIME_RANGES: { value: TimeRange; label: string }[] = [
  { value: '7d', label: '7d' },
  { value: '30d', label: '30d' },
  { value: '90d', label: '90d' },
  { value: 'all', label: 'All' },
];

export default function AnalyticsScreen() {
  const [range, setRange] = React.useState<TimeRange>('30d');

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif text-2xl font-semibold text-[#1D1816]">
              Analytics
            </h1>
            <p className="mt-1 text-sm text-[#766860]">
              Real-time store performance · updates every 5 min
            </p>
          </div>
          <Tabs value={range} onValueChange={(v) => setRange(v as TimeRange)}>
            <TabsList className="gap-1 rounded-lg border-[0.8px] border-[#E5E0DC99] bg-[#F3F0ED99] p-1">
              {TIME_RANGES.map((r) => (
                <TabsTrigger
                  key={r.value}
                  value={r.value}
                  className="data-[state=inactive]:text-[#766860] data-[state=inactive]:border-none data-[state=inactive]:bg-transparent px-3 py-1 text-xs data-[state=active]:bg-white! rounded-xl data-[state=active]:text-[#1D1816] data-[state=active]:shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                >
                  {r.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={Eye}
            value={formatCompactNumber(SUMMARY_STATS.visits.value)}
            label="Visits"
            sublabel="30-day total"
            change={SUMMARY_STATS.visits.change}
          />
          <StatCard
            icon={ShoppingBag}
            value={formatCompactNumber(SUMMARY_STATS.buyers.value)}
            label="Buyers"
            sublabel="Unique purchasers"
            change={SUMMARY_STATS.buyers.change}
          />
          <StatCard
            icon={Percent}
            value={`${SUMMARY_STATS.conversion.value}%`}
            label="Conversion"
            sublabel="Visitor → purchase"
            change={SUMMARY_STATS.conversion.change}
          />
          <StatCard
            icon={Wallet}
            value={formatNaira(SUMMARY_STATS.revenue.value)}
            label="Revenue"
            sublabel="Net to creator"
            change={SUMMARY_STATS.revenue.change}
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_380px]">
          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-base font-semibold text-[#1D1816]">
                  Traffic
                </h2>
                <p className="text-xs text-[#766860]">
                  Daily visits · last 30 days
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#6B5B4E]">
                <span className="flex items-center gap-1.5 text-[#1D1816] text-xs">
                  <span className="size-2.5 rounded-full bg-[#C8893A]" /> Visits
                </span>
                <span className="flex items-center gap-1.5 text-[#1D1816] text-xs">
                  <span className="size-2.5 rounded-full bg-[#1A6B52]" /> Buyers
                </span>
              </div>
            </div>
            <div className="mt-4">
              <TrafficChart data={TRAFFIC_SERIES} />
            </div>
          </div>

          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-6">
            <h2 className="font-serif text-base font-semibold text-[#1D1816] mb-1">
              Buyer Funnel
            </h2>
            <p className="text-xs text-[#766860] flex items-center gap-1">
              Storefront <ArrowRight className="size-2.5" /> Product{' '}
              <ArrowRight className="size-2.5" /> Checkout{' '}
              <ArrowRight className="size-2.5" /> Paid
            </p>
            <div className="mt-5 space-y-3">
              {BUYER_FUNNEL.map((step) => (
                <div key={step.label}>
                  <FunnelBar step={step} large />
                  {step.dropoff !== null && (
                    <p className="ml-1 mt-1.5 text-[10px] text-[#766860B2] flex items-center gap-1">
                      <ArrowDown className="size-2.5" /> {step.dropoff}%
                      drop-off
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="flex items-center gap-1.5 font-serif text-base font-semibold text-[#1D1816]">
                <Image
                  alt="logo"
                  height={15}
                  width={15}
                  src={logo}
                  style={{
                    filter:
                      'invert(50%) sepia(57%) saturate(584%) hue-rotate(352deg) brightness(89%) contrast(91%)',
                  }}
                />{' '}
                AI Chat <MoveRight /> Purchase Funnel
              </h2>
              <p className="text-xs text-[#766860]">
                Pre-purchase assistant conversion · grounded in product views &
                buyer records
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-xl bg-[#29654F1A] px-3 py-1 text-xs font-semibold text-[#29654F]">
              <TrendingUp className="size-3" /> {AI_CHAT_SUMMARY.lift}× lift
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {AI_CHAT_FUNNEL.map((step, i) => {
              return (
                <div key={step.label}>
                  <FunnelBar
                    step={{ ...step, icon: AI_CHAT_FUNNEL_ICONS[i] }}
                  />
                  {step.dropoff !== null && (
                    <p className="ml-13 flex items-center gap-x-1 mt-1 text-xs text-[#8A7B6E]">
                      <ArrowDown className="size-2.5" /> {step.dropoff}%
                      drop-off
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#F0EBE4] pt-5 sm:grid-cols-3">
            <div className="border-[0.8px] border-[#8B5CF626] bg-[#8B5CF60D] p-4 rounded-xl">
              <p className="text-[10px] uppercase tracking-wide text-[#766860]">
                Chat-assisted
              </p>
              <p className="mt-1 font-serif text-xl font-semibold text-[#1D1816]">
                {AI_CHAT_SUMMARY.chatAssistedRate}%
              </p>
              <p className="text-[10px] text-[#766860] mt-0.5">
                {AI_CHAT_SUMMARY.chatAssistedOf.count} of{' '}
                {AI_CHAT_SUMMARY.chatAssistedOf.total} chatters
              </p>
            </div>
            <div className="border-[0.8px] border-[#E5E0DC99] bg-[#F3F0ED66] p-4 rounded-xl">
              <p className="text-[10px] uppercase tracking-wide text-[#766860]">
                Without chat
              </p>
              <p className="mt-1 font-serif text-xl font-semibold text-[#1D1816]">
                {AI_CHAT_SUMMARY.withoutChatRate}%
              </p>
              <p className="text-[10px] text-[#766860] mt-0.5">
                {AI_CHAT_SUMMARY.withoutChatOf.count} of{' '}
                {AI_CHAT_SUMMARY.withoutChatOf.total} viewers
              </p>
            </div>
            <div className="border-[0.8px] border-[#29654F26] bg-[#29654F0D] p-4 rounded-xl">
              <p className="text-[10px] uppercase tracking-wide text-[#766860]">
                Chat revenue
              </p>
              <p className="mt-1 font-serif text-xl font-semibold text-[#29654F]">
                {formatNaira(AI_CHAT_SUMMARY.chatRevenue)}
              </p>
              <p className="text-[10px] text-[#766860] mt-0.5">
                attributed to assistant
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <BarListCard
            title="Traffic Sources"
            subtitle="Where visitors come from"
            items={TRAFFIC_SOURCES}
          />

          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-6">
            <h3 className="font-serif text-base font-semibold text-[#1D1816]">
              Devices
            </h3>
            <p className="mt-0.5 text-xs text-[#766860]">Browser breakdown</p>
            <div className="mt-2 flex items-center gap-4">
              <DevicesDonut data={DEVICE_BREAKDOWN} />
              <div className='mt-5 w-full'>
                <div className="space-y-1.5 text-sm w-full">
                  {DEVICE_BREAKDOWN.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between gap-6 w-full"
                    >
                      <span className="flex items-center gap-1.5 text-[#1D1816] text-xs">
                        <span
                          className="size-2.5 rounded-full"
                          style={{ backgroundColor: d.color }}
                        />{' '}
                        {d.label}
                      </span>
                      <span className="font-semibold text-xs text-[#1D1816]">
                        {d.value}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-1 border-t-[0.8px] border-[#E5E0DC99] pt-3 text-[10px] text-[#766860]">
                  {BROWSER_BREAKDOWN.map((b) => (
                    <div key={b.label} className="flex justify-between">
                      <span>{b.label}</span>
                      <span>{b.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <BarListCard
            title="Location"
            subtitle="Top 6 cities"
            barColor="#29654FB2"
            items={TOP_LOCATIONS.map((l, i) => ({
              label: l.city,
              value: l.value,
              rank: i + 1,
            }))}
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <BarListCard
            title="Channel Source"
            subtitle="UTM-tagged attribution"
            barColor="#1D1816B2"
            items={CHANNEL_SOURCE}
          />

          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-6">
            <h3 className="font-serif text-base font-semibold text-[#1D1816]">
              Top Referrers
            </h3>
            <p className="mt-0.5 text-xs text-[#766860]">
              Hostname attribution
            </p>
            <div className="mt-4.5 space-y-3">
              {TOP_REFERRERS.map((r) => (
                <div key={r.host} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-27 text-xs font-medium text-[#1D1816]">
                      {r.host}
                    </span>
                    <span className="rounded-sm bg-[#F3F0ED] px-2 py-0.5 text-[10px] text-[#766860]">
                      {r.source}
                    </span>
                  </div>
                  <div className="text-right text-xs space-x-3">
                    <span className="text-[#766860]">
                      {formatCompactNumber(r.visits)} visits
                    </span>{' '}
                    <span className="font-semibold text-[#1D1816]">
                      {formatCompactNumber(r.buyers)} buyers
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-6">
            <h3 className="font-serif text-base font-semibold text-[#1D1816]">
              Top Links
            </h3>
            <p className="mt-0.5 text-xs text-[#766860]">
              Per-product performance
            </p>
            <table className="mt-4.5 w-full text-xs">
              <thead>
                <tr className="text-left text-[10px] uppercase tracking-wide text-[#766860]">
                  <th className="pb-2 font-semibold">Product</th>
                  <th className="pb-2 font-semibold text-right">Views</th>
                  <th className="pb-2 font-semibold text-right">Conv.</th>
                  <th className="pb-2 font-semibold text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EBE4]">
                {TOP_LINKS.map((l) => (
                  <tr key={l.product}>
                    <td className="py-2.5 text-[#1D1816] font-medium">
                      {l.product}
                    </td>
                    <td className="py-2.5 text-right text-[#766860]">
                      {formatCompactNumber(l.views)}
                    </td>
                    <td className="py-2.5 text-right text-[#1D1816]">
                      {l.conversion}%
                    </td>
                    <td className="py-2.5 text-right font-semibold text-[#1D1816]">
                      {l.revenue === 0 ? '₦0' : formatNaira(l.revenue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-6">
            <h3 className="font-serif text-base font-semibold text-[#1D1816]">
              Top Affiliate Links
            </h3>
            <p className="mt-0.5 text-xs text-[#766860]">
              Commission-attributed performance
            </p>
            <table className="mt-4.5 w-full text-xs">
              <thead>
                <tr className="text-left text-[10px] uppercase tracking-wide text-[#766860]">
                  <th className="pb-2 font-semibold">Link</th>
                  <th className="pb-2 font-semibold">Promoter</th>
                  <th className="pb-2 font-semibold text-right">Conv.</th>
                  <th className="pb-2 font-semibold text-right">Commission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EBE4]">
                {TOP_AFFILIATE_LINKS.map((a) => (
                  <tr key={a.ref}>
                    <td className="py-2.5 font-mono text-[11px] text-[#1D1816]">
                      {a.ref}
                    </td>
                    <td className="py-2.5 text-[#766860]">{a.promoter}</td>
                    <td className="py-2.5 text-right text-[#1D1816]">
                      {a.conversion}%
                    </td>
                    <td className="py-2.5 text-right font-semibold text-[#1D1816]">
                      {a.commission === 0 ? '₦0' : formatNaira(a.commission)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

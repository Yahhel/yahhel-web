'use client';

import * as React from 'react';

import { Link2, Plus } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';

import { AFFILIATE_LINKS, getAffiliateSummary } from '@/lib/affiliate';
import { formatCompactNumber, formatNaira } from '@/lib/utils';

import { DataTable } from '../contacts/data-table';
import { GenerateLinkValues } from './_schema/affiliate-link.schema';
import { affiliateColumns } from './columns';
import { GenerateLinkDialog } from './generate-link.modal';

export default function AffiliateManagerScreen() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleGenerateLink = (values: GenerateLinkValues) => {
    console.log(values);
  };
  const summary = React.useMemo(() => getAffiliateSummary(AFFILIATE_LINKS), []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif text-2xl font-semibold text-[#1D1816]">
              Affiliate Manager
            </h1>
            <p className="mt-1 text-sm text-[#766860]">
              Tracking links · per-link attribution · commission up to 30%
            </p>
          </div>
          <Button
            className="h-10 gap-1.5 rounded-xl text-sm font-medium text-[#FAF8F5]"
            onClick={() => setDialogOpen(true)}
          >
            <Plus className="size-4" /> Generate link
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-5">
            <p className="font-serif text-xl font-semibold text-[#1D1816]">
              {formatNaira(summary.attributedRevenue)}
            </p>
            <p className="mt-1 text-xs text-[#766860]">Attributed revenue</p>
            <p className="mt-1.5 text-[10px] uppercase tracking-wide text-[#766860B2]">
              Gross ₦
            </p>
          </div>
          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-5">
            <p className="font-serif text-xl font-semibold text-[#1D1816]">
              {formatNaira(summary.commissionPaid)}
            </p>
            <p className="mt-1 text-xs text-[#766860]">Commission paid</p>
            <p className="mt-1.5 text-[10px] uppercase tracking-wide text-[#766860B2]">
              To promoters
            </p>
          </div>
          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-5">
            <p className="font-serif text-xl font-semibold text-[#1D1816]">
              {formatCompactNumber(summary.totalClicks)}
            </p>
            <p className="mt-1 text-xs text-[#766860]">Total clicks</p>
            <p className="mt-1.5 text-[10px] uppercase tracking-wide text-[#766860B2]">
              All links
            </p>
          </div>
          <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] bg-white p-5">
            <p className="font-serif text-xl font-semibold text-[#1D1816]">
              {formatCompactNumber(summary.totalConversions)}
            </p>
            <p className="mt-1 text-xs text-[#766860]">Conversions</p>
            <p className="mt-1.5 text-[10px] uppercase tracking-wide text-[#766860B2]">
              {summary.conversionRate.toFixed(1)}% rate
            </p>
          </div>
        </div>

        <div className="mt-6">
          <DataTable
            columns={affiliateColumns}
            data={AFFILIATE_LINKS}
            globalFilter=""
            onGlobalFilterChange={() => {}}
          />
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-[#F7F0E933] p-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)]">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#BD78281A]">
            <Link2 className="size-4 text-[#BD7828]" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#1D1816]">
              Fraud protection active
            </p>
            <p className="mt-0.5 text-xs text-[#766860]">
              Self-referral prevention · circular referral detection ·
              click-farm flagging (&gt;100 clicks/10min, 0 conversions) ·
              fake-purchase auto-pause (&gt;3 refunds/week) · commission capped
              at 30%
            </p>
          </div>
        </div>
      </div>

      <GenerateLinkDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleGenerateLink}
      />
    </div>
  );
}

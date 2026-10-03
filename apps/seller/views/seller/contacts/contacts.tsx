'use client';

import * as React from 'react';

import { Radio } from 'lucide-react';

import { cn } from '@repo/ui/lib/utils';

import {
  CONTACTS,
  type ContactSegment,
  SEGMENT_TABS,
  getSegmentCounts,
} from '@/lib/contacts';

import { contactColumns } from './columns';
import { ContactDetailSheet } from './contact-detail-sheet';
import { DataTable } from './data-table';
import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';

export default function ContactsScreen() {
  const [segment, setSegment] = React.useState<'all' | ContactSegment>('all');
  const [search, setSearch] = React.useState('');
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const counts = React.useMemo(() => getSegmentCounts(CONTACTS), []);

  const filtered = React.useMemo(() => {
    if (segment === 'all') return CONTACTS;
    return CONTACTS.filter((c) => c.segments.includes(segment));
  }, [segment]);

  const selectedContact = React.useMemo(
    () => CONTACTS.find((c) => c.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif text-2xl font-semibold text-[#1D1816]">
              Contacts
            </h1>
            <p className="mt-1 text-sm text-[#766860]">
              The buyer graph · {CONTACTS.length} unique contacts
            </p>
          </div>
          <Button className="h-10 gap-1.5 rounded-xl text-sm font-medium text-[#FAF8F5]">
            <Radio className="size-4" /> Broadcast
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {SEGMENT_TABS.map((tab) => (
            <Button
              key={tab.value}
              type="button"
              onClick={() => setSegment(tab.value)}
              className={cn(
                'h-[37.6px] gap-1.5 rounded-xl border-[0.8px] px-4 py-1.5 text-xs font-medium transition-colors',
                segment === tab.value
                  ? 'border-[#1D1816] bg-[#1D1816] text-[#FAF8F5]'
                  : 'border-[#E5E0DC99] bg-white text-[#1D1816] hover:bg-[#FAF8F5]',
              )}
            >
              {tab.label}
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[11px]',
                  segment === tab.value
                    ? 'bg-white/20 text-[#FAF8F5]'
                    : 'bg-[#F3F0ED] text-[#1D1816]',
                )}
              >
                {counts[tab.value] ?? 0}
              </span>
            </Button>
          ))}
        </div>

        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="mt-4 h-[41.6px] flex-1 rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white px-4 text-sm placeholder:text-[#9CA3AF] focus-visible:outline-none focus-visible:ring-[0.8px] focus-visible:ring-[#BD7828]"
          />

        <div className="mt-5">
          <DataTable
            columns={contactColumns}
            data={filtered}
            globalFilter={search}
            onGlobalFilterChange={setSearch}
            onRowClick={(contact) => setSelectedId(contact.id)}
          />

          <ContactDetailSheet
            contact={selectedContact}
            open={!!selectedId}
            onOpenChange={(open) => !open && setSelectedId(null)}
          />
        </div>
      </div>
    </div>
  );
}

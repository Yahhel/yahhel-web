'use client';

import * as React from 'react';

import { Mail, MessageSquare } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import { Sheet, SheetContent } from '@repo/ui/components/ui/sheet';
import { Textarea } from '@repo/ui/components/ui/textarea';

import type { Contact } from '@/lib/contacts';
import { TIMELINE_DOT_COLORS } from '@/lib/timeline-styles';
import { formatNaira } from '@/lib/utils';

function initialsOf(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

type ContactDetailSheetProps = {
  contact: Contact | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactDetailSheet({
  contact,
  open,
  onOpenChange,
}: ContactDetailSheetProps) {
  const [message, setMessage] = React.useState('');

  if (!contact) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full gap-0 p-0 sm:max-w-104.75 bg-[#FFFFFF] border-0">
        <div className="flex items-start gap-3 border-b border-[#F0EBE4] p-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F59E0B_0%,#B45309_100%)] text-base font-semibold text-white">
            {initialsOf(contact.name)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-serif text-lg font-semibold text-[#1D1816]">
              {contact.name}
            </p>
            <p className="text-xs text-[#766860]">{contact.email}</p>
            {contact.city && (
              <p className="mt-1 flex items-center gap-1 text-xs text-[#766860]">
                <span className="size-1.5 rounded-full bg-[#29654F]" />{' '}
                {contact.city} · mobile
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-[#E5E0DC99]">
          <div className="px-4 py-4 text-center">
            <p className="font-serif text-xl font-semibold text-[#1D1816]">
              {contact.purchases}
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#766860]">
              Purchases
            </p>
          </div>
          <div className="px-4 py-4 text-center">
            <p className="font-serif text-xl font-semibold text-[#1D1816]">
              {formatNaira(contact.ltv)}
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#766860]">
              LTV
            </p>
          </div>
          <div className="px-4 py-4 text-center">
            <p className="font-serif text-xl font-semibold text-[#1D1816]">
              {contact.sinceDays}
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[#766860]">
              Since
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <p className="font-serif text-xs font-semibold uppercase tracking-wide text-[#766860]">
            Timeline
          </p>
          <div className="mt-4 space-y-4">
            {contact.timeline.map((event, index) => (
              <div key={event.id} className="flex items-start gap-2.5">
                <div className="relative flex flex-col items-center">
                  <span
                    className="z-10 mt-1.5 size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: TIMELINE_DOT_COLORS[event.type] }}
                  />
                  {index !== contact.timeline.length - 1 && (
                    <span className="absolute top-4 h-full w-px bg-[#E5E0DC]" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-[#1D1816]">{event.label}</p>
                  <p className="text-[10px] text-[#766860]">
                    {formatDate(event.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-[0.8px] border-[#E5E0DC99] p-4">
          <div className="flex gap-2">
            <Button className="h-9 flex flex-1 gap-1.5">
              <Mail className="size-3.5" /> Email
            </Button>
            <Button
              variant="ghost"
              className="h-9 flex flex-1 gap-1.5 bg-[#F3F0ED] py-2.5 text-xs font-medium text-[#1D1816]"
            >
              <MessageSquare className="size-3.5" /> SMS
            </Button>
          </div>
          <Textarea
            value={message}
            placeholder="Hi Ngozi, thanks for reading..."
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
            className="mt-3 resize-none text-xs bg-[#FAF8F5] placeholder:text-[#9CA3AF]"
            autoComplete="off"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}

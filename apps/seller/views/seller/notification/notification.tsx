'use client';

import * as React from 'react';

import {
  AlertCircle,
  ArrowLeft,
  Bell,
  CheckCheck,
  Link2,
  ShoppingBag,
} from 'lucide-react';
import Link from 'next/link';

import { Tabs, TabsList, TabsTrigger } from '@repo/ui/components/ui/tabs';

import { FILTER_TABS } from '@/lib/notification-style';
import { NOTIFICATIONS } from '@/lib/notifications';

import { NotificationItem } from './notification-item';
import { Button } from '@repo/ui/components/ui/button';

export default function NotificationsScreen() {
  const [filter, setFilter] =
    React.useState<(typeof FILTER_TABS)[number]['value']>('all');

  const stats = React.useMemo(() => {
    const unread = NOTIFICATIONS.filter((n) => !n.read).length;
    const purchases = NOTIFICATIONS.filter(
      (n) => n.category === 'purchase',
    ).length;
    const affiliate = NOTIFICATIONS.filter(
      (n) => n.category === 'affiliate',
    ).length;
    return { unread, purchases, affiliate, total: NOTIFICATIONS.length };
  }, []);

  const visible =
    filter === 'all'
      ? NOTIFICATIONS
      : NOTIFICATIONS.filter((n) => n.category === filter);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="sticky top-0 z-50 w-full h-[64.8px] border-b-[0.8px] border-b-[#E5E0DC99] bg-white/95">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 h-16">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/seller"
              className="flex items-center gap-1.5 text-sm text-[#766860] hover:text-[#1F1A17]"
              >
              <ArrowLeft className="size-4" /> Dashboard
            </Link>
            <span className="text-[#76686066]">/</span>
            <span className="flex font-serif items-center gap-1.5 text-base font-semibold text-[#1D1816]">
              <Bell className="size-4 text-[#BD7828]" /> Notifications
              <span className="font-sans rounded-full bg-[#BD7828] px-2.5 py-1 text-[10px] font-medium text-white">
                {stats.unread}
              </span>
            </span>
          </div>
          <Button variant="ghost" className="flex items-center gap-1.5 text-sm text-[#766860] hover:text-[#1D1816]">
            <CheckCheck className="size-4" /> Mark all read
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            {
              icon: AlertCircle,
              value: stats.unread,
              label: 'Unread',
              iconColor: '#BD7828',
            },
            {
              icon: ShoppingBag,
              value: stats.purchases,
              label: 'Purchases',
              iconColor: '#29654F',
            },
            {
              icon: Link2,
              value: stats.affiliate,
              label: 'Affiliate',
              iconColor: '#BD7828',
            },
            {
              icon: Bell,
              value: stats.total,
              label: 'Total',
              iconColor: '#766860',
            },
          ].map(({ icon: Icon, value, label, iconColor }) => (
            <div
              key={label}
              className="rounded-xl border-[0.8px] border-[#E5E0DC] bg-white py-6 text-center shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]"
            >
              <Icon
                className="mx-auto mb-2 size-4"
                style={{ color: iconColor }}
              />
              <p className="font-serif text-lg font-semibold text-[#1D1816]">
                {value}
              </p>
              <p className="text-[10px] uppercase tracking-wide text-[#766860]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <Tabs
          value={filter}
          onValueChange={(v) => setFilter(v as typeof filter)}
          className="mt-6"
        >
          <TabsList className="flex-wrap justify-start gap-2 bg-transparent p-0">
            {FILTER_TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-xl px-4 py-1.5 text-xs  text-[#766860]"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="mt-6 space-y-4">
          {visible.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

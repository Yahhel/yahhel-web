'use client';

import { ArrowLeft, Bell, Lock, User } from 'lucide-react';
import Link from 'next/link';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs';

import { NotificationsSection } from './notification-section';
import ProfileSection from './profile-section';
import { SecuritySection } from './security-section';

export default function EditProfileScreen() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="sticky top-0 z-50 w-full h-[64.8px] border-b-[0.8px] border-b-[#E5E0DC99] bg-white/95">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 h-16">
          <Link
            href="/seller/analytics"
            className="flex items-center gap-1.5 text-sm text-[#766860] hover:text-[#1F1A17]"
          >
            <ArrowLeft className="size-4" /> Back to dashboard
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-[#1D1816]">
              Account Settings
            </h1>
            <p className="mt-1 text-sm text-[#766860]">
              Manage your profile, security, and notification preferences.
            </p>
          </div>
          <Link
            href="/seller/profile"
            className="flex items-center gap-1.5 rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white px-3.5 py-2 text-sm font-medium text-[#1D1816] hover:bg-[#FAF8F5]"
          >
            <User className="size-4" /> View public profile
          </Link>
        </div>

        <Tabs defaultValue="profile" className="mt-8">
          <div className="border-b-[0.8px] border-[#E5E0DC99]">
            <TabsList className="justify-start gap-6 bg-transparent p-0">
              <TabsTrigger
                value="profile"
                className="gap-1.5 data-[state=inactive]:bg-transparent! rounded-none border-b-[1.6px] border-b-[#BD7828]! data-[state=inactive]:border-none px-4 pb-3 data-[state=active]:text-[#BD7828] data-[state=active]:bg-transparent! data-[state=active]:shadow-none"
              >
                <User className="size-4" /> Profile
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="gap-1.5 data-[state=inactive]:bg-transparent! rounded-none border-b-[1.6px] border-b-[#BD7828]! data-[state=inactive]:border-none px-4 pb-3 data-[state=active]:text-[#BD7828] data-[state=active]:bg-transparent! data-[state=active]:shadow-none"
              >
                <Lock className="size-4" /> Security
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="gap-1.5 data-[state=inactive]:bg-transparent! rounded-none border-b-[1.6px] border-b-[#BD7828]! data-[state=inactive]:border-none px-4 pb-3 data-[state=active]:text-[#BD7828] data-[state=active]:bg-transparent! data-[state=active]:shadow-none"
              >
                <Bell className="size-4" /> Notifications
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="profile" className="mt-6 space-y-5">
            <ProfileSection />
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <SecuritySection />
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <NotificationsSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

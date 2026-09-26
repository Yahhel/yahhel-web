'use client';

import { useState } from 'react';

import { deleteCookie } from 'cookies-next';
import {
  Bell,
  BookOpen,
  ChartColumn,
  CircleUser,
  Eye,
  Link2,
  LogOut,
  Star,
  Store,
  Users,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@repo/ui/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@repo/ui/components/ui/sidebar';
import { cn } from '@repo/ui/lib/utils';
import Image from 'next/image';
import { logo } from '@/constants/assets.constants';

// import CustomModal from "@/components/custom-modal/custom-modal";

export function DashboardSidebar() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const router = useRouter();

  const studioItems = [
    {
      title: 'Analytics',
      url: '/seller/analytics',
      icon: ChartColumn,
    },
    {
      title: 'Contacts',
      url: '/seller/contacts',
      icon: Users,
    },
    {
      title: 'Wallet',
      url: '/seller/vendors',
      icon: Wallet,
    },
    {
      title: 'Products',
      url: '/seller/products',
      icon: BookOpen,
    },
    {
      title: 'Affiliate',
      url: '/seller/affilate',
      icon: Link2,
    },
    {
      title: 'Reviews',
      url: '/seller/reviews',
      icon: Star,
    },
  ];

  const creatorItems = [
    {
      title: 'Storefront Preview',
      url: '/seller/storefont',
      icon: Eye,
    },
    {
      title: 'My Profile',
      url: '/seller/profile',
      icon: CircleUser,
    },
    {
      title: 'Notifications',
      url: '/seller/notifications',
      icon: Bell,
    },
    {
      title: 'Collaboration',
      url: '/seller/collaboration',
      icon: Users,
    },
  ];

  const publicItems = [
    {
      title: 'Storefront',
      url: '/seller/storefront',
      icon: Store,
    },
  ];

  const pathname = usePathname();

  const isActive = (url: string) => {
    if (url !== '#' && pathname.startsWith(url)) return true;
    return false;
  };

  const handleLogout = () => {
    deleteCookie('access_token', { path: '/' });
    setIsLogoutModalOpen(false);
    router.replace('/signin');
  };

  return (
    <Sidebar className="px-1 border-[#E5E0DC99] border-[0.8px] bg-white">
      <SidebarHeader className="py-4 mt-2 flex flex-col justify-center">
        <div className="flex items-center gap-x-2 pl-4">
          <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-[#1D1816]">
            <Image alt="logo" src={logo} />
          </div>
          <div className="mt-1">
            <h2 className="font-serif font-semibold text-lg text-[#1D1816] leading-5">
              Pager Sell
            </h2>
            <p className="text-[11px] text-[#766860] uppercase font-normal">
              Creator Studio
            </p>
          </div>
        </div>
      </SidebarHeader>
      <div className="px-2">
        <div className="flex flex-row items-center gap-x-2 px-2 bg-[#F7F0E999] w-full h-[52.5px] rounded-xl mt-3">
          <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[linear-gradient(135deg,#F59E0B_0%,#B45309_100%)]">
            <span className="text-white text-sm font-semibold">OO</span>
          </div>
          <div className="mt-1">
            <h2 className="font-medium text-sm text-[#1D1816] leading-3">
              O.opeoluwa
            </h2>
            <p className="text-[11px] text-[#766860] lowercase font-normal">
              oopeoluwa.pager.sell
            </p>
          </div>
        </div>
      </div>
      <SidebarContent className="mt-5">
        <SidebarGroup>
          <SidebarGroupLabel className='uppercase text-[10px] text-[#766860] font-semibold'>Studio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {studioItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        `pointer-events-auto text-sm text-[#766860] hover:text-[#766860] font-medium hover:bg-[#F7F0E9]/40 h-10 rounded-xl pl-4`,
                        isActive(item.url) &&
                          'bg-[#F7F0E9] text-[#BD7828] font-medium hover:text-[BD7828]/90',
                      )}
                    >
                      <Link href={item.url}>
                        <Icon
                          className={cn(
                            'h-5 w-5',
                            isActive(item.url)
                              ? 'text-[#BD7828]'
                              : 'text-[#766860]',
                          )}
                        />
                        <span className="">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className='uppercase text-[10px] text-[#766860] font-semibold'>Creator</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenu>
                {creatorItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          `pointer-events-auto text-sm text-[#766860] hover:text-[#766860] font-medium hover:bg-[#F7F0E9]/40 h-10 rounded-xl pl-4`,
                          isActive(item.url) &&
                            'bg-[#F7F0E9] text-[#BD7828] font-medium hover:text-[BD7828]/90',
                        )}
                      >
                        <Link href={item.url}>
                          <Icon
                            className={cn(
                              'h-5 w-5',
                              isActive(item.url)
                                ? 'text-[#BD7828]'
                                : 'text-[#766860]',
                            )}
                          />
                          <span className="">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className='uppercase text-[10px] text-[#766860] font-semibold'>Public</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {publicItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        `pointer-events-auto text-sm text-[#766860] hover:text-[#766860] font-medium hover:bg-[#F7F0E9]/40 h-10 rounded-xl pl-4`,
                        isActive(item.url) &&
                          'bg-[#F7F0E9] text-[#BD7828] font-medium hover:text-[BD7828]/90',
                      )}
                    >
                      <Link href={item.url}>
                        <Icon
                          className={cn(
                            'h-5 w-5',
                            isActive(item.url)
                              ? 'text-[#BD7828]'
                              : 'text-[#766860]',
                          )}
                        />
                        <span className="">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-0 border-t border-t-[#E5E0DC99]/60">
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button
            variant="ghost"
            className="text-[#766860] text-xs font-normal px-0"
            onClick={() => setIsLogoutModalOpen(true)}
          >
            <LogOut className="w-4! h-4!" /> Sign out
          </Button>
        </div>
      </SidebarFooter>

      {/* <CustomModal
        isOpenModal={isLogoutModalOpen}
        handleCloseModal={() => setIsLogoutModalOpen(false)}
        title="Confirm Logout"
        description="Are you sure you want to log out?"
        buttonTitle="Logout"
        buttonClassName="bg-red-600 hover:bg-red-700 text-white"
        onButtonPress={handleLogout}
      /> */}
    </Sidebar>
  );
}

'use client';

import Image from 'next/image';

import { logo } from '@/constants/assets.constants';

export function AskAboutBookButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-24 right-6 z-20 flex items-center gap-2 rounded-full bg-[#BD7828] px-5 py-3 text-sm font-medium text-white hover:bg-[#A8691F] sm:bottom-10 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
    >
      <Image alt="logo" src={logo} width={15} height={15} />
      Ask about this book
    </button>
  );
}

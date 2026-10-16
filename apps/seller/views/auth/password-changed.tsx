'use client';

import { ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

const PasswordChanged = () => {
  return (
    <div className="bg-[#FAF8F5] h-dvh w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#1D1816] flex items-center justify-center">
          <Mail className="text-white" size={24} />
        </div>

        <h1 className="font-serif text-[#1D1816] font-bold text-3xl mt-4">
          Password changed!
        </h1>

        <h4 className="text-[#766860] text-base font-normal mt-1.5">
          Your password has been changed.
        </h4>

        <div className="flex items-center justify-center w-122 h-auto rounded-2xl border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D] mt-8 px-6 py-8 bg-white">
          <p className="text-[#1D1816] text-sm">
            You can now log in with your new password.
          </p>
        </div>

        <Link href="/signin" className="mt-6 flex gap-x-2 items-center">
          <ArrowLeft className="text-[#1D1816]" size={14} />
          <h3 className="text-[#1D1816] text-sm font-medium">Back to log in</h3>
        </Link>
      </div>
    </div>
  );
};

export default PasswordChanged;

'use client';

import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@repo/ui/components/ui/button';
import { FieldGroup } from '@repo/ui/components/ui/field';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@repo/ui/components/ui/input-otp';

import { toast } from "sonner"

const VerifyEmail = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/signup');
  };

  const handleResendCode = () => {
    toast("Code sent", {
      description: "Check your email for the new code.",
      classNames: {
        title: "!text-[#1D1816]",
        description: "!text-[#1D1816]",
      },
    })
  }

  return (
    <div className="bg-[#FAF8F5] h-dvh w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#1D1816] flex items-center justify-center">
          <Mail className="text-white" size={24} />
        </div>

        <h1 className="text-[#1D1816] font-bold text-3xl mt-4">
          Verify your email
        </h1>

        <h4 className="text-[#766860] text-base font-normal mt-1.5">
          We sent a code to ninjacreative_studio@gmail.com
        </h4>

        <div className="w-122 h-auto flex flex-col rounded-2xl border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D] mt-8  p-6">
          <FieldGroup className="w-full flex flex-col items-center">
            <InputOTP
              id="digits-only"
              maxLength={6}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            <Button type="submit" onClick={handleLogin} className="mt-2 w-full">
              Verify
            </Button>
          </FieldGroup>

          <Button type="button" variant="ghost" className="h-auto" onClick={handleResendCode}>
            <h3 className="text-[#766860] text-sm font-normal">
              Didn&apos;t receive the code?{' '}
              <span className="text-[#1D1816] font-medium">Resend</span>
            </h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

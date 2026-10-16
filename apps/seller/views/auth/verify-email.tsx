'use client';

import { useState } from 'react';

import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { getErrorMessage, useAuthStore } from '@repo/api';
import { useSellerVerifyEmail } from '@repo/api/seller';
import { Button } from '@repo/ui/components/ui/button';
import { FieldGroup } from '@repo/ui/components/ui/field';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@repo/ui/components/ui/input-otp';

const MAX_ATTEMPTS = 5;

const VerifyEmail = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { mutate: verifyEmail, isPending: isVerifyEmail } =
    useSellerVerifyEmail();
  const { user } = useAuthStore();

  const isLocked = attemptsLeft <= 0;
  const hasError = !!errorMessage;

  const handleLogin = () => {
    if (isLocked) return;

    verifyEmail(
      { email: user?.email ?? '', token: value },
      {
        onSuccess: () => {
          router.replace('/signin');
        },
        onError: (error) => {
          setValue('');
          const remaining = Math.max(attemptsLeft - 1, 0);

          setAttemptsLeft(remaining);
          setErrorMessage(
            remaining > 0
              ? `Invalid verification code. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`
              : 'Too many failed attempts. Request a new code to continue.',
          );
          toast.error(getErrorMessage(error));
        },
      },
    );
  };

  const handleResendCode = () => {
    toast('Code sent', {
      description: 'Check your email for the new code.',
      classNames: {
        title: '!text-[#1D1816]',
        description: '!text-[#1D1816]',
      },
    });
  };

  return (
    <div className="bg-[#FAF8F5] h-dvh w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#1D1816] flex items-center justify-center">
          <Mail className="text-white" size={24} />
        </div>

        <h1 className="font-serif text-[#1D1816] font-bold text-3xl mt-4">
          Verify your email
        </h1>

        <h4 className="text-[#766860] text-base font-normal mt-1.5">
          We sent a code to {user?.email}
        </h4>

        <div className="w-122 h-auto flex flex-col rounded-2xl border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D] mt-8  p-6">
          {errorMessage && (
            <div className="bg-[#D322221A] rounded-xl p-3 flex items-center justify-center w-full">
               <p className="text-[#D32222] text-sm" role="alert">{errorMessage}</p>
            </div>
          )}
          <FieldGroup className="w-full flex flex-col items-center mt-4">
            <InputOTP
              id="digits-only"
              maxLength={6}
              value={value}
              onChange={(v) => {
                setValue(v);
                if (errorMessage && !isLocked) setErrorMessage(null);
              }}
              disabled={isLocked || isVerifyEmail}
            >
              <InputOTPGroup>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <InputOTPSlot key={i} index={i} aria-invalid={hasError} />
                ))}
              </InputOTPGroup>
            </InputOTP>

            <Button
              type="submit"
              disabled={value.length < 6 || isVerifyEmail || isLocked}
              onClick={handleLogin}
              className="mt-2 w-full"
            >
              {isVerifyEmail ? 'Verifing...' : 'Verify'}
            </Button>
          </FieldGroup>

          <Button
            type="button"
            variant="ghost"
            className="h-auto mt-3"
            onClick={handleResendCode}
          >
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

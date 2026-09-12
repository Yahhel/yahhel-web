'use client';

import { Lock, LogIn, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@repo/ui/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@repo/ui/components/ui/field';
import { Marker, MarkerContent } from '@repo/ui/components/ui/marker';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@repo/ui/components/ui/input-group';

import { google } from '@/constants/assets.constants';
import { useRouter } from 'next/navigation';

const SignScreen = () => {
    const router = useRouter();

  const handleLogin = () => {
    router.push("/signup")
  }

  return (
    <div className="bg-[#FAF8F5] h-dvh w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#1D1816] flex items-center justify-center">
          <LogIn className="text-white" size={24} />
        </div>

        <h1 className="text-[#1D1816] font-bold text-3xl mt-4">Welcome back</h1>

        <h4 className="text-[#766860] text-base font-normal mt-1.5">
          Log in to your account
        </h4>

        <div className="w-122 h-auto flex flex-col rounded-2xl border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D] mt-8 px-6 py-8">
          <div className="flex items-center justify-center gap-x-2 h-12 rounded-[10px] border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D]">
            <Image alt="google" src={google} />
            <h3 className="text-[#1D1816] text-sm font-medium">
              Continue with Google
            </h3>
          </div>

          <Marker variant="separator" className='my-4'>
            <MarkerContent className='text-[#766860]'>OR</MarkerContent>
          </Marker>

          <FieldGroup className="w-full">
            <Field className="w-full">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <InputGroup>
                <InputGroupInput id="email" placeholder="you@example.com" />
                <InputGroupAddon align="inline-start">
                  <Mail className="text-[#766860]" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Field className="w-full">
              <FieldLabel
                htmlFor="password"
                className="flex items-center justify-between w-full"
              >
                <p>Password </p>
                <Link
                  href={'/reset-password'}
                  className="text-xs text-[#1D1816] font-normale"
                >
                  Forget Password?
                </Link>
              </FieldLabel>

              <InputGroup>
                <InputGroupInput id="password" placeholder="@#$#$%&#$" />
                <InputGroupAddon align="inline-start">
                  <Lock className="text-[#766860]" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Button type="submit" onClick={handleLogin}>Login</Button>
          </FieldGroup>
        </div>

        <Link href="/signup" className="mt-6">
          <h3 className="text-[#766860] text-sm font-normal">
            Don&apos;t have an account?{' '}
            <span className="text-[#1D1816] font-medium">Create one</span>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default SignScreen;

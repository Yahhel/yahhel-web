'use-client';

import { Lock, Mail, UserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@repo/ui/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@repo/ui/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@repo/ui/components/ui/input-group';
import { Marker, MarkerContent } from '@repo/ui/components/ui/marker';

import { google } from '@/constants/assets.constants';

const SignUp = () => {
  return (
    <div className="bg-[#FAF8F5] h-dvh w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#1D1816] flex items-center justify-center">
          <UserPlus className="text-white" size={24} />
        </div>

        <h1 className="text-[#1D1816] font-bold text-3xl mt-4">
          Create your account
        </h1>

        <h4 className="text-[#766860] text-base font-normal mt-1.5">
          Sign up to get started
        </h4>

        <div className="w-122 h-auto flex flex-col rounded-2xl border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D] mt-8 px-6 py-8">
          <div className="flex items-center justify-center gap-x-2 h-12 rounded-[10px] border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D]">
            <Image alt="google" src={google} />
            <h3 className="text-[#1D1816] text-sm font-medium">
              Continue with Google
            </h3>
          </div>

          <Marker variant="separator" className="my-4">
            <MarkerContent className="text-[#766860]">OR</MarkerContent>
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
                Password
              </FieldLabel>

              <InputGroup>
                <InputGroupInput id="password" placeholder="@#$#$%&#$" />
                <InputGroupAddon align="inline-start">
                  <Lock className="text-[#766860]" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Field className="w-full">
              <FieldLabel
                htmlFor="cpassword"
                className="flex items-center justify-between w-full"
              >
                Confirm Password
              </FieldLabel>

              <InputGroup>
                <InputGroupInput id="cpassword" placeholder="@#$#$%&#$" />
                <InputGroupAddon align="inline-start">
                  <Lock className="text-[#766860]" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Button type="submit">Create account</Button>
          </FieldGroup>
        </div>

        <Link href="/signin" className="mt-6">
          <h3 className="text-[#766860] text-sm font-normal">
            Already have an account?{' '}
            <span className="text-[#1D1816] font-medium">Log in</span>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

'use client';

import { Lock, Mail, UserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@repo/ui/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@repo/ui/components/ui/input-group';
import { Marker, MarkerContent } from '@repo/ui/components/ui/marker';

import { google } from '@/constants/assets.constants';

import { SignupFormInput, SignupSchema } from './_schema/signup.schema';

const SignUp = () => {
  const form = useForm<SignupFormInput>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(data: SignupFormInput) {
    console.log(data);
  }

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

          <form id="form-signup" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="w-full">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full" data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="email"
                        placeholder="you@example.com"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                      />
                      <InputGroupAddon align="inline-start">
                        <Mail className="text-[#766860]" />
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full" data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="password"
                      className="flex items-center justify-between w-full"
                    >
                      Password
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="password"
                        placeholder="@#$#$%&#$"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                      />
                      <InputGroupAddon align="inline-start">
                        <Lock className="text-[#766860]" />
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full">
                    <FieldLabel
                      htmlFor="cpassword"
                      className="flex items-center justify-between w-full"
                    >
                      Confirm Password
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="cpassword"
                        placeholder="@#$#$%&#$"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                      />
                      <InputGroupAddon align="inline-start">
                        <Lock className="text-[#766860]" />
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button type="submit" form="form-signup">
                Create account
              </Button>
            </FieldGroup>
          </form>
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

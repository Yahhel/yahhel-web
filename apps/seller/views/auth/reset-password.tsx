'use client';

import { ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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

import {
  ResetPasswordFormInput,
  ResetPasswordFormSchema,
} from './_schema/reset-password.schema';

const ResetPassword = () => {
  const router = useRouter();

  const form = useForm<ResetPasswordFormInput>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: ResetPasswordFormInput) {
    console.log(data);
    router.push("/verify-email")
  }

  return (
    <div className="bg-[#FAF8F5] h-dvh w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#1D1816] flex items-center justify-center">
          <Mail className="text-white" size={24} />
        </div>

        <h1 className="text-[#1D1816] font-bold text-3xl mt-4">
          Reset password
        </h1>

        <h4 className="text-[#766860] text-base font-normal mt-1.5">
          We&apos;ll send you a link to reset it
        </h4>

        <div className="w-122 h-auto flex flex-col rounded-2xl border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D] mt-8  px-6 py-12">
          <form id="form-reset-password" onSubmit={form.handleSubmit(onSubmit)}>
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
              <Button type="submit" form="form-reset-password">
                Send reset link
              </Button>
            </FieldGroup>
          </form>
        </div>

        <Link href="/signin" className="mt-6 flex gap-x-2 items-center">
          <ArrowLeft className="text-[#1D1816]" size={14} />
          <h3 className="text-[#1D1816] text-sm font-medium">Back to log in</h3>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;

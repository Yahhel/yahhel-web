'use client';

import * as React from 'react';

import { Key, LogOut, Mail, Shield, Smartphone } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldError } from '@repo/ui/components/ui/field';
import {
  InputGroup,
  InputGroupInput,
} from '@repo/ui/components/ui/input-group';
import { Switch } from '@repo/ui/components/ui/switch';
import { cn } from '@repo/ui/lib/utils';

import {
  type ChangeEmailValues,
  type ChangePasswordValues,
  changeEmailSchema,
  changePasswordSchema,
} from '../_schema/security.schema';
import { Button } from '@repo/ui/components/ui/button';

const CURRENT_EMAIL = 'iamsmizz@gmail.com';

const focusRing =
  'has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]';

export function SecuritySection() {
  const [twoFactor, setTwoFactor] = React.useState(false);

  const passwordForm = useForm<ChangePasswordValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const emailForm = useForm<ChangeEmailValues>({
    resolver: zodResolver(changeEmailSchema),
    defaultValues: { newEmail: '' },
  });

  const onChangePassword = (values: ChangePasswordValues) => {};

  const onChangeEmail = (values: ChangeEmailValues) => {};

  return (
    <div className="space-y-5">
      <form
        onSubmit={passwordForm.handleSubmit(onChangePassword)}
        className="rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]"
      >
        <h2 className="flex items-center gap-2 font-serif text-base font-semibold text-[#1F1A17]">
          <Key className="size-4" /> Change Password
        </h2>
        <p className="mt-1 text-xs text-[#766860]">
          Use a strong, unique password you don&apos;t reuse elsewhere.
        </p>

        <div className="mt-4 space-y-4">
          <Controller
            name="currentPassword"
            control={passwordForm.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                  <InputGroupInput
                    {...field}
                    type="password"
                    placeholder="Current password"
                    aria-invalid={fieldState.invalid}
                    autoComplete="current-password"
                  />
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Controller
              name="newPassword"
              control={passwordForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                    <InputGroupInput
                      {...field}
                      type="password"
                      placeholder="New password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="confirmPassword"
              control={passwordForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                    <InputGroupInput
                      {...field}
                      type="password"
                      placeholder="Confirm new password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={passwordForm.formState.isSubmitting}
          className="mt-5 rounded-xl px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50 h-10"
        >
          Update password
        </Button>
      </form>

      <form
        onSubmit={emailForm.handleSubmit(onChangeEmail)}
        className="rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]"
      >
        <h2 className="flex items-center gap-2 font-serif text-base font-semibold text-[#1D1816]">
          <Mail className="size-4" /> Change Email Address
        </h2>
        <p className="mt-1 text-sm text-[#766860]">
          Current: <span className="text-[#1D1816]">{CURRENT_EMAIL}</span>
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Controller
            name="newEmail"
            control={emailForm.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="flex-1">
                <InputGroup className={cn('bg-[#FAF8F5]', focusRing)}>
                  <InputGroupInput
                    {...field}
                    type="email"
                    placeholder="new-email@example.com"
                    aria-invalid={fieldState.invalid}
                    autoComplete="email"
                  />
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button
            type="submit"
            disabled={emailForm.formState.isSubmitting}
            className="shrink-0 rounded-xl px-5 text-sm font-medium text-white disabled:opacity-50 h-11"
          >
            Send verification
          </Button>
        </div>
      </form>

      <div className="flex items-start justify-between rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#F7F0E9]">
            <Shield className="size-4 text-[#BD7828]" />
          </div>
          <div>
            <h2 className="font-serif text-base font-semibold text-[#1F1A17]">
              Two-Factor Authentication
            </h2>
            <p className="mt-1 max-w-md text-xs text-[#766860]">
              Add a second step at login using an authenticator app. Recommended
              for accounts handling payouts.
            </p>
          </div>
        </div>
        <Switch
          checked={twoFactor}
          onCheckedChange={setTwoFactor}
          aria-label="Toggle two-factor authentication"
          className='data-[state=checked]:bg-[#29654F]'
        />
      </div>

      <div className="rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(0,0,0,0.08),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
        <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-[#1D1816]">
          <Smartphone className="size-4" /> Active Sessions
        </h2>

        <div className="mt-4 flex items-center justify-between pb-4">
          <div className="flex items-center gap-3">
            <Smartphone className="size-4 text-[#766860]" />
            <div>
              <p className="text-sm font-medium text-[#1D1816]">
                This device · Lagos, NG
              </p>
              <p className="text-[11px] text-[#766860]">Current session</p>
            </div>
          </div>
          <span className="rounded-full bg-[#29654F1A] px-2.5 py-1 text-[10px] font-medium text-[#29654F]">
            Active
          </span>
        </div>

        <Button
          type="button"
          variant="ghost"
          className="p-0! h-auto w-fit mt-4 flex items-center gap-1.5 text-sm text-[#D32222]"
        >
          <LogOut className="size-3.5" /> <span className='font-normal!'>Sign out of all devices</span>
        </Button>
      </div>
    </div>
  );
}

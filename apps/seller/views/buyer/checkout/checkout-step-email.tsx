'use client';

import { ArrowRight } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  InputGroup,
  InputGroupInput,
} from '@repo/ui/components/ui/input-group';

import { Field, FieldError, FieldLabel } from '@repo/ui/components/ui/field';
import {
  type CheckoutEmailValues,
  checkoutEmailSchema,
} from './_schema/checkout.schema';
import { Button } from '@repo/ui/components/ui/button';

export function CheckoutStepEmail({
  defaultValues,
  onNext,
}: {
  defaultValues?: Partial<CheckoutEmailValues>;
  onNext: (values: CheckoutEmailValues) => void;
}) {
  const form = useForm<CheckoutEmailValues>({
    resolver: zodResolver(checkoutEmailSchema),
    defaultValues: {
      fullName: defaultValues?.fullName ?? '',
      email: defaultValues?.email ?? '',
    },
  });

  return (
    <div className="px-6 pb-6">
      <h2 className="font-serif text-base font-semibold text-[#1D1816]">
        Where should we send your access?
      </h2>
      <p className="mt-1 text-xs text-[#766860]">
        Your purchase link and receipt go to this email. No account needed.
      </p>

      <form onSubmit={form.handleSubmit(onNext)} className="mt-5 space-y-4">
        <Controller
          name="fullName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="fullName" className='text-[#766860] text-xs font-medium'>Full name</FieldLabel>
              <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                <InputGroupInput
                  {...field}
                  id="fullName"
                  placeholder="Chika Okonkwo"
                  aria-invalid={fieldState.invalid}
                />
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email" className='text-[#766860] text-xs font-medium'>Email address</FieldLabel>
              <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                <InputGroupInput
                  {...field}
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  aria-invalid={fieldState.invalid}
                />
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button
          type="submit"
          className="w-full gap-1.5 rounded-lg"
        >
          Continue to payment <ArrowRight className="size-4" />
        </Button>
      </form>
    </div>
  );
}

'use client';

import { Lock, UserPlus } from 'lucide-react';
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

import { ComfirmPasswordInput, ComfirmPasswordSchema } from './_schema/change-password';

const ChangePasswordScreen = () => {
  const router = useRouter()
  const form = useForm<ComfirmPasswordInput>({
    resolver: zodResolver(ComfirmPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(data: ComfirmPasswordInput) {
    router.replace("/signin")
  }

  return (
    <div className="bg-[#FAF8F5] h-dvh w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#1D1816] flex items-center justify-center">
          <UserPlus className="text-white" size={24} />
        </div>

        <h1 className="text-[#1D1816] font-bold text-3xl mt-4">
          Create new password
        </h1>

        <h4 className="text-[#766860] text-base font-normal mt-1.5">
            Input your new password
        </h4>

        <div className="w-122 h-auto flex flex-col rounded-2xl border border-[#E5E0DC] shadow-[0px_1px_2px_0px_#0000000D] mt-8 px-6 py-8">
          <form id="form-signup" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="w-full">
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full" data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="password"
                      className="flex items-center justify-between w-full"
                    >
                      New password
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="password"
                        placeholder="••••••••"
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
                      Confirm new password
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="cpassword"
                        placeholder="••••••••"
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
                Reset Password
              </Button>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordScreen;

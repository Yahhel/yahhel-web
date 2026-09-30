import React from 'react';

import { Mail, Phone } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@repo/ui/components/ui/field';
import {
  InputGroup,
  InputGroupInput,
} from '@repo/ui/components/ui/input-group';
import { Textarea } from '@repo/ui/components/ui/textarea';

import {
  type EditProfileFormValues,
  editProfileSchema,
} from '../_schema/edit-profile';
import { AvatarUpload } from '../avatar-upload';

const CURRENT_EMAIL = 'iamsmizz@gmail.com';

const ProfileSection = () => {
  const [photo, setPhoto] = React.useState<File | null>(null);

  const form = useForm<EditProfileFormValues>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      fullName: 'Ogunmodede Opeoluwa Samuel',
      phone: '08137650960',
      bio: '',
    },
  });

  const onSubmit = (values: EditProfileFormValues) => {};

  return (
    <>
      <div className="rounded-xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A]">
        <h2 className="font-serif text-lg font-semibold text-[#1F1A17]">
          Profile Photo
        </h2>
        <div className="mt-4 flex items-center gap-4">
          <AvatarUpload
            id="avatar"
            initials="OO"
            value={photo}
            onChange={setPhoto}
          />
          <div>
            <p className="text-sm font-medium text-[#1D1816]">Upload a photo</p>
            <p className="text-xs text-[#766860]">
              JPG or PNG. Recommended 400×400px.
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white p-6 shadow-[0px_8px_24px_-12px_#00000014,0px_1px_3px_0px_#0000000A]"
      >
        <h2 className="font-serif text-base font-semibold text-[#1D1816]">
          Personal Information
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="fullName"
                  className="text-[#766860] text-xs uppercase font-medium"
                >
                  Full Name
                </FieldLabel>
                <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                  <InputGroupInput
                    {...field}
                    id="fullName"
                    aria-invalid={fieldState.invalid}
                    autoComplete="name"
                  />
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Field>
            <FieldLabel
              htmlFor="email"
              className="gap-1.5 text-[#766860] text-xs uppercase font-medium"
            >
              <Mail className="size-3.5" /> Email
            </FieldLabel>
            <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
              <InputGroupInput id="email" value={CURRENT_EMAIL} disabled />
            </InputGroup>
            <FieldDescription className="text-[10px] text-[#766860]">
              Email changes are managed under the Security tab.
            </FieldDescription>
          </Field>

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="phone"
                  className="gap-1.5 text-[#766860] text-xs uppercase font-medium"
                >
                  <Phone className="size-3.5" /> Phone
                </FieldLabel>
                <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                  <InputGroupInput
                    {...field}
                    type="tel"
                    id="phone"
                    placeholder="0800 000 0000"
                    aria-invalid={fieldState.invalid}
                    autoComplete="tel"
                  />
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <div className="mt-5">
          <Controller
            name="bio"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="bio"
                  className="text-[#766860] text-xs uppercase font-medium"
                >
                  Bio
                </FieldLabel>
                <Textarea
                  {...field}
                  id="bio"
                  placeholder="Tell readers a little about yourself..."
                  aria-invalid={fieldState.invalid}
                  className="min-h-[81.6px] border-[0.8px] border-[#E5E0DC99] resize-none bg-[#FAF8F5] placeholder:text-muted-foreground focus-visible:border-[#BD7828] focus-visible:ring-[1px] focus-visible:ring-[#BD7828] focus-visible:shadow-[0px_0px_4px_0px_#BD78285C]"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <button
          type="submit"
          className="mt-6 rounded-lg bg-[#1F1A17] px-5 py-2.5 text-sm font-medium text-white"
        >
          Save changes
        </button>
      </form>
    </>
  );
};

export default ProfileSection;

import React from 'react';

import {
  FileText,
  FileUp,
  ImageIcon,
  Palette,
  Plus,
  Upload,
} from 'lucide-react';
import Image from 'next/image';

import { Button } from '@repo/ui/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@repo/ui/components/ui/dialog';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@repo/ui/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@repo/ui/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/ui/select';
import { Textarea } from '@repo/ui/components/ui/textarea';
import { cn } from '@repo/ui/lib/utils';

import { ai } from '@/constants/assets.constants';
import {
  COVER_COLORS,
  DELIVERY_OPTIONS,
  STATUS_OPTIONS,
  getCoverGradient,
} from '@/utils/utils';

import { FileUpload } from './file-upload';
import { ProductPreview } from './product-preview';

interface AddProductProps {
  open: boolean;
  onClose: () => void;
}

const AddProduct = ({ open, onClose }: AddProductProps) => {
  const [bookFile, setBookFile] = React.useState<File | null>(null);
  const [cover, setCover] = React.useState<File | null>(null);
  const [status, setStatus] = React.useState<'draft' | 'published'>('draft');
  const [coverColor, setCoverColor] = React.useState<string>(
    COVER_COLORS[0].value,
  );
  const [delivery, setDelivery] = React.useState<'protected' | 'download'>(
    'protected',
  );

  const countries = [
    { label: 'United State', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Canada', value: 'ca' },
  ];
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <form>
        <DialogContent className="sm:max-w-160 h-181 bg-white p-0 rounded-[20px] border-0 shadow-none">
          <DialogHeader className="h-17.25 border-b-[0.8px] border-[#E5E0DC99] px-6">
            <div className="flex flex-row items-center h-full gap-x-2.5">
              <div className="h-8 w-8 bg-[#F7F0E9] rounded-xl flex items-center justify-center">
                <Plus className="text-[#BD7828]" size={16} />
              </div>
              <div>
                <DialogTitle className="font-serif text-sm text-[#1D1816] font-semibold leading-tight">
                  New Product
                </DialogTitle>
                <DialogDescription className="test-[11px] text-[#766860] font-normal">
                  Add a title to your storefront
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <FieldGroup className="px-6 z-[999px] mt-5 overflow-auto h-140.5 pb-12">
            <ProductPreview
              cover={cover}
              color={coverColor}
              protectedMode={delivery === 'protected'}
            />
            <Field>
              <FieldLabel htmlFor="name-1">
                Title<span className="text-destructive">*</span>
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  type="text"
                  id="password"
                  placeholder="The Founder's Playbook"
                />
              </InputGroup>
            </Field>

            <Field>
              <FieldLabel htmlFor="name-1">Subtitle</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  type="text"
                  id="password"
                  placeholder="A field guide to building in Lagos"
                />
              </InputGroup>
            </Field>

            <Field>
              <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="input-group-url"
                  placeholder="example.com"
                />
                <InputGroupAddon>
                  <InputGroupText className="text-[#766860]">
                    /store/
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <div className="grid grid-cols-3 gap-4">
              <Field>
                <FieldLabel htmlFor="name-1">
                  Price (₦)<span className="text-destructive">*</span>
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    type="text"
                    id="password"
                    placeholder="7500"
                  />
                  <InputGroupAddon>
                    <InputGroupText className="text-[#766860]">
                      ₦
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="form-country">Country</FieldLabel>
                <Select items={countries}>
                  <SelectTrigger id="form-country">
                    <SelectValue
                      placeholder="Select category"
                      className="placeholder:text-red-900"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="name-1">Chapters</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    type="number"
                    id="chapters"
                    placeholder="1"
                  />
                </InputGroup>
              </Field>
            </div>

            <Field>
              <FieldLabel
                htmlFor="book-file"
                className="gap-1.5 text-[#766860] text-xs font-medium"
              >
                <FileText className="size-3.5" /> Upload Book/File
              </FieldLabel>
              <FileUpload
                id="book-file"
                icon={FileUp}
                title="Upload book file"
                hint="Supported files: pdf, doc, docx"
                accept=".pdf,.doc,.docx"
                value={bookFile}
                onChange={setBookFile}
              />
            </Field>

            <Field>
              <FieldLabel
                htmlFor="cover-image"
                className="gap-1.5 text-[#766860] text-xs font-medium"
              >
                <ImageIcon className="size-3.5" /> Cover
              </FieldLabel>
              <FileUpload
                id="cover-image"
                icon={Upload}
                title="Upload cover image"
                accept="image/*"
                preview
                value={cover}
                onChange={setCover}
              />
            </Field>

            <Field className="mt-2">
              <FieldLabel className="gap-1.5 text-[#766860] text-xs font-medium">
                <Palette className="size-3.5" /> Cover color
              </FieldLabel>
              <div
                role="radiogroup"
                aria-label="Cover color"
                className="flex flex-wrap gap-3 mt-2"
              >
                {COVER_COLORS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    role="radio"
                    aria-checked={coverColor === c.value}
                    aria-label={c.name}
                    onClick={() => setCoverColor(c.value)}
                    disabled={!!cover}
                    style={{ backgroundImage: getCoverGradient(c.value) }}
                    className={cn(
                      'size-10 rounded-lg outline-none transition-shadow focus-visible:ring-[3px] focus-visible:ring-ring/50',
                      coverColor === c.value &&
                        'ring-2 ring-[#C8873A] ring-offset-2 ring-offset-background',
                      cover && 'cursor-not-allowed opacity-40',
                    )}
                  />
                ))}
              </div>
            </Field>

            <Field>
              <FieldLabel htmlFor="sales-copy" className="gap-1.5 text-[#766860] text-xs">
                <FileText className="size-3.5" /> Sales copy
              </FieldLabel>
              <Textarea
                id="sales-copy"
                placeholder="Tell readers what they'll learn and why it matters. One paragraph per line."
                className="min-h-30.25 resize-none"
              />
              <FieldDescription className="text-[10px] text-[#766860]">
                Shown on the product page. Separate paragraphs with line breaks.
              </FieldDescription>
            </Field>

            <Field className="mt-3">
              <FieldLabel className="text-[#766860] text-xs font-medium">
                Delivery mode
              </FieldLabel>
              <div
                role="radiogroup"
                aria-label="Delivery mode"
                className="grid grid-cols-2 gap-3"
              >
                {DELIVERY_OPTIONS.map(({ value, icon: Icon, title, desc }) => (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={delivery === value}
                    onClick={() => setDelivery(value)}
                    className={cn(
                      'flex flex-col items-start gap-1.5 rounded-xl border border-[#E5E0DC] bg-transparent text-[#6B5B4E] hover:bg-[#FAF8F5] p-3 text-left outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-[#BD78284D]/50',
                      delivery === value &&
                        'border-[#BD7828] bg-[#F7F0E980] text-[#3A2F27]',
                    )}
                  >
                    <Icon
                      className={cn(
                        'size-4',
                        delivery === value
                          ? 'text-[#BD7828]'
                          : 'text-[#766860]',
                      )}
                    />
                    <span className="text-sm font-medium text-[#1D1816]">
                      {title}
                    </span>
                    <span className="text-[11px] text-[#766860]">{desc}</span>
                  </button>
                ))}
              </div>
            </Field>

            <Field className="mt-2">
              <FieldLabel className="text-[#766860] text-xs font-medium">
                Publish status
              </FieldLabel>
              <div
                role="radiogroup"
                aria-label="Publish status"
                className="grid grid-cols-2 gap-3"
              >
                {STATUS_OPTIONS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={status === value}
                    onClick={() => setStatus(value)}
                    className={cn(
                      'h-10 rounded-xl border-[0.8px] border-[#E5E0DC99] bg-transparent text-[#766860] hover:bg-[#F7F0E980] text-sm font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50',
                      status === value &&
                        'border-[#BD7828] bg-[#F7F0E980] text-[#BD7828]',
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Field>
          </FieldGroup>
          <DialogFooter className="h-[72.8px] px-6 flex flex-col items-center rounded-b-[20px] bg-[#F3F0ED33] border-t border-[#E5E0DC99]  absolute bottom-0 w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row gap-x-1">
                <Image alt="ai" src={ai} />
                <p className="text-[11px] text-[#766860]">
                  Slug auto-generated from title
                </p>
              </div>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  className="h-10 rounded-xl text-sm font-medium text-[#766860]"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button className="h-10 rounded-xl bg-[#1D1816] text-sm font-medium text-[#FAF8F5]">
                  <Plus /> Publish Product
                </Button>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddProduct;

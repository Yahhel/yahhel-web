'use client';

import { Controller, useForm, useWatch } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@repo/ui/components/ui/dialog';
import { Field, FieldError, FieldLabel } from '@repo/ui/components/ui/field';
import {
  InputGroup,
  InputGroupInput,
} from '@repo/ui/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/ui/select';
import { Slider } from '@repo/ui/components/ui/slider';

import {
  ATTRIBUTION_WINDOWS,
  PRODUCT_PRICES,
  SELLER_PRODUCTS,
} from '@/lib/affiliate';
import { formatNaira } from '@/lib/utils';

import {
  type GenerateLinkValues,
  generateLinkSchema,
} from './_schema/affiliate-link.schema';
import { Button } from '@repo/ui/components/ui/button';

type GenerateLinkDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: GenerateLinkValues) => void;
};

export function GenerateLinkDialog({
  open,
  onOpenChange,
  onSubmit,
}: GenerateLinkDialogProps) {
  const form = useForm<GenerateLinkValues>({
    resolver: zodResolver(generateLinkSchema),
    defaultValues: {
      productId: SELLER_PRODUCTS[0].value,
      label: '',
      promoterEmail: '',
      promoterName: '',
      commission: 20,
      attributionWindow: '30d_first',
    },
  });

  const [productId, commission] = useWatch({
    control: form.control,
    name: ['productId', 'commission'],
  });

  const price = PRODUCT_PRICES[productId] ?? 0;
  // "after fees" — assuming a flat platform fee, adjust to your real fee structure
  const afterFees = Math.round(price * 0.95);
  const promoterEarns = Math.round((afterFees * commission) / 100);
  const sellerEarns = afterFees - promoterEarns;

  const handleSubmit = (values: GenerateLinkValues) => {
    onSubmit(values);
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg h-181 bg-white p-0 rounded-[20px] border-0 shadow-none">
        <DialogHeader className="flex items-start justify-center h-17.25 border-b-[0.8px] border-[#E5E0DC99] px-6">
          <DialogTitle className="font-serif text-lg font-semibold text-[#1D1816]">
            Generate an affiliate link
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-5 pt-2 px-6"
        >
          <Controller
            name="productId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="product" className='text-[#766860]'>Product</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="product"
                    className="resize-none rounded-xl border-[0.8px] border-[#E5E0DC99] bg-[#FAF8F5] text-sm placeholder:text-muted-foreground"
                  >
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {SELLER_PRODUCTS.map((p) => (
                        <SelectItem key={p.value} value={p.value}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="label"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="label" className='text-[#766860]'>
                  Label{' '}
                  <span className="font-normal text-[#8A7B6E]">
                    (private — only you see this)
                  </span>
                </FieldLabel>
                <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                  <InputGroupInput
                    {...field}
                    type="text"
                    id="label"
                    placeholder="Chika · WhatsApp launch"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
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
              name="promoterEmail"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="promoterEmail" className='text-[#766860]'>
                    Promoter email
                  </FieldLabel>
                  <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                    <InputGroupInput
                      {...field}
                      id="promoterEmail"
                      type="email"
                      placeholder="chika@fluxa.ng"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="promoterName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="promoterName" className='text-[#766860]'>Their name</FieldLabel>
                  <InputGroup className="bg-[#FAF8F5] has-[[data-slot=input-group-control]:focus-visible]:border has-[[data-slot=input-group-control]:focus-visible]:ring-[1px] has-[[data-slot=input-group-control]:focus-visible]:ring-[#BD7828] has-[[data-slot=input-group-control]:focus-visible]:shadow-[0px_0px_4px_0px_#BD78285C]">
                    <InputGroupInput
                      {...field}
                      id="promoterName"
                      placeholder="Chika Okonkwo"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="commission"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className='text-[#766860]'>Commission</FieldLabel>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[field.value]}
                    onValueChange={([v]) => field.onChange(v)}
                    min={0}
                    max={30}
                    step={1}
                    className="flex-1  **:data-[slot=slider-range]:bg-[#BD7828] **:data-[slot=slider-thumb]:border-[#BD7828] h-4"
                  />
                  <span className="w-10 shrink-0 text-right text-sm font-semibold text-[#1D1816]">
                    {field.value}%
                  </span>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="rounded-xl bg-[#F3F0ED66] px-4 py-3 text-xs text-[#766860]">
            Per {formatNaira(price)} sale (after fees): Ada earns{' '}
            <span className="font-semibold text-[#1D1816]">
              {formatNaira(sellerEarns)}
            </span>{' '}
            · Promoter earns{' '}
            <span className="font-semibold text-[#BD7828]">
              {formatNaira(promoterEarns)}
            </span>
          </div>

          <Controller
            name="attributionWindow"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="attributionWindow" className='text-[#766860]'>
                  Attribution window
                </FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="attributionWindow"
                    className="resize-none rounded-xl border-[0.8px] border-[#E5E0DC99] bg-[#FAF8F5] text-sm placeholder:text-muted-foreground"
                  >
                    <SelectValue placeholder="Select attribution window" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {ATTRIBUTION_WINDOWS.map((w) => (
                        <SelectItem key={w.value} value={w.value}>
                          {w.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1 bg-[#F3F0ED] py-2.5 text-sm font-medium text-[#1D1816] hover:bg-[#F3F0ED]/80"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="flex-1 rounded-lg bg-[#1F1A17] py-2.5 text-sm font-medium text-white disabled:opacity-50"
            >
              Generate link
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

'use client';

import * as React from 'react';

import { Lock, Shield, XIcon } from 'lucide-react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@repo/ui/components/ui/dialog';

import type { Product } from '@/lib/dummy';

import type {
  CheckoutEmailValues,
  PaymentMethod,
} from './_schema/checkout.schema';
import { CheckoutProductSummary } from './checkout-product-summary';
import { CheckoutProgress } from './checkout-progress';
import { CheckoutStepConfirmed } from './checkout-step-confirmed';
import { CheckoutStepEmail } from './checkout-step-email';
import { CheckoutStepPayment } from './checkout-step-payment';
import { CheckoutStepProcessing } from './checkout-step-processing';

type Step = 'email' | 'payment' | 'processing' | 'confirmed';

export function CheckoutDialog({
  product,
  open,
  onOpenChange,
}: {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = React.useState<Step>('email');
  const [buyerInfo, setBuyerInfo] = React.useState<CheckoutEmailValues | null>(
    null,
  );
  const [orderRef, setOrderRef] = React.useState('');

  // reset to step 1 whenever the dialog opens for a (possibly new) product
  React.useEffect(() => {
    if (open) {
      setStep('email');
      setBuyerInfo(null);
    }
  }, [open, product?.id]);

  if (!product) return null;

  const stepIndex = { email: 1, payment: 2, processing: 3, confirmed: 4 }[step];

  const handlePay = (_method: PaymentMethod) => {
    // kick off real payment (Paystack/Flutterwave) here, passing buyerInfo + method
    setStep('processing');
  };

  const handleProcessed = () => {
    setOrderRef(`PS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
    setStep('confirmed');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="gap-0 p-0 sm:max-w-115 bg-white rounded-[20px] border-0 shadow-none"
      >
        <DialogHeader className="flex-row items-center justify-between border-b border-[#F0EBE4] px-6 py-4 space-y-0 w-full">
          <div className='w-full flex items-center justify-between'>
            <DialogTitle className="flex items-center gap-2 font-serif text-sm font-semibold text-[#1D1816]">
              <Lock className="size-3.5 text-[#29654F]" /> Secure Checkout
            </DialogTitle>
            <DialogClose>
              <XIcon className='size-4 text-[#766860]' />
            </DialogClose>
          </div>
        </DialogHeader>

        <CheckoutProductSummary product={product} />
        <CheckoutProgress step={stepIndex} />

        {step === 'email' && (
          <CheckoutStepEmail
            defaultValues={buyerInfo ?? undefined}
            onNext={(values) => {
              setBuyerInfo(values);
              setStep('payment');
            }}
          />
        )}

        {step === 'payment' && (
          <CheckoutStepPayment
            product={product}
            onBack={() => setStep('email')}
            onPay={handlePay}
          />
        )}

        {step === 'processing' && (
          <CheckoutStepProcessing onComplete={handleProcessed} />
        )}

        {step === 'confirmed' && buyerInfo && (
          <CheckoutStepConfirmed
            product={product}
            email={buyerInfo.email}
            orderRef={orderRef}
            onDone={() => onOpenChange(false)}
          />
        )}

        <div className="mt-4 flex items-center justify-center gap-5 border-t-[0.8px] border-[#E5E0DC99] py-3 text-[10px] text-[#766860]">
          <span className="flex items-center gap-1">
            <Lock className="size-3" /> 256-bit encrypted
          </span>
          <span className="flex items-center gap-1">
            <Shield className="size-3" /> NDPR compliant
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

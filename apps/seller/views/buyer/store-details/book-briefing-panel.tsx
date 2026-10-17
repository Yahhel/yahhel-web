'use client';

import * as React from 'react';

import { MessageCircle, Send, Sparkles, X } from 'lucide-react';
import Image from 'next/image';

import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@repo/ui/components/ui/message-scroller';
import { cn } from '@repo/ui/lib/utils';

import { logo } from '@/constants/assets.constants';
import {
  type ChatMessage,
  SUGGESTED_QUESTIONS,
  getBriefingAnswer,
} from '@/lib/book-briefing';
import type { Product } from '@/lib/dummy';

export function BookBriefingPanel({
  product,
  open,
  onClose,
}: {
  product: Product;
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState('');

  if (!open) return null;

  const askQuestion = (question: string) => {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: question,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    //Todo: replace with API response
    setTimeout(() => {
      const answer = getBriefingAnswer(
        product.about ?? product.description,
        question,
      );
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'assistant', content: answer },
      ]);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) askQuestion(input.trim());
  };

  return (
    <div className="fixed bottom-24 right-6 z-30 flex h-135 w-90 flex-col overflow-hidden rounded-2xl border-[0.8px] border-[#E5E0DC99] bg-white shadow-2xl sm:bottom-10">
      <div className="flex items-center justify-between border-b-[0.8px] border-[#E5E0DC99] bg-[#F7F0E966] px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-xl bg-[#BD7828] p-1.5">
            <Image alt="logo" src={logo} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1D1816]">
              Book Briefing
            </p>
            <p className="text-[10px] text-[#766860]">Ask before you buy</p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-[#8A7B6E] hover:text-[#1F1A17]"
        >
          <X className="size-3.5" />
        </button>
      </div>

      {messages.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#F7F0E9]">
            <Image
              alt="logo"
              height={20}
              width={20}
              src={logo}
              style={{
                filter:
                  'invert(50%) sepia(57%) saturate(584%) hue-rotate(352deg) brightness(89%) contrast(91%)',
              }}
            />
          </div>
          <p className="mt-4 text-sm font-medium text-[#1D1816]">
            Curious about this book?
          </p>
          <p className="mt-1 text-xs text-[#766860]">
            I&apos;ll give you quick briefs from the book&apos;s description.
            Pick a question or ask your own.
          </p>

          <div className="mt-5 w-full space-y-2">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => askQuestion(q)}
                className="w-full rounded-xl bg-[#F3F0ED] px-4 py-2.5 text-left text-xs font-medium text-[#1D1816] hover:bg-[#E9E2D8]"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <MessageScrollerProvider autoScroll defaultScrollPosition="end">
          <MessageScroller className="flex-1">
            <MessageScrollerViewport>
              <MessageScrollerContent className="space-y-3 px-5 py-4">
                {messages.map((m) => (
                  <MessageScrollerItem
                    key={m.id}
                    messageId={m.id}
                    scrollAnchor={m.role === 'user'}
                  >
                    <div
                      className={cn(
                        'max-w-[85%] px-4 py-2.5 text-sm leading-relaxed',
                        m.role === 'user'
                          ? 'ml-auto rounded-l-2xl rounded-tr-2xl rounded-br-[10px] bg-[#1D1816] text-white'
                          : 'bg-[#F3F0ED] text-[#1D1816] rounded-br-2xl rounded-t-2xl rounded-bl-[10px]',
                      )}
                    >
                      {m.content}
                    </div>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      )}

      <form onSubmit={handleSubmit} className="border-t border-[#F0EBE4] p-4">
        <div className="flex items-center gap-2 rounded-xl border-[0.8px] border-[#E5E0DC99] bg-[#FAF8F5] px-4 py-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about the book..."
            className="flex-1 bg-transparent text-sm text-[#1D1816] placeholder:text-[#9CA3AF] focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send"
            className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#BD7828] text-white disabled:opacity-40"
          >
            <Send className="size-3.5" />
          </button>
        </div>
        <div className='mt-2 flex flex-row items-center justify-center gap-1 text-[#766860B2]'>
          <MessageCircle size={9} />
          <span className="text-center text-[9px]">
            Briefs are based on the book description only
          </span>
        </div>
      </form>
    </div>
  );
}

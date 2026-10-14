'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@repo/ui/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const word = {
  hidden: { opacity: 0, y: '0.4em' },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function AnimatedHeading({
  children,
  as: Tag = 'h1',
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  delay?: number;
}) {
  const parts = flattenToWords(children);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delayChildren: delay }}
    >
      <Tag className={cn('overflow-hidden', className)}>
        {parts.map((part, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span variants={word} className="inline-block">
              {part.node}
              {part.space && '\u00A0'}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}

function flattenToWords(
  children: React.ReactNode,
): { node: React.ReactNode; space: boolean }[] {
  const out: { node: React.ReactNode; space: boolean }[] = [];

  React.Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      const words = child.trim().split(/\s+/);
      words.forEach((w, i) =>
        out.push({ node: w, space: i !== words.length - 1 || true }),
      );
    } else {
      out.push({ node: child, space: true });
    }
  });

  return out;
}

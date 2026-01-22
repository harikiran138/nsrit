
import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'none';
}

export default function Section({
  children,
  className,
  id,
  background = 'white',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white dark:bg-gray-900',
    light: 'bg-secondary dark:bg-gray-800', // Uses the secondary color defined in tailwind.config
    dark: 'bg-corporate-navy text-white',
    none: '',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        bgClasses[background],
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

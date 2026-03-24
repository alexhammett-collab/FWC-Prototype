'use client';

import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface SectionIntroProps {
  label?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionIntro({
  label,
  heading,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionIntroProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  const textColor = dark ? 'text-white' : 'text-navy';
  const mutedColor = dark ? 'text-white/60' : 'text-slate';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {label && (
        <ScrollReveal delay={0}>
          <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-5">
            {label}
          </p>
        </ScrollReveal>
      )}
      <TextReveal
        text={heading}
        as="h2"
        className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight ${textColor}`}
        delay={0.1}
      />
      {description && (
        <ScrollReveal delay={0.3}>
          <p className={`mt-6 text-lg leading-relaxed ${mutedColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}

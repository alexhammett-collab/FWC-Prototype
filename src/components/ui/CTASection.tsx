'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading = 'Ready to strengthen trust, leadership, and performance?',
  description = 'Every meaningful change starts with a conversation. Let\u2019s explore how to close the gap between aspiration and experience in your organisation.',
  primaryLabel = 'Book a Conversation',
  primaryHref = '/contact',
  secondaryLabel = 'Explore Services',
  secondaryHref = '/services',
}: CTASectionProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-sand noise-overlay overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/20 to-transparent blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <TextReveal
          text={heading}
          as="h2"
          className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-navy"
        />
        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide bg-navy text-warm-white rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide border border-navy/20 text-navy rounded-full hover:bg-navy hover:text-warm-white transition-all duration-300"
            >
              {secondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

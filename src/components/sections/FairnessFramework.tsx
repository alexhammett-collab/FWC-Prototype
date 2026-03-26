'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const balancePoints = [
  { label: 'Business Needs', description: 'Operational requirements, service delivery, team collaboration' },
  { label: 'People Needs', description: 'Wellbeing, flexibility, personal circumstances, autonomy' },
  { label: 'Role Requirements', description: 'What the work actually demands, not assumptions about where it happens' },
];

const outcomes = [
  'Clearer principles that everyone understands',
  'Better, more consistent manager decisions',
  'More inclusive hybrid practice across all roles',
  'Reduced resentment and confusion',
];

export default function FairnessFramework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-cream relative overflow-hidden noise-overlay">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Hybrid & Flexible Working
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              Fairness does not mean sameness.
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              Hybrid only works when it works for everyone — not just those who can work from home.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Balance visual */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {balancePoints.map((point, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="relative p-8 rounded-2xl bg-white/70 border border-stone/30 hover:border-gold/20 transition-all duration-500 text-center h-full">
                  {/* Connecting lines between cards on desktop */}
                  {i < balancePoints.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gold/30" />
                  )}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.3 }}
                    className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5"
                  >
                    <span className="font-serif text-lg text-gold">{i + 1}</span>
                  </motion.div>
                  <h3 className="font-serif text-lg text-navy mb-3">{point.label}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Central principle */}
          <ScrollReveal delay={0.4}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-navy/5 border border-navy/10">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <p className="text-sm text-navy font-medium">When these three are balanced, fairness becomes visible and felt</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Practical outcomes */}
          <ScrollReveal delay={0.5}>
            <div className="p-8 rounded-2xl bg-white border border-stone/30">
              <h3 className="font-serif text-xl text-navy mb-6 text-center">What this creates</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {outcomes.map((outcome, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                    <p className="text-sm text-navy/70 leading-relaxed">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Shield, Compass, RefreshCw } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const statedCulture = [
  'Values and purpose',
  'Leadership intent',
  'Policies and frameworks',
  'Strategic ambition',
];

const livedExperience = [
  'What people actually feel',
  'How decisions land day to day',
  'Whether people speak up or stay silent',
  'How fair things really are',
];

const bridgeServices = [
  { icon: Users, label: 'Leadership', outcome: 'Behaviour', color: 'bg-gold/10' },
  { icon: Shield, label: 'Trust & Safety', outcome: 'Voice', color: 'bg-gold/10' },
  { icon: Compass, label: 'Hybrid Working', outcome: 'Fairness', color: 'bg-gold/10' },
  { icon: RefreshCw, label: 'Change', outcome: 'Clarity', color: 'bg-gold/10' },
];

export default function CultureBridge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-warm-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              The Core Challenge
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              The gap between aspiration and experience.
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              Most organisations know the culture they want. The challenge is making it real.
            </p>
          </div>
        </ScrollReveal>

        {/* Bridge visual */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-start">

            {/* Stated Culture */}
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl border border-stone/40 bg-white/60">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-navy/40" />
                  <h3 className="font-serif text-xl text-navy">Stated Culture</h3>
                </div>
                <p className="text-xs tracking-[0.15em] uppercase text-slate/60 font-medium mb-4">What organisations say</p>
                <ul className="space-y-3">
                  {statedCulture.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-navy/70 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-navy/30 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* The Gap + Bridge */}
            <div className="lg:px-6 flex flex-col items-center">
              <ScrollReveal delay={0.3}>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                    <span className="text-xs font-medium text-gold tracking-wide uppercase">The Gap</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Vertical bridge line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                className="hidden lg:block w-px h-8 bg-gradient-to-b from-gold/40 to-gold/20 origin-top"
              />

              {/* Bridge services */}
              <ScrollReveal delay={0.4}>
                <div className="w-full space-y-3 my-4">
                  {bridgeServices.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gold/5 border border-gold/15 hover:border-gold/30 transition-all duration-300"
                    >
                      <service.icon size={16} className="text-gold shrink-0" strokeWidth={1.5} />
                      <span className="text-xs text-navy/70 flex-1">{service.label}</span>
                      <span className="text-[10px] tracking-wide uppercase text-gold/80 font-medium">→ {service.outcome}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
                className="hidden lg:block w-px h-8 bg-gradient-to-b from-gold/20 to-gold/40 origin-top"
              />

              <ScrollReveal delay={0.8}>
                <div className="text-center mt-4">
                  <p className="text-xs text-slate/60 italic">Faye&apos;s work bridges the gap</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Lived Experience */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl border border-stone/40 bg-white/60">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <h3 className="font-serif text-xl text-navy">Lived Experience</h3>
                </div>
                <p className="text-xs tracking-[0.15em] uppercase text-slate/60 font-medium mb-4">What people actually feel</p>
                <ul className="space-y-3">
                  {livedExperience.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-navy/70 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

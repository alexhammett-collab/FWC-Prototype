'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const triggers = [
  'Trust is declining and people are disengaging.',
  'Complaints and grievances are rising.',
  'Hybrid working feels unfair to parts of the workforce.',
  'Managers are inconsistent and under-supported.',
  'A leadership change is unsettling teams.',
  'Culture does not match stated values.',
];

const journeySteps = [
  {
    label: 'Recognise',
    description: 'Something is not working. You can feel it in the culture, see it in the data, hear it from your people.',
  },
  {
    label: 'Conversation',
    description: 'A free, confidential 30-minute conversation. No obligation — just an honest exploration of what is happening.',
  },
  {
    label: 'Clarity',
    description: 'Together we identify what is really going on — the root causes, not just the symptoms.',
  },
  {
    label: 'Support',
    description: 'Targeted, practical work across one or more service areas, shaped entirely around your context.',
  },
  {
    label: 'Outcomes',
    description: 'Stronger leadership, deeper trust, fairer practice, and change that actually lands.',
  },
];

export default function TriggerJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy grain-overlay relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold/3 blur-[140px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Sound Familiar?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight max-w-3xl mx-auto">
              When organisations reach out.
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
              These are the moments when a conversation can make the biggest difference.
            </p>
          </div>
        </ScrollReveal>

        {/* Trigger pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-4xl mx-auto">
          {triggers.map((trigger, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 hover:border-gold/30 hover:text-white/90 transition-all duration-300"
            >
              {trigger}
            </motion.div>
          ))}
        </div>

        {/* Journey steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
            className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {journeySteps.map((step, i) => (
              <ScrollReveal key={i} delay={0.5 + i * 0.1}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.12, duration: 0.3 }}
                    className="w-12 h-12 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="font-serif text-sm text-gold">{i + 1}</span>
                  </motion.div>
                  <h3 className="font-serif text-lg text-white mb-2">{step.label}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={1}>
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide bg-gold text-navy rounded-full hover:bg-gold-light transition-all duration-300"
            >
              Start with a conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

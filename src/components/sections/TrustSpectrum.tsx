'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const spectrumStages = [
  { label: 'Silent', description: 'People hold back. Issues go unraised. Problems grow quietly.', level: 1 },
  { label: 'Hesitant', description: 'Some speak up, but carefully. Most wait for permission.', level: 2 },
  { label: 'Safe to Speak', description: 'People raise concerns without fear. Honesty becomes normal.', level: 3 },
  { label: 'Comfortable Challenging', description: 'Teams question decisions constructively. Better thinking emerges.', level: 4 },
  { label: 'Full Contribution', description: 'Everyone brings their whole perspective. Innovation and trust flourish.', level: 5 },
];

const interventions = [
  'Listening and understanding where teams are now',
  'Trust-building through leadership behaviour',
  'Team-level psychological safety interventions',
  'Embedding habits that sustain openness',
];

export default function TrustSpectrum() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-warm-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Trust & Psychological Safety
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              From silence to full contribution.
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              Psychological safety is not abstract. It is the difference between a team that holds back and one that speaks up.
            </p>
          </div>
        </ScrollReveal>

        {/* Spectrum visual */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* Progress bar */}
          <div className="relative mb-8">
            <div className="h-2 rounded-full bg-stone/30 overflow-hidden">
              <motion.div
                initial={{ width: '10%' }}
                animate={isInView ? { width: '90%' } : {}}
                transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-stone/40 via-gold/60 to-gold"
              />
            </div>
            {/* Stage markers */}
            <div className="flex justify-between mt-1">
              {spectrumStages.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.3 }}
                  className="flex flex-col items-center"
                  style={{ width: '20%' }}
                >
                  <div className={`w-3 h-3 rounded-full border-2 -mt-[22px] mb-3 ${
                    i < 2 ? 'border-stone/40 bg-white' : 'border-gold/50 bg-gold/10'
                  }`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stage cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {spectrumStages.map((stage, i) => (
              <ScrollReveal key={i} delay={0.3 + i * 0.08}>
                <div className={`p-5 rounded-xl border transition-all duration-300 h-full ${
                  i < 2
                    ? 'border-stone/30 bg-white/50'
                    : 'border-gold/20 bg-gold/5'
                }`}>
                  <h4 className={`font-serif text-sm mb-2 ${i < 2 ? 'text-slate' : 'text-navy'}`}>
                    {stage.label}
                  </h4>
                  <p className="text-xs text-slate/70 leading-relaxed">{stage.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* How Faye helps move along the spectrum */}
        <ScrollReveal delay={0.6}>
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-cream/60 border border-stone/30">
            <h3 className="font-serif text-xl text-navy mb-5 text-center">How teams move along the spectrum</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interventions.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                  <p className="text-sm text-navy/70 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

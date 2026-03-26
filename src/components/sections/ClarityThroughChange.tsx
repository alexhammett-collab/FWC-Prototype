'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const fromStates = [
  { label: 'Uncertainty', color: 'bg-red-400/40' },
  { label: 'Confusion', color: 'bg-amber-400/40' },
  { label: 'Resistance', color: 'bg-orange-400/40' },
];

const toStates = [
  { label: 'Clarity', color: 'bg-emerald-400/50' },
  { label: 'Understanding', color: 'bg-teal-400/50' },
  { label: 'Movement', color: 'bg-gold' },
];

const supports = [
  { title: 'Honest communication', description: 'Not spin — real, respectful, timely information that people trust.' },
  { title: 'Leadership alignment', description: 'Getting leaders visibly on the same page before asking others to follow.' },
  { title: 'Practical support', description: 'Tools, conversations, and guidance that help people navigate what is changing.' },
  { title: 'Readiness and culture', description: 'Understanding where people are and meeting them there, not where you wish they were.' },
];

export default function ClarityThroughChange() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy grain-overlay relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-gold/3 blur-[120px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Change & Transformation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight max-w-3xl mx-auto">
              Clarity through change.
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
              People do not resist change. They resist being confused, unheard, and left to figure it out alone.
            </p>
          </div>
        </ScrollReveal>

        {/* From → To visual */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* From states */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-xs tracking-[0.15em] uppercase text-white/40 font-medium mb-4 text-center">Without support</p>
                <div className="space-y-3">
                  {fromStates.map((state, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5"
                    >
                      <div className={`w-2 h-2 rounded-full ${state.color}`} />
                      <span className="text-sm text-white/60">{state.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Arrow / transition */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center gap-4 py-6">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                  className="w-full h-px bg-gradient-to-r from-white/10 via-gold/40 to-white/10 origin-left"
                />
                <div className="px-5 py-2 rounded-full bg-gold/10 border border-gold/20">
                  <p className="text-xs text-gold font-medium tracking-wide">Faye&apos;s support</p>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
                  className="w-full h-px bg-gradient-to-r from-white/10 via-gold/40 to-white/10 origin-left"
                />
              </div>
            </ScrollReveal>

            {/* To states */}
            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl border border-gold/15 bg-gold/5">
                <p className="text-xs tracking-[0.15em] uppercase text-gold/60 font-medium mb-4 text-center">With support</p>
                <div className="space-y-3">
                  {toStates.map((state, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5"
                    >
                      <div className={`w-2 h-2 rounded-full ${state.color}`} />
                      <span className="text-sm text-white/80 font-medium">{state.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* What makes the difference */}
        <ScrollReveal delay={0.5}>
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-xl text-white mb-8 text-center">What makes the difference</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {supports.map((support, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-gold/20 transition-all duration-300"
                >
                  <h4 className="font-serif text-base text-white mb-2">{support.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{support.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

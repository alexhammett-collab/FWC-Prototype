'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const comparisons = [
  { typical: 'Starts with frameworks', faye: 'Starts with listening' },
  { typical: 'Delivers slides and reports', faye: 'Works through real situations' },
  { typical: 'External expert, then gone', faye: 'Embedded partner throughout' },
  { typical: 'Generic recommendations', faye: 'Context-specific practical advice' },
  { typical: 'Transactional project', faye: 'Trusted ongoing support' },
];

export default function WorkingWithMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-sand relative overflow-hidden noise-overlay">
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              What It Is Like
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              A different kind of support.
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              Not better or worse — just different. And for the challenges most organisations face, the difference matters.
            </p>
          </div>
        </ScrollReveal>

        <div className="rounded-2xl bg-white border border-stone/30 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-stone/20">
            <div className="p-5 lg:p-6 text-center border-r border-stone/20">
              <p className="text-xs tracking-[0.15em] uppercase text-slate/50 font-medium">Typical consultancy</p>
            </div>
            <div className="p-5 lg:p-6 text-center">
              <p className="text-xs tracking-[0.15em] uppercase text-gold font-medium">Working with Faye</p>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              className={`grid grid-cols-2 ${i < comparisons.length - 1 ? 'border-b border-stone/15' : ''}`}
            >
              <div className="p-5 lg:p-6 border-r border-stone/15 flex items-center">
                <p className="text-sm text-slate/60 leading-relaxed">{row.typical}</p>
              </div>
              <div className="p-5 lg:p-6 flex items-center">
                <p className="text-sm text-navy leading-relaxed font-medium">{row.faye}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

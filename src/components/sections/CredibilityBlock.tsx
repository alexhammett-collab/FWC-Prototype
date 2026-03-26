'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lock, Wrench, Heart, MessageCircle, Handshake } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const principles = [
  {
    icon: Lock,
    title: 'Confidential',
    description: 'Everything you share stays between us. No exceptions.',
  },
  {
    icon: Wrench,
    title: 'Practical',
    description: 'Tools and approaches you can use straight away, not theory on a shelf.',
  },
  {
    icon: Heart,
    title: 'Honest',
    description: 'Straightforward advice, even when it is not what you expected to hear.',
  },
  {
    icon: MessageCircle,
    title: 'Right fit matters',
    description: 'If I am not the right person for this, I will say so. No hard sell, ever.',
  },
  {
    icon: Handshake,
    title: 'Partnership, not projects',
    description: 'Focused on long-term impact, not just deliverables and sign-off.',
  },
];

export default function CredibilityBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-warm-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              How I Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              Built on trust. Every time.
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className={`p-7 rounded-2xl border border-stone/30 bg-white/60 hover:border-gold/20 transition-all duration-500 h-full ${
                    i === principles.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                    <principle.icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2">{principle.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{principle.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

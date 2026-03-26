'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Ear, Search, Handshake, Anchor } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const stages = [
  {
    num: '01',
    icon: Ear,
    title: 'Listen',
    description: 'Conversations first. Understanding what is really happening beneath the surface — not just what the data says.',
    details: ['Confidential conversations', 'Stakeholder perspectives', 'Understanding context and history'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Diagnose',
    description: 'Identifying the real friction points — trust signals, management inconsistency, cultural disconnects.',
    details: ['Trust and engagement signals', 'Manager consistency gaps', 'Culture vs reality mapping'],
  },
  {
    num: '03',
    icon: Handshake,
    title: 'Work Alongside',
    description: 'Practical, hands-on support. Coaching, facilitated conversations, manager guidance, and real problem-solving.',
    details: ['Leadership coaching', 'Facilitated team sessions', 'Practical tools and frameworks'],
  },
  {
    num: '04',
    icon: Anchor,
    title: 'Embed',
    description: 'Building habits, toolkits, and behaviour shifts that last beyond the engagement.',
    details: ['Manager toolkits', 'Sustainable practices', 'Capability that stays'],
  },
];

export default function HowIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="how-i-work" className="py-24 lg:py-32 bg-cream relative overflow-hidden noise-overlay scroll-mt-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              How I Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              A trusted partner&apos;s approach.
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              Not a methodology. Not a framework you have seen before. Just a clear, honest way of working that puts people first.
            </p>
          </div>
        </ScrollReveal>

        {/* Stages */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/20 to-gold/30 origin-top -translate-x-1/2"
          />

          <div className="space-y-12 lg:space-y-0">
            {stages.map((stage, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${i > 0 ? 'lg:mt-16' : ''}`}>
                    {/* Content side */}
                    <div className={`${isEven ? 'lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                      <div className="p-8 rounded-2xl bg-white/70 border border-stone/30 hover:border-gold/20 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
                        <div className="flex items-start gap-5 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                            <stage.icon size={22} className="text-gold" strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="text-xs text-gold/60 font-medium tracking-wide">{stage.num}</span>
                            <h3 className="font-serif text-2xl text-navy">{stage.title}</h3>
                          </div>
                        </div>
                        <p className="text-navy/70 leading-relaxed mb-5">{stage.description}</p>
                        <ul className="space-y-2">
                          {stage.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-sm text-slate">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center dot on timeline */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.15, duration: 0.3 }}
                      className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gold/20 border-2 border-gold/40 items-center justify-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </motion.div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

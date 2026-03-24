'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import SectionIntro from '@/components/ui/SectionIntro';
import CTASection from '@/components/ui/CTASection';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-navy grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-gold/3 blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="white" strokeWidth="0.5" />
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight max-w-3xl"
          >
            Built on experience. Driven by purpose.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            Closing the gap between the culture organisations aspire to and the one people actually experience.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Portrait placeholder */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-navy via-navy-light to-charcoal grain-overlay">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-2 border-gold/30 mx-auto mb-4 flex items-center justify-center">
                        <span className="font-serif text-3xl text-gold/60">FWC</span>
                      </div>
                      <p className="text-white/30 text-xs tracking-widest uppercase">Portrait</p>
                    </div>
                  </div>
                  {/* Abstract decorative elements */}
                  <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-white/5" />
                  <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full border border-white/5" />
                </div>
              </ScrollReveal>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <ScrollReveal>
                <div className="space-y-6 text-navy/80 leading-relaxed text-lg">
                  <p>
                    I have spent my career at the intersection of people, leadership, and organisational change &mdash; inside complex organisations and alongside leaders navigating their hardest moments.
                  </p>
                  <p>
                    I have seen what strong trust does: people speak up, managers lead well, change sticks. I have also seen what happens when it breaks down. That experience shapes everything I do. I am practical, honest, and focused on solutions that last.
                  </p>
                </div>
              </ScrollReveal>

              {/* Quote */}
              <ScrollReveal delay={0.2}>
                <div className="relative p-8 rounded-2xl bg-sand/60 border border-stone/30">
                  <Quote size={28} className="text-gold/30 mb-4" />
                  <p className="font-serif text-xl text-navy leading-relaxed italic">
                    &ldquo;Every organisation can be a place where people thrive. But it takes intentional leadership and the courage to close the gap between aspiration and reality.&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 lg:py-32 bg-cream noise-overlay relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <SectionIntro
            label="Expertise"
            heading="Where my experience runs deepest."
            align="center"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Leadership development and manager capability',
              'Trust, psychological safety, and team effectiveness',
              'Culture transformation and values embedding',
              'Employee experience and engagement strategy',
              'Hybrid and flexible working design',
              'Change management and communication',
              'Employee listening and voice strategy',
              'Wellbeing and resilience in the workplace',
              'TUPE and organisational transition',
            ].map((area, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-white/70 border border-stone/30 hover:border-gold/30 transition-all duration-500 hover:shadow-md hover:shadow-gold/5">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <p className="text-navy/80 text-sm leading-relaxed">{area}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-navy grain-overlay relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gold/3 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <SectionIntro
            label="How I Work"
            heading="Principles that guide every engagement."
            align="center"
            dark
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Trust first',
                desc: 'Trust is the foundation, not a side effect.',
              },
              {
                title: 'Honest and human',
                desc: 'Truth told with care. Questions others avoid.',
              },
              {
                title: 'Practical, not theoretical',
                desc: 'Tools leaders can use now, not decks that gather dust.',
              },
              {
                title: 'Partnership, not dependency',
                desc: 'Building your capability, not my contract.',
              },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl glass hover:border-gold/20 transition-all duration-500">
                  <h3 className="font-serif text-xl text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partner */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              A Trusted Partner
            </p>
          </ScrollReveal>
          <TextReveal
            text="Called in when the challenge is sensitive, the stakes are high, and the standard response will not cut it."
            as="h2"
            className="font-serif text-3xl md:text-4xl text-navy leading-[1.15] tracking-tight"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              Breakdowns in trust, failing change, overwhelmed managers, or a culture that no longer feels real &mdash; I help organisations find a way forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        heading="Let\u2019s talk."
        description="If you are looking for practical help with trust, leadership, or culture, I would welcome a conversation."
      />
    </>
  );
}

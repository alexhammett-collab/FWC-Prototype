'use client';

import { motion } from 'framer-motion';
import { Users, Shield, Compass, RefreshCw, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import SectionIntro from '@/components/ui/SectionIntro';
import CTASection from '@/components/ui/CTASection';

const pillars = [
  {
    id: 'leadership',
    icon: Users,
    title: 'Leadership & Manager Capability',
    problem: 'Managers lack confidence, avoid difficult conversations, and apply people decisions inconsistently.',
    intervention: [
      'Manager toolkits and practical guides',
      'Coaching for difficult conversations',
      'Leadership development programmes',
      'Peer learning and away days',
      'Management behaviour frameworks',
    ],
    outcome: 'More confident, fair, and trusted managers who lead consistently.',
  },
  {
    id: 'trust',
    icon: Shield,
    title: 'Trust, Psychological Safety & Employee Experience',
    problem: 'People do not feel safe to speak up, challenge, or contribute openly.',
    intervention: [
      'Trust and psychological safety workshops',
      'Listening strategies and employee voice',
      'Culture and EVP audits',
      'Values embedding',
      'Recognition programme design',
    ],
    outcome: 'Stronger trust, better voice, and healthier team dynamics.',
  },
  {
    id: 'hybrid',
    icon: Compass,
    title: 'Hybrid Working & the Future of Work',
    problem: 'Inconsistent decisions, perceived unfairness, and tension across teams and roles.',
    intervention: [
      'Hybrid principles and model design',
      'Manager training for hybrid leadership',
      'Data-led insight on hybrid effectiveness',
      'Support for site-based and frontline colleagues',
    ],
    outcome: 'Clearer expectations, more equitable practice, and less friction.',
  },
  {
    id: 'change',
    icon: RefreshCw,
    title: 'Change, Transformation & Employee Voice',
    problem: 'Uncertainty, poor communication, mistrust, and resistance during change.',
    intervention: [
      'Change communication strategies',
      'TUPE and acquisition onboarding',
      'Action plans to build momentum',
      'Focus groups and employee listening',
      'Data-led insight and action planning',
    ],
    outcome: 'Greater clarity, stronger confidence, and more effective change.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-navy grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="white" strokeWidth="0.5" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight max-w-3xl"
          >
            How I can help.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            Every engagement is shaped around your context. I work across four areas to strengthen culture, leadership, and employee experience.
          </motion.p>
        </div>
      </section>

      {/* Pillar Navigation */}
      <section className="py-6 border-b border-stone/30 sticky top-20 z-30 backdrop-blur-xl bg-warm-white/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
            {pillars.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="shrink-0 px-5 py-2.5 text-sm font-medium text-slate hover:text-navy hover:bg-stone/30 rounded-full transition-all duration-300"
              >
                {pillar.title.split('&')[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      {pillars.map((pillar, pillarIndex) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`py-24 lg:py-32 ${pillarIndex % 2 === 0 ? 'bg-warm-white' : 'bg-cream noise-overlay'} relative overflow-hidden scroll-mt-32`}
        >
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Problem & Outcome */}
              <div className="lg:sticky lg:top-40">
                <ScrollReveal>
                  <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6">
                    <pillar.icon size={26} className="text-gold" strokeWidth={1.5} />
                  </div>
                </ScrollReveal>
                <TextReveal
                  text={pillar.title}
                  as="h2"
                  className="font-serif text-3xl md:text-4xl text-navy leading-[1.15] tracking-tight"
                  delay={0.1}
                />

                <ScrollReveal delay={0.25}>
                  <div className="mt-8 p-5 rounded-xl border border-red-200/40 bg-red-50/20">
                    <p className="text-xs tracking-[0.15em] uppercase text-red-400/70 font-medium mb-2">The problem</p>
                    <p className="text-sm text-navy/70 leading-relaxed">{pillar.problem}</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.35}>
                  <div className="mt-4 p-5 rounded-xl border border-emerald-200/40 bg-emerald-50/20">
                    <p className="text-xs tracking-[0.15em] uppercase text-emerald-600/70 font-medium mb-2">The outcome</p>
                    <p className="text-sm text-navy/70 leading-relaxed font-medium">{pillar.outcome}</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 mt-8 text-sm font-medium text-navy hover:text-gold transition-colors"
                  >
                    Discuss this area
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </ScrollReveal>
              </div>

              {/* Right: What Faye does */}
              <div>
                <ScrollReveal delay={0.2}>
                  <p className="text-xs tracking-[0.15em] uppercase text-gold font-medium mb-4">What Faye does</p>
                </ScrollReveal>
                <div className="space-y-4">
                  {pillar.intervention.map((item: string, i: number) => (
                    <ScrollReveal key={i} delay={0.25 + i * 0.06}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="group flex items-start gap-4 p-5 rounded-xl border border-stone/40 hover:border-gold/30 bg-white/60 hover:bg-white transition-all duration-500 hover:shadow-md hover:shadow-gold/5"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold shrink-0 transition-colors" />
                        <p className="text-navy/80 leading-relaxed">{item}</p>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Approach */}
      <section className="py-24 lg:py-32 bg-navy grain-overlay relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/3 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <SectionIntro
            label="My Approach"
            heading="Different every time. Consistent principles."
            description="No one-size-fits-all. But always rooted in trust, clarity, and practical action."
            align="center"
            dark
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Diagnostic', desc: 'Understanding your context — the ambition, the experience, and the gap.' },
              { title: 'Collaborative', desc: 'Working alongside your teams, not in isolation.' },
              { title: 'Sustainable', desc: 'Building capability that lasts beyond the engagement.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="text-center p-8 rounded-2xl glass hover:border-gold/20 transition-all duration-500">
                  <h3 className="font-serif text-xl text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure where to start?"
        description="Most engagements start with a conversation. Let\u2019s find out what would make the biggest difference."
        primaryLabel="Book a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}

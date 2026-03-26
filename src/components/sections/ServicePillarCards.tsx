'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Shield, Compass, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const pillars = [
  {
    icon: Users,
    title: 'Leadership & Manager Capability',
    problem: 'Managers lack confidence, avoid difficult conversations, and apply people decisions inconsistently.',
    intervention: 'Coaching, practical training, manager toolkits, and leadership support.',
    outcome: 'More confident, fair, and trusted managers.',
    link: '/services#leadership',
  },
  {
    icon: Shield,
    title: 'Trust & Psychological Safety',
    problem: 'People do not feel safe to speak up, challenge, or contribute openly.',
    intervention: 'Diagnostics, listening strategies, team interventions, and leadership support.',
    outcome: 'Stronger trust, better voice, healthier team dynamics.',
    link: '/services#trust',
  },
  {
    icon: Compass,
    title: 'Hybrid & Flexible Working',
    problem: 'Inconsistent decisions, perceived unfairness, and tension across teams and roles.',
    intervention: 'Fairness frameworks, policy design, inclusion audits, and manager guidance.',
    outcome: 'Clearer expectations, more equitable practice, less friction.',
    link: '/services#hybrid',
  },
  {
    icon: RefreshCw,
    title: 'Change & Transformation',
    problem: 'Uncertainty, poor communication, mistrust, and resistance during change.',
    intervention: 'Readiness assessments, communication support, restructure guidance, and culture alignment.',
    outcome: 'Greater clarity, stronger confidence, more effective change.',
    link: '/services#change',
  },
];

export default function ServicePillarCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} id="what-i-do" className="py-24 lg:py-32 bg-warm-white relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              What I Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              Four areas. Real problems. Practical outcomes.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="group h-full p-8 lg:p-10 rounded-2xl bg-white border border-stone/30 hover:border-gold/20 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-500">
                    <pillar.icon size={22} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-navy leading-snug pt-1">{pillar.title}</h3>
                </div>

                {/* Problem → Intervention → Outcome */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                      <span className="text-xs tracking-[0.15em] uppercase text-slate/60 font-medium">The problem</span>
                    </div>
                    <p className="text-sm text-navy/70 leading-relaxed pl-4">{pillar.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                      <span className="text-xs tracking-[0.15em] uppercase text-slate/60 font-medium">What Faye does</span>
                    </div>
                    <p className="text-sm text-navy/70 leading-relaxed pl-4">{pillar.intervention}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                      <span className="text-xs tracking-[0.15em] uppercase text-slate/60 font-medium">The outcome</span>
                    </div>
                    <p className="text-sm text-navy/70 leading-relaxed pl-4 font-medium">{pillar.outcome}</p>
                  </div>
                </div>

                {/* Link */}
                <div className="mt-8 pt-6 border-t border-stone/20">
                  <Link
                    href={pillar.link}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
                  >
                    Learn more
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import CTASection from '@/components/ui/CTASection';

const featuredInsight = {
  title: 'Why hybrid is quietly failing in some organisations',
  excerpt: 'Many organisations declared hybrid a success before understanding its real impact. Beneath the surface, inequity and inconsistency are quietly eroding culture.',
  tag: 'Hybrid Working',
  readTime: '6 min read',
  date: '2024',
};

const insights = [
  {
    title: 'The hidden cost of manager inconsistency',
    excerpt: 'Different standards across managers erodes trust and retention. Consistency is not rigidity — it is fairness made visible.',
    tag: 'Leadership',
    readTime: '5 min read',
    date: '2024',
  },
  {
    title: 'People do not resist change. They resist unclear leadership.',
    excerpt: 'People do not resist change. They resist the confusion and lack of trust that usually accompany it.',
    tag: 'Change',
    readTime: '4 min read',
    date: '2024',
  },
  {
    title: 'AI anxiety is a leadership issue, not just a technology issue',
    excerpt: 'AI fear is rarely about the technology. It is about uncertainty and whether leaders can guide people through it.',
    tag: 'AI & Leadership',
    readTime: '5 min read',
    date: '2024',
  },
  {
    title: 'Why employee voice fails when organisations do not show action',
    excerpt: 'Asking for feedback but failing to act visibly does not just waste data — it damages the trust you set out to build.',
    tag: 'Employee Voice',
    readTime: '4 min read',
    date: '2024',
  },
  {
    title: 'The trust deficit: why your culture strategy is not landing',
    excerpt: 'Culture programmes fail not because the strategy is wrong, but because trust has already eroded. Without it, nothing lands.',
    tag: 'Trust & Culture',
    readTime: '6 min read',
    date: '2024',
  },
  {
    title: 'What managers actually need (and what most organisations get wrong)',
    excerpt: 'Most manager development focuses on skills. The real gap is confidence, clarity, and support.',
    tag: 'Leadership',
    readTime: '5 min read',
    date: '2024',
  },
];

export default function InsightsPage() {
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
            Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight max-w-3xl"
          >
            Thinking out loud.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            Observations on trust, leadership, and the challenges shaping modern organisations.
          </motion.p>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-10">
              Featured
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link href="/insights" className="group block">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-light to-charcoal grain-overlay"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 right-1/6 w-48 h-48 rounded-full border border-white/20" />
                  <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full border border-white/15" />
                </div>
                <div className="relative z-10 p-10 lg:p-16">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-white/10 backdrop-blur-sm rounded-full text-white/80">
                      {featuredInsight.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/40">
                      <Clock size={12} />
                      {featuredInsight.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight max-w-3xl group-hover:text-gold-light transition-colors duration-300">
                    {featuredInsight.title}
                  </h2>
                  <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-2xl">
                    {featuredInsight.excerpt}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:text-gold-light transition-colors">
                    Read article
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 lg:py-32 bg-cream noise-overlay relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-10">
              All Articles
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <Link href="/insights" className="group block h-full">
                  <motion.article
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col p-8 rounded-2xl bg-white/80 border border-stone/30 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1 text-xs tracking-wider uppercase bg-navy/5 rounded-full text-navy/60">
                        {insight.tag}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Clock size={11} />
                        {insight.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-navy leading-snug mb-4 group-hover:text-gold transition-colors duration-300 flex-grow">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed mb-6">
                      {insight.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-gold transition-colors mt-auto">
                      Read more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Subscribe */}
      <section className="py-24 lg:py-32 bg-navy grain-overlay relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gold/3 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Stay Connected
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-[1.15] tracking-tight">
              Perspectives delivered to your inbox.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              Short, occasional reads on trust, leadership, and culture. No spam.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3.5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 text-sm font-medium tracking-wide bg-gold text-navy rounded-full hover:bg-gold-light transition-colors duration-300 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        heading="Want to discuss any of these ideas?"
        description="Every insight comes from real experience. Let\u2019s talk about what matters in your context."
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}

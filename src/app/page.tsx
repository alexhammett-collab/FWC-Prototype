'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Users, Shield, Compass, Lightbulb, BarChart3, Heart, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import SectionIntro from '@/components/ui/SectionIntro';
import CTASection from '@/components/ui/CTASection';

/* ─── Hero ─── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-charcoal grain-overlay" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gold/3 blur-[100px]" />
      </div>
      {/* Subtle geometric lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="0.5" />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="white" strokeWidth="0.5" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="white" strokeWidth="0.5" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-8"
          >
            Trust &middot; Leadership &middot; Culture
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight"
          >
            Strong cultures do not happen by accident.{' '}
            <span className="text-gold">They are built</span> through trust, leadership, and lived experience.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl"
          >
            I help organisations create cultures where people perform at their best, especially during change. By strengthening trust, equipping managers, and closing the gap between stated values and everyday experience, I help leaders build workplaces where people and performance thrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide bg-gold text-navy rounded-full hover:bg-gold-light transition-all duration-300"
            >
              Book a Conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── The Tension ─── */
function TensionSection() {
  const tensions = [
    'Constant transformation that never quite lands.',
    'AI uncertainty creating anxiety, not opportunity.',
    'Rising expectations of leaders without matching support.',
    'Hybrid ways of working that do not always feel fair.',
    'Overwhelmed managers struggling to hold it all together.',
    'Change fatigue quietly eroding engagement.',
    'An EVP that no longer matches the lived employee experience.',
  ];

  return (
    <section className="py-24 lg:py-32 bg-warm-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionIntro
          label="The Reality"
          heading="Organisations are under extraordinary pressure."
          description="Leaders are navigating an unprecedented convergence of challenges. The pace of change, the complexity of expectations, and the distance between strategy and experience have never been greater."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {tensions.map((tension, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction="up">
              <div className="group relative p-6 rounded-2xl border border-stone/50 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5 bg-white/50">
                <div className="absolute top-6 left-6 w-1.5 h-1.5 rounded-full bg-gold/60 group-hover:bg-gold transition-colors" />
                <p className="pl-5 text-navy/80 leading-relaxed">{tension}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── This May Feel Familiar ─── */
function FamiliarSection() {
  const statements = [
    'Hybrid is not quite working.',
    'AI is creating fear, not clarity.',
    'Managers are overwhelmed.',
    'Change fatigue is rising.',
    'Your EVP says one thing, but your people experience another.',
    'Surveys generate insight, but not enough action.',
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <section ref={containerRef} className="relative py-32 lg:py-44 bg-navy grain-overlay overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-12 text-center">
            This may feel familiar
          </p>
        </ScrollReveal>
        <div className="space-y-6 lg:space-y-8">
          {statements.map((statement, i) => (
            <FamiliarStatement
              key={i}
              text={statement}
              index={i}
              total={statements.length}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FamiliarStatement({
  text,
  index,
  total,
  scrollProgress,
}: {
  text: string;
  index: number;
  total: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollProgress, [start, start + 0.05, end - 0.05, end], [0.15, 1, 1, 0.15]);
  const x = useTransform(scrollProgress, [start, start + 0.05], [20, 0]);
  const blurVal = useTransform(scrollProgress, [start, start + 0.05], [4, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.p
      style={{ opacity, x, filter }}
      className="font-serif text-2xl md:text-3xl lg:text-4xl text-white text-center leading-snug"
    >
      {text}
    </motion.p>
  );
}

/* ─── The Opportunity ─── */
function OpportunitySection() {
  const outcomes = [
    { icon: MessageCircle, text: 'People feel safe to speak up and contribute openly.' },
    { icon: Compass, text: 'Managers lead with clarity, confidence, and consistency.' },
    { icon: Users, text: 'Hybrid becomes a genuine strategic advantage.' },
    { icon: Heart, text: 'Change becomes more human, more sustainable, and more effective.' },
    { icon: Shield, text: 'Your EVP becomes something people genuinely feel, not just read.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden noise-overlay">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <SectionIntro
          label="The Opportunity"
          heading="When organisations become intentional about trust, everything shifts."
          description="Trust is not a soft metric. It is the operating system that determines whether leadership, change, and culture actually work."
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} blur>
              <div className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-stone/30 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
                <item.icon size={24} className="text-gold mb-5" strokeWidth={1.5} />
                <p className="text-navy leading-relaxed">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust–Performance Gap Framework ─── */
function TrustFramework() {
  const [activeState, setActiveState] = useState<'low' | 'high'>('low');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const lowTrust = [
    'People hold back and disengage.',
    'Leadership becomes inconsistent.',
    'Change meets resistance and stalls.',
    'Engagement drops across the organisation.',
    'Retention suffers, and talent walks.',
  ];

  const highTrust = [
    'People contribute openly and with confidence.',
    'Managers lead more effectively.',
    'Change is easier to embed and sustain.',
    'Culture feels more consistent and authentic.',
    'Performance grows across every measure.',
  ];

  const items = activeState === 'low' ? lowTrust : highTrust;

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-warm-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionIntro
          label="Signature Framework"
          heading="The Trust\u2013Performance Gap"
          description="When trust weakens, performance suffers. When trust strengthens, everything improves. This is the central dynamic shaping every organisation."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex bg-stone/50 rounded-full p-1">
              <button
                onClick={() => setActiveState('low')}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeState === 'low' ? 'text-white' : 'text-slate hover:text-navy'
                }`}
              >
                Low Trust
              </button>
              <button
                onClick={() => setActiveState('high')}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeState === 'high' ? 'text-white' : 'text-slate hover:text-navy'
                }`}
              >
                High Trust
              </button>
              <motion.div
                layout
                className={`absolute top-1 bottom-1 rounded-full ${
                  activeState === 'low' ? 'bg-charcoal' : 'bg-navy'
                }`}
                style={{
                  left: activeState === 'low' ? '4px' : '50%',
                  right: activeState === 'low' ? '50%' : '4px',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </div>
          </div>

          {/* Trust meter */}
          <div className="mb-12">
            <div className="relative h-2 bg-stone/40 rounded-full overflow-hidden">
              <motion.div
                className={`absolute top-0 left-0 h-full rounded-full ${
                  activeState === 'low'
                    ? 'bg-gradient-to-r from-red-400/70 to-amber-400/70'
                    : 'bg-gradient-to-r from-gold to-emerald-400/70'
                }`}
                animate={{ width: activeState === 'low' ? '25%' : '85%' }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted">
              <span>Low Trust</span>
              <span>High Trust</span>
            </div>
          </div>

          {/* Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeState}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4"
            >
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 ${
                    activeState === 'low'
                      ? 'border-red-200/50 bg-red-50/30'
                      : 'border-emerald-200/50 bg-emerald-50/30'
                  }`}
                >
                  <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                    activeState === 'low' ? 'bg-red-400/60' : 'bg-emerald-400/60'
                  }`} />
                  <p className="text-navy/80">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── How I Help ─── */
function HowIHelp() {
  const areas = [
    { icon: Users, title: 'Leadership & Manager Capability', desc: 'Equipping managers with the confidence, tools, and clarity to lead through complexity.' },
    { icon: Shield, title: 'Trust & Psychological Safety', desc: 'Building the conditions where people speak up, take risks, and perform at their best.' },
    { icon: Compass, title: 'Hybrid Working Design', desc: 'Making hybrid a strategic advantage, not a source of confusion or inequity.' },
    { icon: Heart, title: 'Change & Transformation Support', desc: 'Helping change land well, reducing fatigue and building sustainable momentum.' },
    { icon: Lightbulb, title: 'Leadership Development', desc: 'Developing leaders who build trust, lead with clarity, and create consistent experiences.' },
    { icon: BarChart3, title: 'Culture, EVP & Employee Experience', desc: 'Closing the gap between what organisations say and what people actually feel.' },
    { icon: MessageCircle, title: 'Employee Voice & Listening Strategy', desc: 'Turning insight into meaningful action that people can see and feel.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-sand relative overflow-hidden noise-overlay">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <SectionIntro
          label="How I Help"
          heading="Practical support across the areas that matter most."
          description="Every engagement is shaped around your specific context, challenges, and ambitions. Here are the areas where I work most frequently."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone/30 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-500">
                  <area.icon size={22} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-navy mb-3">{area.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{area.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── When Organisations Call Me ─── */
function WhenTheyCall() {
  const triggers = [
    'Our managers are struggling and need clearer support.',
    'We are going through change, and trust is starting to wobble.',
    'Our employee experience feels inconsistent across teams.',
    'Hybrid is creating inequity, confusion, or disconnection.',
    'We have lots of people data, but not enough meaningful action.',
    'We need our culture and values to feel real again.',
  ];

  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionIntro
          label="Sound Familiar?"
          heading="When organisations typically call me."
          align="center"
        />
        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {triggers.map((trigger, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group flex items-start gap-4 p-6 rounded-xl border border-stone/40 hover:border-gold/30 bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-gold/5 cursor-default">
                <ChevronRight size={18} className="text-gold mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                <p className="text-navy/80 leading-relaxed italic font-serif">&ldquo;{trigger}&rdquo;</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Case Studies ─── */
function FeaturedCaseStudies() {
  const cases = [
    { title: 'Flexible Working: Creating Fairness and Inclusion', tag: 'Hybrid & Inclusion', color: 'from-navy to-navy-light' },
    { title: 'TUPE Transformation: Rebuilding Trust at Scale', tag: 'Change & Trust', color: 'from-charcoal to-navy' },
    { title: 'Hybrid Working: Supporting the Forgotten Colleagues', tag: 'Hybrid Working', color: 'from-navy-light to-charcoal' },
    { title: 'Embedding a Management Charter', tag: 'Leadership', color: 'from-charcoal to-navy-light' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden noise-overlay">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionIntro
            label="Featured Work"
            heading="Case studies in trust, leadership, and change."
          />
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors shrink-0"
          >
            View all case studies
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link href="/case-studies">
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} grain-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Abstract shapes */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-white/30" />
                    <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full border border-white/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-white/10 backdrop-blur-sm rounded-full text-white/80 mb-4">
                      {c.tag}
                    </span>
                    <h3 className="font-serif text-xl lg:text-2xl text-white leading-snug group-hover:text-gold-light transition-colors duration-300">
                      {c.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Work With Me ─── */
function WhyWorkWithMe() {
  const points = [
    { title: 'Practical', desc: 'Tools and frameworks leaders can use immediately, not theory that sits on a shelf.' },
    { title: 'Trust-centred', desc: 'Every engagement is rooted in trust, clarity, and psychological safety.' },
    { title: 'Evidence-led', desc: 'Insight grounded in data and real organisational experience, not assumptions.' },
    { title: 'People & performance', desc: 'Understands that the best cultures serve both people and commercial outcomes equally.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy grain-overlay relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gold/3 blur-[140px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <SectionIntro
          label="Why Organisations Choose Me"
          heading="Human. Honest. Impactful."
          description="I bring a distinctive blend of strategic depth, practical capability, and relational warmth to every engagement."
          align="center"
          dark
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl glass hover:border-gold/20 transition-all duration-500">
                <h3 className="font-serif text-xl text-white mb-3">{point.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{point.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Working Together ─── */
function WorkingTogether() {
  const steps = [
    { num: '01', title: 'Understand', desc: 'We start by listening deeply \u2014 to your context, your challenges, and what matters most to your people and your organisation.' },
    { num: '02', title: 'Focus', desc: 'We identify the highest-impact areas and build a focused plan that addresses root causes, not just symptoms.' },
    { num: '03', title: 'Equip', desc: 'I provide practical tools, frameworks, and capability-building that leaders and managers can use immediately.' },
    { num: '04', title: 'Embed', desc: 'We work together to embed lasting change \u2014 creating sustainable shifts in culture, trust, and performance.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionIntro
          label="The Journey"
          heading="Working together."
          description="A clear, proven approach that moves from understanding to lasting impact."
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="relative text-center group">
                <div className="mb-6">
                  <span className="font-serif text-5xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-navy mb-3">{step.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8">
                    <div className="w-full h-px bg-gradient-to-r from-gold/30 to-transparent" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <TensionSection />
      <FamiliarSection />
      <OpportunitySection />
      <TrustFramework />
      <HowIHelp />
      <WhenTheyCall />
      <FeaturedCaseStudies />
      <WhyWorkWithMe />
      <WorkingTogether />
      <CTASection />
    </>
  );
}

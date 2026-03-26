'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionIntro from '@/components/ui/SectionIntro';
import CTASection from '@/components/ui/CTASection';
import CultureBridge from '@/components/sections/CultureBridge';
import HowIWork from '@/components/sections/HowIWork';
import TriggerJourney from '@/components/sections/TriggerJourney';
import ServicePillarCards from '@/components/sections/ServicePillarCards';
import WorkingWithMe from '@/components/sections/WorkingWithMe';
import TrustSpectrum from '@/components/sections/TrustSpectrum';
import FairnessFramework from '@/components/sections/FairnessFramework';
import ClarityThroughChange from '@/components/sections/ClarityThroughChange';
import CredibilityBlock from '@/components/sections/CredibilityBlock';

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
            Culture is not a strategy deck.{' '}
            <span className="text-gold">It is what people experience</span> every day.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl"
          >
            I help organisations close the gap between the culture they aspire to and the one people actually experience. Practical support for trust, leadership, and change.
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
            heading="Real problems. Real outcomes."
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

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <CultureBridge />
      <HowIWork />
      <TriggerJourney />
      <ServicePillarCards />
      <FeaturedCaseStudies />
      <TrustSpectrum />
      <FairnessFramework />
      <ClarityThroughChange />
      <WorkingWithMe />
      <CredibilityBlock />
      <CTASection
        heading="Ready to start a conversation?"
        description="30 minutes, no obligation. Just an honest exploration of what is happening and whether I can help."
        primaryLabel="Book a Conversation"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';

const testimonials = [
  {
    quote: "Faye brings a rare combination of strategic thinking and practical delivery. She helped us navigate a complex transformation with clarity and care.",
    name: "Brent Boxley",
    role: "Senior Leader",
  },
  {
    quote: "Working with Faye was a genuine partnership. She understood our challenges quickly and delivered real, lasting change.",
    name: "Garry Beveridge",
    role: "HR Director",
  },
  {
    quote: "Faye has an exceptional ability to build trust and create psychological safety. Our managers are now far more confident and consistent.",
    name: "Nick Raymond",
    role: "People Leader",
  },
  {
    quote: "Practical, human-centred and always focused on what matters. Faye helped us close the gap between our values and our reality.",
    name: "Alison Grace",
    role: "HR Business Partner",
  },
  {
    quote: "Faye brought calm and clarity to a challenging period of change. Her support made a real difference to our people and our culture.",
    name: "Carol Antuofermo",
    role: "Senior HR Leader",
  },
  {
    quote: "Faye is the trusted partner every HR team needs. She delivers with integrity, insight and genuine care for people.",
    name: "Mark Baillie",
    role: "Executive Leader",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="testimonials" className="py-24 lg:py-32 bg-navy grain-overlay relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gold/5 blur-[120px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              What People Say
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight max-w-3xl mx-auto">
              Trusted by HR leaders and organisations.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/20 transition-all duration-500"
              >
                <Quote size={24} className="text-gold/40 mb-4" />
                <p className="text-white/80 leading-relaxed text-base mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/40 text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-12 text-center">
            <Link
              href="https://www.linkedin.com/in/fayewall/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
            >
              View more recommendations on LinkedIn
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

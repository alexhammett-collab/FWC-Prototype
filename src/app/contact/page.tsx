'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import MockCalendar from '@/components/ui/MockCalendar';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-navy grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-gold/5 blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="33%" y1="0" x2="33%" y2="100%" stroke="white" strokeWidth="0.5" />
            <line x1="66%" y1="0" x2="66%" y2="100%" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight max-w-3xl"
          >
            Let’s talk.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            Whether you have a specific challenge or just want to explore, I would welcome a conversation.
          </motion.p>
        </div>
      </section>

      {/* Contact Options + Form */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Options */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div>
                  <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
                    How to Reach Me
                  </p>
                  <p className="text-slate leading-relaxed">
                    No obligation. The first conversation is about understanding where you are.
                  </p>
                </div>
              </ScrollReveal>

              {/* Contact cards */}
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-2xl border border-stone/40 bg-white/50 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                    <Calendar size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2">Book a Conversation</h3>
                  <p className="text-sm text-slate leading-relaxed mb-4">
                    30 minutes, no obligation.
                  </p>
                  {/* Placeholder for calendar booking link */}
                  <a
                    href="#booking"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
                  >
                    View available times
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl border border-stone/40 bg-white/50 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                    <Mail size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2">Email Directly</h3>
                  <p className="text-sm text-slate leading-relaxed mb-4">
                    I will respond within one working day.
                  </p>
                  <a
                    href="mailto:hello@fwc.consulting"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
                  >
                    hello@fwc.consulting
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl border border-stone/40 bg-white/50 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                    <MessageCircle size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2">LinkedIn</h3>
                  <p className="text-sm text-slate leading-relaxed mb-4">
                    Insights and updates.
                  </p>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
                  >
                    Connect on LinkedIn
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <div className="p-8 lg:p-10 rounded-2xl bg-white border border-stone/30 shadow-sm">
                  {!submitted ? (
                    <>
                      <h2 className="font-serif text-2xl text-navy mb-2">Send a Message</h2>
                      <p className="text-sm text-slate mb-8">
                        Tell me a bit about your situation.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-xs tracking-wider uppercase text-slate/80 font-medium mb-2">
                              Name
                            </label>
                            <input
                              id="name"
                              type="text"
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-stone/50 bg-cream/30 text-navy text-sm placeholder:text-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-xs tracking-wider uppercase text-slate/80 font-medium mb-2">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-stone/50 bg-cream/30 text-navy text-sm placeholder:text-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="organisation" className="block text-xs tracking-wider uppercase text-slate/80 font-medium mb-2">
                            Organisation
                          </label>
                          <input
                            id="organisation"
                            type="text"
                            value={formState.organisation}
                            onChange={(e) => setFormState({ ...formState, organisation: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-stone/50 bg-cream/30 text-navy text-sm placeholder:text-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                            placeholder="Your organisation (optional)"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-xs tracking-wider uppercase text-slate/80 font-medium mb-2">
                            Message
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-stone/50 bg-cream/30 text-navy text-sm placeholder:text-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                            placeholder="What are you working through?"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide bg-navy text-warm-white rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
                        >
                          Send Message
                          <ArrowRight size={16} />
                        </button>
                        <p className="text-xs text-muted">
                          Response within one working day. Completely confidential.
                        </p>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                        <Mail size={28} className="text-gold" />
                      </div>
                      <h3 className="font-serif text-2xl text-navy mb-3">Thank you for reaching out.</h3>
                      <p className="text-slate leading-relaxed max-w-md mx-auto">
                        I have received your message and will respond within one working day.
                      </p>
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Embed Placeholder */}
      <section id="booking" className="py-24 lg:py-32 bg-cream noise-overlay relative overflow-hidden scroll-mt-20">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              Book Directly
            </p>
          </ScrollReveal>
          <TextReveal
            text="Schedule a conversation at a time that works for you."
            as="h2"
            className="font-serif text-3xl md:text-4xl text-navy leading-[1.15] tracking-tight"
          />
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              30 minutes, no obligation. Pick a time that works.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <MockCalendar />
          </ScrollReveal>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-24 lg:py-32 bg-navy grain-overlay relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gold/3 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              What to Expect
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-[1.15] tracking-tight">
              A conversation, not a sales pitch.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
              No sales pitch. Just a straightforward conversation about your context and whether I can help.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { title: 'Confidential', desc: 'Everything you share stays between us.' },
                { title: 'No obligation', desc: 'The first conversation is always free and open.' },
                { title: 'Honest advice', desc: 'If I am not the right fit, I will say so.' },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <div className="p-6 rounded-2xl glass text-center hover:border-gold/20 transition-all duration-500">
                    <h3 className="font-serif text-lg text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

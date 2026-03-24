'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';

const footerLinks = {
  Navigate: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ],
  Services: [
    { href: '/services#leadership', label: 'Leadership & Manager Capability' },
    { href: '/services#trust', label: 'Trust & Psychological Safety' },
    { href: '/services#hybrid', label: 'Hybrid Working' },
    { href: '/services#change', label: 'Change & Transformation' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white/80 grain-overlay">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top CTA band */}
        <ScrollReveal>
          <div className="py-16 lg:py-20 border-b border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <p className="text-gold text-sm tracking-widest uppercase mb-4">Ready to begin?</p>
                <h2 className="font-serif text-3xl lg:text-4xl text-white leading-tight max-w-lg">
                  Let&apos;s start a conversation.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide bg-gold text-navy rounded-full hover:bg-gold-light transition-colors duration-300 shrink-0"
              >
                Book a Conversation
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Links grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-xl text-white">
              <span className="font-semibold">FWC</span>
              <span className="text-gold ml-1">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Trust, leadership, and culture advisory.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs tracking-widest uppercase text-gold mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gold mb-6">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-300">
                  Book a Conversation
                </Link>
              </li>
              <li>
                <a href="mailto:hello@fwc.consulting" className="hover:text-white transition-colors duration-300">
                  hello@fwc.consulting
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} FWC Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

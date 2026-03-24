'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // All pages have dark hero sections, so nav text should always be light before scroll
  const isLight = !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-warm-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(201,169,110,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group relative z-10">
              <span className={`font-serif text-xl tracking-tight transition-colors duration-500 ${isLight ? 'text-white' : 'text-navy'}`}>
                <span className="font-semibold">FWC</span>
                <span className="text-gold ml-1">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 ${
                    pathname === link.href
                      ? (isLight ? 'text-white font-medium' : 'text-navy font-medium')
                      : (isLight ? 'text-white/70 hover:text-white' : 'text-slate hover:text-navy')
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute bottom-0 left-4 right-4 h-px ${isLight ? 'bg-gold-light' : 'bg-gold'}`}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`ml-6 px-6 py-2.5 text-sm font-medium tracking-wide rounded-full transition-colors duration-300 ${isLight ? 'bg-gold text-navy hover:bg-gold-light' : 'bg-navy text-warm-white hover:bg-navy-light'}`}
              >
                Book a Conversation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${isLight && !isMobileOpen ? 'text-white' : 'text-navy'}`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-warm-white"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-3xl font-serif tracking-tight py-3 transition-colors ${
                      pathname === link.href ? 'text-navy' : 'text-slate hover:text-navy'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="px-8 py-3.5 text-base font-medium bg-navy text-warm-white rounded-full hover:bg-navy-light transition-colors"
                >
                  Book a Conversation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

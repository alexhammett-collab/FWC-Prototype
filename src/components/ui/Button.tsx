'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants = {
  primary: 'bg-navy text-warm-white hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20',
  secondary: 'bg-gold text-navy hover:bg-gold-light',
  outline: 'border border-navy/20 text-navy hover:bg-navy hover:text-warm-white',
  ghost: 'text-navy hover:text-gold',
};

const sizes = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-base',
};

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-medium tracking-wide rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
}

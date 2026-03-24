'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/animations/SmoothScroll';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}

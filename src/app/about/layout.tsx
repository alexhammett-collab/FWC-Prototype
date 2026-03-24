import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Built on experience, driven by purpose. Learn about the consultant helping organisations close the gap between aspired culture and lived experience.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

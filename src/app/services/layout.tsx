import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Practical advisory support across leadership capability, trust and psychological safety, hybrid working, change transformation, and employee experience.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

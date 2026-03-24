import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real-world examples of how a trust-centred approach creates lasting impact across leadership, culture, hybrid working, and organisational change.',
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

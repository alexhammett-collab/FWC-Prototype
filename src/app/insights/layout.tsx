import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Perspectives on trust, leadership, culture, and the challenges shaping modern organisations. Written to challenge assumptions and offer practical clarity.',
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

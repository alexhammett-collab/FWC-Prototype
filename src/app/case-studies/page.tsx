'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import CTASection from '@/components/ui/CTASection';

const caseStudies = [
  {
    title: 'Flexible Working: Creating Fairness and Inclusion',
    tag: 'Hybrid & Inclusion',
    pillars: ['Hybrid & Flexible Working', 'Trust & Psychological Safety'],
    context: 'A large public-sector organisation with a diverse, multi-site workforce.',
    issue: 'Flexible working was inconsistent. Frustration, perceived favouritism, and disengagement were growing.',
    approach: 'Listening sessions, a principles-based fairness framework, and manager training to apply it consistently.',
    shift: 'Employees described the approach as genuinely fair. Flexible working grievances dropped by over 40%.',
    takeaway: 'Fairness is not about treating everyone the same. It is about making the process transparent and consistent.',
    gradient: 'from-navy via-navy-light to-charcoal',
  },
  {
    title: 'TUPE Transformation: Rebuilding Trust at Scale',
    tag: 'Change & Trust',
    pillars: ['Change & Transformation', 'Trust & Psychological Safety'],
    context: 'A regulated organisation following a major TUPE transfer of 300+ employees.',
    issue: 'Trust had eroded. Key talent was at risk and cultural integration was stalling.',
    approach: 'Transparent communications, manager support, cultural onboarding, and structured listening.',
    shift: 'Trust scores improved within six months. Turnover stabilised and employees felt more included.',
    takeaway: 'In major transitions, trust determines whether people stay and engage — or quietly leave.',
    gradient: 'from-charcoal via-navy to-navy-light',
  },
  {
    title: 'Hybrid Working: Supporting the Forgotten Colleagues',
    tag: 'Hybrid Working',
    pillars: ['Hybrid & Flexible Working', 'Leadership & Manager Capability'],
    context: 'A professional services firm with a mix of office-based and site-based roles.',
    issue: 'Site-based colleagues felt excluded. A sense of two-tier working was damaging morale.',
    approach: 'Mapped hybrid experience across all groups, identified inequities, and co-designed principles extending flexibility to every role.',
    shift: 'Site-based colleagues reported significantly improved fairness. The organisation was recognised externally for its approach.',
    takeaway: 'Hybrid only works when it works for everyone — not just those who can work from home.',
    gradient: 'from-navy-light via-charcoal to-navy',
  },
  {
    title: 'Embedding a Management Charter to Improve Engagement and Retention',
    tag: 'Leadership',
    pillars: ['Leadership & Manager Capability', 'Trust & Psychological Safety'],
    context: 'A growing organisation where manager inconsistency was the top driver of dissatisfaction.',
    issue: 'Managers operating to different standards. The organisation was losing people to poor management, not competitors.',
    approach: 'Co-created a Management Charter with employee input, designed toolkits, and built accountability into existing processes.',
    shift: 'Manager capability scores rose. Engagement and retention improved in previously struggling teams.',
    takeaway: 'Clear, visible, supported management expectations help both managers and teams thrive.',
    gradient: 'from-charcoal to-navy-light via-navy',
  },
  {
    title: 'Team Resilience and Wellbeing: Supporting Managers Through Change',
    tag: 'Wellbeing & Change',
    pillars: ['Change & Transformation', 'Leadership & Manager Capability'],
    context: 'A healthcare organisation undergoing restructuring.',
    issue: 'Managers absorbing enormous emotional pressure. Burnout and sickness absence were rising.',
    approach: 'Peer learning, resilience workshops, and practical tools for leading through uncertainty.',
    shift: 'Manager confidence and wellbeing improved. Supported teams showed higher engagement and lower absence.',
    takeaway: 'Supporting managers during change is not a luxury — it is a necessity.',
    gradient: 'from-navy to-charcoal via-navy-light',
  },
  {
    title: 'Embedding Mission, Vision and Values Across a Complex Organisation',
    tag: 'Culture & Values',
    pillars: ['Trust & Psychological Safety', 'Change & Transformation'],
    context: 'A multi-site organisation that had refreshed its values but struggled to make them real.',
    issue: 'Values on walls, but a gap between stated culture and everyday experience.',
    approach: 'Translated values into behaviours and everyday moments. Created storytelling and recognition strategies aligned to them.',
    shift: 'Values became part of recruitment, performance, and recognition — not just posters.',
    takeaway: 'Values only matter when people can see and feel them in how leaders behave.',
    gradient: 'from-navy-light to-navy via-charcoal',
  },
  {
    title: 'Recognition Redesign: Using Data to Drive Culture Change',
    tag: 'Recognition & Data',
    pillars: ['Trust & Psychological Safety', 'Leadership & Manager Capability'],
    context: 'An organisation whose recognition programme had become stale and transactional.',
    issue: 'Unevenly distributed, poorly understood, and disconnected from culture.',
    approach: 'Analysed recognition data alongside engagement metrics. Redesigned the programme, trained managers, and built in feedback loops.',
    shift: 'Participation increased significantly. The programme became a visible driver of culture.',
    takeaway: 'Recognition done well is one of the most powerful levers for culture and engagement.',
    gradient: 'from-charcoal via-navy-light to-navy',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-navy grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gold/5 blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="0.5" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" />
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6"
          >
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight max-w-4xl"
          >
            Work that made a difference.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            A selection of real engagements across leadership, culture, hybrid working, and change.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-20 lg:space-y-28">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={0.1}>
                <article className="group">
                  {/* Header card with gradient */}
                  <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${cs.gradient} grain-overlay mb-8`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full border border-white/20" />
                      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 rounded-full border border-white/15" />
                      <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full border border-white/10" />
                    </div>
                    <div className="relative z-10 p-10 lg:p-14">
                      <span className="inline-block px-4 py-1.5 text-xs tracking-wider uppercase bg-white/10 backdrop-blur-sm rounded-full text-white/80 mb-6">
                        {cs.tag}
                      </span>
                      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-snug max-w-2xl">
                        {cs.title}
                      </h2>
                    </div>
                  </div>

                  {/* Pillar tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cs.pillars.map((pillar, j) => (
                      <span key={j} className="px-3 py-1 text-xs tracking-wider bg-gold/10 text-gold border border-gold/20 rounded-full">
                        {pillar}
                      </span>
                    ))}
                  </div>

                  {/* Intervention map */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 rounded-xl border border-stone/30 bg-white/50">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-slate/50 font-medium mb-3">Context</h3>
                      <p className="text-navy/80 leading-relaxed text-sm">{cs.context}</p>
                    </div>
                    <div className="p-6 rounded-xl border border-red-200/40 bg-red-50/20">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-red-400/70 font-medium mb-3">The Issue</h3>
                      <p className="text-navy/80 leading-relaxed text-sm">{cs.issue}</p>
                    </div>
                    <div className="p-6 rounded-xl border border-gold/20 bg-gold/5">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">What Faye Did</h3>
                      <p className="text-navy/80 leading-relaxed text-sm">{cs.approach}</p>
                    </div>
                    <div className="p-6 rounded-xl border border-emerald-200/40 bg-emerald-50/20">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-emerald-600/70 font-medium mb-3">Shift Created</h3>
                      <p className="text-navy/80 leading-relaxed text-sm">{cs.shift}</p>
                    </div>
                  </div>

                  {/* Takeaway */}
                  <div className="mt-8 p-8 rounded-2xl bg-sand/60 border border-stone/30">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">Key Takeaway</h3>
                    <p className="font-serif text-lg text-navy leading-relaxed italic">
                      &ldquo;{cs.takeaway}&rdquo;
                    </p>
                  </div>

                  {/* Divider */}
                  {i < caseStudies.length - 1 && (
                    <div className="mt-20 lg:mt-28 divider-gold" />
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Facing a similar challenge?"
        description="Let\u2019s talk about what a trust-centred approach could do for your organisation."
      />
    </>
  );
}

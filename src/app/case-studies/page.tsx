'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import CTASection from '@/components/ui/CTASection';

const caseStudies = [
  {
    title: 'TUPE Transformation — Rebuilding Trust and Engagement',
    tag: 'Change & Trust',
    pillars: ['Change & Transformation', 'Trust & Psychological Safety'],
    context: 'A large public-sector organisation managing a financially regulated TUPE transfer involving around 600 employees and 400 temporary workers.',
    issue: 'Many employees had been through multiple TUPE transfers before — experiences that often failed to meet expectations. This history created low trust, change fatigue and disengagement, with a real risk of losing key talent during the transition.',
    approach: 'I designed and delivered a people-centred programme including a clear communication and engagement plan, a refreshed onboarding experience, leadership and manager training, and collaboration with technology teams. The focus was on transparency, consistency and helping people feel supported rather than done to.',
    shift: 'Employees reported a positive transfer experience, with stronger engagement and greater confidence in future plans. This shift helped stabilise the workforce, reduce attrition risk and rebuild trust during a complex period of change.',
    takeaway: 'In major transitions, trust determines whether people stay and engage — or quietly leave.',
    gradient: 'from-charcoal via-navy to-navy-light',
  },
  {
    title: 'Hybrid Working — Identifying and Supporting Disengaged Colleagues',
    tag: 'Hybrid Working',
    pillars: ['Hybrid & Flexible Working', 'Leadership & Manager Capability'],
    context: 'A large public-sector organisation with a diverse, multi-site workforce experiencing challenges with hybrid working patterns and declining connection.',
    issue: 'Many colleagues were primarily working from home, with some not having been in an office for up to 12 months. This raised concerns around wellbeing, productivity, engagement and early signs of disengagement.',
    approach: 'I led a data-driven and people-centred approach including commissioning a cross-data report using access card data, expenses and HR records, partnering with HRBPs and Executive leaders, designing a manager toolkit and conversation approach, and supporting managers to co-create realistic plans for healthier hybrid working.',
    shift: 'A rerun of the data report six months later showed a significant reduction in the number of colleagues who had not been in an office for 12 months, indicating improved connection, visibility and engagement across the workforce.',
    takeaway: 'Hybrid only works when it works for everyone — not just those who can work from home.',
    gradient: 'from-navy-light via-charcoal to-navy',
  },
  {
    title: 'Embedding a Management Charter to Improve Engagement and Retention',
    tag: 'Leadership',
    pillars: ['Leadership & Manager Capability', 'Trust & Psychological Safety'],
    context: 'An organisation where managers were operating with inconsistent standards and behaviours.',
    issue: 'The employee engagement survey highlighted a clear need to strengthen manager capability, improve consistency and boost engagement and retention.',
    approach: 'I partnered with HR and business leaders to design and embed a practical, behaviour-led Management Charter including co-creation with leaders and employees, manager toolkits and training, a six-month follow-up listening exercise, and a clear insight-driven report with recommendations.',
    shift: 'Within 12 months, adoption of the Management Charter significantly improved, leading to higher employee engagement scores and more consistent management behaviours. The charter became a core part of how managers led, communicated and supported their teams.',
    takeaway: 'Clear, visible, supported management expectations help both managers and teams thrive.',
    gradient: 'from-charcoal to-navy-light via-navy',
  },
  {
    title: 'Launching a New Mission, Vision and Values',
    tag: 'Culture & Values',
    pillars: ['Trust & Psychological Safety', 'Change & Transformation'],
    context: 'A new CEO brought a refreshed strategic direction, requiring a new Mission, Vision and Values to be launched and embedded across the organisation.',
    issue: 'The organisation needed a clear, engaging way to launch, communicate and embed the new Mission, Vision and Values so employees understood them, believed in them and lived them day-to-day.',
    approach: 'I led the people-focused approach including a full audit of HR policies, processes and training, a practical plan to integrate values into the employee lifecycle, collaboration with Facilities, Marketing and HR teams, and co-design and facilitation of the manager launch event attended by over 650 managers.',
    shift: 'The annual employee engagement survey showed employees not only understood the new values but believed in them — with improved scores and positive open-text comments demonstrating that the values were being lived across the organisation.',
    takeaway: 'Values only matter when people can see and feel them in how leaders behave.',
    gradient: 'from-navy-light to-navy via-charcoal',
  },
  {
    title: 'Business Unit Transformation and Employee Engagement',
    tag: 'Change & Engagement',
    pillars: ['Change & Transformation', 'Leadership & Manager Capability'],
    context: 'A business unit with strong emotional attachment to its legacy brand was undergoing a full rebrand and restructure, creating a significant people and culture challenge.',
    issue: 'Employees needed support to move from a brand they deeply identified with to a new identity, strategy and direction. The HR Director needed a clear, human-centred approach to change communication, engagement, and manager capability.',
    approach: 'Working within the Engagement and Communication workstream, I designed a practical approach including a phased communication plan aligned to the change timeline, manager training and toolkits, employee listening groups across key demographics, and clear accessible messaging to build understanding and reduce resistance.',
    shift: 'Engagement and communication interventions helped protect employee engagement during the rebrand. The annual engagement survey showed stronger understanding of the new brand, improved trust in leadership communication and smoother transition through the change.',
    takeaway: 'Supporting people through change is not a luxury — it is a necessity.',
    gradient: 'from-navy to-charcoal via-navy-light',
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
            className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl"
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
                      <p className="text-navy leading-relaxed text-base">{cs.context}</p>
                    </div>
                    <div className="p-6 rounded-xl border border-red-200/40 bg-red-50/20">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-red-400/70 font-medium mb-3">The Issue</h3>
                      <p className="text-navy leading-relaxed text-base">{cs.issue}</p>
                    </div>
                    <div className="p-6 rounded-xl border border-gold/20 bg-gold/5">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">What Faye Did</h3>
                      <p className="text-navy leading-relaxed text-base">{cs.approach}</p>
                    </div>
                    <div className="p-6 rounded-xl border border-emerald-200/40 bg-emerald-50/20">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-emerald-600/70 font-medium mb-3">Shift Created</h3>
                      <p className="text-navy leading-relaxed text-base">{cs.shift}</p>
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

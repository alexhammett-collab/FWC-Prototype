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
    challenge: 'A large public-sector organisation needed to redesign its flexible working policy to ensure fairness and consistency across a diverse, multi-site workforce.',
    stake: 'Without a clear and equitable approach, inconsistency was breeding frustration, perceived favouritism, and growing disengagement across teams.',
    approach: 'Conducted listening sessions across the organisation, designed a principles-based framework rooted in fairness and trust, and trained managers to apply it with confidence and consistency.',
    outcome: 'A flexible working approach that employees described as genuinely fair. Manager confidence increased significantly, and grievances related to flexible working dropped by over 40%.',
    takeaway: 'Fairness is not about treating everyone the same. It is about ensuring everyone feels the process is transparent, consistent, and rooted in trust.',
    gradient: 'from-navy via-navy-light to-charcoal',
  },
  {
    title: 'TUPE Transformation: Rebuilding Trust at Scale',
    tag: 'Change & Trust',
    challenge: 'Following a major TUPE transfer, over 300 employees were navigating uncertainty about their roles, leadership, and future within the new organisation.',
    stake: 'Trust had eroded significantly. Key talent was at risk, engagement scores had fallen, and the cultural integration was stalling.',
    approach: 'Designed a trust-rebuilding programme that combined transparent leadership communications, manager capability support, cultural onboarding, and structured employee listening.',
    outcome: 'Trust scores improved within six months. Voluntary turnover stabilised, and employees reported feeling significantly more included and informed about the direction of the organisation.',
    takeaway: 'In times of major transition, trust is the currency that determines whether people stay, engage, and contribute \u2014 or quietly disengage.',
    gradient: 'from-charcoal via-navy to-navy-light',
  },
  {
    title: 'Hybrid Working: Supporting the Forgotten Colleagues',
    tag: 'Hybrid Working',
    challenge: 'A professional services firm had implemented hybrid working but discovered that site-based and frontline colleagues felt increasingly excluded from the benefits and flexibility others enjoyed.',
    stake: 'A growing sense of two-tier working was damaging morale, creating resentment, and undermining the organisation\u2019s stated commitment to equity and inclusion.',
    approach: 'Mapped the hybrid experience across all employee groups, identified the specific inequities, and co-designed a set of hybrid principles that extended meaningful flexibility to every role.',
    outcome: 'Site-based colleagues reported a significant improvement in perceived fairness. The organisation was recognised externally for its inclusive approach to hybrid working.',
    takeaway: 'Hybrid working only works when it works for everyone \u2014 not just those who can work from home.',
    gradient: 'from-navy-light via-charcoal to-navy',
  },
  {
    title: 'Embedding a Management Charter to Improve Engagement and Retention',
    tag: 'Leadership',
    challenge: 'Managers across the organisation were operating with wildly different standards. Employee feedback consistently highlighted inconsistency in leadership quality as a key driver of dissatisfaction.',
    stake: 'Without clear expectations, the organisation was losing good people to poor management \u2014 not to competitors.',
    approach: 'Co-created a Management Charter with input from employees at every level. Designed practical toolkits, ran training sessions, and built accountability mechanisms into existing processes.',
    outcome: 'Manager capability scores rose across the board. Employee engagement improved in the areas most connected to line management quality, and retention improved in previously struggling teams.',
    takeaway: 'When organisations make management expectations clear, visible, and supported, both managers and their teams thrive.',
    gradient: 'from-charcoal to-navy-light via-navy',
  },
  {
    title: 'Team Resilience and Wellbeing: Supporting Managers Through Change',
    tag: 'Wellbeing & Change',
    challenge: 'A healthcare organisation undergoing restructuring found that its managers were absorbing enormous emotional pressure while trying to support their teams through uncertainty.',
    stake: 'Manager burnout was rising, sickness absence was increasing, and the organisation risked losing the very people it needed most to navigate the change.',
    approach: 'Designed a targeted support programme for managers that combined peer learning, resilience workshops, and practical tools for leading through uncertainty while protecting their own wellbeing.',
    outcome: 'Manager confidence and self-reported wellbeing improved. Teams led by supported managers showed higher engagement and lower absence during the restructuring period.',
    takeaway: 'You cannot pour from an empty cup. Supporting managers is not a luxury \u2014 it is a strategic necessity during change.',
    gradient: 'from-navy to-charcoal via-navy-light',
  },
  {
    title: 'Embedding Mission, Vision and Values Across a Complex Organisation',
    tag: 'Culture & Values',
    challenge: 'A multi-site organisation had refreshed its mission, vision, and values but struggled to make them feel real and relevant across diverse teams and locations.',
    stake: 'The values existed on paper and on walls, but employees reported a significant gap between the stated culture and their everyday experience.',
    approach: 'Worked with leaders and teams across the organisation to translate the values into behaviours, decisions, and everyday moments. Created storytelling strategies and recognition programmes aligned to the values.',
    outcome: 'Employees reported a meaningful shift in how the values showed up in daily work. The values became part of recruitment, performance, and recognition \u2014 not just posters.',
    takeaway: 'Values only matter when people can see them, feel them, and recognise them in the behaviour of their leaders and colleagues.',
    gradient: 'from-navy-light to-navy via-charcoal',
  },
  {
    title: 'Recognition Redesign: Using Data to Drive Culture Change',
    tag: 'Recognition & Data',
    challenge: 'An organisation\u2019s recognition programme had become stale and transactional. It was not reinforcing the behaviours or values that mattered most.',
    stake: 'Recognition was unevenly distributed, poorly understood, and had little connection to the culture the organisation was trying to build.',
    approach: 'Analysed recognition data alongside engagement and performance metrics. Redesigned the programme to align with organisational values, trained managers, and built in regular feedback loops.',
    outcome: 'Recognition participation increased significantly. Employees reported feeling more valued, and the programme became a visible driver of the culture the organisation aspired to.',
    takeaway: 'Recognition is not a perk. When done well, it is one of the most powerful levers for reinforcing culture and driving engagement.',
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
            Real challenges. Meaningful outcomes.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            Every organisation faces unique challenges. These case studies illustrate how a trust-centred, practical approach creates lasting impact across leadership, culture, and change.
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

                  {/* Content grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">The Challenge</h3>
                        <p className="text-navy/80 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">What Was at Stake</h3>
                        <p className="text-navy/80 leading-relaxed">{cs.stake}</p>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">The Approach</h3>
                        <p className="text-navy/80 leading-relaxed">{cs.approach}</p>
                      </div>
                      <div>
                        <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">The Outcome</h3>
                        <p className="text-navy/80 leading-relaxed">{cs.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Takeaway */}
                  <div className="mt-10 p-8 rounded-2xl bg-sand/60 border border-stone/30">
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
        description="Let\u2019s explore how a trust-centred approach could help your organisation navigate its current context."
      />
    </>
  );
}

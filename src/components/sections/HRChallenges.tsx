'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const challenges = [
  {
    problem: "Manager capability is not where it needs to be",
    detail: "Managers are struggling with probation, performance, sickness and fairness — and HR is picking up the pieces.",
    solution: "I build practical, human-centred manager capability so managers feel confident, consistent and equipped, reducing risk and easing pressure on HR.",
  },
  {
    problem: "AI is creating fear, mistrust and psychological safety issues",
    detail: "Employees are anxious about job security and unsure how to use AI tools — slowing adoption and damaging trust.",
    solution: "I support organisations to introduce AI in a way that feels safe, transparent and empowering, helping people build confidence rather than fear.",
  },
  {
    problem: "Hybrid working is not working",
    detail: "Low attendance, inconsistent practices and declining connection are creating real business risks.",
    solution: "I work with leaders and teams to shape hybrid approaches that improve clarity, connection and engagement — without forcing people back into the office.",
  },
  {
    problem: "Change fatigue is eroding trust and performance",
    detail: "Constant transformation is leaving people exhausted, disengaged and less resilient.",
    solution: "I help organisations communicate change more clearly, support people through uncertainty and rebuild trust so performance does not suffer.",
  },
  {
    problem: "Early careers talent is struggling with workplace readiness",
    detail: "Gen Z employees lack confidence, hybrid skills and in-person communication experience.",
    solution: "I design practical support that builds confidence, communication skills and workplace readiness so early-career talent can thrive.",
  },
  {
    problem: "Culture and EVP are not matching the employee reality",
    detail: "There is a widening gap between what you say your culture is and what employees actually experience.",
    solution: "I help you understand where the gaps are, what is driving them, and how to create a culture and EVP that feel authentic, inclusive and lived.",
  },
  {
    problem: "Five generations, one workplace — and rising expectations",
    detail: "Employees want more from their employer, but their needs differ dramatically.",
    solution: "I support organisations to shape EVPs, practices and communication that work for everyone — from early careers to late-career employees.",
  },
  {
    problem: "Burnout, stress and mental health issues are increasing",
    detail: "Sickness is rising, managers feel overwhelmed, and HR teams are firefighting.",
    solution: "I help create realistic, human-centred wellbeing approaches that support managers, reduce sickness and prevent burnout — without adding pressure to HR.",
  },
  {
    problem: "Leadership visibility has collapsed in hybrid environments",
    detail: "Employees feel disconnected from senior leaders and trust is dropping.",
    solution: "I work with leaders to show up more clearly and consistently, rebuilding connection, trust and alignment across the organisation.",
  },
  {
    problem: "Internal communication is not landing",
    detail: "Employees feel uninformed, messages are not sticking, and trust is slipping.",
    solution: "I support organisations to communicate in ways people actually understand and trust — clearer, more human and more consistent.",
  },
];

function ChallengeCard({ challenge, index, isInView }: { challenge: typeof challenges[0]; index: number; isInView: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
      className="border border-stone/40 rounded-xl bg-white/70 hover:border-gold/30 transition-all duration-300 overflow-hidden shadow-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start justify-between gap-4"
      >
        <div className="flex items-start gap-4">
          <span className="text-gold font-serif text-xl mt-0.5 font-semibold">{index + 1}.</span>
          <div>
            <h3 className="font-serif text-xl text-navy leading-snug font-medium">{challenge.problem}</h3>
            <p className="text-base text-slate mt-2 leading-relaxed">{challenge.detail}</p>
          </div>
        </div>
        <ChevronDown
          size={24}
          className={`text-gold shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0">
          <div className="p-5 rounded-lg bg-gold/5 border border-gold/15">
            <p className="text-xs tracking-[0.15em] uppercase text-gold font-semibold mb-3">How I help</p>
            <p className="text-base text-navy leading-relaxed">{challenge.solution}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HRChallenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="hr-challenges" className="py-24 lg:py-32 bg-warm-white relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              What HR Leaders Are Facing
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              The pressures are real. So is the support.
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              These are the challenges I hear most often from HR leaders. Click any to see how I can help.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {challenges.map((challenge, i) => (
            <ChallengeCard key={i} challenge={challenge} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

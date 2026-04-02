'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Lightbulb, Users } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const supportModes = [
  {
    icon: Clock,
    title: "When your team has the expertise — but not the time or capacity",
    description: "Your team knows what needs to happen, but priorities stack up, deadlines collide and capacity becomes the biggest barrier. I can step in as an experienced, trusted pair of hands — picking up projects, leading workstreams or handling the pieces that keep slipping down the list. Practical, flexible support that keeps momentum going without adding pressure to your team.",
  },
  {
    icon: Lightbulb,
    title: "When your team does not have the expertise yet",
    description: "Sometimes you are facing something new: a capability gap, a change programme, a cultural challenge, or a piece of work that needs specialist experience. I can bring that expertise in quickly and calmly, helping you move forward without the pressure of developing new skills at speed or stretching your team beyond what feels realistic.",
  },
  {
    icon: Users,
    title: "When you want to grow the confidence and capability within your team",
    description: "If you have a team member who would benefit from support, coaching or a safe space to build their skills, I can work with them directly. This might be around employee relations, leadership development, engagement, wellbeing, or simply navigating the complexities of people work with more confidence. Supportive, practical development that strengthens your team from within.",
  },
];

export default function HowISupportHR() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="how-i-support" className="py-24 lg:py-32 bg-cream relative overflow-hidden noise-overlay scroll-mt-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">
              How I Support HR Leaders
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15] tracking-tight max-w-3xl mx-auto">
              Support that fits around your reality.
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl mx-auto">
              Every organisation is different — and so are the pressures on your HR team. Whether you are navigating change, delivering big programmes, or simply trying to keep pace with day-to-day demands, sometimes you need support that fits.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {supportModes.map((mode, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="h-full p-8 rounded-2xl bg-white/80 border border-stone/30 hover:border-gold/20 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-6">
                  <mode.icon size={22} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-navy leading-snug mb-4">{mode.title}</h3>
                <p className="text-sm text-slate/70 leading-relaxed">{mode.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

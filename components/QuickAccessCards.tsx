'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Briefcase, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const cardData = [
  {
    icon: BookOpen,
    title: 'Academics',
    description: 'Explore our diverse range of undergraduate and postgraduate programs.',
    href: '/academics',
  },
  {
    icon: GraduationCap,
    title: 'Admissions',
    description: 'Find out how to apply and start your journey at NSRIET.',
    href: '/admissions',
  },
  {
    icon: Briefcase,
    title: 'CDC',
    description: 'Learn about our successful placement records and career opportunities.',
    href: '/cdc',
  },
  {
    icon: Users,
    title: 'Governance',
    description: 'Learn about our transparent and effective leadership.',
    href: '/governance',
  },
];

export default function QuickAccessCards() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
            {cardData.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <Link href={card.href}>
                  <div className="flip-card group w-full h-56">
                    <div className="flip-card-inner group-hover:[transform:rotateY(180deg)] transition-transform duration-[1000ms] relative w-full h-full">
                      {/* Front Side */}
                      <div className="flip-card-front absolute w-full h-full flex flex-col items-center justify-center bg-[#3B82F6] text-white rounded-xl border-[8px] border-[#3B82F6] backface-hidden">
                        <card.icon className="w-10 h-10 mb-3 text-white" />
                        <h3 className="text-xl font-bold">{card.title}</h3>
                      </div>

                      {/* Back Side */}
                      <div className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center bg-[#1E40AF] text-white rounded-xl border-[8px] border-[#1E40AF] [transform:rotateY(180deg)] backface-hidden px-4 text-center">
                        <p className="text-sm mb-3">{card.description}</p>
                        <div className="flex items-center gap-1 text-white font-semibold text-sm group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

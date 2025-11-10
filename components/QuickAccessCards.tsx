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
          <div className="grid md:grid-cols-4 gap-8">
            {cardData.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <Link href={card.href}>
                  <div className="card group hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <card.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-800 dark:text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-corporate-textSecondary dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <div className="flex items-center text-primary-500 font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
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

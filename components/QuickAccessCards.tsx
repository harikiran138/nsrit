'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Briefcase, Users } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

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
    title: 'Career Development',
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
    <Section background="light" className="py-12">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {cardData.map((card) => (
          <Link href={card.href} key={card.title} className="block group">
            <Card variant="default" className="h-full p-6 hover:border-corporate-blue/30 hover:shadow-lg transition-all">
              <div className="mb-4 text-corporate-blue group-hover:scale-110 transition-transform duration-300 origin-left">
                <card.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-corporate-navy mb-2 group-hover:text-corporate-blue transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {card.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-corporate-blue opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

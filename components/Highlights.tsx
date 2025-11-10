'use client';

import { Award, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const highlights = [
  {
    icon: Award,
    title: 'NAAC Accredited',
    description: "Awarded 'A' Grade for excellence in higher education.",
  },
  {
    icon: ShieldCheck,
    title: 'AICTE Approved',
    description: 'All our technical programs are approved by AICTE.',
  },
  {
    icon: TrendingUp,
    title: 'Top Placements',
    description: 'Consistently high placement rates in top companies.',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Learn from the best minds in the industry and academia.',
  },
];

export default function Highlights() {
  return (
    <section className="py-20 md:py-28 bg-corporate-background dark:bg-gray-800">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Our Highlights
            </h2>
            <p className="text-corporate-textSecondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A commitment to quality, excellence, and student success.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <AnimatedSection key={highlight.title} delay={index * 0.1}>
              <div className="card text-center group hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-primary-800 dark:text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-corporate-textSecondary dark:text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

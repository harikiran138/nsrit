
'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    content: "NSRIET provided me with the platform to explore my technical skills and leadership abilities. The faculty support was exceptional.",
    author: "Priya Sharma",
    role: "Software Engineer at Google",
    batch: "CSE 2022",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "The industry-oriented curriculum helped me bridge the gap between theory and practice. Highly recommended for aspiring engineers.",
    author: "Rahul Verma",
    role: "System Architect at TCS",
    batch: "ECE 2021",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "Campus life at NSRIET is vibrant and full of opportunities. From hackathons to cultural fests, it was a memorable journey.",
    author: "Anita Desai",
    role: "Product Manager at Microsoft",
    batch: "IT 2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <Section background="dark" className="bg-corporate-navy text-white relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our alumni who are making a mark in the global industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Card key={idx} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Quote className="text-accent w-8 h-8 mb-6 opacity-80" />
              <p className="text-gray-200 leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                  <Image src={t.image} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-accent text-xs">{t.role}</p>
                  <p className="text-gray-400 text-xs">{t.batch}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

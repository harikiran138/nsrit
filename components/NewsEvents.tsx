
'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, ChevronRight, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const EVENTS = [
  {
    date: { day: '15', month: 'DEC' },
    title: 'NSRIT Annual Tech Fest 2026',
    time: '10:00 AM - 5:00 PM',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
  },
  {
    date: { day: '22', month: 'DEC' },
    title: 'International Conference on AI',
    time: '09:00 AM - 4:00 PM',
    location: 'Seminar Hall A',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    date: { day: '05', month: 'JAN' },
    title: 'Alumni Meet 2026',
    time: '6:00 PM onwards',
    location: 'Campus Grounds',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80'
  },
];

const NEWS = [
  {
    date: 'Dec 10, 2025',
    title: 'NSRIET ranked among Top 50 Engineering Colleges in the region.',
    category: 'Achievement'
  },
  {
    date: 'Dec 08, 2025',
    title: 'Mechanical Engineering department secures ₹20L research grant.',
    category: 'Research'
  },
  {
    date: 'Dec 05, 2025',
    title: 'Applications open for 2026-27 Academic Session.',
    category: 'Admissions'
  },
  {
    date: 'Dec 01, 2025',
    title: 'Students win 1st prize at National Hackathon.',
    category: 'Student Success'
  },
];

export default function NewsEvents() {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <Section background="light" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Events Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-corporate-navy mb-2">Upcoming Events</h2>
              <p className="text-muted">Stay updated with the latest happenings on campus.</p>
            </div>
            <Link href="/events" className="text-primary font-semibold hover:text-primary/80 flex items-center gap-1 text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Event Display */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row h-auto md:h-[320px]">
            <div className="md:w-1/2 relative min-h-[200px]">
              <Image 
                src={EVENTS[activeEvent].image} 
                alt={EVENTS[activeEvent].title} 
                fill 
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-center shadow-sm">
                <span className="block text-xl font-bold text-corporate-navy">{EVENTS[activeEvent].date.day}</span>
                <span className="block text-xs font-bold text-primary uppercase">{EVENTS[activeEvent].date.month}</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-sm text-muted mb-3">
                <Clock size={16} />
                {EVENTS[activeEvent].time}
              </div>
              <h3 className="text-2xl font-bold text-corporate-navy mb-4 leading-tight">
                {EVENTS[activeEvent].title}
              </h3>
              <p className="text-gray-500 mb-6 flex-grow">
                Join us for this exciting event at {EVENTS[activeEvent].location}.
              </p>
              <Button variant="primary" size="sm" className="w-fit">
                Register Now
              </Button>
            </div>
          </div>

          {/* Event List/Selector */}
          <div className="grid grid-cols-3 gap-4">
            {EVENTS.map((event, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveEvent(idx)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  activeEvent === idx 
                    ? 'bg-white border-primary shadow-md' 
                    : 'bg-transparent border-transparent hover:bg-white hover:border-gray-200'
                }`}
              >
                <p className="text-xs font-bold text-primary mb-1">{event.date.month} {event.date.day}</p>
                <p className={`text-sm font-semibold line-clamp-2 ${activeEvent === idx ? 'text-corporate-navy' : 'text-gray-600'}`}>
                  {event.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* News Column */}
        <div className="lg:col-span-5 bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-2xl font-bold text-corporate-navy">Latest News</h3>
             <Button variant="ghost" size="sm" className="text-sm px-0 hover:bg-transparent hover:text-primary/70">Archive</Button>
          </div>
          
          <div className="space-y-6">
            {NEWS.map((item, idx) => (
              <div key={idx} className="group border-b border-gray-50 last:border-0 pb-6 last:pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-600 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <Link href="#" className="block">
                  <h4 className="text-base font-semibold text-gray-800 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h4>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link href="/news" className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline w-full p-2 rounded hover:bg-blue-50 transition-colors">
              View All News <ChevronRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </Section>
  );
}

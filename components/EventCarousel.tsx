'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import Image from 'next/image';

export interface Event {
  date: string;
  title: string;
  description: string;
  category: string;
  image?: string;
}

interface EventCarouselProps {
  events: Event[];
  autoSlide?: boolean;
  interval?: number;
}

export default function EventCarousel({ events, autoSlide = true, interval = 5000 }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoSlide, interval, events.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
  <div className="overflow-hidden rounded border border-corporate-border bg-surface shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={events[currentIndex].image || `https://source.unsplash.com/800x600/?${events[currentIndex].category.toLowerCase()},event,college`}
                  alt={events[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 bg-corporate-blue text-white px-3 py-1 text-xs font-semibold">
                  {events[currentIndex].category}
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center bg-corporate-background dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-4 text-corporate-textSecondary dark:text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">{events[currentIndex].date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-corporate-navy dark:text-white mb-4">
                  {events[currentIndex].title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {events[currentIndex].description}
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-corporate-blue text-white hover:bg-opacity-90 transition-colors w-fit font-semibold">
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-card text-corporate-navy dark:text-white p-3 border border-corporate-border shadow-md hover:shadow-lg transition-shadow z-10"
          aria-label="Previous event"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-card text-corporate-navy dark:text-white p-3 border border-corporate-border shadow-md hover:shadow-lg transition-shadow z-10"
          aria-label="Next event"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all ${
              index === currentIndex
                ? 'w-6 bg-corporate-blue'
                : 'w-1.5 bg-corporate-border hover:bg-corporate-textSecondary'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

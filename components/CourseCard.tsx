'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Check } from 'lucide-react';
import Image from 'next/image';

interface CourseCardProps {
  name: string;
  code: string;
  duration: string;
  seats: number;
  eligibility: string;
  image?: string;
  index: number;
}

export default function CourseCard({
  name,
  code,
  duration,
  seats,
  eligibility,
  image,
  index,
}: CourseCardProps) {
  const defaultImage = `https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-surface rounded border border-corporate-border overflow-hidden hover:shadow-lg transition-shadow"
    >
  <div className="relative h-40 overflow-hidden bg-surface">
        <Image
          src={image || defaultImage}
          alt={name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-corporate-navy text-white font-bold text-sm">
            {code}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">
          {name}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
            <Clock className="w-4 h-4 text-corporate-blue" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center gap-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
            <Users className="w-4 h-4 text-corporate-blue" />
            <span>Available Seats: {seats}</span>
          </div>
          <div className="flex items-start gap-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
            <Check className="w-4 h-4 text-corporate-blue mt-0.5 flex-shrink-0" />
            <span>{eligibility}</span>
          </div>
        </div>

        <button className="w-full px-6 py-3 bg-corporate-blue text-white font-semibold hover:bg-opacity-90 transition-colors">
          Apply Now
        </button>
      </div>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
}

interface PartnerLogosProps {
  partners: Partner[];
  title?: string;
  description?: string;
}

export default function PartnerLogos({ partners, title, description }: PartnerLogosProps) {
  return (
    <div>
      {title && (
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue dark:text-white mb-4 font-heading">
            {title}
          </h2>
          {description && (
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group relative bg-card rounded-xl p-6 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="relative h-24 grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <p className="text-center mt-4 text-sm font-semibold text-muted opacity-0 group-hover:opacity-100 transition-opacity">
              {partner.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

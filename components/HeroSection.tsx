'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export default function HeroSection({
  title = "Empowering Future Innovators",
  subtitle = "NSRIET Logo", // Keeping generic prop, but usage below might change
  description = "A premier engineering institution committed to academic excellence, innovation, and industry collaboration.",
  primaryCTA,
  secondaryCTA,
  backgroundImage = '/hero-bg.png', // Default to local asset if available, or placeholder
}: HeroSectionProps) {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden bg-corporate-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Campus Banner"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Corporate Deep Overlay */}
        <div className="absolute inset-0 bg-corporate-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark via-corporate-navy/80 to-transparent" />
      </div>

      <Container className="relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Institutional Label */}
          <div className="inline-block px-3 py-1 mb-6 border border-accent/30 bg-accent/10 rounded uppercase text-xs font-bold tracking-widest text-accent">
            Autonomous Institution
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-light">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-hover text-corporate-dark font-bold border-none"
              onClick={() => window.location.href = primaryCTA?.href || '/admissions'}
            >
              {primaryCTA?.text || "Admissions Open 2026"}
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="text-white border border-white/20 hover:bg-white/10"
              onClick={() => window.location.href = secondaryCTA?.href || '/academics'}
            >
              {secondaryCTA?.text || "Explore Programs"}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

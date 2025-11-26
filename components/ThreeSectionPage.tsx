'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface ThreeSectionPageProps {
  title: string;
  subtitle?: string;
  section1: {
    title: string;
    content: React.ReactNode;
  };
  section2: {
    title: string;
    content: React.ReactNode;
  };
  section3: {
    title: string;
    content: React.ReactNode;
  };
  heroImage?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ThreeSectionPage({
  title,
  subtitle,
  section1,
  section2,
  section3,
  heroImage,
}: ThreeSectionPageProps) {
  return (
    <>
      {/* Hero Section */}
      {heroImage ? (
        <div
          className="relative h-80 md:h-96 bg-cover"
          style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 70%' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white px-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-corporate-navy via-corporate-blue to-blue-600 text-white py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-32 -mb-32"></div>

          <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {/* Section 1: Overview / Introduction */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8"
              >
                {section1.title}
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
              >
                {section1.content}
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Key Features / Details */}
      <section className="py-16 md:py-24 bg-corporate-background dark:bg-gray-800 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-blue rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="section-container px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8"
              >
                {section2.title}
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
              >
                {section2.content}
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Resources / Contact / Downloads */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-corporate-navy dark:text-white mb-8"
              >
                {section3.title}
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
              >
                {section3.content}
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

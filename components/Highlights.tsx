'use client';

import React from "react";

/**
 * HighlightCard Component
 * - Responsive, animated, and styled for modern design
 * - Includes hover animations, icon pulse, and category badges
 */
type HighlightCardProps = {
  category: string;
  icon: string;
  title: string;
  description: string;
  meta: string;
  imgSrc: string;
};

const HighlightCard: React.FC<HighlightCardProps> = ({
  category,
  icon,
  title,
  description,
  meta,
  imgSrc,
}) => {
  return (
    <div className="relative bg-white shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-2">
      {/* Thumbnail Section */}
      <div className="relative h-[230px] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-85"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full uppercase text-xs font-semibold tracking-wider shadow-md">
          {category}
        </div>

        {/* Animated Icon */}
        <div className="absolute bottom-[-25px] right-4 bg-white shadow-lg text-blue-700 w-[60px] h-[60px] rounded-full flex items-center justify-center text-2xl transform group-hover:scale-110 transition-all duration-500 animate-pulse">
          <i className={`fa ${icon}`}></i>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 mt-6 text-center">
        <h3 className="text-[20px] font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          {description}
        </p>
        <div className="text-gray-400 text-sm flex items-center justify-center gap-2 mt-3">
          <i className="fa fa-check-circle text-blue-600"></i> {meta}
        </div>
      </div>
    </div>
  );
};

/**
 * Highlights Section
 * - Displays four highlight cards in a responsive grid layout
 */
export default function Highlights() {
  const highlights = [
    {
      category: "Accreditation",
      icon: "fa-certificate",
      title: "AICTE Approved Programs",
      description:
        "All our technical programs are approved by AICTE.",
      meta: "Certified & Verified",
      imgSrc: "/images/about/AICTE.jpg",
    },
    {
      category: "University",
      icon: "fa-university",
      title: "JNTU GV Affiliation",
      description:
        "University Affiliated JNTU GV",
      meta: "Academic Excellence",
      imgSrc:
        "/images/about/JNTUGV.JPG",
    },
    {
      category: "Faculty",
      icon: "fa-users",
      title: "Experienced Faculty",
      description:
        "Learn from the best minds in the industry and academia.",
      meta: "Expert Mentorship",
      imgSrc:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Training",
      icon: "fa-industry",
      title: "Industry Integrated Training",
      description:
        "Consistently high placement rates in top companies.",
      meta: "High Placement Record",
      imgSrc:
        "https://images.unsplash.com/photo-1551836022-3b11f1f4b52f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our Highlights
        </h1>
        <p className="text-gray-600 text-lg">
          A commitment to quality, excellence, and student success.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 max-w-7xl mx-auto">
        {highlights.map((item, index) => (
          <HighlightCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

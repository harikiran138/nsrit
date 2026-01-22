'use client';

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { BookOpen, Users, Building, Trophy, CheckCircle } from 'lucide-react';

const HIGHLIGHTS = [
  {
    category: "Accreditation",
    icon: Trophy, // Using lucide-react icons instead of FontAwesome for consistency
    title: "AICTE Approved Programs",
    description: "All our technical programs are approved by AICTE, ensuring high standards of education.",
    meta: "Certified & Verified",
    imgSrc: "/images/about/AICTE.jpg", // Kept original paths
  },
  {
    category: "University",
    icon: Building,
    title: "JNTU GV Affiliation",
    description: "Permanently affiliated to JNTU - GV, ensuring recognized and valuable degrees.",
    meta: "Academic Excellence",
    imgSrc: "/images/about/JNTUGV.JPG",
  },
  {
    category: "Faculty",
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from the best minds in the industry and academia with years of experience.",
    meta: "Expert Mentorship",
    imgSrc: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Placements",
    icon: BookOpen,
    title: "Industry Integrated Training",
    description: "Consistently high placement rates in top multinational companies.",
    meta: "High Placement Record",
    imgSrc: "https://images.unsplash.com/photo-1551836022-3b11f1f4b52f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Highlights() {
  return (
    <Section background="white">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-corporate-navy mb-4">Why Choose NSRIET?</h2>
        <p className="text-muted text-lg">
          We are committed to providing a world-class education that fosters innovation, leadership, and ethical values.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {HIGHLIGHTS.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="overflow-hidden group border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-corporate-navy px-3 py-1 rounded text-xs font-bold uppercase tracking-wide shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-corporate-navy mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-primary/80 uppercase tracking-wide">
                  <CheckCircle size={14} />
                  {item.meta}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

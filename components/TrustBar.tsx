
import React from 'react';
import Image from 'next/image';
import Section from './ui/Section';

const TRUST_ITEMS = [
  { name: 'NAAC A Grade', logo: '/trust/naac.png' }, // Placeholders, will need actual images or text
  { name: 'NBA Accredited', logo: '/trust/nba.png' },
  { name: 'ISO Certified', logo: '/trust/iso.png' },
  { name: 'AICTE Approved', logo: '/trust/aicte.png' },
  { name: 'JNTU Kakinada Affiliated', logo: '/trust/jntuk.png' },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-8">
      <div className="section-container">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
          Accreditations & Affiliations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* 
            Since we might not have the logos yet, I'll use text placeholders styled to look like logos 
            or generic blocks if images are missing.
          */}
          {TRUST_ITEMS.map((item) => (
             <div key={item.name} className="flex flex-col items-center gap-2 group cursor-default">
                {/* 
                  Placeholder for Logic: Check if image exists, else show text. 
                  For now, purely text based to be safe until assets are provided.
                */}
                <div className="h-12 w-auto flex items-center justify-center font-bold text-corporate-navy text-lg group-hover:scale-105 transition-transform">
                  {item.name}
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

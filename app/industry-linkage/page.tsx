'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { Handshake, Building, Users } from 'lucide-react';

export default function IndustryLinkagePage() {
  return (
    <ThreeSectionPage
      title="Industry Institute Linkage"
      subtitle="Bridging the gap between academia and industry"
      section1={{
        title: 'Our Approach',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              We believe in fostering strong, symbiotic relationships with industry leaders to enhance the academic experience, drive innovation, and create a skilled workforce for the future. Our initiatives are designed to provide students with real-world exposure and to align our curriculum with industry needs.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Key Initiatives',
        content: (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <Handshake className="w-8 h-8 text-corporate-blue mb-4" />
              <h3 className="text-lg font-bold mb-2">MoUs & Collaborations</h3>
              <p className="text-sm text-gray-600">We have active Memorandums of Understanding with leading companies for joint research, guest lectures, and curriculum development.</p>
            </div>
            <div className="card">
              <Building className="w-8 h-8 text-corporate-blue mb-4" />
              <h3 className="text-lg font-bold mb-2">Industry Visits & Internships</h3>
              <p className="text-sm text-gray-600">Regular industrial visits and mandatory internships provide students with hands-on experience in a professional environment.</p>
            </div>
            <div className="card">
              <Users className="w-8 h-8 text-corporate-blue mb-4" />
              <h3 className="text-lg font-bold mb-2">Expert Lectures & Workshops</h3>
              <p className="text-sm text-gray-600">We invite industry experts to conduct workshops and lectures on the latest technologies and trends.</p>
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Our Partners',
        content: (
          <div className="space-y-4">
            <p>We are proud to partner with a diverse range of companies, from startups to multinational corporations. A complete list of our partners can be found on the dedicated MoUs & Collaborations page.</p>
          </div>
        ),
      }}
    />
  );
}

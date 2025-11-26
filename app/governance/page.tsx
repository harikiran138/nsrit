'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';
import { Download } from 'lucide-react';

export default function GovernancePage() {
  return (
    <ThreeSectionPage
      title="Governance"
      subtitle="Transparent and effective leadership"
      section1={{
        title: 'Governance Overview',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              Our governance structure is designed to ensure transparency, accountability, and a commitment to academic excellence. We believe in a collaborative approach to leadership that involves all stakeholders in the decision-making process.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Roles & Structure',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              The governance of the institution is carried out through a well-defined structure that includes the Governing Body, the Academic Council, and various other committees. Each body has distinct roles and responsibilities, all working towards the common goal of institutional growth and student success.
            </p>
          </div>
        ),
      }}
      section3={{
        title: 'Reports / Downloads',
        content: (
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center gap-2 text-corporate-blue hover:underline">
                  <Download className="w-4 h-4" /> Annual Report 2023
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-corporate-blue hover:underline">
                  <Download className="w-4 h-4" /> Governance Handbook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-corporate-blue hover:underline">
                  <Download className="w-4 h-4" /> Committee Reports
                </a>
              </li>
            </ul>
          </div>
        ),
      }}
    />
  );
}

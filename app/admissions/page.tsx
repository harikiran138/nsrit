import type { Metadata } from 'next';
import ThreeSectionPage from '@/components/ThreeSectionPage';
import { Download, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admissions at NSRIET | Apply Now',
  description: 'Find out how to apply for admission to NSRIET. We offer a range of undergraduate and postgraduate programs. Start your application today!',
};

export default function AdmissionsPage() {
  return (
    <ThreeSectionPage
      title="Admissions"
      subtitle="Start your journey with us"
      section1={{
        title: 'Introduction',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              We are excited that you are considering NSRIET for your higher education. Our admissions process is designed to be transparent and straightforward. We welcome talented and motivated students to join our vibrant academic community.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Eligibility / Process / Fee Structure',
        content: (
          <div className="space-y-4">
            <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
              Admission to our programs is based on merit and performance in qualifying examinations. Detailed information about eligibility criteria, the admission process, and the fee structure for each program can be found in our admission brochure.
            </p>
          </div>
        ),
      }}
      section3={{
        title: 'Apply Now / Contact / Downloads',
        content: (
          <div className="space-y-4">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-corporate-blue text-white font-semibold rounded-lg hover:opacity-90 transition-all">
              <Send className="w-5 h-5" /> Apply Now
            </a>
            <ul className="space-y-2 pt-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-corporate-blue hover:underline">
                  <Download className="w-4 h-4" /> Admission Brochure
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-corporate-blue hover:underline">
                  <Download className="w-4 h-4" /> Fee Structure
                </a>
              </li>
            </ul>
          </div>
        ),
      }}
    />
  );
}

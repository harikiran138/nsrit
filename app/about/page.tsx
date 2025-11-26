import type { Metadata } from 'next';
import ThreeSectionPage from '@/components/ThreeSectionPage';
import { Eye, Target } from 'lucide-react';
import HeroSection from '@/components/HeroSection'; // Import HeroSection

export const metadata: Metadata = {
  title: 'About NSRIET | Our History, Vision, and Leadership',
  description: 'Learn about N S Raju Institute of Engineering & Technology (NSRIET), our history of academic excellence, our vision for the future, and the leadership team that guides us.',
};

export default function AboutPage() {
  return (
    <>
      <ThreeSectionPage
        title="About Us"
        subtitle="A legacy of excellence in engineering education"
        heroImage="/IMG_1374.jpg"
        section1={{
          title: 'Overview',
          content: (
            <div className="space-y-4">
              <p className="leading-relaxed" style={{ lineHeight: '1.5' }}>
                N S Raju Institute of Engineering & Technology (NSRIET) is a premier institution dedicated to providing quality education in engineering and management. We are committed to nurturing a vibrant academic community that fosters innovation, research, and holistic development.
              </p>
            </div>
          ),
        }}
        section2={{
          title: 'Vision, Mission, Core Values',
          content: (
            <div className="space-y-6">
              <div className="card bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900 dark:to-transparent border-l-4 border-l-corporate-blue">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-navy dark:text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-corporate-textSecondary dark:text-gray-300 leading-relaxed">
                  To be a globally recognized institution of higher learning, fostering innovation, research, and entrepreneurship.
                </p>
              </div>
              <div className="card bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900 dark:to-transparent border-l-4 border-l-corporate-blue">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-navy dark:text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-corporate-textSecondary dark:text-gray-300 leading-relaxed">
                  To provide world-class technical education through innovative teaching, cutting-edge research, and strong industry partnerships.
                </p>
              </div>
            </div>
          ),
        }}
        section3={{
          title: 'Leadership',
          content: (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Leadership content can be added here */}
              <p className="text-corporate-textSecondary dark:text-gray-400">Our leadership team is committed to guiding our institution towards a future of excellence and innovation. More details can be found on the dedicated Leadership page.</p>
            </div>
          ),
        }}
      />
    </>
  );
}

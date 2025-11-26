'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function WhyNSRIETPage() {
  return (
    <ThreeSectionPage
      title="Why Choose NSRIET?"
      subtitle="Excellence, innovation, and opportunity await you"
      section1={{
        title: 'Why NSRIET',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET is a premier engineering institution committed to providing world-class education, fostering innovation, and developing industry-ready professionals.
            </p>
            <p>
              Our institution is recognized for academic excellence, state-of-the-art infrastructure, experienced faculty, and strong industry connections.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Key Advantages',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'AICTE Approved', desc: 'All programs accredited by All India Council for Technical Education' },
                { title: 'NBA Accredited', desc: 'Engineering programs accredited by National Board of Accreditation' },
                { title: 'Expert Faculty', desc: 'Highly qualified professors with PhD and industry experience' },
                { title: 'Modern Infrastructure', desc: 'State-of-the-art labs, smart classrooms, and research facilities' },
                { title: '95% Placement Rate', desc: 'Strong industry partnerships ensuring excellent placement opportunities' },
                { title: 'Industry Exposure', desc: 'Internships, projects, and partnerships with leading companies' },
                { title: 'Holistic Development', desc: 'Focus on technical, soft skills, and personality development' },
                { title: 'Research Culture', desc: 'Active research centers and innovation hubs' },
              ].map((advantage) => (
                <div key={advantage.title} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white mb-2">{advantage.title}</h3>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400">{advantage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Next Steps',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Our Strengths</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• 5000+ students enrolled</li>
                <li>• 8 engineering disciplines</li>
                <li>• 50+ industry partnerships</li>
                <li>• Active alumni network</li>
                <li>• Campus of 25+ acres</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Explore Programs</h3>
              <div className="space-y-2">
                <a href="/academics/programs" className="block text-corporate-blue hover:underline font-medium">📚 All Programs</a>
                <a href="/admissions/undergraduate" className="block text-corporate-blue hover:underline font-medium">🎓 Undergraduate</a>
                <a href="/admissions/postgraduate" className="block text-corporate-blue hover:underline font-medium">🎓 Postgraduate</a>
                <a href="/admissions" className="block text-corporate-blue hover:underline font-medium">📝 Apply Now</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}

'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function UndergraduatePage() {
  return (
    <ThreeSectionPage
      title="Undergraduate Programs"
      subtitle="Four-year engineering degrees with industry focus"
      section1={{
        title: 'Program Overview',
        content: (
          <div className="space-y-4">
            <p>
              NSRIET offers undergraduate engineering programs in multiple disciplines, designed to develop professionals equipped with technical expertise and professional skills.
            </p>
            <p>
              All programs are AICTE approved and NBA accredited, ensuring international standards of quality and recognition.
            </p>
          </div>
        ),
      }}
      section2={{
        title: 'Available Programs',
        content: (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Computer Science & Engineering', intake: '120' },
                { name: 'CSE (Artificial Intelligence & Machine Learning)', intake: '60' },
                { name: 'Electronics & Communication Engineering', intake: '120' },
                { name: 'Electrical & Electronics Engineering', intake: '120' },
                { name: 'Mechanical Engineering', intake: '120' },
              ].map((program) => (
                <div key={program.name} className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-corporate-navy dark:text-white mb-2">{program.name}</h3>
                  <p className="text-sm text-corporate-navy dark:text-gray-300"><strong>Intake:</strong> {program.intake} students</p>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400 mt-2">Duration: 4 years | Qualification: 10+2</p>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Admission Details',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Eligibility</h3>
              <ul className="space-y-2 text-corporate-navy dark:text-gray-200">
                <li>• 10+2 pass from recognized board</li>
                <li>• Minimum 50% marks in PCM</li>
                <li>• Valid JEE Main rank</li>
                <li>• Domicile (as per state norms)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-corporate-navy dark:text-white mb-4">Application Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📄 Admission Brochure</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📋 Fee Structure</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">📝 Apply Online</a>
                <a href="#" className="block text-corporate-blue hover:underline font-medium">❓ FAQ</a>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}

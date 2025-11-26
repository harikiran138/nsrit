'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function PostgraduatePage() {
  return (
    <ThreeSectionPage
      title="Postgraduate Programs"
      subtitle="Advanced programs for specialized learning and research"
      section1={{
        title: 'Available Programs',
        content: (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'M.Tech in Computer Science', specialization: 'Advanced Computing, AI/ML, Cloud Computing', duration: '2 years' },
              { name: 'M.Tech in Electronics', specialization: 'VLSI Design, Embedded Systems', duration: '2 years' },
              { name: 'M.Tech in Mechanical', specialization: 'CAD/CAM, Thermal Systems', duration: '2 years' },
              { name: 'MBA', specialization: 'General Management, Finance, HR', duration: '2 years' },
            ].map((prog, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-2">{prog.name}</h4>
                <p className="text-xs text-corporate-textSecondary dark:text-gray-400 mb-2">
                  <span className="font-semibold">Specialization:</span> {prog.specialization}
                </p>
                <p className="text-xs text-corporate-blue font-semibold">{prog.duration}</p>
              </div>
            ))}
          </div>
        ),
      }}
      section2={{
        title: 'Admission Requirements',
        content: (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <h4 className="font-bold text-corporate-navy dark:text-white mb-4">M.Tech Eligibility</h4>
              <ul className="space-y-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
                <li>• B.Tech in relevant discipline (min 60% or 6.0 CGPA)</li>
                <li>• GATE score required</li>
                <li>• Valid GMAT/GRE for international students</li>
                <li>• Statement of purpose & references</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <h4 className="font-bold text-corporate-navy dark:text-white mb-4">MBA Eligibility</h4>
              <ul className="space-y-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
                <li>• Bachelor&apos;s degree in any discipline</li>
                <li>• CAT/MAT/XAT score required</li>
                <li>• Work experience (preferred, not mandatory)</li>
                <li>• Personal interview & merit assessment</li>
              </ul>
            </div>
          </div>
        ),
      }}
      section3={{
        title: 'Application Process',
        content: (
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-corporate-navy dark:text-white mb-3">Application Steps</h4>
              <ol className="space-y-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
                <li>1. Register on the admissions portal</li>
                <li>2. Fill application form completely</li>
                <li>3. Upload required documents (degree, scores, etc.)</li>
                <li>4. Pay application fee online</li>
                <li>5. Submit and wait for merit list</li>
                <li>6. Attend counseling or interview</li>
              </ol>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-corporate-blue transition-colors">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-3">Apply Online</h4>
                <p className="text-sm text-corporate-textSecondary dark:text-gray-400 mb-4">
                  Begin your application for M.Tech or MBA programs
                </p>
                <a href="#" className="inline-block px-4 py-2 bg-corporate-blue text-white rounded-lg hover:opacity-90 text-sm font-medium">
                  Start Application
                </a>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-corporate-blue transition-colors">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-3">Important Dates</h4>
                <ul className="space-y-1 text-xs text-corporate-textSecondary dark:text-gray-400">
                  <li>• Application Opens: May 2024</li>
                  <li>• Deadline: July 2024</li>
                  <li>• Merit List: August 2024</li>
                  <li>• Admission: September 2024</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}

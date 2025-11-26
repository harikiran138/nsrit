'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

const leaders = [
  {
    name: 'Dr. Rajesh Kumar Sharma',
    position: 'Principal',
    qualification: 'Ph.D. Computer Science',
    bio: 'Visionary leader with 20+ years of experience in higher education and research',
  },
  {
    name: 'Prof. Priya Sharma',
    position: 'Vice Principal (Academics)',
    qualification: 'M.Tech, B.Tech',
    bio: 'Experienced academician focused on curriculum development and faculty excellence',
  },
];

export default function LeadershipPage() {
  return (
    <ThreeSectionPage
      title="Leadership"
      subtitle="Visionary leaders driving NSRIET's mission of educational excellence"
      section1={{
        title: 'Leadership Team',
        content: (
          <div className="grid md:grid-cols-2 gap-6">
            {leaders.map((leader, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-corporate-blue transition-colors">
                <h4 className="text-lg font-bold text-corporate-blue mb-1">{leader.name}</h4>
                <p className="font-semibold text-corporate-navy dark:text-white mb-1">{leader.position}</p>
                <p className="text-xs text-corporate-textSecondary dark:text-gray-400 mb-3">{leader.qualification}</p>
                <p className="text-sm text-corporate-textSecondary dark:text-gray-400 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        ),
      }}
      section2={{
        title: 'Leadership Philosophy',
        content: (
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Excellence', desc: 'Commitment to highest standards in academics, research, and administration' },
              { title: 'Inclusivity', desc: 'Creating an environment where every student and faculty member can thrive' },
              { title: 'Innovation', desc: 'Fostering creative thinking and continuous improvement across all areas' },
              { title: 'Integrity', desc: 'Operating with transparency and ethical conduct in all decisions' },
              { title: 'Collaboration', desc: 'Building strong partnerships with industry, academia, and society' },
              { title: 'Accountability', desc: 'Taking responsibility for institutional outcomes and student success' },
            ].map((value, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/30 rounded-lg border-l-4 border-l-corporate-blue">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-1 text-sm">{value.title}</h4>
                <p className="text-xs text-corporate-textSecondary dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        ),
      }}
      section3={{
        title: 'Contact & Engagement',
        content: (
          <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-corporate-navy dark:text-white mb-4">Office Hours & Contact</h4>
            <p className="text-corporate-textSecondary dark:text-gray-400 text-sm mb-4">
              Leadership is accessible to students, faculty, and parents. Schedule an appointment through the principal&apos;s office or write to us with your feedback and suggestions.
            </p>
            <div className="space-y-2 text-sm text-corporate-textSecondary dark:text-gray-400">
              <p><span className="font-semibold">Email:</span> principal@nsriet.edu.in</p>
              <p><span className="font-semibold">Phone:</span> +91-XXXXXXXXXX</p>
              <p><span className="font-semibold">Office Hours:</span> Mon-Fri, 10 AM - 5 PM</p>
            </div>
          </div>
        ),
      }}
    />
  );
}

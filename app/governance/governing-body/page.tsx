'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function GoverningBodyPage() {
  return (
    <ThreeSectionPage
      title="Governing Body"
      subtitle="Leadership structure ensuring institutional governance and accountability"
      section1={{
        title: 'Role & Responsibilities',
        content: (
          <div className="space-y-6">
            <p className="text-lg text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
              The Governing Body is the apex decision-making body of NSRIET, responsible for strategic planning, policy making, and ensuring institutional excellence while maintaining accountability to all stakeholders.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Policy Development',
                  items: ['Academic policies', 'Finance & budget', 'Recruitment policies', 'Disciplinary codes']
                },
                {
                  title: 'Strategic Planning',
                  items: ['Vision & mission', 'Long-term goals', 'Infrastructure development', 'Research initiatives']
                },
                {
                  title: 'Quality Assurance',
                  items: ['Accreditation oversight', 'Performance review', 'Curriculum approval', 'Standards maintenance']
                },
                {
                  title: 'Accountability',
                  items: ['Financial reporting', 'Stakeholder engagement', 'Compliance monitoring', 'Public disclosure']
                },
              ].map((section, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-bold text-corporate-navy dark:text-white mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
                        <span className="text-corporate-textSecondary dark:text-gray-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ),
      }}
      section2={{
        title: 'Governing Body Members',
        content: (
          <div className="space-y-4">
            {[
              { role: 'Chairman', name: 'Shri/Smt. Name', affiliation: 'Industry/Government Representative' },
              { role: 'Vice Chairman', name: 'Dr./Prof. Name', affiliation: 'Academic Expert' },
              { role: 'Principal', name: 'Dr. Rajesh Kumar Sharma', affiliation: 'Ex-Officio Member' },
              { role: 'Finance Convener', name: 'Name', affiliation: 'Finance Professional' },
              { role: 'Academic Member', name: 'Prof. Name', affiliation: 'Senior Faculty' },
              { role: 'Student Representative', name: 'Student Name', affiliation: 'Elected Student Representative' },
              { role: 'Registrar', name: 'Dr. Arun Patel', affiliation: 'Ex-Officio Member' },
            ].map((member, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-start gap-4">
                <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-corporate-navy dark:text-white">{member.role}</h4>
                  <p className="text-sm text-corporate-blue font-semibold">{member.name}</p>
                  <p className="text-xs text-corporate-textSecondary dark:text-gray-400">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        ),
      }}
      section3={{
        title: 'Governance Principles',
        content: (
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { principle: 'Transparency', desc: 'Open communication and public disclosure' },
              { principle: 'Accountability', desc: 'Responsibility for decisions and outcomes' },
              { principle: 'Fairness', desc: 'Equitable treatment of all stakeholders' },
              { principle: 'Excellence', desc: 'Pursuit of highest standards always' },
              { principle: 'Ethics', desc: 'Upholding moral and professional values' },
              { principle: 'Inclusivity', desc: 'Representation of diverse perspectives' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/30 rounded-lg border-l-4 border-l-corporate-blue">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-1 text-sm">{item.principle}</h4>
                <p className="text-xs text-corporate-textSecondary dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        ),
      }}
    />
  );
}

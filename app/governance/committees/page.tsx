'use client';

import ThreeSectionPage from '@/components/ThreeSectionPage';

export default function CommitteesPage() {
  return (
    <ThreeSectionPage
      title="Institutional Committees"
      subtitle="Specialized committees supporting institutional operations and governance"
      section1={{
        title: 'Committee Structure',
        content: (
          <div className="space-y-6">
            <p className="text-lg text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
              NSRIET maintains various standing committees and special committees to oversee different aspects of institutional functioning. Each committee has defined roles, responsibilities, and reporting mechanisms.
            </p>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-corporate-navy dark:text-white mb-3">Committee Categories</h4>
              <ul className="space-y-2 text-corporate-textSecondary dark:text-gray-400 text-sm">
                <li>• Academic committees for curriculum & quality</li>
                <li>• Administrative committees for operations</li>
                <li>• Finance committees for budget & accounts</li>
                <li>• Student committees for welfare & discipline</li>
                <li>• Research committees for innovation & publications</li>
                <li>• Special committees for specific initiatives</li>
              </ul>
            </div>
          </div>
        ),
      }}
      section2={{
        title: 'Key Committees',
        content: (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Academic Council',
                chair: 'Vice Principal (Academics)',
                functions: ['Curriculum development', 'Academic standards', 'Faculty evaluation', 'Accreditation matters']
              },
              {
                name: 'Finance Committee',
                chair: 'Finance Officer',
                functions: ['Budget planning', 'Financial review', 'Procurement oversight', 'Audits & compliance']
              },
              {
                name: 'Student Welfare Committee',
                chair: 'Dean of Students',
                functions: ['Student grievances', 'Discipline matters', 'Mentorship programs', 'Student support']
              },
              {
                name: 'Research & Innovation Committee',
                chair: 'Dean of Research',
                functions: ['Research promotion', 'Publication support', 'Patent filing', 'Industry collaboration']
              },
              {
                name: 'Quality Assurance Committee',
                chair: 'IQAC Coordinator',
                functions: ['Internal assessments', 'NAAC compliance', 'Continuous improvement', 'Feedback analysis']
              },
              {
                name: 'Placement & Career Committee',
                chair: 'CDC Head',
                functions: ['Placements oversight', 'Industry partnerships', 'Skill development', 'Alumni engagement']
              },
            ].map((committee, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-2">{committee.name}</h4>
                <p className="text-sm text-corporate-blue font-semibold mb-3">Chair: {committee.chair}</p>
                <ul className="space-y-1">
                  {committee.functions.map((func, i) => (
                    <li key={i} className="text-xs text-corporate-textSecondary dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></span>
                      {func}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ),
      }}
      section3={{
        title: 'Committee Operations',
        content: (
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Regular Meetings',
                description: 'Scheduled meetings (monthly/quarterly) for deliberation'
              },
              {
                title: 'Minutes & Reports',
                description: 'Documented proceedings and action items'
              },
              {
                title: 'Stakeholder Input',
                description: 'Representation from faculty, students, and staff'
              },
              {
                title: 'Recommendations',
                description: 'Evidence-based suggestions for improvement'
              },
              {
                title: 'Implementation',
                description: 'Monitoring execution of approved decisions'
              },
              {
                title: 'Transparency',
                description: 'Public disclosure of non-confidential matters'
              },
            ].map((aspect, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/30 rounded-lg border-l-4 border-l-corporate-blue">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-1 text-sm">{aspect.title}</h4>
                <p className="text-xs text-corporate-textSecondary dark:text-gray-400">{aspect.description}</p>
              </div>
            ))}
          </div>
        ),
      }}
    />
  );
}

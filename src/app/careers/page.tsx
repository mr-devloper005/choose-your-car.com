import { BusinessInfoPage } from '@/components/shared/business-info-page'
import { SITE_CONFIG } from '@/lib/site-config'

export default function CareersPage() {
  return (
    <BusinessInfoPage
      eyebrow="Company"
      title="Careers"
      description={`Build high-impact discovery experiences at ${SITE_CONFIG.name} where listings, classifieds, and local search meet practical design and performance.`}
      actions={[
        { label: 'Talk to recruiting', href: '/contact', variant: 'outline' },
        { label: 'Apply now', href: '/contact' },
      ]}
      metrics={[
        { value: '8', label: 'Open roles' },
        { value: 'Remote+', label: 'Work model' },
        { value: '4', label: 'Hiring squads' },
        { value: '2 weeks', label: 'Avg. process' },
      ]}
      cards={[
        {
          title: 'Frontend Engineer (Discovery)',
          description: 'Own listing and classifieds browse surfaces with performance-first, mobile-first implementation.',
        },
        {
          title: 'Product Designer (Marketplace UX)',
          description: 'Design high-clarity flows for search, filters, trust cues, and conversion-focused posting experiences.',
        },
        {
          title: 'Community Operations Lead',
          description: 'Shape quality workflows, moderation standards, and issue response loops for marketplace trust.',
        },
        {
          title: 'Partnerships Manager',
          description: 'Grow local business participation through practical onboarding and long-term partner success.',
        },
      ]}
      lists={[
        {
          title: 'What you get here',
          items: [
            'Remote-friendly schedule and focused collaboration',
            'Learning stipend and tooling budget',
            'Transparent planning and measurable impact ownership',
            'Strong accessibility and quality standards',
          ],
        },
      ]}
      cta={{
        title: 'Send us your profile',
        description: 'Even if your role is not listed, we are always open to great builders and operators.',
        actionLabel: 'Start application',
        actionHref: '/contact',
      }}
    />
  )
}

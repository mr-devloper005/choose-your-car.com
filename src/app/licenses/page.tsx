import { BusinessInfoPage } from '@/components/shared/business-info-page'

export default function LicensesPage() {
  return (
    <BusinessInfoPage
      eyebrow="Legal"
      title="Licenses"
      description="Open-source acknowledgements and licensing attributions used by the platform."
      metrics={[
        { value: '36+', label: 'OSS packages' },
        { value: 'MIT-first', label: 'Primary license mix' },
        { value: 'Tracked', label: 'Version records' },
        { value: 'Quarterly', label: 'Review cycle' },
      ]}
      cards={[
        {
          title: 'Framework stack',
          description: 'Core framework dependencies include Next.js, React, and related runtime tooling with permissive licenses.',
        },
        {
          title: 'UI and accessibility tooling',
          description: 'Design system primitives and utility libraries are selected for maintainability, accessibility, and license clarity.',
        },
        {
          title: 'Build and developer tooling',
          description: 'Compilation, linting, and formatting packages are reviewed for compatibility with project distribution policies.',
        },
        {
          title: 'Attribution operations',
          description: 'We keep dependency audits and license records updated as package versions evolve over time.',
        },
      ]}
      lists={[
        {
          title: 'Representative package licenses',
          items: [
            'Next.js - MIT License',
            'React - MIT License',
            'Tailwind CSS - MIT License',
            'Lucide - ISC License',
          ],
        },
      ]}
      cta={{
        title: 'Need full dependency attribution details?',
        description: 'Reach out for complete third-party notices and version-specific compliance references.',
        actionLabel: 'Request details',
        actionHref: '/contact',
      }}
    />
  )
}

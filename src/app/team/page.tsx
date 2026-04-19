import { BusinessInfoPage } from '@/components/shared/business-info-page'
import { SITE_CONFIG } from '@/lib/site-config'

export default function TeamPage() {
  return (
    <BusinessInfoPage
      eyebrow="Company"
      title="Team"
      description={`The ${SITE_CONFIG.name} team combines local commerce expertise, product design, and platform engineering to keep business discovery useful and trustworthy.`}
      actions={[
        { label: 'Open roles', href: '/careers', variant: 'outline' },
        { label: 'Get in touch', href: '/contact' },
      ]}
      metrics={[
        { value: '34', label: 'Team members' },
        { value: '11', label: 'Functions' },
        { value: '9', label: 'Countries' },
        { value: '24/7', label: 'Ops monitoring' },
      ]}
      cards={[
        {
          title: 'Editorial quality meets marketplace speed',
          description:
            'Our content and quality team keeps listing presentation clear, while operations keeps posting and discovery pipelines healthy every day.',
        },
        {
          title: 'Local-first product thinking',
          description:
            'Designers and researchers focus on decision moments: comparing listings, validating signals, and reducing the path from discovery to action.',
        },
        {
          title: 'Growth with trust',
          description:
            'We optimize for sustainable growth by balancing business visibility with user confidence, not by maximizing noise.',
        },
        {
          title: 'Support that closes loops',
          description:
            'Our support workflows prioritize practical resolution and clear updates so businesses and users can keep moving without uncertainty.',
          href: '/help',
          linkLabel: 'Visit help center',
        },
      ]}
      lists={[
        {
          title: 'Team principles',
          items: [
            'Clarity over clutter in every interface',
            'Local relevance before vanity metrics',
            'Fast iteration with reliability guardrails',
            'Useful defaults for businesses and shoppers',
          ],
        },
      ]}
      cta={{
        title: 'Join us in shaping modern local discovery',
        description: 'We are hiring across product, engineering, operations, and partnerships.',
        actionLabel: 'View careers',
        actionHref: '/careers',
      }}
    />
  )
}

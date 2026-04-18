import { BusinessInfoPage } from '@/components/shared/business-info-page'
import { SITE_CONFIG } from '@/lib/site-config'

export default function BlogPage() {
  return (
    <BusinessInfoPage
      eyebrow="Company"
      title="Blog"
      description={`Product updates, local commerce insights, and practical growth playbooks from the ${SITE_CONFIG.name} team.`}
      actions={[
        { label: 'Explore listings', href: '/listings', variant: 'outline' },
        { label: 'Read latest updates', href: '/blog' },
      ]}
      metrics={[
        { value: '3x weekly', label: 'New posts' },
        { value: '120+', label: 'Guides published' },
        { value: '42', label: 'Case studies' },
        { value: '18k', label: 'Subscribers' },
      ]}
      cards={[
        {
          title: 'Marketplace playbooks',
          description: 'Actionable strategies for increasing visibility, improving listing quality, and driving local conversions.',
        },
        {
          title: 'Product release notes',
          description: 'Track what changed in search, navigation, posting tools, and moderation flows with concise summaries.',
        },
        {
          title: 'Business spotlight stories',
          description: 'Real examples of local businesses using structured listings to improve discovery and response quality.',
          href: '/listings',
          linkLabel: 'See live listings',
        },
        {
          title: 'Classified performance tips',
          description: 'How to write clearer offers, highlight urgency correctly, and convert views into direct responses.',
          href: '/classifieds',
          linkLabel: 'Browse classifieds',
        },
      ]}
      lists={[
        {
          title: 'Editorial categories',
          items: [
            'Product updates and changelog notes',
            'Local SEO and discovery strategy',
            'Trust, moderation, and quality ops',
            'Conversion optimization for listings',
          ],
        },
      ]}
      cta={{
        title: 'Have a story to share?',
        description: 'Tell us how your business uses our platform and we may feature your growth journey.',
        actionLabel: 'Contact editorial',
        actionHref: '/contact',
      }}
    />
  )
}

import { BusinessInfoPage } from '@/components/shared/business-info-page'
import { SITE_CONFIG } from '@/lib/site-config'

export default function AboutPage() {
  return (
    <BusinessInfoPage
      eyebrow="Company"
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} helps people discover trusted local businesses and timely classifieds with cleaner structure, faster scanning, and better local context.`}
      actions={[
        { label: 'Meet our team', href: '/team', variant: 'outline' },
        { label: 'Contact us', href: '/contact' },
      ]}
      metrics={[
        { value: '58k+', label: 'Monthly visitors' },
        { value: '12k+', label: 'Active listings' },
        { value: '4.2k+', label: 'Classified posts' },
        { value: '320+', label: 'Cities covered' },
      ]}
      cards={[
        {
          title: 'Built for local trust',
          description:
            'Every listing surface emphasizes practical details first: category, location, price cues, and response pathways so users can make decisions faster.',
        },
        {
          title: 'Discovery-first architecture',
          description:
            'Search, filters, and category navigation are designed for quick scanning on mobile and desktop, reducing friction across the entire browsing journey.',
        },
        {
          title: 'Balanced for businesses and buyers',
          description:
            'Businesses get a structured place to be discovered while buyers get faster comparisons and clearer confidence signals before they contact.',
          href: '/listings',
          linkLabel: 'Explore listings',
        },
        {
          title: 'Fast-moving classifieds experience',
          description:
            'Urgent posts, local deals, and short-lifecycle notices are presented in a compact format that favors speed without losing clarity.',
          href: '/classifieds',
          linkLabel: 'Browse classifieds',
        },
      ]}
      lists={[
        {
          title: 'What we focus on',
          items: [
            'Clear listing metadata and location context',
            'Reliable publish and update workflow',
            'Mobile-first discovery and search UX',
            'Simple, high-intent pathways to action',
          ],
        },
      ]}
      cta={{
        title: 'Want to publish your business or offer?',
        description: 'Create a listing or classified in minutes and start reaching local discovery traffic right away.',
        actionLabel: 'Create a post',
        actionHref: '/create/listing',
      }}
    />
  )
}

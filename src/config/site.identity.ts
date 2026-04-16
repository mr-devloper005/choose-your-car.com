export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'cy6v8q2m4x',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Choose Your Car',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Compare listings and browse active auto deals',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A structured automotive discovery platform combining business listings with active classified inventory.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'choose-your-car.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://choose-your-car.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const


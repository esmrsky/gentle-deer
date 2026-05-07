export const SITE = {
  name: 'Greenlawn Homes',
  title: 'Greenlawn Homes | Central Ohio Manufactured Homes',
  description: 'A family-run Central Ohio manufactured home dealer and community operator. Proud dealer of Redman Homes and Adventure Homes.',
  url: 'https://greenlawnhomes-udyhps8u.manus.space/',
  twitterHandle: '@greenlawnhomes',
  socials: {
    twitter: 'https://twitter.com/greenlawnhomes',
    instagram: 'https://instagram.com/greenlawnhomes',
    linkedin: 'https://www.linkedin.com/company/greenlawnhomes',
  },
} as const;

export type SiteConfig = typeof SITE;

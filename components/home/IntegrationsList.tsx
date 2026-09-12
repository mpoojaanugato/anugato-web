import ScopeRow from '@/components/ui/ScopeRow'

const integrations = [
  {
    key: 'GA4',
    title: 'Google Analytics 4 & GTM',
    description: 'Page, scroll and CTA-click tracking wired via the existing GTM container.',
    status: 'In this scope'
  },
  {
    key: 'Cal',
    title: 'Calendly scheduling',
    description: 'Inline booking on the Contact and CTA pages — see the Contact screen.',
    status: 'In this scope'
  },
  {
    key: 'CRM',
    title: 'CRM lead capture',
    description:
      'Demo, brochure and newsletter forms post to HubSpot / Zoho / Salesforce via webhook.',
    status: 'In this scope'
  },
  {
    key: 'SEO',
    title: 'SEO foundation',
    description:
      'Clean URLs, schema markup, sitemap, and the new Resources hub for organic content.',
    status: 'In this scope'
  },
  {
    key: 'SSO',
    title: 'SSO into the app',
    description: 'Login button links through to login.anugatobharat.app — SSO handoff, phase 2.',
    status: 'Roadmap'
  }
]

export default function IntegrationsList() {
  return (
    <div>
      {integrations.map((item) => (
        <ScopeRow key={item.key} item={item} />
      ))}
    </div>
  )
}

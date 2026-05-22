export interface Technology {
  name: string
  icon: string
}

export const technologies: Record<string, Technology> = {
  vue: { name: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  nuxt: { name: 'Nuxt', icon: 'i-simple-icons-nuxt' },
  ionic: { name: 'Ionic', icon: 'i-simple-icons-ionic' },
  react: { name: 'React', icon: 'i-simple-icons-react' },
  angular: { name: 'Angular', icon: 'i-simple-icons-angular' },
  typescript: { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  javascript: { name: 'JavaScript', icon: 'i-simple-icons-javascript' },
  ruby: { name: 'Ruby', icon: 'i-simple-icons-ruby' },
  rails: { name: 'Rails', icon: 'i-simple-icons-rubyonrails' },
  python: { name: 'Python', icon: 'i-simple-icons-python' },
  node: { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  postgres: { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' },
  mysql: { name: 'MySQL', icon: 'i-simple-icons-mysql' },
  redis: { name: 'Redis', icon: 'i-simple-icons-redis' },
  aws: { name: 'AWS', icon: 'i-simple-icons-amazonwebservices' },
  hubspot: { name: 'HubSpot', icon: 'i-simple-icons-hubspot' },
  tailwind: { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss' },
  vuetify: { name: 'Vuetify', icon: 'i-simple-icons-vuetify' },
  capacitor: { name: 'Capacitor', icon: 'i-simple-icons-capacitor' },
  zoom: { name: 'Zoom', icon: 'i-simple-icons-zoom' },
  openai: { name: 'OpenAI', icon: 'i-simple-icons-openai' },
  mixpanel: { name: 'Mixpanel', icon: 'i-simple-icons-mixpanel' },
  posthog: { name: 'PostHog', icon: 'i-simple-icons-posthog' },
  sentry: { name: 'Sentry', icon: 'i-simple-icons-sentry' },
  stripe: { name: 'Stripe', icon: 'i-simple-icons-stripe' },
  figma: { name: 'Figma', icon: 'i-simple-icons-figma' }
}

export function getTechnology(key: string): Technology | undefined {
  return technologies[key]
}

export interface Technology {
  name: string
  icon: string
}

export const technologies: Record<string, Technology> = {
  angular: { name: 'Angular', icon: 'i-simple-icons-angular' },
  aws: { name: 'AWS', icon: 'i-simple-icons-amazonwebservices' },
  capacitor: { name: 'Capacitor', icon: 'i-simple-icons-capacitor' },
  figma: { name: 'Figma', icon: 'i-simple-icons-figma' },
  hubspot: { name: 'HubSpot', icon: 'i-simple-icons-hubspot' },
  ionic: { name: 'Ionic', icon: 'i-simple-icons-ionic' },
  javascript: { name: 'JavaScript', icon: 'i-simple-icons-javascript' },
  mixpanel: { name: 'Mixpanel', icon: 'i-simple-icons-mixpanel' },
  mysql: { name: 'MySQL', icon: 'i-simple-icons-mysql' },
  node: { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  nuxt: { name: 'Nuxt', icon: 'i-simple-icons-nuxt' },
  openai: { name: 'OpenAI', icon: 'i-simple-icons-openai' },
  postgres: { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' },
  posthog: { name: 'PostHog', icon: 'i-simple-icons-posthog' },
  python: { name: 'Python', icon: 'i-simple-icons-python' },
  rails: { name: 'Rails', icon: 'i-simple-icons-rubyonrails' },
  react: { name: 'React', icon: 'i-simple-icons-react' },
  redis: { name: 'Redis', icon: 'i-simple-icons-redis' },
  ruby: { name: 'Ruby', icon: 'i-simple-icons-ruby' },
  sentry: { name: 'Sentry', icon: 'i-simple-icons-sentry' },
  stripe: { name: 'Stripe', icon: 'i-simple-icons-stripe' },
  tailwind: { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss' },
  typeform: { name: 'Typeform', icon: 'i-simple-icons-typeform' },
  typescript: { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  vue: { name: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  vuetify: { name: 'Vuetify', icon: 'i-simple-icons-vuetify' },
  zoom: { name: 'Zoom', icon: 'i-simple-icons-zoom' }
}

export function getTechnology(key: string): Technology | undefined {
  return technologies[key]
}

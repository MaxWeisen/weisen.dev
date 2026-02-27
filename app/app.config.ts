export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://max-dev-portfolio.s3.us-west-1.amazonaws.com/images/max.jpeg',
      light:
        'https://max-dev-portfolio.s3.us-west-1.amazonaws.com/images/max.jpeg',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'weisenlight@gmail.com',
    linkedInUrl: 'https://www.linkedin.com/in/maxweisen/'
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Max Weisenberger © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/maxweisen/',
        'target': '_blank',
        'aria-label': 'Max Weisenberger on Linkedin'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/maxweisen',
        'target': '_blank',
        'aria-label': 'Max Weisenberger on GitHub'
      }
    ]
  }
})

export const data: TUserInfo = {
  about: {
    text: `
    {{  greeting  }}
    I’m Alex, a [[ attention(Frontend Engineer)]] based in [[ attention(Redmond, WA) ]], originally from {{origin}}.

    I’ve worked with startups, food delivery service (local alternative to Doordash), government portals,and working on my own platform.
    Whether I’m scaling a food delivery platform to handle thousands of real-time transactions or optimizing performance with Docker and nginx, I’m always driven by [[ attention(clean design, great UX, and performant code)]].

    Outside of tech, you’ll probably find me wrenching under the hood of a car — I love all things mechanical.
  `,
    tag: 'article',
    attrs: {
      style: {
        whiteSpace: 'pre-line',
      },
      className: `text-xl lg:text-lg`,
    },
    children: {
      greeting: {
        text: '{{emoji}} Hello!',
        tag: 'p',
        attrs: {
          className: `text-2xl lg:text-xl font-bold text-left lg:text-center`,
        },
        children: {
          emoji: {
            text: `👋`,
            tag: 'span',
          }
        }
      },
      origin: {
        text: 'Kazakhstan {{flag}}',
        tag: 'span',
        attrs: {
          className: `pb-0.5 mr-4`,
        },
        children: {
          flag: {
            text: '🇰🇿',
            tag: 'span',
            attrs: {
              className: `text-3xl text-red-500 pb-0.5`,
            }
          }
        }
      },
    }
  },
  experience: [
    {
      timeline: {
        from: 'MAR',
        to: 'SEP 2023',
      },
      company: {
        title: 'Big Black Box',
        link: 'https://bigblackbox.kz/',
      },
      role: 'Senior Frontend Engineer',
      location: 'Almaty, Kazakhstan',
      description: `
        Procurement portal for a government organization.
- Developed a comprehensive web application for managing and editing
extensive product catalogs,
- Implemented robust security features including Keycloak-based
authentication and error tracking with Sentry.
- Optimized performance with nginx proxy and gzip compression.
      `,
      technologies: [
        {title: 'Element Plus', link: 'https://element-plus.org/en-US/'},
        {
          title: 'JavaScript',
        },
        {
          title:'Vue.js v2',
        },
        {
          title:'Vue.js v3',
        },
        {
          title:'Nuxt.js',
        },
        {
          title:'Typescript',
        },
        {
          title:'CSS',
        },
        {
          title:'SCSS',
        },
        {
          title:'Vuetify',
        },
        {
          title:'TailwindCSS',
        },
        {
          title: 'Docker',
        },
        {
          title: 'NGINX',
        },
        {
          title: 'GitLab CI/CD',
        },
      ]
    },
    {
      timeline: {
        from: 'JULY 2020',
        to: 'MAR 2023',
      },
      company: {
        title: 'Choco Holding',
        link: 'https://chocofood.kz',
      },
      role: 'Senior Frontend Software Engineer',
      location: 'Almaty, Kazakhstan',
      description: `Chocofood is a food delivery service in Kazakhstan.
- Started as a Junior Engineer and advanced to a Senior role leading and
mentoring a team of 4 developers and interns.
- Developed a scalable payment gateway, which led to reduction in transaction processing times by 22%.
- Launched a flexible webview platform with authentication, secure
transactions, and real-time data exchange through web sockets, while
supporting multiple languages. This increased food order volume by 18%
- Implemented content management, order processing and delivery tracking
frontends.
- Designed, implemented and standardized integration with partners:
 authentication, payments, location services.
- Implemented real-time tracking of deliveries.
- Implemented localization into multiple languages.
- Implemented dark theme.
      `,
      technologies: [
        {
          title: 'JavaScript',
        },
        {
          title:'Vue.js v2',
        },
        {
          title:'Vue.js v3',
        },
        {
          title:'Nuxt.js',
        },
        {
          title:'Typescript',
        },
        {
          title:'CSS',
        },
        {
          title:'SCSS',
        },
        {
          title:'Vuetify',
        },
        {
          title:'TailwindCSS',
        },
        {
          title: 'Docker',
        },
        {
          title: 'NGINX',
        },
        {
          title: 'GitLab CI/CD',
        },
      ]
    }
  ]
};

export const reusable = {
    attention: (text: string) => ({
      text,
      tag: 'span',
      attrs: {
        className: `text-xl font-bold attention-color`,
      }
    })
}
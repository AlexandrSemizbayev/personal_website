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
        from: 'SEP 2023',
        to: 'PRESENT',
      },
      company: {
        title: 'Big Black Box',
        link: 'https://bigblackbox.kz/',
      },
      role: 'Frontend Software Engineer (Contract)',
      location: 'Remote from Seattle, WA',
      description: `
        Frontend engineering for a retail grocery chain platform (similar to Safeway/QFC).
- Developed user interfaces for high-traffic product catalog and checkout systems using Vue, React, and TypeScript.
- Owned core product domains end-to-end, leading architectural decisions, implementation strategy, and production delivery.
- Resolved complex performance and build pipeline bottlenecks, improving load times and system efficiency under high-load conditions.
- Authored and maintained comprehensive technical documentation to ensure knowledge continuity and cross-team alignment.
      `,
      technologies: [
        { title: 'Vue.js v2', link: 'https://v2.vuejs.org/'},
        { title: 'Vue.js v3', link: 'https://vuejs.org/'},
        { title: 'React', link: 'https://react.dev/' },
        { title: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { title: 'JavaScript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
        { title: 'Nuxt.js', link: 'https://nuxt.com/' },
        { title: 'CSS', link:'https://en.wikipedia.org/wiki/CSS'},
        { title: 'SCSS', link: 'https://sass-lang.com/' },
        { title: 'TailwindCSS',link: 'https://tailwindcss.com/' },
        { title: 'Vuetify', link: 'https://vuetifyjs.com/en/' },
        { title: 'Docker', link: 'https://docker.com/' },
        { title: 'NGINX', link: 'https://nginx.org/' },
        { title: 'GitLab CI/CD', link: 'https://gitlab.com/' },
      ]
    },
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
        { title: 'Vue.js v2', link: 'https://v2.vuejs.org/'},
        { title: 'Vue.js v3', link: 'https://vuejs.org/'},
        { title: 'React', link: 'https://react.dev/' },
        { title: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { title: 'JavaScript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
        { title: 'Nuxt.js', link: 'https://nuxt.com/' },
        { title: 'CSS', link:'https://en.wikipedia.org/wiki/CSS'},
        { title: 'SCSS', link: 'https://sass-lang.com/' },
        { title: 'TailwindCSS',link: 'https://tailwindcss.com/' },
        { title: 'Vuetify', link: 'https://vuetifyjs.com/en/' },
        { title: 'Docker', link: 'https://docker.com/' },
        { title: 'NGINX', link: 'https://nginx.org/' },
        { title: 'GitLab CI/CD', link: 'https://gitlab.com/' },
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
        { title: 'Vue.js v2', link: 'https://v2.vuejs.org/'},
        { title: 'Vue.js v3', link: 'https://vuejs.org/'},
        { title: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { title: 'JavaScript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
        { title: 'Nuxt.js', link: 'https://nuxt.com/' },
        { title: 'jQuery', link: 'https://jquery.com/' },
        { title: 'CSS', link:'https://en.wikipedia.org/wiki/CSS'},
        { title: 'SCSS', link: 'https://sass-lang.com/' },
        { title: 'TailwindCSS',link: 'https://tailwindcss.com/' },
        { title: 'Vuetify', link: 'https://vuetifyjs.com/en/' },
        { title: 'Docker', link: 'https://docker.com/' },
        { title: 'NGINX', link: 'https://nginx.org/' },
        { title: 'GitLab CI/CD', link: 'https://gitlab.com/' },
      ]
    },
    {
      timeline: {
        from: 'NOV 2019',
        to: 'FEB 2020',
      },
      company: {
        title: 'at Orzu',
        // link: 'https://orzu.org/',
      },
      role: 'Full-Stack Web Developer Intern',
      location: 'Almaty, Kazakhstan',
      description: `
        Orzu is a startup marketplace for hiring contractors.
- Implemented UX and UI for the home page and customer profile pages.
- Refactored a spaghetti-coded backend into a modular, maintainable architecture, improving developer efficiency by 20%.
- Introduced source control and replaced legacy FTP-based manual deployments with automated scripts, eliminating an entire class of deployment bugs and improving iteration speed by 50%.
      `,
      technologies: [
        { title: 'JavaScript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
        { title: 'PHP', link: 'https://www.php.net/' },
        { title: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { title: 'CSS', link:'https://en.wikipedia.org/wiki/CSS' },
        { title: 'SCSS', link: 'https://sass-lang.com/' },
        { title: 'jQuery', link: 'https://jquery.com/' },
        { title: 'MySQL', link: 'https://www.mysql.com/' },
        { title: 'Git', link: 'https://github.com/' },
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
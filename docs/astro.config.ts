import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

const site =
  process.env['VERCEL_ENV'] !== 'production' && process.env['VERCEL_URL']
    ? `https://${process.env['VERCEL_URL']}`
    : 'https://starlight-showcases.vercel.app/'

export default defineConfig({
  integrations: [
    starlight({
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-showcases/edit/main/docs/',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: new URL('og.jpg', site).href },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:alt', content: 'Set of Starlight components to author showcase pages.' },
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ label: 'Getting Started', link: '/getting-started/' }],
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        { label: 'Demo', link: '/demo/' },
      ],
      social: {
        blueSky: 'https://bsky.app/profile/hideoo.dev',
        github: 'https://github.com/HiDeoo/starlight-showcases',
      },
      title: 'Starlight Showcases',
    }),
  ],
  image: {
    domains: ['avatars.githubusercontent.com'],
  },
  site,
})

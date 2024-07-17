import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    starlight({
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-showcases/edit/main/docs/',
      },
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
        github: 'https://github.com/HiDeoo/starlight-showcases',
      },
      title: 'Starlight Showcases',
    }),
  ],
  image: {
    domains: ['avatars.githubusercontent.com'],
  },
  site: 'https://starlight-showcases.vercel.app',
})

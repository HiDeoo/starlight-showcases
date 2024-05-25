import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// TODO(HiDeoo) favicon

// TODO(HiDeoo)
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
          label: 'Guides',
          items: [
            { label: 'Frontmatter', link: '/guides/frontmatter/' },
            { label: 'Authors', link: '/guides/authors/' },
            { label: 'RSS', link: '/guides/rss/' },
          ],
        },
        { label: 'Demo', link: '/demo/' },
      ],
      social: {
        github: 'https://github.com/HiDeoo/starlight-showcases',
      },
      title: 'Starlight Showcases',
    }),
  ],
  site: 'https://starlight-showcases.vercel.app',
})

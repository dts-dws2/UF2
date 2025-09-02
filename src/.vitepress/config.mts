//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default ({
  lang: 'ca-ES',
  title: 'Títol del lloc',
  description: 'Descripció breu del lloc',
  base: '/vitepress-template/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
    // ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }],
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],
  themeConfig: {
    siteTitle: 'Nom del lloc',
    logo: '/img/logo.png',
    nav: [
      { text: 'Inici', link: '/index' },
      { text: 'Secció', link: '/seccio' },
      { text: 'Més', items: [
        { text: 'Subsecció 1', link: '/sub1' },
        { text: 'Subsecció 2', link: '/sub2' }
      ]}
    ],
    sidebar: [
      { text: 'Continguts', items: [
          { text: 'Introducció', link: '/introduccio' },
          { text: 'Exemple', link: '/exemple' },
          { text: 'Imatge', link: '' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/usuari/repositori' }
    ],
    footer: {
      message: 'Missatge de peu de pàgina',
      copyright: 'Copyright © 2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})

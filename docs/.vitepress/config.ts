import { defineConfig } from 'vitepress'
import { resolve } from 'node:path'
import { version, name } from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cub Admin",
  description: "中后台系统基础库",
  outDir: resolve(__dirname, '../../dist-docs'),
  base: `/${name}/`,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en'
    }
  },
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指引', link: '/introduction' },
      { text: `v${version}`, link: '' },
    ],
    sidebar: [
      {
        items: [
          { text: '简介', link: '/introduction' },
          { text: '快速上手', link: '/created' }
        ]
      },
      {
        text: '基础',
        items: [
          { text: 'Layouts', link: '/layout' },
          { text: '动态路由', link: '/routes' },
          { text: '主题样式', link: '/styles' },
        ]
      },
      {
        text: '进阶',
        items: []
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/thelostword/cub-admin' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 losting',
    },
  },
})

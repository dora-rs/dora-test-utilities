import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dora on ArceOS",
  description: "Porting Dora to ArceOS",
  themeConfig: {
    logo: { src: '/dora-logo-mini.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Dora-rs',
        link: 'https://dora-rs.ai/'
      },
      {
        text: 'ArceOS',
        link: 'https://github.com/rcore-os/arceos'
      },
      {
        text: 'StarryOS',
        link: 'https://github.com/Starry-OS/Starry'
      },
      {
        text: 'Lyon Rust Notes',
        link: 'https://echoli.cn'
      },
    ],

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarEnglishGuide() },
    },
    // sidebar: [
      //   {
        //     text: 'Examples',
        //     items: [
          //       { text: 'Markdown Examples', link: '/markdown-examples' },
          //       { text: 'Runtime API Examples', link: '/api-examples' }
          //     ]
          //   }
          // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dora-rs/dora-test-utilities' }
    ],

    // search: {
      //   provider: 'algolia',
      //   options: {
        //     appId: '8J64VVRP8K',
        //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        //     indexName: 'vitepress',
        //   }
        // },

        footer: {
          message: 'Released under the Apache-2.0 license',
          copyright: `Copyright © ${copyrightYear()} dora-rs. Documentation: Lyon`
        },
      },
      locales: {
        root: {
          label: 'English',
          lang: 'en',
          description: 'Porting Dora to ArceOS',
        },
        zh: {
          label: '简体中文',
          lang: 'zh',
          link: '/zh/',
          description: 'Dora 移植到 ArceOS',
          themeConfig: {
            nav: [
              {
                text: 'Dora-rs',
                link: 'https://dora-rs.ai/'
              },
              {
                text: 'ArceOS',
                link: 'https://github.com/rcore-os/arceos'
              },
              {
                text: 'StarryOS',
                link: 'https://github.com/Starry-OS/Starry'
              },
                      {
                text: '技安 Rust 笔记',
                link: 'https://echoli.cn'
              }
            ],

            sidebar: {
              '/zh/guide/': { base: '/zh/guide/', items: sidebarZhGuide() },
            },

          footer: {
          message: '基于 Apache-2.0 license 许可发布',
          copyright: `版权所有 © ${copyrightYear()} dora-rs. 文档编写: 李扬`
        },
      }
    }
  }
})

// 生成版权年份, 如果是2024年只显示2024, 如果不是2024年,显示2024-今年
function copyrightYear(): string {
  const year = new Date().getFullYear()
  if (year === 2024) {
    return '2024'
  }

  return `2024-${year}`

}

function sidebarEnglishGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Dora?', link: 'what-is-dora' },
        { text: 'What is ArceOS？', link: 'what-is-arceos' },
        { text: 'What is StarryOS？', link: 'what-is-starryos' },
        // { text: 'Deploy', link: 'deploy' }
      ]
    },
    // {
    //   text: 'Writing',
    //   collapsed: false,
    //   items: [
    //     { text: 'Markdown Extensions', link: 'markdown' },
    //     { text: 'Asset Handling', link: 'asset-handling' },
    //     { text: 'Frontmatter', link: 'frontmatter' },
    //     { text: 'Using Vue in Markdown', link: 'using-vue' },
    //     { text: 'Internationalization', link: 'i18n' }
    //   ]
    // },
    // {
    //   text: 'Customization',
    //   collapsed: false,
    //   items: [
    //     { text: 'Using a Custom Theme', link: 'custom-theme' },
    //     {
    //       text: 'Extending the Default Theme',
    //       link: 'extending-default-theme'
    //     },
    //     { text: 'Build-Time Data Loading', link: 'data-loading' },
    //     { text: 'SSR Compatibility', link: 'ssr-compat' },
    //     { text: 'Connecting to a CMS', link: 'cms' }
    //   ]
    // },
    // {
    //   text: 'Experimental',
    //   collapsed: false,
    //   items: [
    //     { text: 'MPA Mode', link: 'mpa-mode' },
    //     { text: 'Sitemap Generation', link: 'sitemap-generation' }
    //   ]
    // },
    // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarZhGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 Dora？', link: 'what-is-dora' },
        { text: '什么是 ArceOS？', link: 'what-is-arceos' },
        { text: '什么是 StarryOS？', link: 'what-is-starryos' },
        // { text: '部署', link: 'deploy' }
      ]
    },
    // {
    //   text: '写作',
    //   collapsed: false,
    //   items: [
    //     { text: 'Markdown 扩展', link: 'markdown' },
    //     { text: '资源处理', link: 'asset-handling' },
    //     { text: 'frontmatter', link: 'frontmatter' },
    //     { text: '在 Markdown 使用 Vue', link: 'using-vue' },
    //     { text: '国际化', link: 'i18n' }
    //   ]
    // },
    // {
    //   text: '自定义',
    //   collapsed: false,
    //   items: [
    //     { text: '自定义主题', link: 'custom-theme' },
    //     { text: '扩展默认主题', link: 'extending-default-theme' },
    //     { text: '构建时数据加载', link: 'data-loading' },
    //     { text: 'SSR 兼容性', link: 'ssr-compat' },
    //     { text: '连接 CMS', link: 'cms' }
    //   ]
    // },
    // {
    //   text: '实验性功能',
    //   collapsed: false,
    //   items: [
    //     { text: 'MPA 模式', link: 'mpa-mode' },
    //     { text: 'sitemap 生成', link: 'sitemap-generation' }
    //   ]
    // },
    // { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}
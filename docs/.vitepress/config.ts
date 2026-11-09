import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.ts'
import { tokenizeChinese } from './search.ts'

export default defineConfig({
  lang: 'zh-CN',
  title: '前端面试题库',
  description: 'Vue、React、JavaScript、CSS、网络、工程化与算法，235 篇前端面试问答。',
  base: '/interview/',
  cleanUrls: false,
  vite: {
    server: {
      watch: { ignored: ['**/.vitepress/dist/**', '**/.vitepress/cache/**'] },
    },
  },
  head: [
    ['meta', { name: 'keywords', content: '前端面试,Vue,React,JavaScript,TypeScript,CSS,算法' }],
  ],
  markdown: {
    lineNumbers: true,
    languageAlias: { mysql: 'sql', clang: 'c', cons: 'text', h: 'text', jsp: 'html' },
  },
  themeConfig: {
    siteTitle: '前端面试题库',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '知识专题',
        items: sidebar.map((group) => ({
          text: group.text,
          link: group.items[0].link,
        })),
      },
      { text: '项目说明', link: '/README.html' },
    ],
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/febobo/web-interview' }],
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    sidebarMenuLabel: '专题目录',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: tokenizeChinese,
          },
        },
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清空搜索',
            displayDetails: '显示详细列表',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
    footer: { message: '从问题出发，持续整理前端知识。' },
  },
})

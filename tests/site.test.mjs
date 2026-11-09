import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { sidebar } from '../docs/.vitepress/sidebar.ts'
import { tokenizeChinese } from '../docs/.vitepress/search.ts'

const docs = fileURLToPath(new URL('../docs/', import.meta.url))

async function articles(directory) {
  const result = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'assets') continue
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) result.push(...await articles(path))
    else if (entry.name.endsWith('.md') && !['index.md', 'README.md'].includes(entry.name)) result.push(path)
  }
  return result
}

test('专题导航覆盖全部文章，并保留可访问的 HTML 路径', async () => {
  const links = sidebar.flatMap((group) => group.items.map((item) => item.link))
  assert.equal(new Set(links).size, links.length, '导航中存在重复文章')
  const targets = links.map((link) => resolve(docs, '.' + decodeURIComponent(link).replace(/\.html$/, '.md')))
  assert.deepEqual(new Set(targets), new Set(await articles(docs)))
})

test('中文分词支持词语与英文技术名混合查询', () => {
  const tokens = tokenizeChinese('理解闭包与作用域，Vue 组件与 Promise')
  for (const word of ['闭包', '作用', '用域', 'Vue', '组件', 'Promise']) assert.ok(tokens.includes(word), word)
  assert.ok(!tokens.includes('，'))
})

test('浏览器序列化后的分词函数不依赖配置文件作用域', () => {
  const serialized = Function(`return (${tokenizeChinese.toString()})`)()
  assert.deepEqual(serialized('闭包与作用域'), tokenizeChinese('闭包与作用域'))
})

test('全文检索能用中文词语命中文章标题', () => {
  const require = createRequire(import.meta.resolve('vitepress'))
  const MiniSearch = require('minisearch')
  const index = new MiniSearch({ fields: ['title', 'text'], storeFields: ['title'], tokenize: tokenizeChinese })
  index.addAll([
    { id: 'closure', title: '说说你对闭包的理解', text: '作用域与函数' },
    { id: 'vue', title: 'Vue 组件通信', text: '父子组件传递数据' },
  ])
  assert.equal(index.search('闭包')[0]?.id, 'closure')
  assert.equal(index.search('作用域')[0]?.id, 'closure')
  assert.equal(index.search('组件')[0]?.id, 'vue')
})

test('所有已恢复图片都有可复核的来源记录', async () => {
  const manifest = JSON.parse(await readFile(new URL('../scripts/image-migration.json', import.meta.url), 'utf8'))
  const restored = manifest.images.filter((image) => image.status === 'downloaded')
  assert.equal(restored.length, manifest.summary.downloaded)
  for (const image of restored) {
    assert.match(image.sha256, /^[a-f0-9]{64}$/)
    assert.ok(image.source.startsWith('https://'))
    assert.ok(image.bytes > 0)
  }
})

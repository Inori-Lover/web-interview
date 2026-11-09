export function tokenizeChinese(text: string): string[] {
  const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' })
  const tokens = new Set<string>()
  for (const part of segmenter.segment(text)) {
    if (part.isWordLike && !/\p{Script=Han}/u.test(part.segment)) tokens.add(part.segment)
  }
  // Overlapping pairs keep technical terms searchable even when ICU splits
  // terms such as “闭包” differently depending on the surrounding sentence.
  for (const match of text.matchAll(/\p{Script=Han}+/gu)) {
    const characters = Array.from(match[0])
    if (characters.length === 1) tokens.add(characters[0])
    for (let index = 0; index < characters.length - 1; index++) {
      tokens.add(characters[index] + characters[index + 1])
    }
  }
  return Array.from(tokens)
}

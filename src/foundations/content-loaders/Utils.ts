import fs from "fs"
import path from "path"
import { DIR, ARTICLE_FILE_NAME } from "./Constants"
import matter from "gray-matter"
import { formatDate } from "../date"
import { extractSummaryFromMarkdown, markdownToAmpHtml } from "./MdConverter"

export type MarkDownInfo = {
  title: string
  published: Date
  tags: string
}
export type Summary = {
  title: string
  published: string
  tags: string[]
  summaryText: string
  path: string
}

export const analyzeMarkdown = async (slug: string) => {
  const markdown = fs.readFileSync(
    path.join(DIR, slug, ARTICLE_FILE_NAME),
    "utf8"
  )
  const matterResult = matter(markdown)
  const mdInfo = <MarkDownInfo>matterResult.data
  const tags = mdInfo.tags.split(",").map((tag) => tag.trim())
  return {
    title: mdInfo.title,
    published: mdInfo.published,
    tags,
    content: matterResult.content,
  }
}

/**
 * 全記事のフォルダ名を取得
 */
export const readSlugs = () => {
  const dirents = fs.readdirSync(DIR, { withFileTypes: true })
  return dirents
    .filter((dirent) => !dirent.isFile())
    .map((dirent) => dirent.name)
    .sort()
}

/**
 * 1記事の概要読み込み
 * @param slug
 */
const readSummary = async (slug: string) => {
  const mdInfo = await analyzeMarkdown(slug)
  const summaryText = await extractSummaryFromMarkdown(mdInfo.content, 120)
  return {
    title: mdInfo.title,
    published: formatDate(mdInfo.published),
    tags: mdInfo.tags,
    summaryText,
    path: path.join("/posts/" + slug),
  }
}

/**
 * 指定したslugsの記事の概要を読み込み
 * @param slugs
 */
export const readSummaries = async (slugs: string[]) => {
  const summaries: Summary[] = []
  for (const slug of slugs) {
    const summary = await readSummary(slug)
    summaries.push(summary)
  }
  return summaries
}

/**
 * 全記事から全タグを読み込み
 */
export const readAllTags = async () => {
  const slugs = readSlugs()
  let tags: string[] = []
  for (const slug of slugs) {
    const mdInfo = await analyzeMarkdown(slug)
    for (const tag of mdInfo.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  }
  return tags
}

/**
 * 個別ページ読み込み
 * @param param0
 */
export const readPage = async ({ slug }: { slug: string }) => {
  const { title, published, tags, content } = await analyzeMarkdown(slug)
  return {
    title,
    published: formatDate(published),
    content: await markdownToAmpHtml(slug, content),
    slug,
    tags,
  }
}

import path from "path"

import {
  makeImagePathReplacer,
  htmlAmpConverter,
} from "../libs/unified-atatcher"
import matter from "gray-matter"
import fs from "fs"
import rehypeStringify from "rehype-stringify"
import unified from "unified"
import remarkParse from "remark-parse"
import remarkToRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import htmlToText from "html-to-text"

const md = require("markdown-it")({ html: true })

import { formatDate } from "./date"
import { stringify } from "remark"
const DIR = path.join(process.cwd(), "posts")
const ARTICLE_FILE_NAME = "article.md"

const listContentDirs = () => {
  const dirents = fs.readdirSync(DIR, { withFileTypes: true })
  return dirents
    .filter((dirent) => !dirent.isFile())
    .map((dirent) => dirent.name)
}

const markdownToAmpHtml = async (slug: string, markdown: string) => {
  const processer = unified()
    .use(remarkParse)
    .use(remarkToRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(makeImagePathReplacer(slug))
    .use(htmlAmpConverter)
    .use(rehypeStringify)
  const parsedContent = await processer.process(markdown)
  const content = parsedContent.toString()
  const decodedHtml = content.replace(/&#x3C;/g, "<")
  return decodedHtml
}

const readContentFile = async ({
  slug,
  filename,
}: {
  slug: string
  filename?: string
}) => {
  if (slug === undefined) {
    slug = path.parse(filename).name
  }

  const raw = fs.readFileSync(path.join(DIR, slug, ARTICLE_FILE_NAME), "utf8")
  const matterResult = matter(raw)
  const { title, published: rawPublished, tags: tagsStr } = matterResult.data
  const tags: string[] = tagsStr.split(",").map((tag) => tag.trim())
  const parsedContent = await markdownToAmpHtml(slug, matterResult.content)
  return {
    title,
    published: formatDate(rawPublished),
    content: parsedContent,
    slug,
    tags,
  }
}

export type Summary = {
  title: string
  published: string
  tags: string[]
  summaryText: string
  path: string
}

type MatterResultData = {
  title: string
  published: Date
  tags: string
}

const readSummary = async (slug: string) => {
  const raw = fs.readFileSync(path.join(DIR, slug, ARTICLE_FILE_NAME), "utf8")
  const matterResult = matter(raw)
  const { title, published: rawPublished, tags: tagsStr } = <MatterResultData>(
    matterResult.data
  )
  const tags: string[] = tagsStr.split(",").map((tag) => tag.trim())
  const html = await markdownToAmpHtml(slug, matterResult.content)
  const text = htmlToText.fromString(html)
  const summaryText = text.substr(0, 120)
  const postPath = path.join("/posts/" + slug)
  return {
    title,
    published: formatDate(rawPublished),
    tags,
    summaryText,
    path: postPath,
  }
}

const readSummaries = async (): Promise<Summary[]> => {
  const slugs = listContentDirs()
  const summaries: Summary[] = []
  for (const slug of slugs) {
    summaries.push(await readSummary(slug))
  }
  return summaries
}

export { listContentDirs, readContentFile, readSummaries }

import path from "path"
import matter from "gray-matter"
import fs from "fs"
import htmlToText from "html-to-text"
import { formatDate } from "./date"
import { markdownToAmpHtml } from "./content-loaders/Utils"

const DIR = path.join(process.cwd(), "posts")
const ARTICLE_FILE_NAME = "article.md"

const listContentDirs = () => {
  const dirents = fs.readdirSync(DIR, { withFileTypes: true })
  return dirents
    .filter((dirent) => !dirent.isFile())
    .map((dirent) => dirent.name)
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

export { listContentDirs, readContentFile }

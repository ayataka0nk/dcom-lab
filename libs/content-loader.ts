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

const md = require("markdown-it")({ html: true })

import { formatDate } from "./date"
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
  const { title, published: rawPublished } = matterResult.data
  const processer = unified()
    .use(remarkParse)
    .use(remarkToRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(makeImagePathReplacer(slug))
    .use(htmlAmpConverter)
    .use(rehypeStringify)
  const parsedContent = await processer.process(matterResult.content)
  const content = parsedContent.toString()
  return {
    title,
    published: formatDate(rawPublished),
    content,
    slug,
  }
}
export { listContentDirs, readContentFile }

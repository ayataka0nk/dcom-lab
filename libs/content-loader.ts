import path from "path"
import remark from "remark"
import html from "remark-html"
import matter from "gray-matter"
import fs from "fs"

import { formatDate } from "./date"
const DIR = path.join(process.cwd(), "public/posts")
const EXTENSION = ".md"

const listContentFiles = () => {
  const filenames = fs.readdirSync(DIR)
  return filenames.filter((filename) => path.parse(filename).ext === EXTENSION)
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
  const raw = fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), "utf8")
  const matterResult = matter(raw)
  const { title, published: rawPublished } = matterResult.data
  const parsedContent = await remark().use(html).process(matterResult.content)
  const content = parsedContent.toString()
  return {
    title,
    published: formatDate(rawPublished),
    content,
    slug,
  }
}
export { listContentFiles, readContentFile }

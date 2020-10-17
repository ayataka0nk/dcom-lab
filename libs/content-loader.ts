import path from "path"

import matter from "gray-matter"
import fs from "fs"
import rehypeStringify from "rehype-stringify"
import unified from "unified"
import remarkParse from "remark-parse"
import remarkToRehype from "remark-rehype"

import { formatDate } from "./date"
const DIR = path.join(process.cwd(), "posts")
const ARTICLE_FILE_NAME = "article.md"

const listContentDirs = () => {
  const dirents = fs.readdirSync(DIR, { withFileTypes: true })
  return dirents
    .filter((dirent) => !dirent.isFile())
    .map((dirent) => dirent.name)
}

const convertCode = (node, parentNode, index, dirName) => {
  if (node.tagName === "img") {
    let src: string = node.properties.src
    if (src.slice(0, 2) === "./") {
      src = src.slice(2)
    }
    src = src.replace("images/", "/articleImages/" + dirName + "/")
    node.properties.src = src
  }
}

const makeImagePathReplacer = (dirName: string) => {
  return () => {
    return function (node, vfile, next) {
      try {
        visit(convertCode, node, null, 0, dirName)
        next()
      } catch (err) {
        next(err)
      }
    }
  }
}

// hastの要素を訪問する関数
function visit(visitor, node, parentNode, index, dirName) {
  if (visitor(node, parentNode, index, dirName)) {
    return
  }

  if (!node.children) {
    return
  }

  for (let i = 0; i < node.children.length; i++) {
    visit(visitor, node.children[i], node, i, dirName)
  }
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
  //markdown -> mdhtml
  const processer = unified()
    .use(remarkParse)
    .use(remarkToRehype)
    .use(makeImagePathReplacer(slug))
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

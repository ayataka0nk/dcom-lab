import unified from "unified"
import remarkParse from "remark-parse"
import remarkToRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"
import {
  makeImagePathReplacer,
  htmlAmpConverter,
  headerRemover,
} from "../unified-atatcher"
import htmlToText from "html-to-text"

export const markdownToAmpHtml = async (slug: string, markdown: string) => {
  const processer = unified()
    .use(remarkParse)
    .use(remarkToRehype, { allowDangerousHtml: true }) //Markdown内の生htmlを許容しながら変換
    .use(rehypeRaw) //Markdown内にあった生htmlをデコード
    .use(makeImagePathReplacer(slug)) //画像パスを変換
    .use(headerRemover) //一つ目のh1を削除
    .use(rehypeHighlight) //<code>のハイライトを有効
    .use(htmlAmpConverter) //一部タグをamp仕様に変換
    .use(rehypeStringify) //htmlを文字列に変換
  const parsedContent = await processer.process(markdown)
  const content = parsedContent.toString()
  return content
}

export const extractSummaryFromMarkdown = async (
  markdown: string,
  length: number
) => {
  const processer = unified()
    .use(remarkParse)
    .use(remarkToRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) //Markdown内にあった生htmlをデコード
    .use(headerRemover) //一つ目のh1を削除
    .use(rehypeStringify)
  const parsedContent = await processer.process(markdown)
  const content = parsedContent.toString()
  const plainBody = htmlToText.fromString(content)
  const summaryText = plainBody.substr(0, length)
  return summaryText
}

import React from "react"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import {
  listContentDirs,
  readAllTags,
  readSummaries,
  Summary,
} from "../../foundations/content-loaders/Utils"
import { ArticleCard } from "../../components/article"
import { Layout } from "../../layout"
import { PagingLink } from "../../components/paging"

export const config = {
  amp: true,
}
const ARTICLE_PER_PAGE = 5

const generateNumberArray = (maxNumber: string) => {
  return Array(Number(maxNumber))
    .fill(0)
    .map((_, i) => String(i + 1))
}

const getTargetSlugs = (slugs: string[], pageNumber: string) => {
  const startSlugIndex = 1 + (Number(pageNumber) - 1) * ARTICLE_PER_PAGE
  const nextStartSlugIndex = startSlugIndex + ARTICLE_PER_PAGE
  return slugs.slice(startSlugIndex - 1, nextStartSlugIndex - 1)
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = listContentDirs()
  const maxPage = String(Math.ceil(slugs.length / ARTICLE_PER_PAGE))
  const pageNumbers = generateNumberArray(maxPage)
  const paths = pageNumbers.map((pageNumber) => ({
    params: {
      page: String(pageNumber),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  { summaries: Summary[]; tags: string[] },
  { page: string }
> = async (context) => {
  const maxPage = Math.ceil(listContentDirs().length / ARTICLE_PER_PAGE)
  const slugs = getTargetSlugs(listContentDirs(), context.params.page)
  const summaries = await readSummaries(slugs)
  const tags = await readAllTags()
  return {
    props: {
      summaries,
      tags,
      page: context.params.page,
      maxPage: String(maxPage),
    },
  }
}

const Page: NextPage<{
  summaries: Summary[]
  tags: string[]
  page: string
  maxPage: string
}> = (props) => {
  return (
    <Layout tags={props.tags}>
      <Head>
        <title>デーコムラボサンプル</title>
      </Head>
      {props.summaries.map((summary, index) => (
        <ArticleCard
          key={index}
          title={summary.title}
          published={summary.published}
          tags={summary.tags}
          summaryText={summary.summaryText}
          path={summary.path}
          margin="0 0 40px 0"
        />
      ))}
      <PagingLink pageNumber={props.page} lastPage={props.maxPage} />
    </Layout>
  )
}

export default Page

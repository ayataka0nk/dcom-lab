import React from "react"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import {
  listContentDirs,
  readAllTags,
  readSummaries,
  Summary,
} from "../../libs/content-loaders/Utils"
import { ArticleCard } from "../../components/article"
import { Layout } from "../../components/Layout"
import Link from "next/link"

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
const OpenedPageNumber: React.FC<{ num: string }> = (props) => {
  return (
    <div className="root">
      {props.num}
      <style jsx>
        {`
          .root {
            margin: 8px;
            box-sizing: border-box;
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            border: solid 2px #eee;
            width: 32px;
            line-height: 28px;
            text-align: center;
            color: #333;
            background: rgba(0, 0, 0, 0.05);
            border-color: rgba(0, 0, 0, 0.05);
          }
        `}
      </style>
    </div>
  )
}
const Abridgement: React.FC = (props) => {
  return (
    <div className="root">
      ...
      <style jsx>
        {`
          .root {
            margin: 8px;
            box-sizing: border-box;
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            border: solid 2px #eee;
            width: 32px;
            line-height: 28px;
            text-align: center;
            color: #333;
            border-color: rgba(0, 0, 0, 0.05);
          }
        `}
      </style>
    </div>
  )
}

const PageNumber: React.FC<{ num: string; link: string }> = (props) => {
  return (
    <div className="root">
      <Link href={props.link}>
        <a>{props.num}</a>
      </Link>
      <style jsx>
        {`
          .root {
            display: inline-block;
            margin: 8px;
          }
          a {
            box-sizing: border-box;
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            border: solid 2px #eee;
            width: 32px;
            line-height: 28px;
            text-align: center;
            color: #f42a90;
          }
          a:hover {
            border-color: #f42a90;
            background: rgba(0, 0, 0, 0.05);
            color: #2a6496;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

const PageLink: React.FC<{
  pageNumber: string
  lastPage: string
}> = (props) => {
  const prev = String(Number(props.pageNumber) - 1)
  const next = String(Number(props.pageNumber) + 1)
  const displayPages: string[] = []
  for (
    let i = Number(props.pageNumber) - 3;
    i < Number(props.pageNumber) + 4;
    i++
  ) {
    if (0 < i && i < Number(props.lastPage) + 1) {
      displayPages.push(String(i))
    }
  }
  return (
    <div className="root">
      {props.pageNumber !== "1" && (
        <PageNumber num="«" link={"/pages/" + prev} />
      )}
      {"2" === displayPages[0] && <PageNumber num="1" link="/pages/1" />}
      {"2" < displayPages[0] && (
        <>
          <PageNumber num="1" link="/pages/1" />
          <Abridgement />
        </>
      )}
      {displayPages.map((number) => {
        return props.pageNumber === number ? (
          <OpenedPageNumber key={number} num={number} />
        ) : (
          <PageNumber key={number} num={number} link={"/pages/" + number} />
        )
      })}
      {displayPages[displayPages.length - 1] <
        String(Number(props.lastPage) - 1) && (
        <>
          <Abridgement />
          <PageNumber num={props.lastPage} link={"/pages/" + props.lastPage} />
        </>
      )}
      {displayPages[displayPages.length - 1] ===
        String(Number(props.lastPage) - 1) && (
        <PageNumber num={props.lastPage} link={"/pages/" + props.lastPage} />
      )}
      {props.pageNumber !== props.lastPage && (
        <PageNumber num="»" link={"/pages/" + next} />
      )}
      <style jsx>{`
        .root {
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

const Page: NextPage<{
  summaries: Summary[]
  tags: string[]
  page: string
  maxPage: string
}> = (props) => {
  return (
    <Layout tags={props.tags}>
      <div className="root">
        {props.summaries.map((summary) => {
          return (
            <div className="article-card-box">
              <ArticleCard
                title={summary.title}
                published={summary.published}
                tags={summary.tags}
                summaryText={summary.summaryText}
                path={summary.path}
              />
            </div>
          )
        })}
        <div className="page-link">
          <PageLink pageNumber={props.page} lastPage={props.maxPage} />
        </div>
      </div>
      <style jsx>{`
        .root {
          max-width: 900px;
          box-sizing: border-box;
        }
        .article-card-box {
          padding: 0 0 40px 0;
        }
        .page-link {
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}

export default Page

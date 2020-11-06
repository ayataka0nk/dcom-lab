import React from "react"
import Head from "next/head"
import { GetStaticProps, NextPage } from "next"
import { ArticleCard } from "../components/article"
import { Layout } from "../components/Layout"
import {
  listContentDirs,
  readAllTags,
  readSummaries,
  Summary,
} from "../libs/content-loaders/Utils"
import { useRouter } from "next/router"

export const getStaticProps: GetStaticProps = async (context) => {
  const slugs = await listContentDirs()
  const summaries = await readSummaries(slugs)
  const tags = await readAllTags()
  return {
    props: { summaries, tags },
  }
}

const Tags: NextPage<{
  summaries: Summary[]
  tags: string[]
}> = (props) => {
  const router = useRouter()
  let tag = ""
  if (typeof router.query.tag === "string") {
    tag = router.query.tag
  }
  return (
    <Layout tags={props.tags}>
      <Head>
        <title>デーコムラボ　サンプル</title>
      </Head>
      <div className="root">
        <div className="tag-name">{tag}</div>
        {props.summaries
          .filter((summary) => summary.tags.includes(tag))
          .map((summary, index) => {
            return (
              <div className="article-card-box" key={index}>
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
      </div>
      <style jsx>{`
        .root {
          max-width: 900px;
          box-sizing: border-box;
        }
        .article-card-box {
          padding: 0 0 40px 0;
        }
        .tag-name {
          box-sizing: border-box;
          line-height: 38px;
          font-size: 38px;
          color: #4999a1;
          text-decoration: underline;
          padding: 38px 0px 30px 5px;
          border: 1px solid #eee;
          margin-bottom: 10px;
        }
      `}</style>
    </Layout>
  )
}

export default Tags

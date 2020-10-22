import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import {
  readAllTags,
  readSummaries,
  Summary,
} from "../../libs/content-loaders/Utils"
import { ArticleCard } from "../../components/article"
import { Layout } from "../../components/Layout"

export const config = {
  amp: true,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        page: "1",
      },
    },
  ]
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const summaries = await readSummaries()
  const tags = await readAllTags()
  return {
    props: {
      summaries,
      tags,
    },
  }
}

const Page: NextPage<{ summaries: Summary[]; tags: string[] }> = (props) => {
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
      </div>
      <style jsx>{`
        .root {
          max-width: 900px;
          box-sizing: border-box;
        }
        .article-card-box {
          padding: 0 0 40px 0;
        }
      `}</style>
    </Layout>
  )
}

export default Page

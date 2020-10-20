import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { readSummaries, Summary } from "../../libs/content-loader"
import { ArticleCard } from "../../components/ArticleCard"

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
  return {
    props: {
      summaries,
    },
  }
}

const Page: NextPage<{ summaries: Summary[] }> = (props) => {
  return (
    <div className="root">
      {props.summaries.map((summary) => {
        return (
          <ArticleCard
            title={summary.title}
            published={summary.published}
            tags={summary.tags}
            summaryText={summary.summaryText}
            path={summary.path}
          />
        )
      })}
      <style jsx>{`
        .root {
          box-sizing: border-box;
          padding: 30px;
        }
      `}</style>
    </div>
  )
}

export default Page

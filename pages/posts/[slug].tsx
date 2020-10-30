import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import path from "path"
import { listContentDirs, readContentFile } from "../../libs/content-loader"
import { resetStyles } from "../..//css/reset"
import { GithubMarkdownStyles } from "../../css/GithubMarkdownStyles"
import { Layout } from "../../components/Layout"
import { ArticleTags } from "../../components/article"
import { ArticleDate } from "../../components/article/ArticleDate"
import { HighlightDefaultStyles } from "../../css/HighlightDefaultStyles"
import { readAllTags, readSummaries } from "../../libs/content-loaders/Utils"
import Head from "next/head"

export const config = {
  amp: true,
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = listContentDirs().map((dirname) => ({
    params: {
      slug: path.parse(dirname).name,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
type SlugProps = {
  title: string
  published: string
  content: string
  tags: string[]
  allTags: string[]
}

export const getStaticProps: GetStaticProps<
  SlugProps,
  { slug: string }
> = async (context) => {
  const content = await readContentFile({ slug: context.params.slug })
  const allTags = await readAllTags()
  return {
    props: { ...content, allTags },
  }
}
const Article: React.FC<{
  content: string
}> = (props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      <style jsx global>{`
        .amp-img-container {
          position: relative;
          width: 100%;
          display: flex;
        }
        img {
          object-fit: contain;
        }
      `}</style>
      <style jsx global>
        {resetStyles}
      </style>
      <style jsx global>
        {GithubMarkdownStyles}
      </style>
      <style jsx global>
        {HighlightDefaultStyles}
      </style>
    </div>
  )
}

const Post: NextPage<SlugProps> = (props) => {
  const [year, month, day] = props.published.split("/")
  return (
    <Layout tags={props.allTags}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="header">
        <div className="title">{props.title}</div>
        <ArticleDate year={year} month={month} day={day} />
      </div>
      <div className="tags">
        <ArticleTags tags={props.tags} />
      </div>
      <Article content={props.content} />
      <style jsx>{`
        .header {
          display: flex;
        }
        .title {
          font-size: 38px;
          line-height: 70px;
          color: #4999a1;
          text-decoration: underline;
          flex: 1;
        }
        .tags {
          margin-bottom: 20px;
          flex: none;
        }
      `}</style>
    </Layout>
  )
}

export default Post

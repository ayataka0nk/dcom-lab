import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import path from "path"
import { listContentDirs, readContentFile } from "../../libs/content-loader"
import { resetStyles } from "../..//css/reset"
import { GithubMarkdownStyles } from "../../css/GithubMarkdownStyles"
import { Layout } from "../../components/Layout"
import { ArticleTags } from "../../components/article"
import { ArticleDate } from "../../components/article/ArticleDate"

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
}

export const getStaticProps: GetStaticProps<
  SlugProps,
  { slug: string }
> = async (context) => {
  const content = await readContentFile({ slug: context.params.slug })
  return {
    props: { ...content },
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
    </div>
  )
}

const Post: NextPage<SlugProps> = (props) => {
  const [year, month, day] = props.published.split("/")
  return (
    <Layout>
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
        }
        .tags {
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  )
}

export default Post

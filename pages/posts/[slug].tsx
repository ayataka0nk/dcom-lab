import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import path from "path"
import { listContentDirs, readContentFile } from "../../libs/content-loader"
import { resetStyles } from "../..//css/reset"
import { GithubMarkdownStyles } from "../../css/GithubMarkdownStyles"
import { Layout } from "../../components/Layout"
import { ArticleTags } from "../../components/article"

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
  return (
    <Layout>
      <div className="title">{props.title}</div>
      <div>{props.published}</div>
      <ArticleTags tags={props.tags} />
      <Article content={props.content} />
      <style jsx>{`
        .title {
          line-height: 70px;
          font-size: 38px;
          color: #4999a1;
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  )
}

export default Post

import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import path from "path"
import { listContentDirs, readContentFile } from "../../libs/content-loader"
import { resetStyles } from "../..//css/reset"
import { GithubMarkdownStyles } from "../../css/GithubMarkdownStyles"
import { Layout } from "../../components/Layout"

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
const Article: React.FC<{ content: string }> = (props) => {
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
        h1 {
          color: red;
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
      <h1>hoge</h1>
      <div>{props.title} </div>
      <div>{props.published}</div>
      <Article content={props.content} />
    </Layout>
  )
}

export default Post

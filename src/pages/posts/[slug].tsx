import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import path from "path"
import {
  listContentDirs,
  readContentFile,
  readAllTags,
} from "../../foundations/content-loaders/Utils"
import { Layout } from "../../layout"
import Head from "next/head"
import { Article } from "../../components/article"

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

const Post: NextPage<SlugProps> = (props) => {
  return (
    <Layout tags={props.allTags}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Article
        title={props.title}
        published={props.published}
        tags={props.tags}
        content={props.content}
      />
    </Layout>
  )
}

export default Post

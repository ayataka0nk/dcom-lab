import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import path from "path"
import {
  readAllTags,
  readPage,
  readSlugs,
  readSummary,
} from "../../foundations/content-loaders/Utils"
import { Layout } from "../../layout"
import Head from "next/head"
import { Article } from "../../components/article"
import { BASE_URL } from "../../foundations/Constants"

export const config = {
  amp: true,
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = readSlugs().map((dirname) => ({
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
  slug: string
  summary: string
}

export const getStaticProps: GetStaticProps<
  SlugProps,
  { slug: string }
> = async (context) => {
  const content = await readPage({ slug: context.params.slug })
  const summary = await readSummary(context.params.slug)
  const allTags = await readAllTags()
  return {
    props: {
      ...content,
      allTags,
      slug: context.params.slug,
      summary: summary.summaryText,
    },
  }
}

const Post: NextPage<SlugProps> = (props) => {
  const url = BASE_URL + "/posts" + "/" + props.slug
  return (
    <Layout tags={props.allTags}>
      <Head>
        <meta
          name="description"
          content={"株式会社デーコム 技術ブログ " + props.summary}
        />
        <link rel="canonical" href={url} />
        <title>{props.title}</title>
      </Head>
      <Article
        title={props.title}
        published={props.published}
        tags={props.tags}
        content={props.content}
        url={url}
      />
    </Layout>
  )
}

export default Post

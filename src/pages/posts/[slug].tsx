import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import path from "path"
import { listContentDirs, readContentFile } from "../../libs/content-loader"
import { Layout } from "../../layout"
import { ArticleTags } from "../../components/article"
import { readAllTags } from "../../libs/content-loaders/Utils"
import Head from "next/head"
import { ArticleHeader } from "../../components/article/ArticleHeader"
import { ArticleContent } from "../../components/article/ArticleContent"

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
      <ArticleHeader title={props.title} published={props.published} />
      <ArticleTags tags={props.tags} margin="0 0 20px 0" />
      <ArticleContent content={props.content} />
      <amp-social-share type="twitter" />
    </Layout>
  )
}

export default Post

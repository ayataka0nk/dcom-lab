import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import path from "path"

const readContentFile = async (slug: string) => {
  return {
    title: "竹取物語",
    published: "2020/07/23",
    content:
      "今は昔竹取の翁といふものありけり。野山にまじりて、竹をとりつゝ、萬の事につかひけり。",
  }
}

const listContentFiles = async () => {
  return ["taketori.md"]
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = (await listContentFiles()).map((filename) => ({
    params: {
      slug: path.parse(filename).name,
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
  const content = await readContentFile(context.params.slug)
  return {
    props: { ...content },
  }
}

const Post: NextPage<SlugProps> = (props) => {
  return (
    <div>
      <div>{props.title} </div>
      <div>{props.published}</div>
      <div>{props.content}</div>
    </div>
  )
}

export default Post

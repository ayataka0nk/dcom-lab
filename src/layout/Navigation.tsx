import { ArticleTags } from "../components/article"
import { ImageLink } from "../components/image"

type NavigationProps = {
  tags: string[]
  width?: string
  margin?: string
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <nav>
      {/* <ImageLink
        imageSrc="/images/dcomlink.png"
        imageWidth="234px"
        imageHeight="129px"
        href="http://www.dcom-web.co.jp/"
        margin="0 0 20px 0"
      /> */}
      <ArticleTags tags={props.tags} />
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: ${props.width};
          width: ${props.width};
          margin: ${props.margin};
        }
      `}</style>
    </nav>
  )
}

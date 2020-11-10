import React from "react"
import { AmpImage } from "./AmpImage"

type ImageLinkProps = {
  imageSrc: string
  imageWidth: string
  imageHeight: string
  imageAlt: string
  href: string
  padding?: string
  margin?: string
}

export const ImageLink: React.FC<ImageLinkProps> = (props) => {
  return (
    <div>
      <a href={props.href}>
        <AmpImage
          src={props.imageSrc}
          alt={props.imageAlt}
          width={props.imageWidth}
          height={props.imageHeight}
        />
      </a>
      <style jsx>{`
        ${props.padding ? `padding:${props.padding}` : ""};
        ${props.margin ? `margin:${props.margin}` : ""};
      `}</style>
    </div>
  )
}

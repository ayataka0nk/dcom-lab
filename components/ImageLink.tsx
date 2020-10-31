import React from "react"
import styled from "styled-components"
import { AmpImage } from "./AmpImage"

type ImageLinkBaseStyleProps = {
  padding?: string
  margin?: string
}
const ImageLinkBaseStyle = styled.div<ImageLinkBaseStyleProps>`
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  ${(props) => (props.margin ? `margin:${props.margin}` : "")};
`

type ImageLinkProps = {
  imageSrc: string
  imageWidth: string
  imageHeight: string
  href: string
} & ImageLinkBaseStyleProps

export const ImageLink: React.FC<ImageLinkProps> = (props) => {
  return (
    <ImageLinkBaseStyle padding={props.padding} margin={props.margin}>
      <a href={props.href}>
        <AmpImage
          src={props.imageSrc}
          width={props.imageWidth}
          height={props.imageHeight}
        />
      </a>
    </ImageLinkBaseStyle>
  )
}

import { useAmp } from "next/amp"
import React from "react"
import Image from "next/image"

export const AmpImage: React.FC<{
  src: string
  width: string
  height: string
}> = (props) => {
  const isAmp = useAmp()
  if (isAmp) {
    return <amp-img src={props.src} width={props.width} height={props.height} />
  } else {
    return <Image src={props.src} width={props.width} height={props.height} />
  }
}

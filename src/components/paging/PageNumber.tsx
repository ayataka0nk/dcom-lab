import Link from "next/link"
import { BaseStyle } from "./BaseStyle"

type PageNumberProps = {
  link: string
  children: string
}

export const PageNumber: React.FC<PageNumberProps> = (props) => {
  return (
    <>
      <Link href={props.link} passHref>
        <a className="base">{props.children}</a>
      </Link>
      <style jsx>{BaseStyle}</style>
      <style jsx>
        {`
          a {
            color: #f42a90;
          }
          a:hover {
            border-color: #f42a90;
            background: rgba(0, 0, 0, 0.05);
            color: #2a6496;
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}

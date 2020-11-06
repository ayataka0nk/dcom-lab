import { BaseStyle } from "./BaseStyle"

export const Abridgement: React.FC = (props) => {
  return (
    <div className="base">
      {props.children}
      <style jsx>{BaseStyle}</style>
      <style jsx>
        {`
          div {
            border-color: rgba(0, 0, 0, 0.05);
          }
        `}
      </style>
    </div>
  )
}

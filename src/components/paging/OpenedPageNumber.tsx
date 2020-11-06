import { BaseStyle } from "./BaseStyle"

export const OpendPageNumber: React.FC = (props) => {
  return (
    <div className="base">
      {props.children}
      <style jsx>{BaseStyle}</style>
      <style jsx>{`
        div {
          color: #333;
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  )
}

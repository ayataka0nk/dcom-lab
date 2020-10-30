import { useAmp } from "next/amp"

export const GoogleSearch: React.FC = () => {
  const isAmp = useAmp()
  const searchSolidImage = isAmp ? (
    <amp-img
      className="serach-image"
      src="/images/search-solid.svg"
      width="13px"
      height="13px"
    />
  ) : (
    <img
      className="serach-image"
      src="/images/search-solid.svg"
      width="13px"
      height="13px"
    />
  )
  return (
    <div className="root">
      <form id="cse-search-box" action="https://google.com/cse" target="_blank">
        <button className="submit-button" type="submit" name="sa">
          {searchSolidImage}
        </button>
        <input type="hidden" name="cx" value="cd0da1054f762f7ae" />
        <input type="hidden" name="ie" value="UTF-8" />
        <input
          className="search-input"
          type="text"
          name="q"
          placeholder="Googleカスタム検索"
        />
      </form>
      <style jsx>{`
        .root {
          background-color: rgba(255, 255, 255, 0.2);
          display: inline-block;
          box-sizing: border-box;
          padding: 4px;
          margin: 4px 0;
        }
        #cse-search-box {
          display: flex;
          align-items: center;
        }
        form {
          background-color: transparent;
        }
        .search-input {
          background-color: transparent;
          border: 0;
          outline: 0;
        }
        .search-input::placeholder {
          color: #fff;
        }
        .submit-button {
          background-color: transparent;
          border: 0;
          cursor: pointer;
          outline: 0;
          padding: 0 3px;
        }
        .serach-image {
          color: white;
        }
      `}</style>
    </div>
  )
}

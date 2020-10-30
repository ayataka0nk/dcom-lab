import { useAmp } from "next/amp"

export const GoogleSearch: React.FC = () => {
  const isAmp = useAmp()
  return (
    <div>
      <form id="cse-search-box" action="https://google.com/cse" target="_blank">
        <input type="hidden" name="cx" value="cd0da1054f762f7ae" />
        <input type="hidden" name="ie" value="UTF-8" />
        <input type="text" name="q" size={31} />
        <input type="submit" name="sa" value="Search" />
      </form>
      {isAmp ? (
        <amp-img
          src="http://www.google.com/cse/images/google_custom_search_smwide.gif"
          width="119px"
          height="16px"
        />
      ) : (
        <img
          src="http://www.google.com/cse/images/google_custom_search_smwide.gif"
          width="119px"
          height="16px"
        />
      )}
    </div>
  )
}

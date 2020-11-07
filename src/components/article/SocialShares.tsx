type SocialSharesProps = {
  url: string
}
export const SocialShares: React.FC<SocialSharesProps> = (props) => {
  return (
    <div className="social-shares">
      <amp-social-share type="line" aria-label="Share on Line" />
      <amp-social-share
        type="facebook"
        aria-label="Share on Facebook"
        data-param-app_id="145634995501895"
      />
      <amp-social-share type="twitter" />
      <amp-social-share
        type="hatena_bookmark"
        layout="container"
        data-share-endpoint={`http://b.hatena.ne.jp/entry/${props.url}`}
      >
        B!
      </amp-social-share>
      <amp-social-share
        type="pocket"
        layout="container"
        data-share-endpoint="http://getpocket.com/edit?url=SOURCE_URL"
      ></amp-social-share>
      <style jsx>
        {`
          .social-shares {
            display: flex;
          }
          amp-social-share {
            margin-right: 5px;
          }
          amp-social-share[type="hatena_bookmark"] {
            width: 60px;
            height: 44px;
            font-family: Verdana;
            background-color: #00a4de;
            font-weight: 700;
            color: #fff;
            line-height: 44px;
            text-align: center;
            font-size: 28px;
          }
          amp-social-share[type="pocket"] {
            width: 60px;
            height: 44px;
            background-color: #ef3e55;
            background-image: url("/images/pocket-logo.svg");
            /* MIT License | https://icon.now.sh/ */
          }
        `}
      </style>
    </div>
  )
}

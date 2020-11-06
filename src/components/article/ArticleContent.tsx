import React from "react"
import css from "styled-jsx/css"

export const ArticleContent: React.FC<{
  content: string
}> = (props) => {
  return (
    <section className="md-body">
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      <style jsx global>
        {ArticleStyle}
      </style>
    </section>
  )
}

const ArticleStyle = css.global`
  .md-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    color: #24292e;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }
  .md-body * {
    box-sizing: border-box;
  }
  //ヘッダ
  .md-body h1,
  .md-body h2,
  .md-body h3,
  .md-body h4,
  .md-body h5,
  .md-body h6 {
    color: #1b1f23;
    vertical-align: middle;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
  .md-body h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  .md-body h2 {
    font-size: 1.5em;
  }
  .md-body h3 {
    font-size: 1.25em;
  }
  .md-body h4 {
    font-size: 1em;
  }
  .md-body h5 {
    font-size: 0.875em;
  }
  .md-body h6 {
    font-size: 0.85em;
    color: #6a737d;
  }
  .md-body h1,
  .md-body h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
  }

  //折り畳み表示
  .md-body details {
    display: block;
    margin-top: 0;
    margin-bottom: 16px;
  }
  .md-body summary {
    display: list-item;
  }
  .md-body details summary {
    cursor: pointer;
  }

  //リンク
  .md-body a {
    background-color: initial;
    color: #0366d6;
    text-decoration: none;
  }
  .md-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }
  .md-body a:active,
  .md-body a:hover {
    outline-width: 0;
    text-decoration: underline;
  }

  //太字
  .md-body strong {
    font-weight: 600;
  }

  //画像
  .md-body img {
    border-style: none;
    max-width: 100%;
    box-sizing: initial;
    background-color: #fff;
  }
  .md-body img[align="right"] {
    padding-left: 20px;
  }
  .md-body img[align="left"] {
    padding-right: 20px;
  }

  //水平線
  .md-body hr {
    box-sizing: initial;
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
    border-bottom-color: #eee;
    background-color: #e1e4e8;
    border: 0;
  }
  .md-body hr:after,
  .md-body hr:before {
    display: table;
    content: "";
  }
  .md-body hr:after {
    clear: both;
  }

  //入力系
  .md-body input {
    font: inherit;
    margin: 0;
    overflow: visible;
  }
  .md-body input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .md-body input::-webkit-inner-spin-button,
  .md-body input::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  //テーブル
  .md-body table {
    border-spacing: 0;
    border-collapse: collapse;
    margin-top: 0;
    margin-bottom: 16px;
    display: block;
    width: 100%;
    overflow: auto;
  }
  .md-body td,
  .md-body th {
    padding: 0;
    font-weight: 600;
  }
  .md-body table td,
  .md-body table th {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }
  .md-body table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }
  .md-body table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  //段落
  .md-body p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  //引用
  .md-body blockquote {
    margin: 0;
    margin-top: 0;
    margin-bottom: 16px;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    padding: 0 1em;
  }
  .md-body blockquote > :first-child {
    margin-top: 0;
  }
  .md-body blockquote > :last-child {
    margin-bottom: 0;
  }

  //箇条書き
  .md-body ol,
  .md-body ul {
    padding-left: 2em;
    margin-top: 0;
    margin-bottom: 16px;
  }
  .md-body ol ol,
  .md-body ul ol {
    list-style-type: lower-roman;
  }
  .md-body ol ol ol,
  .md-body ol ul ol,
  .md-body ul ol ol,
  .md-body ul ul ol {
    list-style-type: lower-alpha;
  }
  .md-body ol ol,
  .md-body ol ul,
  .md-body ul ol,
  .md-body ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }
  .md-body li {
    word-wrap: break-all;
  }
  .md-body li > p {
    margin-top: 16px;
  }
  .md-body li + li {
    margin-top: 0.25em;
  }

  //説明リスト
  .md-body dl {
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0;
  }
  .md-body dd {
    margin-left: 0;
  }
  .md-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }
  .md-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  //コード、キー入力系
  .md-body code,
  .md-body kbd,
  .md-body pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  .md-body code,
  .md-body pre {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
  }
  .md-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }
  .md-body pre {
    margin-top: 0;
    margin-bottom: 16px;
    word-wrap: normal;
  }
  .md-body code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }
  .md-body pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }
  .md-body .highlight {
    margin-bottom: 16px;
  }
  .md-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }
  .md-body .highlight pre,
  .md-body .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }
  .md-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: initial;
    border: 0;
  }
  /* Tomorrow Night Theme */
  /* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
  /* Original theme - https://github.com/chriskempson/tomorrow-theme */
  /* http://jmblog.github.com/color-themes-for-google-code-highlightjs */

  /* Tomorrow Comment */
  .md-body .hljs-comment,
  .md-body .hljs-quote {
    color: #969896;
  }

  /* Tomorrow Red */
  .md-body .hljs-variable,
  .md-body .hljs-template-variable,
  .md-body .hljs-tag,
  .md-body .hljs-name,
  .md-body .hljs-selector-id,
  .md-body .hljs-selector-class,
  .md-body .hljs-regexp,
  .md-body .hljs-deletion {
    color: #cc6666;
  }

  /* Tomorrow Orange */
  .md-body .hljs-number,
  .md-body .hljs-built_in,
  .md-body .hljs-builtin-name,
  .md-body .hljs-literal,
  .md-body .hljs-type,
  .md-body .hljs-params,
  .md-body .hljs-meta,
  .md-body .hljs-link {
    color: #de935f;
  }

  /* Tomorrow Yellow */
  .md-body .hljs-attribute {
    color: #f0c674;
  }

  /* Tomorrow Green */
  .md-body .hljs-string,
  .md-body .hljs-symbol,
  .md-body .hljs-bullet,
  .md-body .hljs-addition {
    color: #b5bd68;
  }

  /* Tomorrow Blue */
  .md-body .hljs-title,
  .md-body .hljs-section {
    color: #81a2be;
  }

  /* Tomorrow Purple */
  .md-body .hljs-keyword,
  .md-body .hljs-selector-tag {
    color: #b294bb;
  }

  .md-body .hljs {
    display: block;
    overflow-x: auto;
    background: #1d1f21;
    color: #c5c8c6;
    padding: 0.5em;
  }

  .md-body .hljs-emphasis {
    font-style: italic;
  }

  .md-body .hljs-strong {
    font-weight: bold;
  }

  .md-body .amp-img-container {
    position: relative;
    width: 100%;
    display: flex;
  }
  .md-body img {
    object-fit: contain;
  }
`

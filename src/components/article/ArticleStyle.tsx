import styled from "styled-components"

export const ArticleStyle = styled.div`
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  * {
    box-sizing: border-box;
  }
  //ヘッダ
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #1b1f23;
    vertical-align: middle;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.25em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.875em;
  }
  h6 {
    font-size: 0.85em;
    color: #6a737d;
  }
  h1,
  h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
  }

  //折り畳み表示
  details {
    display: block;
    margin-top: 0;
    margin-bottom: 16px;
  }
  summary {
    display: list-item;
  }
  details summary {
    cursor: pointer;
  }

  //リンク
  a {
    background-color: initial;
    color: #0366d6;
    text-decoration: none;
  }
  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }
  a:active,
  a:hover {
    outline-width: 0;
    text-decoration: underline;
  }

  //太字
  strong {
    font-weight: 600;
  }

  //画像
  img {
    border-style: none;
    max-width: 100%;
    box-sizing: initial;
    background-color: #fff;
  }
  img[align="right"] {
    padding-left: 20px;
  }
  img[align="left"] {
    padding-right: 20px;
  }

  //水平線
  hr {
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
  hr:after,
  hr:before {
    display: table;
    content: "";
  }
  hr:after {
    clear: both;
  }

  //入力系
  input {
    font: inherit;
    margin: 0;
    overflow: visible;
  }
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  //テーブル
  table {
    border-spacing: 0;
    border-collapse: collapse;
    margin-top: 0;
    margin-bottom: 16px;
    display: block;
    width: 100%;
    overflow: auto;
  }
  td,
  th {
    padding: 0;
    font-weight: 600;
  }
  table td,
  table th {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }
  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }
  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  //段落
  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  //引用
  blockquote {
    margin: 0;
    margin-top: 0;
    margin-bottom: 16px;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    padding: 0 1em;
  }
  blockquote > :first-child {
    margin-top: 0;
  }
  blockquote > :last-child {
    margin-bottom: 0;
  }

  //箇条書き
  ol,
  ul {
    padding-left: 2em;
    margin-top: 0;
    margin-bottom: 16px;
  }
  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }
  ol ol ol,
  ol ul ol,
  ul ol ol,
  ul ul ol {
    list-style-type: lower-alpha;
  }
  ol ol,
  ol ul,
  ul ol,
  ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }
  li {
    word-wrap: break-all;
  }
  li > p {
    margin-top: 16px;
  }
  li + li {
    margin-top: 0.25em;
  }

  //説明リスト
  dl {
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0;
  }
  dd {
    margin-left: 0;
  }
  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }
  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  //コード、キー入力系
  code,
  kbd,
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  code,
  pre {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
  }
  kbd {
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
  pre {
    margin-top: 0;
    margin-bottom: 16px;
    word-wrap: normal;
  }
  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }
  pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }
  .highlight {
    margin-bottom: 16px;
  }
  .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }
  .highlight pre,
  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }
  pre code {
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
  .hljs-comment,
  .hljs-quote {
    color: #969896;
  }

  /* Tomorrow Red */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-deletion {
    color: #cc6666;
  }

  /* Tomorrow Orange */
  .hljs-number,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-meta,
  .hljs-link {
    color: #de935f;
  }

  /* Tomorrow Yellow */
  .hljs-attribute {
    color: #f0c674;
  }

  /* Tomorrow Green */
  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #b5bd68;
  }

  /* Tomorrow Blue */
  .hljs-title,
  .hljs-section {
    color: #81a2be;
  }

  /* Tomorrow Purple */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #b294bb;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    background: #1d1f21;
    color: #c5c8c6;
    padding: 0.5em;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .amp-img-container {
    position: relative;
    width: 100%;
    display: flex;
  }
  img {
    object-fit: contain;
  }
`

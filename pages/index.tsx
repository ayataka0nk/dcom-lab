export const config = {
  amp: true,
}

export default function Home() {
  return (
    <div>
      <div className="title">ブログタイトル</div>
      <style jsx>{`
        .title {
          color: grey;
        }
      `}</style>
    </div>
  )
}

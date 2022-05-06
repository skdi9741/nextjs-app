import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  //html, head, body 등의 태그를 설정해야할때는 _document.js 파일을 사용해야 한다
  //서버에서만 렌더링되고 이벤트핸들러 및 CSS는 사용하지 않는다.
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
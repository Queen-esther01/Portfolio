import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            {/* <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" /> */}
            {/* <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
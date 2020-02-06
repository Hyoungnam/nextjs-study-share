import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // console.log("ctx", ctx);
    // const initialProps = await Document.getInitialProps(ctx);
    // console.log(
    //   "TCL: MyDocument -> getInitialProps -> initialProps",
    //   initialProps
    // );
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;

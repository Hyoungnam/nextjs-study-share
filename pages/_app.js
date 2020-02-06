import HomePage from "./HomePage";

// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  // console.log("Component", Component);
  // console.log("pageProps", pageProps);
  return [
    <>
      <div>app.js</div>
      <Component {...pageProps} />
    </>
  ];
}

MyApp.getInitialProps = async appContext => {
  console.log("MyApp.getInitialProps");
  const { ctx, Component } = appContext;
  // console.log("Component : ", Component);
  let pageProps = {};
  if (Component.getInitialProps) {
    console.log("If Component");
    pageProps = await Component.getInitialProps(ctx);
  } else {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    pageProps.title = "pageProps from My App";
    pageProps.star = json.stargazers_count;
  }
  // return { pageProps };
  // console.log("appContext.Component :", appContext.Component);
  // console.log("appContext.router :", appContext.router);
  // console.log("appContext.ctx :", appContext.ctx);

  // pageProps = { star: json.stargazers_count };
  return { pageProps };
};
// console.log("_app.js json.stargazers_count :", json.stargazers_count);
// pageProps = { star: json.stargazers_count };
// const appProps = await appContext.Component.getInitialProps(appContext.ctx);

// return { ...appProps };
// return { json };

export default MyApp;

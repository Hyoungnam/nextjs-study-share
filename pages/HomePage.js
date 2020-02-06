import fetch from "isomorphic-unfetch";
import { useEffect } from "react";

function HomePage(props) {
  // console.log("stars in Hompage Component", props.stars);
  // console.log("_app js pageProps:", props.star);
  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);
  return (
    <div>
      <div>Rendering from {props.from}</div>
      <div>Next stars: {props.stars}</div>
      {/* <div>Next stars: {props.star}</div> */}
    </div>
  );
}
HomePage.getInitialProps = async ctx => {
  console.log("HomePage.getInitialProps");
  let obj = { from: "server" };
  console.log("ctx.pathname :", ctx.pathname);
  if (!ctx.req) {
    console.log("client side executed");
    obj.from = "client";
  }
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count, ...obj };
};

export default HomePage;

// console.log("ctx.pathname :", ctx.pathname);
// console.log("ctx.query :", ctx.query);
// console.log("ctx.asPath :", ctx.asPath);
// console.log("ctx.req :", ctx.req); //only on the server
// console.log("ctx.res :", ctx.res); //only on the server
// console.log("ctx.jsonPageRes :", ctx.jsonPageRes);
// console.log("ctx.err :", ctx.err);
// console.log("window :", window);
// console.log("ctx", ctx);
// console.log("HomePage.getInitalProps");

import fetch from "isomorphic-unfetch";
import { useEffect } from "react";

function About(props) {
  console.log("Props from MyApp.getInitialProps", props.star);
  return (
    <div>
      <div>Next stars: {props.star}</div>
    </div>
  );
}

export default About;

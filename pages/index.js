import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <a href="/homepage">A_Tag</a>
    <div></div>

    <Link href="/homepage">
      <a>LinkTag</a>
    </Link>
    <div></div>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Home;

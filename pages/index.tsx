import type { NextPage } from "next";
import Banner from "./components/banner";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Requester SIDH</title>
      </Head>
      <Banner />
    </div>
  );
};

export default Home;

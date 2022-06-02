import type { NextPage } from "next";
import Banner from "./components/banner";
import Researcher from "./components/researcher";
import Map from "./components/map";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Requester SIDH</title>
      </Head>
      <Banner />
      <Researcher />
      <Map />
    </div>
  );
};

export default Home;

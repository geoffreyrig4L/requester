import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { loadMapApi } from "./map/utils/GoogleMapsUtils";
import Map from "./map/map";
import Banner from "./components/banner";
import TrainForm from "./components/form";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", function () {
      setScriptLoaded(true);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Requester SIDH</title>
      </Head>

      <Banner />
      {scriptLoaded && (
        <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
      )}
      <TrainForm />
    </div>
  );
}

export default MyApp;

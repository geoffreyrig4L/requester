import "../styles/globals.css";
import { useEffect, useState } from "react";
import { loadMapApi } from "./map/utils/GoogleMapsUtils";
import Map from "./map/map";
import Banner from "./components/banner";
import TrainForm from "./components/trainForm";
import Head from "next/head";

const MyApp = () => {
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
      <div className="flex flex-row w-[96%] m-auto justify-between">
        <TrainForm />
        {scriptLoaded && (
          <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
        )}
      </div>
    </div>
  );
};

export default MyApp;

import "../styles/globals.css";
import { useEffect, useState } from "react";
import { loadMapApi } from "./map/utils/GoogleMapsUtils";
import Map from "./map/map";
import Banner from "./components/banner";
import TrainForm from "./components/trainForm";
import Head from "next/head";
import { Dispatch, SetStateAction } from "react";
import TrainResults from "./components/trainResults";

interface DisplayResultAttributes {
  displayResult: boolean;
  setDisplayResult?: Dispatch<SetStateAction<boolean>>;
}

const MyApp = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
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
      <div className="w-[96%] m-auto">
        <div className="flex flex-row justify-between mb-4">
          <TrainForm />
          {scriptLoaded && (
            <Map
              mapType={google.maps.MapTypeId.ROADMAP}
              mapTypeControl={true}
            />
          )}
        </div>
        <TrainResults />
      </div>
    </div>
  );
};

export default MyApp;

import "../styles/globals.css";
import { useEffect, useState } from "react";
import { loadMapApi } from "./map/utils/GoogleMapsUtils";
import MapOrSettings from "./components/mapOrSetting";
import Banner from "./components/banner";
import TrainForm from "./components/trainForm";
import Head from "next/head";
import TrainResults from "./components/trainResults";

const MyApp = () => {
  //const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const [displayResult, setDisplayResult] = useState<boolean>(false);
  const [itineraries, setItineraries] = useState<[]>([]);
  const [mapOrSettings, setMapOrSettings] = useState<string>("map");

  /*useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", function () {
      setScriptLoaded(true);
    });
  }, []);*/

  return (
    <div>
      <Head>
        <title>Requester SIDH</title>
      </Head>
      <Banner />
      <div className="w-[96%] m-auto">
        <div className="flex flex-row justify-between mb-4">
          <TrainForm
            displayResult={displayResult}
            setDisplayResult={setDisplayResult}
            itineraries={itineraries}
            setItineraries={setItineraries}
            mapOrSettings={mapOrSettings}
            setMapOrSettings={setMapOrSettings}
          />
          {
            /*scriptLoaded &&*/ <MapOrSettings
              /*mapType={google.maps.MapTypeId.ROADMAP}
          mapTypeControl={true}*/
              mapOrSettings={mapOrSettings}
            />
          }
        </div>
        <TrainResults displayResult={displayResult} itineraries={itineraries} />
      </div>
    </div>
  );
};

export default MyApp;

import Map from "../map/map";
import Settings from "./settings";

interface IProps {
  /*mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;*/
  mapOrSettings: string;
}

const MapOrSettings: React.FC<IProps> = ({
  /*mapType,
  mapTypeControl = false,*/
  mapOrSettings,
}) => {
  return mapOrSettings === "map" ? <Map /> : <Settings />;
};

export default MapOrSettings;

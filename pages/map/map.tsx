interface IProps {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
  mapOrSettings: string;
}

const Map: React.FC<IProps> = ({
  mapType,
  mapTypeControl = false,
  mapOrSettings,
}) => {
  return mapOrSettings === "map" ? (
    <div className="bg-white w-full rounded-xl h-[750px]">Map</div>
  ) : (
    <div className="bg-gray-300 w-full rounded-xl h-[750px] p-12">Settings</div>
  );
};

export default Map;

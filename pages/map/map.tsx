interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
}

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  return <div className="bg-white w-full rounded-xl h-[750px]"></div>;
};

export default Map;

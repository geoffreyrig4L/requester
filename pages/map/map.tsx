interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
}

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  return (
    <div className="border-4 border-black bg-white w-full">
      <h1>Maps</h1>
    </div>
  );
};

export default Map;

interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
}

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  return (
    <div>
      <h1>Maps</h1>
    </div>
  );
};

export default Map;

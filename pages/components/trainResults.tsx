interface IProps {
  displayResult: boolean;
  itineraries: [];
}

const TrainResults: React.FC<IProps> = ({ displayResult, itineraries }) => {
  if (displayResult)
    return (
      <div className="bg-white w-full p-12 rounded-xl mb-6">
        <p>{itineraries}</p>
      </div>
    );
  return <div></div>;
};

export default TrainResults;

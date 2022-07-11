interface IProps {
  displayResult: boolean;
}

const TrainResults: React.FC<IProps> = (props: IProps) => {
  if (props.displayResult)
    return (
      <div className="bg-white w-full p-12 rounded-xl mb-6">
        <h1>results</h1>
      </div>
    );
  return <div></div>;
};

export default TrainResults;

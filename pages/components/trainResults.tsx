interface IProps {
  displayResult: boolean;
}

const TrainResults: React.FC<IProps> = (props: IProps) => {
  if (props.displayResult)
    return (
      <div className="rounded bg-white w-full">
        <h1>results</h1>
      </div>
    );
  return <div></div>;
};

export default TrainResults;

interface IProps {
  displayResult: boolean;
}

const trainResults: React.FC<IProps> = (props: IProps) => {
  return !props.displayResult ? (
    <div className="rounded bg-white w-full">
      <h1>results</h1>
    </div>
  ) : (
    <div></div>
  );
};

export default trainResults;

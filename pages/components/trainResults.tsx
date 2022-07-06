const trainResults: React.FC = () => {
  const displayResult = true;

  return displayResult ? (
    <div className="rounded bg-white w-full">
      <h1>results</h1>
    </div>
  ) : (
    <div></div>
  );
};

export default trainResults;

import NavBar from "./navbar";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-row w-100% h-20 text-center text-xl">
      <h1 className="text-2xl w-[200px] font-semibold text-[#8DE8FE]">
        Requester SIDH
      </h1>
      <NavBar />
    </div>
  );
};

export default Banner;

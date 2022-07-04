import NavBar from "./navbar";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-row w-100% h-20 text-center text-xl border-b-2 border-[#8DE8FE] mb-4">
      <h1 className="text-2xl w-[200px] font-bold text-[#8DE8FE] self-center ml-12">
        Requester SIDH
      </h1>
      <NavBar />
    </div>
  );
};

export default Banner;

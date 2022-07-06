const NavBar: React.FC = () => {
  const liCss = "hover:underline hover:text-[#8DE8FE] font-semibold";

  return (
    <ul className="flex flex-row justify-around w-full text-white">
      <li className={liCss}>Itinéraires</li>
      <li className={liCss}>Voyages Info</li>
      <li className={liCss}>Trains Info</li>
      <li className={liCss}>Mode Admin</li>
      <li className={liCss}>Profil Admin</li>
    </ul>
  );
};

export default NavBar;

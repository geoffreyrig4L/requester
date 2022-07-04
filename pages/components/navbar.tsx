const NavBar: React.FC = () => {
  const liCss = "hover:border-b-8 border-[#8DE8FE] hover:text-[#8DE8FE]";

  return (
    <ul className="flex flex-row justify-around w-full">
      <li className={liCss}>Itinéraires</li>
      <li className={liCss}>
        informations
        <br />
        Voyages
      </li>
      <li className={liCss}>
        informations
        <br />
        Trains
      </li>
      <li className={liCss}>Mode Admin</li>
      <li className={liCss}>Profil Admin</li>
    </ul>
  );
};

export default NavBar;

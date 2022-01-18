import Timer from "./Timer";
import NavBarSection from "./NavBarSection";

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavBarSection name="Home"></NavBarSection>
      <NavBarSection name="News"></NavBarSection>
      <NavBarSection name="Stocks"></NavBarSection>
      <NavBarSection name="Crypto"></NavBarSection>
      <Timer></Timer>
    </div>
  );
};

export default NavBar;

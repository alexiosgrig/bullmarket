import "../../css/Styles.css";

const NavBarSection = (props) => {
  return (
    <div className="liNavBar">
      <li>{props.name}</li>
    </div>
  );
};

export default NavBarSection;
